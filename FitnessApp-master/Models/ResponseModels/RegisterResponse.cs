using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.ResponseModels
{
    public class RegisterResponse : ResponseVM
    {
        public UserDTO User { get; set; }

        public ResponseVM Create(UserDTO user, string message, bool requestsuccess,
            string nexturl, string returnurl)
        {
            return new RegisterResponse()
            {
                User = user,
                Message = message,
                RequestSuccess = requestsuccess,
                NextUrl = nexturl,
                ReturnUrl = returnurl
            };
        }
    }
}
