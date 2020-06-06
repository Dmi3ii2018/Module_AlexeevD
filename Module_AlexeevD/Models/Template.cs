using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class Template
    {
        public int UserId { get; set; }
        public Int64 Account { get; set; }
        public string PaymentName { get; set; }
        public string ReceiverName { get; set; }
        public string ReceiverEmail { get; set; }
        public string Purpose { get; set; }

        public Template() { }
    }
}
