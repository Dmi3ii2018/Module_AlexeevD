using System;
using System.Collections.Generic;
using System.Diagnostics;
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
    [Route("[controller]")]
    public class UserController : Controller
    {
        IUserRepository repo;
        public UserController(IUserRepository repository)
        {
            repo = repository;
        }

        [HttpOptions, HttpGet("GetAccount/{id}")]
        public List<Account> GetAccount(int id)
        {
            return repo.GetAccount(id);
        }

        [HttpOptions, HttpGet("GetUser/{name}")]
        public Person GetUser(string name)
        {
            return repo.Get(name);
        }

        [HttpPost("CreateTemplate")]
        public IActionResult CreateTemplate([FromBody] Template template)
        {
            repo.CreateTemplate(template);
            return Ok(new { successText = "Шаблон успешно создан" });
        }

        [HttpOptions, HttpGet("GetTemplates/{id}")]
        public List<Template> GetTemplates(int id)
        {
            return repo.GetTemplates(id);
        }
    }
}