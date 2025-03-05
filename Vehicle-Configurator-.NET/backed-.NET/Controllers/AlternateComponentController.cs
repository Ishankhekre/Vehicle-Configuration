using backed_.NET.Models;
using backed_.NET.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    [Route("api/alternatecomponent")]
    [ApiController]
    public class AlternateComponentController : ControllerBase
    {
        private readonly IAlternateComponentService alternateComponentService;
        public AlternateComponentController(IAlternateComponentService alternateComponentService)
        {
            this.alternateComponentService = alternateComponentService;   
        }

        [HttpGet("/alternatecompBycomp_idAndmodelId/{comp_id}/{model_id}")]
        public async Task<ActionResult<IEnumerable<AlternateComponent>>> GetAlternateComponent(int comp_id, int model_id) { 
            var alternateComponent =await alternateComponentService.getByModelIdandCompId(comp_id,model_id);
            return Ok(alternateComponent);
        } 
    }
}
