using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Auth
{
    public class UserService : IUserService
    {
        public bool IsValidUser(string name, string password)
        {
            User user = new User(name, password);
            return Password.CheckPassword(password, user.Password, user.Salt);
        }
    }
}
