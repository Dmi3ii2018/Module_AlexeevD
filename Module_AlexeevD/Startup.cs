using System.Text;
using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Module_AlexeevD.Auth;
using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models.Interfaces;
using Module_AlexeevD.Models.Repositories;
using Module_AlexeevD.Repositories;
using React.AspNet;

namespace Module_AlexeevD
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMemoryCache();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddReact();
            services.AddJsEngineSwitcher(options => options.DefaultEngineName = ChakraCoreJsEngine.EngineName).AddChakraCore();

            services.AddCors();
            services.AddMvc();
            services.AddSingleton(Configuration);
            string connectionString = "Server=localhost;Port=5432;Database=postgres;User Id=postgres;Password=Adn24allanm";
            services.AddTransient<IUserRepository, UserRepository>(provider => new UserRepository(connectionString));
            services.AddTransient<IAccountRepository, AccountRepository>(provider => new AccountRepository(connectionString));
            services.AddTransient<IUserService, UserService>();
            services.AddControllers().AddNewtonsoftJson();

            services.Configure<AuthOptions>(Configuration.GetSection("AuthOptions"));

            var authOptions = Configuration.GetSection("AuthOptions").Get<AuthOptions>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidIssuer = authOptions.Issuer,
                    ValidAudience = authOptions.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authOptions.SecureKey))
                };
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
            );

            app.UseDeveloperExceptionPage();

            app.UseReact(config => { });
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=User}/{action=Get}/{name?}");
            });
        }
    }
}
