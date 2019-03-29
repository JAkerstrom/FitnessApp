using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.ResponseModels
{
    public class UpdateResponse : ResponseVM
    {
        public UserDTO User { get; set; }
    }
}
