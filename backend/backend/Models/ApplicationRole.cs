using Microsoft.AspNetCore.Identity;

namespace backend.Models
{
    public class ApplicationRole : IdentityRole
    {
        public enum Roles
        {
            SuperAdmin,
            Admin,
        }
    }
}
