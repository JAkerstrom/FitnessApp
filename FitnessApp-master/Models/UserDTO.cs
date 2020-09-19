using fitnessData.AppData;

namespace fitnessapp.Models
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        public bool IsTestUser => Id == 1;

        public static UserDTO Create(ApplicationUser user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                UserName = user.UserName ?? "",
                Email = user.Email,
                Token = user.Token
            };
        }
    }
}
