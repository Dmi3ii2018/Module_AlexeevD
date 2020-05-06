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
        public bool IsValidUser(string password, string hash, string salt)
        {
            return Password.CheckPassword(password, hash, salt);
        }
    }
}
