using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt;
using BCrypt.Net;
using backed_.NET.Models;
using backed_.NET.Repository;

namespace backed_.NET.Services
{
    public class UserService : IUserService
    {

        private readonly VconfigDbContext _context;
        private readonly IEmailService _emailService;


        public UserService(VconfigDbContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public async Task<User?> addUser(User user)
        {
            if (await _context.Users.AnyAsync(u => u.Username == user.Username))
            {
                return null;   // username already exists
            }

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

           

            await _emailService.SendEmail(user.Email,user.CompanyName);
            return user;
        }

        public Task<User> getUserByUsername(string username)
        {
            return _context.Users.SingleOrDefaultAsync(x => x.Username == username);
        }


        public async Task<User> validateUser(string username, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return null;
            }
            return user;
        }


    }
}
