using Module_AlexeevD.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class User
    {
        [Required(ErrorMessage = "Укажите логин")]
        [EmailAddress(ErrorMessage = "Login должен соответствовать формату primer@primer.ru")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Укажите пароль")]
        public string Password { get; set; }

        private Password _password {get; set;}

        public User(string login, string password)
        {
            Login = login;
            Password = password;
            _password = new Password(password);
        }

        public string GetHashPassword => _password.PasswordHash;
        public string Salt => _password.Salt;
    }
}
