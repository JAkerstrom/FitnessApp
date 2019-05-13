using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace fitnessData.AppData
{
    public class Meal
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime DateTime { get; set; }

        public ICollection<MealDish> Dishes { get; set; }
    }
}
