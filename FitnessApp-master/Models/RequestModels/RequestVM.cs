namespace fitnessapp.Models.RequestModels
{
    public class RequestVM
    {
        public RequestVM()
        {
            Token = "";
            ReturnUrl = "";
        }

        public string Token { get; set; }
        public string ReturnUrl { get; set; }
    }
}
