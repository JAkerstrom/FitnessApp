using fitnessData.DataModels;
using System.Collections.Generic;

namespace fitnessapp.ViewModels
{
    public class WorkoutsVM
    {
        public User User { get; set; }
        public IList<Workout> Workouts { get; set; }
    }
}
