using backed_.NET.DTO;
using backed_.NET.Models;

namespace backed_.NET.Services
{
    public interface IInvoiceService
    {
        Task<InvoiceDTO?> GenerateInvoice(InvoiceDTO invoice);
        Task<List<InvoiceDTO>> GetHistory(string username);
    }

}
