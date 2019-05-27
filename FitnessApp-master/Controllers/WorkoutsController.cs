using fitnessapp.Models.Workouts;
using fitnessapp.Services;
using fitnessData.AppData;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace fitnessapp.Controllers
{
    [Route("[controller]/[action]")]
    public class WorkoutsController : Controller
    {
        private WorkoutsService _ws;

        public WorkoutsController(WorkoutsService ws)
        {
            _ws = ws;
        }

        [HttpGet]
        public IList<Excercise> Exercises(int id)
        {
            return _ws.Excercises(id);
        }

        [HttpGet]
        public Workouts_List List(int id)
        {
            return _ws.List(id);
        }

        [HttpPost]
        public void Add([FromBody]WorkoutCreateVM workout)
        {
            workout.starttime = workout.starttime.AddHours(2);
            workout.endtime = workout.endtime.AddHours(2);
            _ws.Add(workout);
        }

        [HttpPost]
        public void Update(Workouts_Add model)
        {
            _ws.Update(model.workout);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _ws.Delete(id);
        }
    }
}