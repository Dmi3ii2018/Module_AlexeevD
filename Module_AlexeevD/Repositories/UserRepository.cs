using Dapper;
using Module_AlexeevD.Models.Interfaces;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
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

        public User Get(int id)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                return db.QueryFirstOrDefault<User>("SELECT * FROM users WHERE Id = @id", new { id });
            }
        }

        public User GetUser(string name)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                return db.QueryFirstOrDefault<NewUser>("SELECT count(name) as count FROM users WHERE name = @name", new { name });
            }
        }

        public void Create(NewUser user)
        {
            using(IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "INSERT INTO users (name, email, hash, salt) VALUES(@name, @email, @hash, @salt)";
                db.Execute(sqlQuery, user);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "DELETE FROM users WHERE Id = @id";
                db.Execute(sqlQuery, new { id });
            }
        }

        public void Update(NewUser user)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "UPDATE users SET Name = @Name, Age = @Age Email = @Email WHERE Id = @Id";
                db.Execute(sqlQuery, user);
            }
        }
    }
}
