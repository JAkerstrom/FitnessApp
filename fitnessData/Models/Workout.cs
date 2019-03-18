using System;

namespace fitnessData.DataModels
{
    public class Workout
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public float Duration { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int ExcerciseId { get; set; }
        public Excercise Excercise { get; set; }

        public static Workout Create(int userid,
            DateTime date, string desc, int duration, 
            User user, Excercise excercise)
        {
            return new Workout()
            {
                UserId = userid,
                DateTime = date,
                Duration = duration,
                User = user,
                Excercise = excercise
            };
        }
    }
}
