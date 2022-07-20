import { List } from "phosphor-react"
import { useState } from "react"
import { Task } from "./Task"

interface TaskListProps {
  taskList: {
    id: number;
    content: string;
    status: boolean;
  }[];
}


export function TaskList ({taskList}:TaskListProps) {
  return(
    <div>
      {taskList.map(task => {
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