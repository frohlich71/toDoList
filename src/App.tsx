import { EmptyList } from "./components/EmptyList"
import { Task } from "./components/Task"
import { TaskList } from "./components/TaskList"
import toDoLogo from './assets/Logo.svg'
import { FormEvent, useState } from "react"


export function App () {

   

  const [tasks, setTasks] = useState([
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
  ])


  function handleCreateNewTask() {
    const taskInput = document.getElementsByName('content')
    const taskContent = (taskInput[0] as HTMLInputElement).value

    console.log(tasks)
    setTasks([...tasks,{ id: tasks.length + 1, content: taskContent, status:false }])
  } 

  return (
    <div className="relative">
      <header className="bg-[#0D0D0D] h-48 justify-center flex"> 
      <img src={toDoLogo} alt='Logo do to do list' className='absolute top-16'/>
      </header>
      <div className="justify-center flex mt-[-2rem]  relative">
      <form>
        <input type="text" id="content" name="content" placeholder="Adicione uma nova tarefa" className="bg-[#262626] shadow-md shadow-black w-110 h-14 p-3 rounded-xl outline outline-2 outline-[#0D0D0D] text-white  "/>
        <button type="button" onClick={handleCreateNewTask} className="bg-[#1E6F9F] w-16 h-14 rounded-xl ml-3 text-white shadow-md shadow-black outline outline-1 outline-[#0D0D0D]">Criar</button>
      </form>
      </div>

      <main className="justify-center flex relative">
      <article>
        <header className="inline-flex mt-24 mb-10">
          <div className="mr-[28rem] text-[#4EA8DE] font-bold">
            Tarefas criadas
            <span className="bg-[#333333] text-white rounded-full p-1 pl-3 pr-3 ml-2">
              0
            </span>
          </div>
          <div className="text-[#8284FA] justify-end flex font-bold">
            Concluidas
            <span className="bg-[#333333] text-white rounded-full  pl-3 pr-3 ml-2">
              0
            </span>
          </div>
        </header>
       <TaskList taskList={tasks}/>
      </article>
      </main>
    </div>
  )
}

export default App