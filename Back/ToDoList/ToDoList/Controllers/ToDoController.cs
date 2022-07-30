using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Models;
using ToDoList.ViewModel;

namespace ToDoList.Controllers
{
    [EnableCors
        ]
    [ApiController]
    [Route("v1")]
    public class ToDoController : ControllerBase
    {
       
       [HttpGet]
       [Route("todos")]
     

       public async Task<IActionResult> GetToDosAsync([FromServices]AppDbContext context)
        {
            var todos = await context.ToDos.AsNoTracking().ToListAsync();
            return Ok(todos);
        }

        [HttpGet]
        [Route("todos/{idTask}")]
        public async Task<IActionResult> GetByTaskIdAsync([FromServices] AppDbContext context, [FromRoute]int idTask)
        {
            var todo = await context.ToDos.AsNoTracking().FirstOrDefaultAsync(x => x.Id_Task == idTask);
            return todo == null ? NotFound() : Ok(todo);
        }

        [HttpPost]
        [Route("todos")]
        public async Task<IActionResult> PostAsync([FromServices] AppDbContext context, [FromBody] CreateToDoViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var todo = new ToDo
            {
                CreatedAt = DateTime.Now,
                Done = false,
                Title = model.Title,
            };

            try
            {
                await context.ToDos.AddAsync(todo);
                await context.SaveChangesAsync();
                return Created($"v1/todos/{todo.Id_Task}", todo);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}

