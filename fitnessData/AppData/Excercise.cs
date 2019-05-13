using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace fitnessData.AppData
{
    public class Excercise
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Excercise(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }
    }
}
