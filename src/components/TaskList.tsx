import { List } from "phosphor-react"
import { useState } from "react"
import { Task } from "./Task"

interface TaskListProps {
  taskList: {
    id: number;
    content: string;
    status: boolean;
  }[];
  handleTasksStatus: (id:number) => void;
  handleDeleteTasks: (idToDelete:number, statusToDelete:boolean) => void;
}


export function TaskList ({taskList, handleTasksStatus, handleDeleteTasks}:TaskListProps) {
  return(
    <div>
      {taskList.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}
              status={task.status}
              content ={task.content}
              taskList={taskList}
              handleTasksStatus={handleTasksStatus}
              handleDeleteTasks={handleDeleteTasks}
            />
          )
      })}
    </div>
  )
}