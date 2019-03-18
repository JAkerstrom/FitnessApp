using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.ResponseModels
{
    public class LoginResponse : ResponseVM
    {
        public UserDTO User { get; set; }
        public string  Token { get; set; }

        public static LoginResponse Create(string message, string nexturl, 
            bool success, string returnUrl, UserDTO user, string token)
        {
            return new LoginResponse()
            {
                User = user,
                Token = token,
                Message = message,
                NextUrl = nexturl,
                ReturnUrl = returnUrl,
                RequestSuccess = success
            };
        }
    }
}
