﻿using Dapper;
using Module_AlexeevD.Models.Interfaces;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
// using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models.Repositories
{
    public class UserRepository : IUserRepository
    {

        string connectionString = null;
        public UserRepository(string conn)
        {
            connectionString = conn;
        }

        public Person Get(string login)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                return db.QueryFirstOrDefault<Person>("SELECT * FROM users WHERE login = @login", new { login });
            }
        }

        public List<Account> GetAccount(int id)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "SELECT * FROM account WHERE idusers = @id";
                return db.Query<Account>(sqlQuery, new { id }).ToList();
            }
        }

        public bool CheckUser(string login)
        {
            int userCount = 0;
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                IEnumerable<dynamic> users = db.Query("SELECT * FROM users WHERE login = @login", new { login });
                foreach (object user in users)
                {
                    userCount++;
                }
            }
            return userCount == 0;
        }

        public int CreateUser(Person person)
        {
            int result;
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "INSERT INTO users (name, login, hash, salt) VALUES(@Name, @Login, @Hash, @Salt)";
                result = db.Execute(sqlQuery, person);
            }
            return result;
        }

        public void CreateTemplate(Template template)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "" +
                    "INSERT " +
                    "INTO \"Templates\" (userid, account, paymentname, receivername, receiveremail, purpose) " +
                    "VALUES(@UserId, @Account, @PaymentName, @ReceiverName, @ReceiverEmail, @Purpose)";
                db.Execute(sqlQuery, template); 
            }
        }

        public List<Template> GetTemplates(int id)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "SELECT * FROM \"Templates\" WHERE userid = @id";
                return db.Query<Template>(sqlQuery, new { id }).ToList();
            }
        }
    }
}
