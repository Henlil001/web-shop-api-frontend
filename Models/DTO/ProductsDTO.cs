using web_shop_api_frontend.Models.Entities;

namespace web_shop_api_frontend.Models.DTO
{
    public class ProductsDTO
    {
        public List<Products> Products { get; set; } = new List<Products>();

        public int NumbersOfProducts { get; set; }
    }
}
