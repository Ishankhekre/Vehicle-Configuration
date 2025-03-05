using backed_.NET.Models;
using backed_.NET.Repository;

namespace backed_.NET.Services
{
    public interface IAlternateComponentService
    {
        Task<IEnumerable<AlternateComponent>> getByModelIdandCompId( int comp_id, int model_id);
    }
}
