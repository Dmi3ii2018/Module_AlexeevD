using Dapper;
using Module_AlexeevD.Interfaces;
using Module_AlexeevD.Models;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

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
                var sqlQuery = "INSERT INTO account (accountnumber, sum, opendate, idusers, status) Values (@AccountNumber, @Sum, @OpenDate, @UserId, @Status)";
                db.Execute(sqlQuery, account);
            }
        }

        public void DeleteAccount(Int64 accountNumber) {
            using(IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "DELETE FROM account WHERE accountnumber = @accountNumber";
                db.Execute(sqlQuery, new { accountNumber });
            }
        }

        public void Put(Transaction transaction)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                List<string> sqlQuery = new List<string>
                {
                    "UPDATE account SET sum = sum + @Sum WHERE accountnumber = @ReceiverAccountNumber",
                    "INSERT INTO \"user-operation\" (date, sum, \"accountreceivernumber\", \"typeofoperation\") VALUES (@Date, @Sum, @ReceiverAccountNumber, @TypeOfOperation)"
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
                    "UPDATE account SET sum = sum - @Sum WHERE accountnumber = @SenderAccountNumber",
                    "UPDATE account SET sum = sum + @Sum WHERE accountnumber = @ReceiverAccountNumber",
                    "INSERT INTO \"user-operation\" (date, sum, accountreceivernumber, accountsendernumber, typeofoperation) VALUES (@Date, @Sum, @ReceiverAccountNumber, @SenderAccountNumber, @TypeOfOperation)"
                };
                foreach (string query in sqlQuery)
                {
                    db.Execute(query, transaction);
                }
            }
        }

        public List<dynamic> GetHistory(Int64 accountNumber)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "SELECT * FROM \"user-operation\" WHERE accountreceivernumber = @accountNumber OR accountsendernumber = @accountNumber";
                return db.Query<dynamic>(sqlQuery, new { accountNumber }).ToList();
            }
        }
    }
}
