using Dapper;
using System.Data;
using web_shop_api_frontend.Models.Entities;
using web_shop_api_frontend.Repository.Interfaces;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using static Dapper.SqlMapper;
using web_shop_api_frontend.Models.DTO;

namespace web_shop_api_frontend.Repository.Repos
{
    public class ProductRepo : IProductRepo
    {
        private readonly IWeb_ShopDBContext _dbContext;
        public ProductRepo(IWeb_ShopDBContext webb_ShopDBContext)
        {
            _dbContext = webb_ShopDBContext;
        }
        public void AddProduct(Products product)
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Title", product.Title);
                parameters.Add("@Description", product.Description);
                parameters.Add("@Price", product.Price);
                parameters.Add("@ImageUrl", product.ImageUrl);
                parameters.Add("@slug", product.Slug);
                parameters.Add("@SKU", product.SKU);

                db.Execute("AddProduct",parameters, commandType: CommandType.StoredProcedure);
            }
        }
        public Products? GetProductById(int productId)
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Id", productId);

                return db.QuerySingle<Products?>("GetProductById", parameters, commandType: CommandType.StoredProcedure);
            }
        }
        public bool DeletePicture(string fileName)
        {
            string connectionString = _dbContext.GetBlobConnection();
            string containerName = "images"; //namnet på din container (blobstorage)

            // Create a BlobServiceClient object which will be used to create a container client
            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);

            // Create the container and return a container client object
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);

            // Get a reference to the blob to be deleted
            BlobClient blobClient = containerClient.GetBlobClient(fileName);

            // Delete the blob
            return blobClient.DeleteIfExists();

        }
        

        public void AddPicture(IFormFile formFile) 
        {
            string connectionString = _dbContext.GetBlobConnection();
            string containerName = "images"; //namnet på din container (blobstorage)

            // Create a BlobServiceClient object which will be used to create a container client
            BlobServiceClient blobServiceClient = new(connectionString);

            // Create the container and return a container client object
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);

            // Get a reference to a blob
            string fileName = Path.GetFileName(formFile.FileName);
            BlobClient blobClient = containerClient.GetBlobClient(fileName);

            // Set the content type
            var blobHttpHeaders = new BlobHttpHeaders
            {
                ContentType = formFile.ContentType // Use the content type provided by the formFile
            };

            // Open a stream to the file content
            using (Stream stream = formFile.OpenReadStream())
            {
                // Upload the file to blob storage with specified content type
                blobClient.Upload(stream, new BlobUploadOptions { HttpHeaders = blobHttpHeaders });
            }

        }

        public void DeleteProduct(int productId)
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Id", productId);


                db.Execute("DeleteProduct", parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public List<Products> GetAllProducts()
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                return db.Query<Products>("GetAllProducts", commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public List<Products> SearchProduct(string searchInput)
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@searchInput", searchInput);

                return db.Query<Products>("Search", parameters, commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public void UpdateProduct(Products productToUpdate)
        {
            using (IDbConnection db = _dbContext.GetConnection())
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@Id", productToUpdate.Id);
                parameters.Add("@Title", productToUpdate.Title);
                parameters.Add("@Description", productToUpdate.Description);
                parameters.Add("@Price", productToUpdate.Price);
                parameters.Add("@ImageUrl", productToUpdate.ImageUrl);
                parameters.Add("@slug", productToUpdate.Slug);
                parameters.Add("@SKU", productToUpdate.SKU);

                db.Execute("UpdateProduct", parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
