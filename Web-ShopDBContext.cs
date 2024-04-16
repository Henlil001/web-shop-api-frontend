using Microsoft.Data.SqlClient;
using web_shop_api_frontend.Repository.Interfaces;

namespace web_shop_api_frontend
{
    public class Webb_ShopDBContext : IWeb_ShopDBContext
    {
        private readonly string? _DBContext;
        private readonly string? _blob;
        public Webb_ShopDBContext(IConfiguration configuration)
        {
            _DBContext = configuration.GetConnectionString("Webb-ShopDBString");
            _blob = configuration.GetConnectionString("blob");
        }
        public SqlConnection GetConnection()
        {
            return new SqlConnection(_DBContext);
        }
        public string GetBlobConnection()
        {
            return new string(_blob);
        }
    }
}
