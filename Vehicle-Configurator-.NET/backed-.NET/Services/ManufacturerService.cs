using backed_.NET.Models;
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Services
{
    public class ManufacturerService :IManufacturerService
    {
        private  VconfigDbContext _dbContext;

        public ManufacturerService(VconfigDbContext dbContext)
        {
            this._dbContext = dbContext;     
        }

        public async Task<IEnumerable<Manufacturer>> GetManufacturerListBySegId(int segid)
        {
            return await _dbContext.Manufacturers.Where(m => m.SegId == segid).Include(m => m.Seg).ToListAsync<Manufacturer>();
        }

        
    }
}
