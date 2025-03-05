using backed_.NET.Models;
using backed_.NET.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backed_.NET.DTO;
using backed_.NET.Exceptions;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace backed_.NET.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public IConfiguration _configuration;

        public UserController(IUserService userservice, IConfiguration configuration)
        {
            _userService = userservice;
            _configuration = configuration;
        }

        [HttpPost("signup")]
        public async Task<ActionResult<User>> registerCompany([FromBody] User user)
        {
            var createdUser = await _userService.addUser(user);
            if (createdUser == null)
            {
                return BadRequest("UserName Already Exists");
            }

            return CreatedAtAction(nameof(registerCompany), createdUser);

        }



        [HttpPost("login")]
        public async Task<ActionResult<Dictionary<string, string>>> login([FromBody] UserDto userdto)
        {
            var existingUser = await _userService.validateUser(userdto.Username, userdto.Password);
            if (existingUser != null)
            {
                var claims = new[] {
                 new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                 new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),

                 new Claim("username", userdto.Username),
         };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddMinutes(5), signingCredentials: signIn);

                var tokenResponse = new JwtSecurityTokenHandler().WriteToken(token);
                Dictionary<string, string> response = new Dictionary<string, string>();
                response.Add("token", tokenResponse);
                return Ok(response);
            }   
            return Unauthorized("Invalid UserName and Password");

        }

        [HttpGet("getuser/{username}")]
        public async Task<ActionResult<User>> GetUser(string username)
        {
            var user = await _userService.getUserByUsername(username);
            if (user == null)
            {
                throw new NotFound($"User with username '{username}' not found.");
            }

            return Ok(user);
        }




    }
}
