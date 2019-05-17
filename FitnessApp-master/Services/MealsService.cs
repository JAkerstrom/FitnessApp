using fitnessapp.Models.Food;
using fitnessData.AppData;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace fitnessapp.Services
{
    public class MealsService
    {
        private AppDataDbContext _context;

        public MealsService(AppDataDbContext context)
        {
            _context = context;
        }

        public Meals_List List(int userid)
        {
            Meals_List model = new Meals_List();

            if (_context.Meals.Any(m => m.UserId == userid))
            {
                var meals = _context.Meals
                    .Include(m => m.Dishes)
                    .Where(m => m.UserId == userid)
                    .ToList();

                foreach (var meal in meals)
                {
                    var mealsList = new List<Dish>();

                    if (meal.Dishes.Count > 0)
                    {
                        foreach (var e in meal.Dishes)
                        {
                            var b = _context.Dishes.Find(e.DishId);
                            mealsList.Add(b);
                        }
                    }

                    model.Meals.Add(new MealVM(meal.Id, meal.DateTime, mealsList));
                }
            }

            return model;
        }

        public void Add(Meals_Create model)
        {
            var meal = new Meal(model.userid, model.datetime);

            List<MealDish> dishList = new List<MealDish>();
            var dish = _context.Dishes.Find(model.dishid);
            dishList.Add(new MealDish(meal, dish));

            meal.Dishes = dishList;

            _context.Add(meal);
            _context.SaveChanges();
        }

        public void Delete(int mealid)
        {
            var meal = _context.Meals.Find(mealid);

            _context.Remove(meal);
            _context.SaveChanges();
        }
    }
}
