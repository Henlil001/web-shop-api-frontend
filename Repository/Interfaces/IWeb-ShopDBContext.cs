using Microsoft.Data.SqlClient;

namespace web_shop_api_frontend.Repository.Interfaces
{
    public interface IWeb_ShopDBContext
    {
        SqlConnection GetConnection();
        public string GetBlobConnection();
    }
}
