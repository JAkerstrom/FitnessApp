using System;
using System.Collections.Generic;
using System.Text;

namespace fitnessData.Auth
{
    public class Seed
    {
        public static ApplicationUser Create()
        {
            //password = test
            var user = new ApplicationUser("user@test.com", "098F6BCD4621D373CADE4E832627B4F6");
            user.Id = 1;
            return user;
        }
    }
}
