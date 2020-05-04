using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module_AlexeevD.Interfaces
{
    public interface IUserService
    {
        public bool IsValidUser(string name, string password);
    }
}
