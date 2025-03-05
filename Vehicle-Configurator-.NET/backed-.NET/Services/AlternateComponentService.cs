using backed_.NET.Models;
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Services
{
    public class AlternateComponentService : IAlternateComponentService
    {
        private readonly VconfigDbContext dbContext;

        public AlternateComponentService(VconfigDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<AlternateComponent>> getByModelIdandCompId(int comp_id,int model_id)
        {
            return await dbContext.AlternateComponents.Where(m=> m.ModelId == model_id && m.CompId == comp_id)
                .Include(m => m.Model)
                .ThenInclude(m => m.Mfg)
                .ThenInclude(m => m.Seg)
                .Include(m => m.Comp)
                .Include(a => a.AltComp)
                .ToListAsync();
        }
    }
}
