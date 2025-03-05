using backed_.NET.Models;

namespace backed_.NET.Services
{
    public interface IModelService
    {
        Task<IEnumerable<Model>> FindBySegIdAndMfgId(int segid, int mfgid);
    }
}
