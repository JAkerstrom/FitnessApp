using Data.Auth;
using Data.Utils;
using fitnessapp.Models;
using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Services
{
    public class AuthService
    {
        private AuthDbContext _userContext;

        public AuthService(AuthDbContext userContext)
        {
            _userContext = userContext;
        }

        public LoginResponse ValidateLogin(LoginRequest login) {

            if (!EmailExists(login.Email))
            {
                return Response("Invalid signin credentials", false, login.ReturnUrl, ""); 
            }

            var user = _userContext.Users.FirstOrDefault(u => u.Email == login.Email);

            if (!CryptoUtils.VerifyPassword(login.Password, user.PasswordHash))
            {
                return Response("Invalid signin credentials", false, login.ReturnUrl, "");
            }

            user = CreateToken(user);

            var userdto = UserDTO.Create(user);

            return Response("", true, "data/index", "data/index", userdto, user.Token);

        }

        public ResponseVM Logout(LogoutRequest logout)
        {
            //token, returnurl, userid
            ApplicationUser user = _userContext.Users.Find(logout.UserId);

            if (user == null) {
                return ResponseVM.Create("", false, "no such user", "");
            }

            user.Token = "";
            //user.timetolive = 0; //ändra till long
            _userContext.SaveChanges();

            return ResponseVM.Create("", true, "user logged out", "");

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

        public ApplicationUser CreateToken(ApplicationUser user)
        {
            var token = CryptoUtils.CreateToken(user.Id);
            user.Token = token;
            user.TimeToLive = DateTime.Now.AddMinutes(30);
            _userContext.Update(user);
            _userContext.SaveChanges();
            return user;
        }

        public bool EmailExists(string email)
        {
            return _userContext.Users.Any(u => u.Email == email);
        }       

        public LoginResponse Response(string message, bool success, string returnUrl, string nextUrl, UserDTO user = null, string token = null)
        {
            return new LoginResponse()
            {
                Message = message,
                RequestSuccess = success,
                ReturnUrl = returnUrl,
                NextUrl = nextUrl,
                User = user ?? null,
                Token = token ?? null
            };
        }

    }
}
