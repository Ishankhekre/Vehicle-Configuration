
using backed_.NET.Repository;
using Microsoft.EntityFrameworkCore;

namespace backed_.NET.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly VconfigDbContext _context;

        public VehicleService(VconfigDbContext context)
        {
            _context = context;
        }

        public async Task<List<Dictionary<string, object>>?> GetByModelId(int modelId)
        {
            var vehicles = await _context.Vehicles
                .Where(v => v.ModelId == modelId)
                .Select(v => new Dictionary<string, object>
                {
                { "is_configrable", v.IsConfigrable.ToString() },  // Convert Enum to String
                { "comp_name", v.Comp.CompName }, 
                { "confi_id", v.ConfiId },
                { "comp_type", v.CompType.ToString() },  
                { "model_id", v.ModelId },
                { "comp_id", v.CompId }
                })
                .ToListAsync(); 

            return vehicles.Any() ? vehicles : null;  
        }
    }
}
