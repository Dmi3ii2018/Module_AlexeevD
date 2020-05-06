using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Name { get; set; }
        public string Hash { get; set; }
        public string Salt { get; set; }

        public Person()
        {

        }
        public Person(string login, string name, string hash, string salt)
        {
            Login = login;
            Name = name;
            Hash = hash;
            Salt = salt;
        }
    }
}
