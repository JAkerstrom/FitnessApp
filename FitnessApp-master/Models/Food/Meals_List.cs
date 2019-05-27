using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.Food
{
    public class Meals_List
    {
        public IList<MealVM> Meals { get; set; }

        public Meals_List()
        {
            Meals = new List<MealVM>();
        }
    }
}
