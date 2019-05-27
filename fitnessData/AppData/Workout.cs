using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace fitnessData.AppData
{
    public class Workout
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public IList<WorkoutExcercise> Excercises { get; set; }

        public Workout()
        {
            Excercises = new List<WorkoutExcercise>();
        }

        public Workout(int userid, DateTime start, DateTime end)
        {
            UserId = userid;
            StartTime = start;
            EndTime = end;
        }
    }
}
