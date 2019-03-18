using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessapp.Models.RequestModels
{
    public class LogoutRequest : RequestVM
    {
        public int UserId { get; set; }
    }
}
