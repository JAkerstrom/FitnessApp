namespace fitnessapp.Models.RequestModels
{
    public class RegisterRequest : RequestVM
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
