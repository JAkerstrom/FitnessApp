using fitnessData.Auth;
using fitnessData.Utils;
using fitnessapp.Models;
using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using System.Linq;

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
                return RegisterResponse.Create("",false,"Email is allready registered", "");
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

            return new RegisterResponse()
            {
                Message = "You account was created successfully!",
                RequestSuccess = true,
                ReturnUrl = "",
                NextUrl = "",
                User = UserDTO.Create(user)
            };
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
