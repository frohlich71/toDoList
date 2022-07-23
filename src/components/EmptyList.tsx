import clipBoard from "../assets/Clipboard.svg"


export function EmptyList() {
  return(
    <div className="shadow-4zl relative rounded-xl mt-6">
        <div className="pt-14 pl-52">
        <img src={clipBoard} alt="Imagem de um bloco de notas" className="ml-[7.5rem] mb-5" />
        <strong className="text-[#808080]">Você ainda não tem tarefas cadastradas</strong>
        <p className="text-[#808080] text-sm pl-7 pt-1">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}