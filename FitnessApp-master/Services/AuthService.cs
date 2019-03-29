using fitnessapp.Models;
using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using fitnessData.Auth;
using fitnessData.Utils;
using System;
using System.Linq;

namespace fitnessapp.Services
{
    public class AuthService
    {
        private static int LOGIN = 1;
        private static int REGISTER = 2;
        private static int UPDATE = 3;
        private static int DEFAULT = 4;

        private AuthDbContext _userContext;

        public AuthService(AuthDbContext userContext)
        {
            _userContext = userContext;
        }

        public ResponseVM ValidateLogin(LoginRequest login) {

            if (!EmailExists(login.Email))
            {
                return ResponseVM.Create(login.ReturnUrl, false, "Invalid signin credentials", LOGIN, ""); 
            }

            var user = _userContext.Users.FirstOrDefault(u => u.Email == login.Email);

            if (!CryptoUtils.VerifyPassword(login.Password, user.PasswordHash))
            {
                return ResponseVM.Create(login.ReturnUrl, false ,"Invalid signin credentials", LOGIN, "");
            }

            user = CreateToken(user);

            var userdto = UserDTO.Create(user);

            return ResponseVM.Create("", true, "", DEFAULT, "", userdto);

        }

        public ResponseVM Logout(LogoutRequest logout)
        {
            //token, returnurl, userid
            ApplicationUser user = _userContext.Users.Find(logout.UserId);

            if (user == null) {
                return ResponseVM.Create("", false, "no such user", DEFAULT, "");
            }

            user.Token = "";
            user.TimeToLive = 0; 
            _userContext.SaveChanges();

            return ResponseVM.Create("", true, "user logged out", DEFAULT, "");

        }

        public bool IsLoggedIn(RequestVM request, UserDTO dto) {

            ApplicationUser user =_userContext.Users.Find(dto.Id);

            if(!(request.Token == user.Token))
            {
                return false;
            }

            if (user.TokenExpired())
            {
                return false;
            }

            return true;
        }

        private ApplicationUser CreateToken(ApplicationUser user)
        {
            var token = CryptoUtils.CreateToken(user.Id);
            user.Token = token;
            user.TimeToLive = DateUtils.TimeStampOneDay;
            _userContext.Update(user);
            _userContext.SaveChanges();
            return user;
        }

        private bool EmailExists(string email)
        {
            return _userContext.Users.Any(u => u.Email == email);
        }       
    }
}
