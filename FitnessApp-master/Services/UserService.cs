using fitnessData.Auth;
using fitnessData.Utils;
using fitnessapp.Models;
using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using System.Linq;
using System;

namespace fitnessapp.Services
{
    public class UserService
    {
        private AuthDbContext _userContext;

        public UserService(AuthDbContext userContext)
        {
            _userContext = userContext;
        }

        public UserDTO Get(int id)
        {
            var user = _userContext.Users.Find(id);

            return UserDTO.Create(user);
        }

        public ResponseVM CreateNew(RegisterRequest request)
        {

            if (_userContext.Users.Any(u => u.Email == request.Email))
            {
                return new ResponseVM(false);
            }

            var passwordhash = CryptoUtils.GetMD5Hash(request.Password);

            var newUser = new ApplicationUser(request.Email, passwordhash);

            var user = _userContext.Add(newUser).Entity;
            _userContext.SaveChanges();

            user = CreateUserToken(user);

            return new ResponseVM(true, UserDTO.Create(user));
        }

        public ResponseVM Delete(int id)
        {
            if (id == 1)
            {
                return new ResponseVM(false);
            }

            var user = _userContext.Users.Find(id);

            if (user == null)
            {
                return new ResponseVM(false);
            }
            _userContext.Users.Remove(user);
            _userContext.SaveChanges();

            return new ResponseVM(true);
        }

        public ResponseVM Update(UserDTO user)
        {
            if (user.IsTestUser) {
                return new ResponseVM(false, user);
            }
            var updatedUser = _userContext.Users.Find(user.Id);
            updatedUser.Email = user.Email;
            updatedUser.UserName = user.UserName;
            _userContext.Users.Update(updatedUser);
            var res = _userContext.SaveChanges();
            return new ResponseVM(true, UserDTO.Create(updatedUser));
        }

        public ApplicationUser CreateUserToken(ApplicationUser user)
        {
            var newToken = CryptoUtils.CreateToken(user.Id);
            user.Token = newToken;
            _userContext.SaveChanges();
            return user;
        }

    }
}
