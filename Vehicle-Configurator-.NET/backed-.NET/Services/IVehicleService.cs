namespace backed_.NET.Services
{
    public interface IVehicleService
    {
        Task<List<Dictionary<String, Object>>?> GetByModelId(int modelid);
    }
}
