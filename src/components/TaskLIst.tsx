import { Task } from "./Task"

const tasks = [
  {
    id: 1,
    status: false,
    content: 'Fazer comida'

  },
  {
    id: 2,
    content: 'Estudar 3 horas',
    status: true
  }
]

export function TaskList () {
  return(
    <div>
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            content ={task.content}
            status = {task.status}
          />
        )
      })}
    </div>
  )
}