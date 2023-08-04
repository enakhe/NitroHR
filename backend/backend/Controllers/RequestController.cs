#nullable disable

using backend.InputModel;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public RequestController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<JsonResult> Post(Request request)
        {
            if (request == null)
            {
                Response.StatusCode = 400;
                throw new Exception("Please provide all fields");
            }

            if (request.FirstName == null || request.FirstName == "" || request.LastName == null || request.LastName == "" || request.Email == null || request.Email == "" || request.PhoneNumber == null || request.PhoneNumber == "" || request.CompanyName == null || request.CompanyName == "" || request.CompanySize == null || request.CompanySize == "" || request.Message == null || request.Message == "")
            {
                Response.StatusCode = 400;
                throw new Exception("Please provide all fields");
            }

           ValueTask<Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Request>> result = _db.AddAsync(request);

            if (result.IsCompletedSuccessfully)
            {
                await _db.SaveChangesAsync();
                Response.StatusCode = 200;
            }
            else if (result.IsFaulted)
            {
                Response.StatusCode = 500;
                throw new Exception("Something unexpected happened. Please try again later");
            }
            return new JsonResult(request);
        }
    }
}
