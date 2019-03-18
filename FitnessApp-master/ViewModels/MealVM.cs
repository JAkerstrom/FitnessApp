using Data.DataModels;
using System.Collections.Generic;

namespace fitnessapp.ViewModels
{
    public class MealVM
    {
        public Meal Meal { get; set; }
        public IList<Dish> Dishes { get; set; }
    }
}
