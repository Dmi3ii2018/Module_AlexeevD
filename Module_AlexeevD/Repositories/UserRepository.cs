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

        public User Get(string name)
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                return db.QueryFirstOrDefault<User>("SELECT * FROM users WHERE name = @name", new { name });
            }
        }

        public IEnumerable<Person> GetAll()
        {
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                return db.Query<Person>("SELECT * FROM users");
            }
        }

        public bool CheckUser(string name)
        {
            int userCount = 0;
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                IEnumerable<dynamic> users = db.Query("SELECT * FROM users WHERE name = @name", new { name });
                foreach (object user in users)
                {
                    userCount++;
                }
            }
            return userCount == 0;
        }

        public void CreateUser(Person person)
        {
            int result;
            using (IDbConnection db = new NpgsqlConnection(connectionString))
            {
                db.Open();
                var sqlQuery = "INSERT INTO users (name, email, hash, salt) VALUES(@Name, @Email, @Hash, @Salt)";
                result = db.Execute(sqlQuery, person);
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
