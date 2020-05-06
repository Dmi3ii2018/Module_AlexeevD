using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models.Interfaces
{
    public interface IUserRepository
    {
        void Delete(int id);
        Person Get(string name);
        IEnumerable<Person> GetAll();

        bool CheckUser(string name);
        int CreateUser(Person person);

        void Update(NewUser user);
    }
}
