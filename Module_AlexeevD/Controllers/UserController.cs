using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module_AlexeevD.Models;
using Module_AlexeevD.Models.Interfaces;

namespace Module_AlexeevD.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        IUserRepository repo;
        public UserController(IUserRepository repository)
        {
            repo = repository;
        }

        [HttpGet]
        public Person Get(string name)
        {
            return repo.Get(name);
        }
    }
}