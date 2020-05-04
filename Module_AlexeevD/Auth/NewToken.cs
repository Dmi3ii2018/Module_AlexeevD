using Microsoft.IdentityModel.Tokens;
using Module_AlexeevD.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Module_AlexeevD.Auth
{
    public class NewToken
    {
        static JwtSecurityToken GetToken(User user, AuthOptions authOptions)
        {
            var authClaims = new[]
            {
                new Claim(type: JwtRegisteredClaimNames.Sub, value: user.Name ),
                new Claim(type: JwtRegisteredClaimNames.Jti, value: Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                    issuer: authOptions.Issuer,
                    audience: authOptions.Audience,
                    expires: DateTime.Now.AddMinutes(authOptions.ExpiresInMinutes),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(
                            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authOptions.SecretKey)),
                            algorithm: SecurityAlgorithms.HmacSha256Signature)
                );

            return token;
        }
    }
}
