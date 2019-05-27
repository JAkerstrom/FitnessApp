using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.Workouts
{
    public class Workouts_Add
    {
        public int userid { get; set; }
        public WorkoutVM workout { get; set; }
    }
}
