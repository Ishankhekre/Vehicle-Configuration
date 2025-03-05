using backed_.NET.Models;
using Microsoft.AspNetCore.Mvc;

namespace backed_.NET.Services
{
    public interface IUserService
    {
        Task<User?> addUser(User user);
        Task<User> validateUser(string username, string password);
        Task<User> getUserByUsername(string username);

    }
}
