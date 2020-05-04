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

namespace Module_AlexeevD.Controllers
{
    [ApiController]
    public class AuthController : Controller
    {
        private IUserService _service;
        private AuthOptions _authOptions;
        public AuthController(IUserService service, IOptions<AuthOptions> authOptions)
        {
            _service = service;
            _authOptions = authOptions.Value;
        }

        [HttpPost]
        public IActionResult CreateNewUser([FromBody] NewUser newUser)
        {

        }
    }
}