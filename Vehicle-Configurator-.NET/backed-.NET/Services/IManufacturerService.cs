

using backed_.NET.Models;

namespace backed_.NET.Services
{
    public interface IManufacturerService
    {

       Task<IEnumerable<Manufacturer>> GetManufacturerListBySegId(int segid);



    }
}
