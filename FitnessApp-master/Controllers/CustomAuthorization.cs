using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace fitnessapp.Controllers
{
    //public class AuthorizationAttribute : TypeFilterAttribute
    //{
    //    public AuthorizationAttribute() : base(typeof(RequirementFilter))
    //    {
    //        Arguments = new object[] { };
    //    }
    //}

    //public class RequirementFilter : IAuthorizationFilter
    //{
    //    readonly Claim _claim;

    //    public RequirementFilter(Claim claim)
    //    {
    //        _claim = claim;
    //    }

    //    public void OnAuthorization(AuthorizationFilterContext context)
    //    {
    //        var hasClaim = /*context.HttpContext.User.Claims.Any(c => c.Type == _claim.Type && c.Value == _claim.Value);*/
    //        if (!hasClaim)
    //        {
    //            context.Result = new ForbidResult();
    //        }
    //    }
    //}
}
