using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class Person
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Hash { get; set; }
        public string Salt { get; set; }

        public Person(string name, string email, string hash, string salt)
        {
            Name = name;
            Email = email;
            Hash = hash;
            Salt = salt;
        }
    }
}
