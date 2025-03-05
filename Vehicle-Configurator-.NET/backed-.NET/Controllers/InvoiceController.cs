using backed_.NET.DTO;
using backed_.NET.Models;
using backed_.NET.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpGet("/gethistory/{username}")]
        public async Task<IActionResult> GetInvoicesByUsername(string username)
        {
            try
            {
                var invoices = await _invoiceService.GetHistory(username);
                if (invoices == null || invoices.Count == 0)
                {
                    return NotFound("No invoices found for this user.");
                }
                return Ok(invoices);
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error fetching history: {ex.Message}");
            }
        }


        [HttpPost("generateInvoice")]
        public async Task<ActionResult<InvoiceDTO>> GenerateInvoice([FromBody] InvoiceDTO invoice)
        {
            try
            {
                var response = await _invoiceService.GenerateInvoice(invoice);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

    }
}
