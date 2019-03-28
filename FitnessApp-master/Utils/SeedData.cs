using fitnessData.DataModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace fitnessapp.Utils
{

    //ta bort detta och lägg till seed i Data.Models.Datacontext - modelbuilder istället


    //public class SeedData
    //{
    //    private readonly IApplicationBuilder _app;

    //    public SeedData(IApplicationBuilder app)
    //    {
    //        _app = app;
    //    }

    //    public void Seed()
    //    {
    //        using (var serviceScope = _app.ApplicationServices.CreateScope())
    //        {
    //            var _context = serviceScope.ServiceProvider.GetService(typeof(DataContext)) as DataContext;

    //            using (_context)
    //            {
    //                User newuser = User.Create("ex@mail.com");
    //                Excercise excercise = Excercise.Create("Yoga", "30 min");
    //                Dish dish1 = Dish.Create("Carbonara", "Pasta", 80, 10, 10);


    //                if (true)
    //                {
    //                    _context.Add(newuser);
    //                }

    //                if (true)
    //                {
    //                    var cycling = Excercise.Create("Cycling", "30 min");
    //                    var weights = Excercise.Create("Weightlifting", "30 min");
    //                    _context.Add(excercise);
    //                    _context.Add(cycling);
    //                    _context.Add(weights);
    //                }

    //                if (true)
    //                {                        
    //                    var dish2 = Dish.Create("Meatballs", "meatballs and potatoes", 60, 20, 20);
    //                    _context.Add(dish1);
    //                    _context.Add(dish2);
    //                }

    //                if (true)
    //                {
    //                    var workout = Workout.Create(1, DateTime.Now, "", 1, newuser, excercise);
    //                    _context.Add(workout);
    //                }

    //                _context.SaveChanges();
    //            }
    //        }
    //    }
    //}   
}
