using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using fitnessapp.Services;
using Microsoft.AspNetCore.Mvc;

namespace fitnessapp.Controllers
{

    [Route("[controller]/[action]")]
    public class AuthController : Controller
    {
        private UserService _userService;
        private AuthService _authService;

        public AuthController(UserService userService, AuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }


        [HttpPost]
        public ResponseVM Logout([FromBody]RequestVM logout)
        {
            if (!ModelState.IsValid)
            {
                return new ResponseVM(false); 
            }

            return _authService.Logout(logout);
        }

        [HttpPost]
        public ResponseVM Login([FromBody]LoginRequest login)
        {
            if (!ModelState.IsValid)
            {
                return new ResponseVM(false);
            }

            return _authService.ValidateLogin(login);
        }

        [HttpPost]
        public ResponseVM Register([FromBody]RegisterRequest request)
        {
            if (!ModelState.IsValid)
            {
                return new ResponseVM(false);
            }
            return _userService.CreateNew(request);
        }
    }
}
