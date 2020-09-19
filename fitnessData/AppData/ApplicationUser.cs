using fitnessData.Utils;
using Microsoft.AspNetCore.Identity;
using System;
using System.Security.Cryptography;

namespace fitnessData.AppData
{
    public class ApplicationUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Token { get; set; }
        public long TimeToLive { get; set; }

        public ApplicationUser(string email, string passwordHash)
        {
            Email = email;
            PasswordHash = passwordHash;
        }

        public bool TokenExpired()
        {
            return TimeToLive < DateUtils.TimeStampNow;
        }
    }
}

