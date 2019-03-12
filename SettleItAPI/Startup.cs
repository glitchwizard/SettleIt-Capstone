using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SettleItAPI.Models;
using SettleItAPI.Models.DataManager;
using SettleItAPI.Models.Repository;

namespace SettleItAPI
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

		readonly string SpecificOriginsAllowed = "_allowedSpecificOrigins";

    public IConfiguration Configuration { get; }


    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      services.AddCors(options =>
			{
				options.AddPolicy(SpecificOriginsAllowed, builder =>
				{
					builder.WithOrigins("http://localhost:8080")
					.AllowAnyHeader()
					.AllowAnyMethod();
				});
			});

      services.AddDbContext<SettleSheetContext>(options => options.UseSqlServer(Configuration["ConnectionString:SettleItDB"]));
      services.AddScoped<IDataRepository<SettleSheet>, SettleSheetManager>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors(SpecificOriginsAllowed);

      app.UseMvc();
    }
  }
}
