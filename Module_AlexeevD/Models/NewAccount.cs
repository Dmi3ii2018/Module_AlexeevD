using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class NewAccount
    {
        public decimal Sum { get; set; }
        [Required(ErrorMessage = "Укажите id пользователя")]
        public int UserId { get; set; }
    }
}
