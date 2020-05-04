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
        public User Get(string name)
        {
            return repo.Get(name);
        }

        public IEnumerable<Person> GetAll()
        {
            return repo.GetAll();
        }

        [HttpPost]
        public ActionResult Edit(string name)
        {
            User user = repo.Get(name);
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