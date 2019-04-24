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
        private AuthDbContext _userContext;

        public AuthService(AuthDbContext userContext)
        {
            _userContext = userContext;
        }

        public ResponseVM ValidateLogin(LoginRequest login) {

            if (!EmailExists(login.Email))
            {
                return new ResponseVM(false); 
            }

            var user = _userContext.Users.FirstOrDefault(u => u.Email == login.Email);

            if (!CryptoUtils.VerifyPassword(login.Password, user.PasswordHash))
            {
                return new ResponseVM(false);
            }

            user = CreateToken(user);

            var userdto = UserDTO.Create(user);

            return new ResponseVM(true, userdto);

        }

        public ResponseVM Logout(RequestVM request)
        {
            ApplicationUser user = _userContext.Users.Find(request.User.Id);

            if (user == null) {
                return new ResponseVM(false);
            }

            user.Token = "";
            user.TimeToLive = 0; 
            _userContext.SaveChanges();

            return new ResponseVM(true);
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
