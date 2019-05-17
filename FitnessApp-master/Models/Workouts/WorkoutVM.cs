using fitnessData.AppData;
using fitnessData.Utils;
using System;
using System.Collections.Generic;

namespace fitnessapp.Models.Workouts
{
    public class WorkoutVM
    {
        public int id { get; set; }
        public DateTime starttime { get; set; }
        public DateTime endtime { get; set; }
        public ICollection<Excercise> exercises { get; set; }

        public WorkoutVM(int _id, DateTime _starttime, DateTime _endtime, ICollection<Excercise> _exercises)
        {
            id = _id;
            starttime = _starttime;
            endtime = _endtime;
            exercises = _exercises;
        }

        public WorkoutVM()
        {
            //starttime = DateTime.Now;
            //endtime = DateTime.Now.AddHours(1);
            exercises = new List<Excercise>();
        }
    }
}
