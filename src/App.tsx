import { EmptyList } from "./components/EmptyList"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Task } from "./components/Task"
import { TaskList } from "./components/TaskLIst"

export function App () {
  return (
    <div className="relative">
        <Header/>
      <div className="justify-center flex mt-[-2rem]  relative">
        <Input/>
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
       <TaskList />
      </article>
      </main>
    </div>
  )
}

export default App