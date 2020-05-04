using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module_AlexeevD.Models;
using Module_AlexeevD.Models.Interfaces;

namespace Module_AlexeevD.Controllers
{
    public class UserController : Controller
    {
        IUserRepository repo;
        public UserController(IUserRepository repository)
        {
            repo = repository;
        }

        [HttpGet]
        public User Get(int id)
        {
            return repo.Get(id);
        }

        [HttpPost]
        public ActionResult CreateUser([FromBody]User user)
        {
            repo.Create(user);
            return Ok();
        }

        public ActionResult Edit(int id)
        {
            User user = repo.Get(id);
            if (user != null)
            {
                return Ok();
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            repo.Delete(id);
            return Ok();
        }
    }
}