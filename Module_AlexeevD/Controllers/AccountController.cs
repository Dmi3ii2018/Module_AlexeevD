using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models;
using Module_AlexeevD.Models.Interfaces;

namespace Module_AlexeevD.Controllers
{

    enum AccountStatus
    {
        open = 0,
        close
    }
    public class AccountController : Controller
    {
        IAccountRepository repo;
        public AccountController(IAccountRepository repository)
        {
            repo = repository;
        }

        [HttpPost]
        public IActionResult CreateAccount([FromBody] NewAccount account)
        {
            DateTime openDate = DateTime.Now;
            int statusId = (int)AccountStatus.open;

            Random rnd = new Random();
            string accountNumber = "4";
            for(int i = 1; i < 10; i++)
            {
                accountNumber = accountNumber + rnd.Next(0, 10);
            }
            Int64 number = Convert.ToInt64(accountNumber);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Account newAccount = new Account(number, account.Sum, openDate, statusId, account.UserId);

            repo.CreateAccount(newAccount);

            return Ok();
        }

        [HttpPost]
        public IActionResult PutFund([FromBody] Transaction transaction)
        {
            if(transaction.Sum < 0)
            {
                ModelState.AddModelError("Sum", "Сумма не может быть меньше нуля");
            }

            if (transaction.Sum == 0)
            {
                ModelState.AddModelError("Sum", "Укажите сумму");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            repo.Put(transaction);
            return Ok(new { successText = "Операция прошла успешно. Средства зачислены на счет" });
        }

        [HttpPost]
        public IActionResult CreateTransaction([FromBody] Transaction transaction)
        {
            if (transaction.Sum < 0)
            {
                ModelState.AddModelError("Sum", "Сумма не может быть меньше нуля");
            }

            if (transaction.Sum == 0)
            {
                ModelState.AddModelError("Sum", "Укажите сумму");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            repo.SendToAnotherUser(transaction);
            return Ok();
        }
    }
}