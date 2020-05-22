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
        public Int64 SenderAccountNumber { get; set; }
        public Int64 ReceiverAccountNumber { get; set; }
        public DateTime Date { get; set; }

        public Transaction() {}
    }
}
