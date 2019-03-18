

namespace fitnessData.DataModels
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }

        public static User Create(string email)
        {
            return new User()
            {
                Email = email
            };
        }
    }
}
