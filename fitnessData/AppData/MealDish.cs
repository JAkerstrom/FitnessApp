using System;
using System.Collections.Generic;
using System.Text;

namespace fitnessData.AppData
{
    public class MealDish
    {
        public int MealId { get; set; }
        public Meal Meal { get; set; }

        public int DishId { get; set; }
        public Dish Dish { get; set; }
    }
}
