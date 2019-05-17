using fitnessData.AppData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.Food
{
    public class MealVM
    {
        public int id { get; set; }
        public DateTime datetime { get; set; }
        public ICollection<Dish> dishes { get; set; }

        public MealVM(int _id, DateTime _datetime, ICollection<Dish> _dishes)
        {
            id = _id;
            datetime = _datetime;
            dishes = _dishes;
        }
    }
}
