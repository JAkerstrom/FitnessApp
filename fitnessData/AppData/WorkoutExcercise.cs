using System;
using System.Collections.Generic;
using System.Text;

namespace fitnessData.AppData
{
    public class WorkoutExcercise
    {
        public int WorkoutId { get; set; }
        public Workout Workout { get; set; }
        public int ExcerciseId { get; set; }
        public Excercise Excercise { get; set; }
    }
}
