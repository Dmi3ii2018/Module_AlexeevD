using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Module_AlexeevD.Auth
{
    public class Password
    {
        public string Salt { get; }
        public string PasswordHash { get; }
        public Password(string password)
        {
            Salt = Guid.NewGuid().ToString().Substring(startIndex: 0, length: 10);
            using(MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = Encoding.ASCII.GetBytes(s: string.Concat(password, Salt));
                byte[] hashBytes = md5.ComputeHash(inputBytes);
                StringBuilder sb = new StringBuilder();
                for(int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString(format: "X2"));
                }
                PasswordHash = sb.ToString();
            }
        }

        public static bool CheckPassword(string password, string salt, string hash)
        {
            string PasswordHash;
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = Encoding.ASCII.GetBytes(s: string.Concat(password, salt));
                byte[] hashBytes = md5.ComputeHash(inputBytes);
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString(format: "X2"));
                }
                PasswordHash = sb.ToString();
            }
            return PasswordHash == hash;
        }
    }
}
