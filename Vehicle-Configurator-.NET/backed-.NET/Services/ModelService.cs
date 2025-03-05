using backed_.NET.Models;
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Services
{
    public class ModelService : IModelService
    {
        private readonly VconfigDbContext _context;

        public ModelService(VconfigDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Model>> FindBySegIdAndMfgId(int segid, int mfgid)
        {
            return await _context.Models
                .Where(m => m.SegId == segid && m.MfgId == mfgid)
                .Include(m => m.Mfg)
                .Include(s => s.Seg)
                .ToListAsync();
        }
    }
}
