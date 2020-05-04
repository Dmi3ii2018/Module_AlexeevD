using Module_AlexeevD.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class User
    {
        public string Name { get; set; }
        private Password _password {get; set;}

        public User(string name, string password)
        {
            Name = name;
            _password = new Password(password);
        }

        public string Password => _password.PasswordHash;
        public string Salt => _password.Salt;
    }
}
