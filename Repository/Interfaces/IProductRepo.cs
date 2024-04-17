using web_shop_api_frontend.Models.DTO;
using web_shop_api_frontend.Models.Entities;

namespace web_shop_api_frontend.Repository.Interfaces
{
    public interface IProductRepo
    {
        void AddProduct(Products product);

        void UpdateProduct(Products productToUpdate);

        List<Products> SearchProduct(string searchInput);

        void DeleteProduct(int productId);

        List<Products> GetAllProducts();
        void AddPicture(IFormFile formFile);
        bool DeletePicture(string fileName);
        Products? GetProductById(int productId);
    }
}
