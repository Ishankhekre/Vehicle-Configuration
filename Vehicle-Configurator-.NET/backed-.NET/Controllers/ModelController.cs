using backed_.NET.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    [Route("api/model")]
    [ApiController]
    public class ModelController : ControllerBase
    {

        private readonly IModelService _modelService;

        public ModelController(IModelService modelService)
        {
            _modelService = modelService;
        }

        // GET: api/model/modelBySegIdAndMfgId/{segid}/{mfgid}
        [HttpGet("modelBySegIdAndMfgId/{segid}/{mfgid}")]
        public async Task<IActionResult> GetModelBySegIdAndMfgId(int segid, int mfgid)
        {
            var models = await _modelService.FindBySegIdAndMfgId(segid, mfgid);
            if (models == null || !models.Any())
            {
                return NotFound("No models found for the given segment and manufacturer.");
            }
            return Ok(models);
        }
    }
}
