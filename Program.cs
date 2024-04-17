using web_shop_api_frontend.Repository.Interfaces;
using web_shop_api_frontend.Repository.Repos;
using web_shop_api_frontend;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddScoped<IProductRepo, ProductRepo>();

builder.Services.AddSingleton<IWeb_ShopDBContext, Webb_ShopDBContext>();

var app = builder.Build();

app.UseDefaultFiles();
//Middlewerw som fångar upp inkommande anrop och kontrollerar
//om motsvarande fil finns under ./wwwroot - innan
//den sen skickar vidare anropet till nästa middlewerw (om den nu inte hittade file)
//GET /index.html
// http://localhost:5000/index.html
app.UseStaticFiles();



app.UseRouting();

app.UseEndpoints(endpoints => { endpoints.MapControllers(); });


app.Run();
