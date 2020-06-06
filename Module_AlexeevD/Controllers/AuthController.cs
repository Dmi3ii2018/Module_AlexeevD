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
using System.Text.RegularExpressions;

namespace Module_AlexeevD.Controllers
{
    [Route("[controller]")]
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
        [HttpPost("SignUp")]
        public IActionResult SignUp([FromBody] NewUser newUser)
        {
            bool isNewUser = repo.CheckUser(newUser.Login);

            if (newUser.Name.Length < 3)
            {
                ModelState.AddModelError("Name", "Имя пользователя должно содержать более 3-х символов");
            }

            if(newUser.Password.Length == 0)
            {
                ModelState.AddModelError("Password", "Поле password не может быть пустым. Укажите пароль");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (isNewUser)
            {
                NewUser user = new NewUser(newUser.Login, newUser.Name, newUser.Password.ToString(), newUser.ConfirmPassword.ToString());
                Person personData = new Person(user.Login, user.Name, user.GetHashPassword, user.Salt);

                repo.CreateUser(personData);

                Redirect("~/SignIn");

                return Ok(new { authSuccess = "Новый пользователь успешно создан"});
            }

            return BadRequest(new { authError = "Такой пользователь уже существует" });
        }

        [HttpPost("SignIn")]
        public IActionResult SignIn([FromBody]User user)
        {
            if (user.Password.Length == 0)
            {
                ModelState.AddModelError("Password", "Поле password не может быть пустым");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            bool isNewUser = repo.CheckUser(user.Login);
            if(isNewUser)
            {
                return BadRequest(new { authError = "Неверное имя или пароль" });
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

            return BadRequest(new { authError = "Неверное имя пользователя или пароль" });
        }
    }
}