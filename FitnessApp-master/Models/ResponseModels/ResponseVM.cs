namespace fitnessapp.Models.ResponseModels
{
    public class ResponseVM
    {
        public bool   RequestSuccess { get; set; }
        public string Message { get; set; }
        public int Receiver { get; set; }
        public string ReturnUrl { get; set; }
        public string NextUrl { get; set; }
        public UserDTO User { get; set; }

        public static ResponseVM Create(string returnurl, bool requestsuccess, 
            string message, int receiver, string nexturl, UserDTO user = null)
        {
            return new ResponseVM()
            {                
                RequestSuccess = requestsuccess,
                Message = message,
                Receiver = receiver,
                ReturnUrl = returnurl,
                NextUrl = nexturl,
                User = user
            };
        }
    }
}
