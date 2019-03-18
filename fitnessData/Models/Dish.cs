using System.Collections.Generic;


namespace fitnessData.DataModels
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Carbs { get; set; }
        public int Protein { get; set; }
        public int Fat { get; set; }

        public IEnumerable<MealDish> Meals { get; set; }

        public static Dish Create( 
            string name, string description,
            int carbs, int protein, int fat)
        {
            return new Dish()
            {
                Name = name,
                Description = description,
                Carbs = carbs,
                Protein = protein,
                Fat = fat
            };
        }
    }
}
