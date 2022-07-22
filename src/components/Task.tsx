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
  handleTasksStatus: (id:number) => void

}

export function Task ({id, status, content, taskList, handleTasksStatus}: TaskProps) {
  return (
    <div id={`task_${id}`} className='pt-6 flex w-[46rem] h-24 outline outline-[#262626] shadow-md shadow-black rounded-lg pl-6 text-ellipsis overflow-scroll mb-6'>
      <input name='TaskCheckbox' type="checkbox" onClick={() => handleTasksStatus(id!)} className="rounded-full bg-transparent w-6 h-6 absolute shadow-lg" defaultChecked={status}/>
      <div className='w-[37rem] content-center'>
      <div className="text-white pl-20 text-left font-normal shadow">{content}</div>
      </div>
      <Trash  size='22' className='text-zinc-600 absolute ml-[40rem] shadow'/>
    </div>
  )
}