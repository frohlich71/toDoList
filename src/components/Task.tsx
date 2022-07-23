import {Trash} from 'phosphor-react'
import { useState } from 'react';

interface TaskProps {
  id?: number;
  content: string;
  status: boolean;
  taskList: {
    id: number;
    content: string;
    status: boolean;
  }[];
  handleTasksStatus: (id:number) => void;
  handleDeleteTasks: (idToDelete:number, statusToDelete:boolean) => void;


}

export function Task ({id, status, content, handleTasksStatus, handleDeleteTasks}: TaskProps) {
  return (
    <div id={`task_${id}`} className='pt-6 flex w-[46rem] h-24 outline outline-[#262626] shadow-md shadow-black rounded-lg pl-6 text-ellipsis overflow-scroll mb-6'>
      <input name='TaskCheckbox' type="checkbox" onClick={() => handleTasksStatus(id!)} className="rounded-full bg-transparent w-6 h-6 absolute shadow-lg hover:bg-[#262626]" defaultChecked={status}/>
      <div className='w-[37rem] content-center'>
      <div className={`text-white pl-20 text-left font-normal ${status ? 'line-through text-[#333333]' : ' '}`}>{content}</div>
      </div>
      <Trash  color='#E25858' size='22'  onClick={() => handleDeleteTasks(id!, status!)} className='text-zinc-600 absolute ml-[40rem] shadow hover:shadow-red-900 hover:shadow-inner'/>
    </div>
  )
}