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
                return new ResponseVM(false, user);
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
