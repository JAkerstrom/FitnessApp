using System;
using System.Collections.Generic;


namespace fitnessData.DataModels
{
    public class Meal
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string MealType { get; set; }

        public IEnumerable<MealDish> Dishes { get; set; }

        public static Meal Create(DateTime dateTime,
                        string mealType, IEnumerable<MealDish> dishes)
        {
            return new Meal()
            {
                DateTime = dateTime,
                MealType = mealType,
                Dishes = dishes
            };
        }
    }

}
