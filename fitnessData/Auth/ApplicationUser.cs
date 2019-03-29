using fitnessData.Utils;
using Microsoft.AspNetCore.Identity;
using System;
using System.Security.Cryptography;

namespace fitnessData.Auth
{
    public class ApplicationUser 
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Token { get; set; }
        public long TimeToLive { get; set; }

        public static ApplicationUser Create(int id, string username, string email,
                                            string password, string token, long timetolive)
        {
            return new ApplicationUser()
            {
                Id = id,
                UserName = username,
                Email = email,
                PasswordHash = CryptoUtils.GetMD5Hash(password),
                Token = token,
                TimeToLive = timetolive,
            };
        }

        public bool TokenExpired()
        {
            return TimeToLive < DateUtils.TimeStampNow;
        }
    }
}
