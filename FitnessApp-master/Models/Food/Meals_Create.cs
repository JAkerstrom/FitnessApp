using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.Food
{
    public class Meals_Create
    {
        public int userid { get; set; }
        public DateTime datetime { get; set; }
        public int dishid { get; set; }
    }
}
