namespace backed_.NET.Services
{
    public interface IEmailService
    {
        Task SendEmail(string email, string companyName);
    }
}
