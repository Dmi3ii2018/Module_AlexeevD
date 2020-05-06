using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Module_AlexeevD.Auth;
using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models;
using Module_AlexeevD.Models.Repositories;
using System.IdentityModel.Tokens.Jwt;

namespace Module_AlexeevD.Controllers
{
    public class AuthController : Controller
    {
        private IUserService _service;
        private AuthOptions _authOptions;
        UserRepository repo;
        string connectingString;
        public AuthController(IUserService service, IOptions<AuthOptions> authOptions)
        {
            _service = service;
            _authOptions = authOptions.Value;
            connectingString = "Server=localhost;Port=5432;Database=postgres;User Id=postgres;Password=Adn24allanm";
            repo = new UserRepository(connectingString);
        }
        [HttpPost]
        public IActionResult SignUp([FromBody] NewUser person)
        {
            bool isNewUser = repo.CheckUser(person.Login);

            if (isNewUser)
            {
                NewUser newUser = new NewUser(person.Login, person.Name, person.Password.ToString());
                Person personData = new Person(newUser.Login, newUser.Name, newUser.GetHashPassword, newUser.Salt);
                
                repo.CreateUser(personData);

                Redirect("~/SignIn");

                return Ok();
            }

            return BadRequest(new { errorText = "Such user already exist" });
        }

        public IActionResult SignIn([FromBody]User user)
        {
            bool isNewUser = repo.CheckUser(user.Login);
            if(isNewUser)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var existUser = repo.Get(user.Login);

            var IsUserValid = _service.IsValidUser(user.Password, existUser.Hash, existUser.Salt);

            if (IsUserValid)
            {
                var token = NewToken.GetToken(user, _authOptions);

                var response = new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                };

                return Json(response);
            }

            return BadRequest(new { errorText = "Invalid username or password." });
        }
    }
}