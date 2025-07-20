using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TokenValidationAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("protected")]
        [Authorize]
        public IActionResult GetProtectedData()
        {
            return Ok("This data is protected and requires a valid token.");
        }

        [HttpGet("public")]
        public IActionResult GetPublicData()
        {
            return Ok("This data is public and does not require authentication.");
        }
    }
}
