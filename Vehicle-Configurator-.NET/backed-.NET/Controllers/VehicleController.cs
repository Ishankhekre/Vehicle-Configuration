using backed_.NET.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    //[Route("api/vehicle")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleService _vehicleService;

        public VehicleController(IVehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }


        [HttpGet("api/vehicle/vehicleBymodelId/{modelid}")]
        public async Task<IActionResult> GetByModelId(int modelid)
        {
            var vehicles = await _vehicleService.GetByModelId(modelid);  
            if (vehicles == null || vehicles.Count == 0)
            {
                return NotFound(new { message = "No vehicles found for the given model ID." });  
            }

            return Ok(vehicles); 
        }
    }
}
