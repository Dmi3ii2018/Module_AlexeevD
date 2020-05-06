using Module_AlexeevD.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class NewUser : User
    {
        public string Name { get; set; }

        public NewUser(string login, string name, string password)
            :base(login, password)
        {
            Name = name;
        }

        
    }
}
