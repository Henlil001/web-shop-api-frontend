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
        public ProductsController(IProductRepo productsRepo)
        {
            _productsRepo = productsRepo;
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
                return Ok(productsDTO);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [Route("admin/add-product")]
        [HttpPost]
        public IActionResult AddProduct([FromForm] Products product)
        {
            try
            {
                product.Slug = ReplaceSpacesWithUnderscores(product.Title);
                //_productsRepo.AddPicture(product.ImageFile);
                _productsRepo.AddProduct(product);
                return Ok("New product added.");
            }
            catch (Exception)
            {

                throw;
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
                return Ok("product updated");
            }
            catch (Exception)
            {

                throw;
            }

        }

        [Route("admin/delete-product{id}")]
        [HttpDelete]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                //var product = _productsRepo.GetProductById(id);
                //bool check = _productsRepo.DeletePicture(product.ImageUrl);
                bool check = true; //tillfälligt tills jag fixat bilderna
                _productsRepo.DeleteProduct(id);
                if (check) return Ok("Product deleted");
                else return StatusCode(500,"Picture was not deleted");

            }
            catch (Exception)
            {

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
