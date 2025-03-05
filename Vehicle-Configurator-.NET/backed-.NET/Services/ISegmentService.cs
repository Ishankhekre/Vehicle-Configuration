

using backed_.NET.Models;

namespace backed_.NET.Services
{
    public interface ISegmentService
    {
        Task<IEnumerable<Segment>> GetAll();
    }
}
