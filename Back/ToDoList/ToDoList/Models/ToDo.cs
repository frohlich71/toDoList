using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class ToDo
    {
        [Key]
        public int Id_Usuario { get; set; }
        public int Id_Task { get; set; }
        public string Title { get; set; }
        public bool Done { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;


        public ToDo()
        {
        }

    }
}

