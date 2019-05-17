using fitnessapp.Models.Workouts;
using fitnessData.AppData;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace fitnessapp.Services
{
    public class WorkoutsService
    {
        private AppDataDbContext _context;

        public WorkoutsService(AppDataDbContext context)
        {
            _context = context;
        }

        public Workouts_List List(int userid)
        {
            Workouts_List model = new Workouts_List();
            
            if(_context.Workouts.Any(w => w.UserId == userid))
            {
                var workouts = _context.Workouts
                    .Include(w => w.Excercises)
                    .Where(w => w.UserId == userid)
                    .ToList();

                foreach(var workout in workouts)
                {
                    var exerciseList = new List<Excercise>();

                    if (workout.Excercises.Count > 0)
                    {
                        foreach (var e in workout.Excercises)
                        {
                            var b = _context.Excercises.Find(e.ExcerciseId);
                            exerciseList.Add(b);
                        }
                    }

                    model.Workouts.Add(new WorkoutVM(workout.Id, workout.StartTime, workout.EndTime, exerciseList));
                }
            }

            return model;
        }

        public void Add(WorkoutCreateVM model)
        {
            var workout = new Workout(model.userid, model.starttime, model.endtime);

            List<WorkoutExcercise> exList = new List<WorkoutExcercise>();
            var exercise = _context.Excercises.Find(model.exerciseid);
            exList.Add(new WorkoutExcercise(workout, exercise));

            workout.Excercises = exList;

            _context.Add(workout);
            _context.SaveChanges();
        }

        //public void Add(int userid, WorkoutVM model)
        //{
        //    var workout = new Workout(userid, model.starttime, model.endtime);
        //    List<WorkoutExcercise> exList = new List<WorkoutExcercise>();

        //    foreach (var exercise in model.exercises)
        //    {
        //        exList.Add(new WorkoutExcercise(workout, exercise));
        //    }

        //    workout.Excercises = exList;

        //    _context.Add(workout);
        //    _context.SaveChanges();
        //}

        public void Update(WorkoutVM model)
        {
            var workout = _context.Workouts.Find(model.id);
            workout.StartTime = model.starttime;
            workout.EndTime = model.endtime;

            foreach (var exercise in model.exercises)
            {
                if(!workout.Excercises.Any(e => e.ExcerciseId == exercise.Id))
                {
                    var newexercise = _context.Excercises.Find(exercise.Id);

                    workout.Excercises.Add(new WorkoutExcercise(workout, newexercise));
                }
            }

            _context.Update(workout);
            _context.SaveChanges();
        }

        public void Delete(int workoutid)
        {
            var workout = _context.Workouts.Find(workoutid);

            _context.Remove(workout);
            _context.SaveChanges();
        }
    }
}
