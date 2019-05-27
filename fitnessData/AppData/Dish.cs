using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace fitnessData.AppData
{
    public class Dish
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Dish(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }
    }
}
