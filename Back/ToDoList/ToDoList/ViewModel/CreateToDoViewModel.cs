using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.ViewModel
{
    public class CreateToDoViewModel
    {
        [Required]
        public string Title { get; set; }
    }
}

