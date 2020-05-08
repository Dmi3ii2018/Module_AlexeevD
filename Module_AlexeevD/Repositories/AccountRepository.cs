using Dapper;
using Microsoft.AspNetCore.Mvc;
using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Repositories
{
    public class AccountRepository : IAccountRepository
    {

        string connectionString = null;
        public AccountRepository(string conn)
        {
            connectionString = conn;
        }
        public void CreateAccount(Account account)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "INSERT INTO account (account_number, sum, open_date, id_users, status) Values (@AccountNumber, @Sum, @OpenDate, @UserId, @Status)";
                db.Execute(sqlQuery, account);
            }
        }

        public void MakeInsideTransaction(int senderAccountId, int receiverAccountId)
        {
            throw new NotImplementedException();
        }

        public void Put(Transaction transaction)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                List<string> sqlQuery = new List<string>
                {
                    "Update account SET sum = sum + @Sum WHERE account_id = @ReceiverAccountId",
                    "INSERT INTO \"user-operation\" (date, sum, id_account_receiver, type_of_operation) VALUES (@Date, @Sum, @ReceiverAccountId, @TypeOfOperation)"
                };
                    
                foreach (string query in sqlQuery)
                {
                    db.Execute(query, transaction);
                }
            }
        }

        public void SendToAnotherUser(Transaction transaction)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                List<string> sqlQuery = new List<string>
                {
                    "UPDATE account SET sum = sum - @Sum WHERE account_id = @SenderAccountId",
                    "UPDATE account SET sum = sum + @Sum WHERE account_id = @ReceiverAccountId",
                    "INSERT INTO \"user-operation\" (date, sum, id_account_receiver, id_account_sender, type_of_operation) VALUES (@Date, @Sum, @ReceiverAccountId, @SenderAccountId, @TypeOfOperation)"
                };
                foreach (string query in sqlQuery)
                {
                    db.Execute(query, transaction);
                }
            }
        }
    }
}
