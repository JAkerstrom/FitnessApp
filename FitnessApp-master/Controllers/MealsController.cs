using fitnessapp.Models.Food;
using fitnessapp.Services;
using fitnessData.AppData;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace fitnessapp.Controllers
{
    [Route("[controller]/[action]")]
    public class MealsController : Controller
    {
        private MealsService _ms;

        public MealsController(MealsService ms)
        {
            _ms = ms;
        }

        [HttpGet]
        public IList<Dish> Dishes(int id)
        {
            return _ms.Dishes(id);
        }

        [HttpGet]
        public Meals_List List(int id)
        {
            return _ms.List(id);
        }

        [HttpPost]
        public void Add([FromBody]Meals_Create meal)
        {
            //temporary bugfix
            meal.datetime = meal.datetime.AddHours(2);
            _ms.Add(meal);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _ms.Delete(id);
        }
    }
}