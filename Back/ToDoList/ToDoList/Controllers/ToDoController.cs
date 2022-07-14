using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [ApiController]
    [Route("v1")]
    public class ToDoController : ControllerBase
    {
       [HttpGet]
       [Route("todos")]
       public async Task<IActionResult> GetToDos([FromServices]AppDbContext context)
        {
            var todos = await context.ToDos.AsNoTracking().ToListAsync();
            return Ok(todos);
        }
    }
}

