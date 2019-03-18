using Data.DataModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using fitnessapp.ViewModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace fitnessapp.Controllers
{
    //To-do : create repositories and more viewmodels.
    //create additional controllers
    //post/delete methods
    [Authorize]
    [Route("api/data")]
    public class DataController : ControllerBase
    {
        DataContext _context;

        public DataController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _context.Users.Where(u => u.Id == id).FirstOrDefault();
        }

        [HttpGet("[action]/{id}")]
        public WorkoutsVM UserWorkouts(int id)
        {
            var workouts = _context.Workouts.Where(w => w.UserId == id)
                .Include(e => e.Excercise)
                .ToList();
            var user = _context.Users.Where(u => u.Id == id).FirstOrDefault();

            return new WorkoutsVM()
            {
                User = user,
                Workouts = workouts
            }; 
        }

        [HttpGet("[action]")]
        public IEnumerable<Excercise> Excercises()
        {
            return _context.Excercises.ToList();
        }

        [HttpGet("[action]/{id}")]
        public IEnumerable<MealVM> UserMeals(int id)
        {
            var mds = _context.MealDishes.Where(m => m.UserId == id).ToList();
            var meals = mds.Select(m => m.Meal).ToList();

            List<MealVM> vms = new List<MealVM>();

            meals.ForEach(m => {
                var vm = new MealVM()
                {
                    Meal = m,
                    Dishes = mds
                        .Where(md => md.MealId == m.Id)
                        .Select(d => d.Dish)
                        .ToList()
                };
                vms.Add(vm);
            });

            return vms;
        }

        [HttpGet("[action]")]
        public IEnumerable<Dish> Dishes()
        {
            return _context.Dishes.ToList();
        }

    }
}