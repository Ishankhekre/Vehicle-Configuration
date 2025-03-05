using backed_.NET.Models;
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;


namespace backed_.NET.Services
{
    public class SegmentService : ISegmentService
    {

        private readonly VconfigDbContext _context;

        public SegmentService(VconfigDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Segment>> GetAll()
        {
            return await _context.Segments.ToListAsync();
        }
    }
}
