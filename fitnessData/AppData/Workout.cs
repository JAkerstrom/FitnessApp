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

        public ICollection<WorkoutExcercise> Excercises { get; set; }
    }
}
