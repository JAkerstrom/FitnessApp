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
        public ResponseVM Logout([FromBody]LogoutRequest logout)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "invalid model", ""); //om modelstate är invalid är det något fel i reactkoden
            }

            return _authService.Logout(logout);
        }

        [HttpPost]
        public LoginResponse Login([FromBody]LoginRequest login)
        {
            if (!ModelState.IsValid)
            {
                return new LoginResponse()
                {
                    Message = "Please enter a valid email and password",
                    RequestSuccess = false,
                    ReturnUrl = login.ReturnUrl,
                    NextUrl = ""
                };
            }

            return _authService.ValidateLogin(login);
        }

        public ResponseVM Register([FromBody]RegisterRequest request)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "invalid model", "");
            }
            return _userService.CreateNew(request);
        }

    }
}
