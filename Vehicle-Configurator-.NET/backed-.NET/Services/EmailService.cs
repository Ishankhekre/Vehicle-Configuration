
using System.Net.Mail;
using System.Net;

namespace backed_.NET.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
        {
            _configuration = configuration;
            _logger = logger;

        }

        public async Task SendEmail(string email, string companyName)
        {
            string smtpServer = _configuration["Email:SmtpServer"];
            int port = int.Parse(_configuration["Email:Port"]);
            string username = _configuration["Email:Username"];
            string password = _configuration["Email:Password"];
            string fromEmail = _configuration["Email:From"];

            string templatePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "EmailTemplates", "WelcomeEmailTemplate.html");
            string body = await File.ReadAllTextAsync(templatePath);

            // Replace placeholders
            body = body.Replace("{{companyName}}", companyName)
                       .Replace("{{email}}", email);

            MailMessage mail = new MailMessage
            {
                From = new MailAddress(fromEmail),
                Subject = "Welcome to VConfig!",
                Body = body,
                IsBodyHtml = true
            };
            mail.To.Add(email);

            using (SmtpClient smtp = new SmtpClient(smtpServer, port))
            {
                smtp.Credentials = new NetworkCredential(username, password);
                smtp.EnableSsl = true;
                await smtp.SendMailAsync(mail);
            }
        }
    }
}
