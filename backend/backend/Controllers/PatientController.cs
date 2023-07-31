#nullable disable

using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public PatientController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public JsonResult Post(Patient patients)
        {
            if (patients == null || patients.FirstName == null || patients.FirstName == "")
            {
                Response.StatusCode = 500;
                throw new Exception("Please add the required fields");
            }

            ValueTask<Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<Patient>> result = _db.AddAsync(patients);

            if (result.IsCompleted)
            {
                _db.SaveChanges();
                Response.StatusCode = 200;
            } 
            else if (result.IsFaulted)
            {
                Response.StatusCode = 500;
            }

            return new JsonResult(patients);
        }

        [HttpGet]
        public IActionResult Get()
        {
            IList<Patient> PatientList = _db.Patients.OrderByDescending(patient => patient.CreatedAt).ToList();
            if (PatientList != null)
            {
                return Ok(PatientList);
            } else
            {
                throw new Exception("Bad Request");
            }
        }

        [HttpPut]
        public JsonResult Put(string id, string firstName)
        {
            Patient thisPatient = _db.Patients.FirstOrDefault(patient => patient.Id == id);
            if (thisPatient != null)
            {
                thisPatient.FirstName = firstName;
                _db.Entry(thisPatient).State = EntityState.Modified;
                _db.SaveChanges();
                return new JsonResult(thisPatient);
            }

            return new JsonResult("Not found");
        }

        [HttpDelete]
        public JsonResult Delete(string id)
        {
            Patient thisPatient = _db.Patients.FirstOrDefault(patient => patient.Id == id);
            if (thisPatient != null)
            {
                _db.Patients.Remove(thisPatient);
                _db.SaveChanges();
                return new JsonResult("Successfully deleted");
            }

            return new JsonResult("Not found");
        }
    }
}
