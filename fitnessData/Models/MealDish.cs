namespace fitnessData.DataModels
{
    public class MealDish
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int MealId { get; set; }
        public Meal Meal { get; set; }

        public int DishId { get; set; }
        public Dish Dish { get; set; }
    }
}
