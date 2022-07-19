import {Trash} from 'phosphor-react'

export function Task () {
  return (
    <div className='pt-6 flex w-[46rem] h-24 outline outline-[#262626] shadow-md shadow-black rounded-lg pl-6 text-ellipsis overflow-scroll'>
      <input type="checkbox" className="rounded-full bg-transparent w-6 h-6 absolute shadow-lg" />
      <div className='w-[37rem] content-center'>
      <div className="text-white pl-20 text-left font-normal shadow">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
      </div>
      <Trash  size='22' className='text-zinc-600 absolute ml-[40rem] shadow'/>
    </div>
  )
}