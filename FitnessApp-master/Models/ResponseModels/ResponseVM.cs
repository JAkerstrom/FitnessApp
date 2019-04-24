namespace fitnessapp.Models.ResponseModels
{
    public class ResponseVM
    {
        public bool   RequestSuccess { get; set; }
        public UserDTO User { get; set; }

        public ResponseVM(bool requestsuccess, UserDTO user = null)
        {
            RequestSuccess = requestsuccess;
            User = user;   
        }
    }
}
