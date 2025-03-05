using backed_.NET.Models;
using backed_.NET.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Controllers
{
    //[Route("api/segment")]
    //[Authorize]
    [ApiController]
    public class SegmentController : ControllerBase
    {
        private readonly ISegmentService _segmentService;

        public SegmentController (ISegmentService segmentService)
        {
            _segmentService = segmentService;
        }

        [HttpGet("api/segment/segments")]
        public async Task<IEnumerable<Segment>> GetAll()
        {
            
            return await _segmentService.GetAll();
        }

       
    }
}
