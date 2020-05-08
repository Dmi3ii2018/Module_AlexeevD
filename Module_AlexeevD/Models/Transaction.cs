using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class Transaction
    {
        public int TypeOfOperation { get; set; }
        [Required(ErrorMessage = "Укажите сумму")]
        public decimal Sum { get; set; }
        [Required(ErrorMessage = "Укажите счет получателя")]
        public int SenderAccountId { get; set; }
        public int ReceiverAccountId { get; set; }
        public DateTime Date { get; set; }

        public Transaction() {}
    }
}
