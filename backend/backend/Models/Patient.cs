#nullable disable

namespace backend.Models
{
    public class Patient
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string FirstName { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
