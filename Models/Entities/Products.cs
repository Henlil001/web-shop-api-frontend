namespace web_shop_api_frontend.Models.Entities
{
    public class Products
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public string Slug { get; set; }
        public IFormFile ImageFile { get; set; }
        public string SKU { get; set; }
    }
}
