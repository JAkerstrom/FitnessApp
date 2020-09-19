using System;
using System.Collections.Generic;
using System.Text;

namespace fitnessData.AppData
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

        public static List<Dish> Dishes()
        {
            return new List<Dish> {
                new Dish(1, "Pastasallad", "Tomater och pasta"),
                new Dish(2, "Fisksoppa", "Torsk, grädde, tomater")
            };
        }

        public static List<Excercise> Excercises()
        {
            return new List<Excercise> {
                new Excercise(1, "Knäböj", "Utan vikt"),
                new Excercise(2, "Armhävningar", "På knä"),
                new Excercise(3, "Armhävningar", "Med raka ben"),
                new Excercise(4, "Cykling", "Hög intensitet")
            };
        }

    }
}
