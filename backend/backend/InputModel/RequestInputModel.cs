#nullable disable

using System.ComponentModel.DataAnnotations;

namespace backend.InputModel
{
    public class RequestInputModel
    {
        [Required]
        [Display(Name = "First name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Phone]
        [Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

        [Required]
        [Display(Name = "Company name")]
        public string CompanyName { get; set; }

        [Required]
        [Display(Name = "Company size")]
        public string CompanySize { get; set; }

        [Required]
        [Display(Name = "Affiliate")]
        public string Affiliate { get; set; }

        [Required]
        [Display(Name = "Message")]
        public string Message { get; set; }
    }
}
