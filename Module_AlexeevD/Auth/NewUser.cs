using Module_AlexeevD.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class NewUser : User
    {
        public string Email { get; set; }

        public NewUser(string name, string email, string password)
            :base(name, password)
        {
            Email = email;
        }

        
    }
}
