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
    </article>
  )
}