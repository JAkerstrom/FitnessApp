using Data.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        public static UserDTO Create(ApplicationUser user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                Email = user.Email,
                Token = user.Token
            };
        }
    }
}
