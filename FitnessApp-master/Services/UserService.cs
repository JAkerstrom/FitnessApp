﻿using fitnessData.Auth;
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
        private static int LOGIN = 1;
        private static int REGISTER = 2;
        private static int UPDATE = 3;
        private static int DEFAULT = 4;

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

        public UserDTO Get(string email)
        {
            var user = _userContext.Users.FirstOrDefault(u => u.Email == email);

            return UserDTO.Create(user);
        }

        public ResponseVM CreateNew(RegisterRequest request)
        {
            //Add confirm email

            if (_userContext.Users.Any(u => u.Email == request.Email))
            {
                return ResponseVM.Create("",false,"Email is allready registered", REGISTER, "");
            }

            var passwordhash = CryptoUtils.GetMD5Hash(request.Password); //////fixa bättre kryptering

            var newUser = new ApplicationUser()
            {
                Email = request.Email,
                PasswordHash = passwordhash
            };

            var user = _userContext.Add(newUser).Entity;
            _userContext.SaveChanges();

            user = CreateUserToken(user);

            return ResponseVM.Create("", true, 
                "You account was created successfully!",
                DEFAULT,
                "", 
                UserDTO.Create(user));
        }

        public ResponseVM Delete(int id)
        {
            var user = _userContext.Users.Find(id);

            if (user == null)
            {
                return ResponseVM.Create("",false, "error, no such user", DEFAULT, "");
            }
            _userContext.Users.Remove(user);
            _userContext.SaveChanges();

            return ResponseVM.Create("", true, "The account was deleted", UPDATE, "");
        }

        public ResponseVM Update(UserDTO user)
        {
            var updatedUser = _userContext.Users.Find(user.Id);
            updatedUser.Email = user.Email;
            updatedUser.UserName = user.UserName;
            _userContext.Users.Update(updatedUser);
            var res = _userContext.SaveChanges();
            return ResponseVM.Create("", true, "your info was updated", UPDATE, "", UserDTO.Create(updatedUser));
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
