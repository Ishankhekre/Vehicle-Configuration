using backed_.NET.Models;
using backed_.NET.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class ManufacturerController : ControllerBase
    {
        private readonly IManufacturerService _manufacturerService;

        public ManufacturerController(IManufacturerService manufacturerService)
        {
            this._manufacturerService = manufacturerService;
        }

        [HttpGet("manufacturerBysegId/{segid}")]
        public async Task<ActionResult<IEnumerable<Manufacturer>>> getManufacturer(int segid) {
            var manufacturers = await _manufacturerService.GetManufacturerListBySegId(segid);
            return Ok(manufacturers);
        }
    }
}
