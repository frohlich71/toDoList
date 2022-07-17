import { Task } from "./Task";
import clipBoard from "../assets/Clipboard.svg"

export function TaskList () {
  return (
    <article>
      <header className="inline-flex mt-24">
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

      <div className="shadow-4zl relative rounded-xl mt-6">
        <div className="pt-14 pl-52">
        <img src={clipBoard} alt="Imagem de um bloco de notas" className="ml-[7.5rem] mb-5" />
        <strong className="text-[#808080]">Você ainda não tem tarefas cadastradas</strong>
        <p className="text-[#808080] text-sm pl-7 pt-1">Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </article>
  )
}