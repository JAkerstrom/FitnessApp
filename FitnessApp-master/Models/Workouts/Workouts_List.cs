using System.Collections.Generic;

namespace fitnessapp.Models.Workouts
{
    public class Workouts_List
    {
        public IList<WorkoutVM> Workouts { get; set; }

        public Workouts_List()
        {
            Workouts = new List<WorkoutVM>();
        }
    }
}
