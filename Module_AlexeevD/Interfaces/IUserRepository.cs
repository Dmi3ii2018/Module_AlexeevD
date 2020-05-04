using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models.Interfaces
{
    public interface IUserRepository
    {
        void Delete(int id);
        User Get(string name);
        IEnumerable<Person> GetAll();

        bool CheckUser(string name);
        void CreateUser(Person person);

        void Update(NewUser user);
    }
}
