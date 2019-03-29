using fitnessapp.Models;
using fitnessapp.Models.RequestModels;
using fitnessapp.Models.ResponseModels;
using fitnessapp.Services;
using Microsoft.AspNetCore.Mvc;

namespace fitnessapp.Controllers
{

    [Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        private static int LOGIN = 1;
        private static int REGISTER = 2;
        private static int UPDATE = 3;
        private static int DEFAULT = 4;

        private UserService _userService;
        private AuthService _authService;

        public AccountController(UserService userService, AuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }

        [HttpPost]
        public ResponseVM Update([FromBody]UserDTO user)
        {
            if (!ModelState.IsValid)
            {
                return ResponseVM.Create("", false, "invalid model", UPDATE, "", user);
            }
            return _userService.Update(user);
        }

        [HttpDelete]
        public ResponseVM Delete(int id)
        {
            return _userService.Delete(id);
        }
    }
}
