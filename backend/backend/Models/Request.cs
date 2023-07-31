#nullable disable

namespace backend.Models
{
    public class Request
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public string CompanySize { get; set; }
        public string Affiliate { get; set; }
        public string Message { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
