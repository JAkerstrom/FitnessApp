namespace fitnessapp.Models.ResponseModels
{
    public class ResponseVM
    {
        public bool   RequestSuccess { get; set; }
        public string Message { get; set; }
        public string ReturnUrl { get; set; }
        public string NextUrl { get; set; }

        public static ResponseVM Create(string returnurl, bool requestsuccess, 
            string message, string nexturl)
        {
            return new ResponseVM()
            {                
                RequestSuccess = requestsuccess,
                Message = message,
                ReturnUrl = returnurl,
                NextUrl = nexturl
            };
        }
    }
}
