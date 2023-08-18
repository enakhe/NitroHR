#nullable disable

using Azure.Core;
using backend.InputModel;
using backend.Middleware;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _config;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserStore<ApplicationUser> _userStore;

        public UserController(
            UserManager<ApplicationUser> userManager,
            IUserStore<ApplicationUser> userStore,
            SignInManager<ApplicationUser> signInManager,
            ApplicationDbContext db,
            IConfiguration config)
        {
            _userManager = userManager;
            _db = db;
            _userStore = userStore;
            _config = config;
            _signInManager = signInManager;
        }

        public string ReturnUrl { get; set; }

        [HttpPost]
        [Route("register")]
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
                    throw new Exception("Invalid credentials");
                }
            }
            else
            {
                Response.StatusCode = 500;
            }
            return new JsonResult(user);
        }

        [HttpPost]
        [Route("login")]
        public async Task<JsonResult> Login(LoginInputmodel loginInput, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                if (loginInput == null)
                {
                    Response.StatusCode = 400;
                    throw new Exception("Please provide all fields");
                }

                if (loginInput.Username == null || loginInput.Username == "" || loginInput.Password == null || loginInput.Password == "")
                {
                    Response.StatusCode = 400;
                    throw new Exception("Please provide all fields");
                }

                _ = loginInput.Username;
                var user = await _userManager.FindByNameAsync(loginInput.Username);

                if (user != null)
                {
                    _ = user.UserName;
                }

                var result = await _signInManager.PasswordSignInAsync(loginInput.Username, loginInput.Password, loginInput.RememberMe, lockoutOnFailure: false);

                if (result.Succeeded)
                {
                    GenerateToken(user.Id);
                    Response.StatusCode = 200;
                }

                else
                {
                    Response.StatusCode = 500;
                    throw new Exception("Invalid credentials");
                }

                return new JsonResult(new
                {
                    user.FirstName,
                    user.LastName,
                    user.FullName,
                    user.UserName,
                    user.Email,
                    user.EmailConfirmed,
                    user.PhoneNumber,
                    user.PhoneNumberConfirmed
                });
            }
            else
            {
                Response.StatusCode = 500;
                throw new Exception("Something unexpected happened");
            }
            
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

        private string GenerateToken(string Id)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, Id)
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);

            var realToken = new JwtSecurityTokenHandler().WriteToken(token);

            Response.Cookies.Append("JWT", realToken, new CookieOptions()
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Unspecified,
                Secure = false,
                MaxAge = TimeSpan.FromHours(2)
            });

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
