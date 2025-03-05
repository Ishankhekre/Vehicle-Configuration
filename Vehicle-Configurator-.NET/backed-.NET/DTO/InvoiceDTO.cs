using System.Text.Json.Serialization;

namespace backed_.NET.DTO
{
    public class InvoiceDTO
    {


        [JsonPropertyName("invoiceNumber")]
        public string InvoiceNumber { get; set; } = string.Empty;

        [JsonPropertyName("username")]
        public string Username { get; set; } = string.Empty;

        [JsonPropertyName("manufacturer")]
        public string Manufacturer { get; set; } = string.Empty;

        [JsonPropertyName("modelName")]
        public string ModelName { get; set; } = string.Empty;

        [JsonPropertyName("components")]
        public List<string> Components { get; set; } = new();

        [JsonPropertyName("segment")]
        public string Segment { get; set; } = string.Empty;

        [JsonPropertyName("basePrice")]
        public double BasePrice { get; set; }

        [JsonPropertyName("tax")]
        public double Tax { get; set; }

        [JsonPropertyName("quantity")]
        public int Quantity { get; set; }

        [JsonPropertyName("totalPrice")]
        public double TotalPrice { get; set; }

        [JsonPropertyName("finalTotalPrice")]
        public double FinalTotalPrice { get; set; }

        [JsonPropertyName("user")]
        public UserDTO User { get; set; } = new();
    }

    public class UserDTO
    {
        [JsonPropertyName("userName")]
        public string UserName { get; set; } = string.Empty;

        [JsonPropertyName("companyName")]
        public string CompanyName { get; set; } = string.Empty;

        [JsonPropertyName("email")]
        public string Email { get; set; } = string.Empty;

        [JsonPropertyName("gstNumber")]
        public string GstNumber { get; set; } = string.Empty;

        [JsonPropertyName("contactNumber")]
        public string ContactNumber { get; set; } = string.Empty;
    }
}
