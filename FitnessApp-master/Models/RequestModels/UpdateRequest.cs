using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.RequestModels
{
    public class UpdateRequest : RequestVM
    {
        public UserDTO User { get; set; }
    }
}
