using Npgsql.TypeHandlers.NumericHandlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public Int64 AccountNumber { get; set; }
        public decimal Sum { get; set; }
        public DateTime OpenDate { get; set; }
        public DateTime CloseDate { get; set; }
        public int Status { get; set; }
        public int UserId { get; set; }

        public Account() { }

        public Account(Int64 accountNumber, decimal sum, DateTime openDate, int status, int userId)
        {
            AccountNumber = accountNumber;
            Sum = sum;
            OpenDate = openDate;
            Status = status;
            UserId = userId;
        }
        public Account(Int64 accountNumber, decimal sum, DateTime openDate, DateTime closeDate, int status, int userId)
        {
            Sum = sum;
            OpenDate = openDate;
            CloseDate = closeDate;
            Status = status;
            UserId = userId;
        }
    }
}
