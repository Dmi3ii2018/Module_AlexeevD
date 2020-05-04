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

namespace Module_AlexeevD.Controllers
{
    //[Route("[controller]")]
    //[ApiController]
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
        public void CreateNewUser([FromBody] NewUser person)
        {
            bool isNewUser = repo.CheckUser(person.Name);

            if (isNewUser)
            {
                NewUser newUser = new NewUser(person.Name, person.Email, person.Password.ToString());
                Person personData = new Person(newUser.Name, newUser.Email, newUser.Password, newUser.Salt);
                repo.CreateUser(personData);
            }
        }
    }
}