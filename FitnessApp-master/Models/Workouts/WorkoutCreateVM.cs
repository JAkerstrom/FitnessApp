using System;

namespace fitnessapp.Models.Workouts
{
    public class WorkoutCreateVM
    {
        public int userid { get; set; }
        public DateTime starttime { get; set; }
        public DateTime endtime { get; set; }
        public int exerciseid { get; set; }
    }
}
