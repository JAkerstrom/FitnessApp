namespace fitnessapp.Models.RequestModels
{
    public class RequestVM
    {
        public RequestVM()
        {
            Token = "";
            ReturnUrl = "";
            User = null;
        }

        public string Token { get; set; }
        public string ReturnUrl { get; set; }
        public UserDTO User { get; set; }
    }
}
