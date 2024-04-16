using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using web_shop_api_frontend.Models.DTO;
using web_shop_api_frontend.Models.Entities;
using web_shop_api_frontend.Repository.Interfaces;

namespace web_shop_api_frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepo _productsRepo;
        private readonly ILogger<ProductsController> _logger;
        public ProductsController(IProductRepo productsRepo, ILogger<ProductsController> logger)
        {
            _productsRepo = productsRepo;
            _logger = logger;
        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(_productsRepo.GetAllProducts());

        }
        [Route("search={searchInput}")]
        [HttpGet]
        public IActionResult SearchProduct(string searchInput)
        {
            try
            {
                var productsDTO = new ProductsDTO();
                var matchingproducts = _productsRepo.SearchProduct(searchInput);
                int count = 0;
                foreach (var product in matchingproducts)
                {
                    count++;
                    productsDTO.Products.Add(product);
                }
                productsDTO.NumbersOfProducts = count;

                _logger.LogInformation("Searhed product succssefully");

                return Ok(productsDTO);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error Searching product: "+ex.Message);
                throw;
            }
        }

        [Route("admin/add-product")]
        [HttpPost]
        public IActionResult AddProduct()
        {
            try
            {
                //Hämtar formData från bodyn
                var formData = Request.Form;

                // Skapa en ny instans av Products och fyll den med data från formData
                var product = new Products
                {
                    Title = formData["Title"],
                    Description = formData["Description"],
                    Price = Convert.ToDecimal(formData["Price"]),
                    ImageUrl = formData["ImageUrl"], // Om du har en egenskap för bild-URL
                    ImageFile = formData.Files.GetFile("ImageFile"), // Hämta filen från formulärdatan
                    SKU = formData["SKU"], // Om du har en egenskap för SKU
                                           // Fortsätt fylla i övriga egenskaper enligt behov...
                };
                

                product.Slug = ReplaceSpacesWithUnderscores(product.Title);
                _productsRepo.AddPicture(product.ImageFile);
                _productsRepo.AddProduct(product);
                _logger.LogInformation("Product added succssefully");
                return Ok("New product added.");
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error Adding Product: {ex.Message}");
                return BadRequest(ex.Message); // Return a more meaningful error message
            }
        }

        [Route("admin/update-product")]
        [HttpPut]
        public IActionResult UpdateProduct(Products productToUpdate)
        {
            try
            {
                productToUpdate.Slug = ReplaceSpacesWithUnderscores(productToUpdate.Title);
                _productsRepo.UpdateProduct(productToUpdate);
                _logger.LogInformation("Updated product succssefully");
                return Ok("product updated");
            }
            catch (Exception ex)
            {
                _logger.LogError("Error update product : "+ex.Message);
                throw;
            }

        }

        [Route("admin/delete-product{id}")]
        [HttpDelete]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _productsRepo.GetProductById(id);

                if (product is null)
                {
                    _logger.LogWarning($"Tried to delete a product that dont exist. ID:{id}");
                    return NotFound();
                }  

                bool check = _productsRepo.DeletePicture(product.ImageUrl);
               
                _productsRepo.DeleteProduct(id);

                if (check)
                {
                    _logger.LogInformation($"Product with id:{id}/ picture with url{product.ImageUrl} was deleted succssefully");
                    return Ok("Product deleted");
                }
                else return StatusCode(500, "Picture was not deleted");

            }
            catch (Exception ex)
            {
                _logger.LogError("Error Delete product : " + ex.Message);
                throw;
            }


        }
        static string ReplaceSpacesWithUnderscores(string input)
        {
            // Använd Replace-metoden för att byta ut mellanrum med understreck
            input = input.ToLower();
            input = input.Replace("-", "");
            return input.Replace(" ", "-");
        }
    }
}
