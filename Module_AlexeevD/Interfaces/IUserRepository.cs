using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Models.Interfaces
{
    public interface IUserRepository
    {
        void Create(NewUser user);
        void Delete(int id);
        User Get(int id);
        void Update(NewUser user);
    }
}
