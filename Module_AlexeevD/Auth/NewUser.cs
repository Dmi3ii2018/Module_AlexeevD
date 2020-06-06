using Module_AlexeevD.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class NewUser : User
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        public NewUser(string login, string name, string password, string confirmPassword):base(login, password)
        {
            Name = name;
            ConfirmPassword = confirmPassword;
        }
    }
}
