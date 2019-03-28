using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using fitnessapp.Services;
using Microsoft.AspNetCore.Mvc;

namespace fitnessapp.Controllers
{

    [Route("[controller]/[action]")]
    public class AuthController : Controller
    {
        private static int LOGIN = 1;
        private static int REGISTER = 2;
        private static int UPDATE = 3;
        private static int DEFAULT = 4;

        private UserService _userService;
        private AuthService _authService;

        public AuthController(UserService userService, AuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }


        [HttpPost]
        public ResponseVM Logout([FromBody]LogoutRequest logout)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "invalid model", DEFAULT, ""); 
            }

            return _authService.Logout(logout);
        }

        [HttpPost]
        public ResponseVM Login([FromBody]LoginRequest login)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "Please enter a valid email and password", LOGIN, "");
            }

            return _authService.ValidateLogin(login);
        }

        [HttpPost]
        public ResponseVM Register([FromBody]RegisterRequest request)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "invalid model", REGISTER, "");
            }
            return _userService.CreateNew(request);
        }

    }
}
