#nullable disable

using backend.InputModel;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserStore<ApplicationUser> _userStore;

        public UserController(
            UserManager<ApplicationUser> userManager,
            IUserStore<ApplicationUser> userStore,
            SignInManager<ApplicationUser> signInManager,
            ApplicationDbContext db)
        {
            _userManager = userManager;
            _db = db;
            _userStore = userStore;
            _signInManager = signInManager;
        }

        public string ReturnUrl { get; set; }

        [HttpPost]
        [ActionName("register")]
        public async Task<JsonResult> Register(RegisterInputModel registerInput, string returnUrl = null)
        {
            returnUrl ??= "~/";
            ApplicationUser user = CreateUser();
            if (ModelState.IsValid)
            {
                var existedUser = await _userManager.FindByEmailAsync(registerInput.Email);

                if (existedUser != null)
                {
                    if (existedUser.Email == registerInput.Email)
                    {
                        Response.StatusCode = 400;
                        throw new Exception("A user already exists with the provided email");
                    }
                }

                user.FirstName = registerInput.FirstName;
                user.LastName = registerInput.LastName;
                user.FullName = registerInput.FirstName + " " + registerInput.LastName;
                user.Email = registerInput.Email;

                await _userStore.SetUserNameAsync(user, registerInput.Email, CancellationToken.None);

                IdentityResult result = await _userManager.CreateAsync(user, registerInput.Password);

                if (result.Succeeded)
                { 
                    Response.StatusCode = 200;
                }
                else
                {
                    Response.StatusCode = 500;
                    throw new Exception("Something unexpected happened");
                }
            } 
            else
            {
                Response.StatusCode = 500;
            }
            return new JsonResult(user);
        }



        private ApplicationUser CreateUser()
        {
            try
            {
                return Activator.CreateInstance<ApplicationUser>();
            }
            catch
            {
                throw new InvalidOperationException($"Can't create an instance of '{nameof(ApplicationUser)}'. " +
                    $"Ensure that '{nameof(ApplicationUser)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                    $"override the register page in /Areas/Identity/Pages/Account/Register.cshtml");
            }
        }
    }
}
