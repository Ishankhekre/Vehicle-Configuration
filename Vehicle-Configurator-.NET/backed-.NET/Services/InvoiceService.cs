using backed_.NET.DTO;
using backed_.NET.Models;
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text;
using ZstdSharp.Unsafe;

namespace backed_.NET.Services
{
    public class InvoiceService : IInvoiceService
    {

        private readonly HttpClient _httpClient;

        public InvoiceService(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        public async Task<InvoiceDTO?> GenerateInvoice(InvoiceDTO invoice)
        {
            var jsonContent = JsonSerializer.Serialize(invoice);
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            string javaServiceUrl = "http://localhost:8080/generateInvoice";

            HttpResponseMessage response = await _httpClient.PostAsync(javaServiceUrl, content);

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Error generating invoice: {response.StatusCode}");
            }

            string jsonResponse = await response.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<InvoiceDTO>(jsonResponse, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }

        public async Task<List<InvoiceDTO>> GetHistory(string username)
        {
            string javaServiceUrl = $"http://localhost:8080/gethistory/{username}";

            
            HttpResponseMessage response = await _httpClient.GetAsync(javaServiceUrl);

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Error fetching history: {response.StatusCode}");
            }

            // Deserialize JSON response
            string jsonResponse = await response.Content.ReadAsStringAsync();
            var invoices = JsonSerializer.Deserialize<List<InvoiceDTO>>(jsonResponse, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return invoices ?? new List<InvoiceDTO>();
        }


















        //public  async Task<Invoicedto> GenerateInvoice(Invoicedto invoice)
        //{
        //    var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == invoice.Username);

        //    if (user == null)
        //    {
        //        throw new Exception("User not found");
        //    }

        //    var userDTO = new Userdto
        //    {
        //        UserName = user.Username,
        //        CompanyName = user.CompanyName,
        //        Email = user.Email,
        //        GstNumber = user.GstNumber,
        //        ContactNumber = user.ContactNumber
        //    };

        //    var existingUser = await _context.Userdtos.SingleOrDefaultAsync(u => u.UserName == invoice.Username);

        //    if(existingUser == null)
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    else
        //    {
        //        userDTO = existingUser;
        //    }

        //    invoice.Username = invoice.Username;
        //    invoice.UserName1 = invoice.UserName1;
        //    invoice.UserName1Navigation = userDTO;
        //    invoice.InvoiceNumber = invoice.InvoiceNumber;
        //    invoice.Manufacturer = invoice.Manufacturer;
        //    invoice.ModelName = invoice.ModelName;
        //    invoice.Segment = invoice.Segment;
        //    invoice.BasePrice = invoice.BasePrice;
        //    invoice.Tax = invoice.Tax;
        //    invoice.Quantity = invoice.Quantity;
        //    invoice.TotalPrice = invoice.TotalPrice;
        //    invoice.FinalTotalPrice = invoice.FinalTotalPrice;

        //    await _context.Invoicedtos.AddAsync(invoice);
        //    await _context.SaveChangesAsync();

        //    if (invoice.Components != null && invoice.Components.Any())
        //    {
        //        var invoiceComponents = invoice.Components.Select(component => new InvoicedtoComponent
        //        {
        //            InvoicedtoId = invoice.Id,  
        //            Components = component.Components 
        //        }).ToList();

        //        await _context.InvoicedtoComponents.AddRangeAsync(invoiceComponents);
        //        await _context.SaveChangesAsync(); 
        //    }

        //    return invoice;
        //}

        //public async Task<List<Invoicedto>> GetHistory(string username)
        //{
        //    return await _context.Invoicedtos.Include(i => i.Components).Where(i => i.Username == username).OrderByDescending(i => i.Id).ToListAsync();
        //}
    }
}
