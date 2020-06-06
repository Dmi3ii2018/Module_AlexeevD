using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models.Interfaces
{
    public interface IUserRepository
    {
        public List<Account> GetAccount(int id);
        Person Get(string login);
        bool CheckUser(string name);
        int CreateUser(Person person);

        public void CreateTemplate(Template template);
        public List<Template> GetTemplates(int userId);
    }
}
