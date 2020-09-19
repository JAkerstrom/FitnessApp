using Microsoft.EntityFrameworkCore;
using System;

namespace fitnessData.AppData
{
    public class AppDataDbContext : DbContext
    {
        public DbSet<Dish>             Dishes { get; set; }
        public DbSet<Meal>             Meals { get; set; }
        public DbSet<Excercise>        Excercises { get; set; }
        public DbSet<Workout>          Workouts { get; set; }
        public DbSet<MealDish>         MealDishes { get; set; }
        public DbSet<WorkoutExcercise> WorkoutExcercises { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }

        public AppDataDbContext(DbContextOptions<AppDataDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>().HasData(
               Seed.Create()
            );

            modelBuilder.Entity<MealDish>().HasKey(k => new { k.DishId, k.MealId });
            modelBuilder.Entity<WorkoutExcercise>().HasKey(k => new { k.ExcerciseId, k.WorkoutId });

            modelBuilder.Entity<Dish>().HasData(
                Seed.Dishes()
            );

            modelBuilder.Entity<Excercise>().HasData(
                Seed.Excercises()    
            );
        }
    }
}
