using Module_AlexeevD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Interfaces
{
    public interface IAccountRepository
    {
        public void Put(Transaction transaction);
        public void SendToAnotherUser(Transaction transaction);

        public void CreateAccount(Account account);
        public void DeleteAccount(Int64 accountNumber);
        public List<dynamic> GetHistory(Int64 accountNumber);
    }
}
