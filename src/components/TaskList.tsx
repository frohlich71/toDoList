import { List } from "phosphor-react"
import { useState } from "react"
import { Task } from "./Task"

interface TaskListProps {
  taskList: {
    id_Task?: number;
    title?: string;
    done?: boolean;
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
              key={task.id_Task}
              id_Task={task.id_Task}
              done={task.done}
              title ={task.title}
              taskList={taskList}
              handleTasksStatus={handleTasksStatus}
              handleDeleteTasks={handleDeleteTasks}
            />
          )
      })}
    </div>
  )
}