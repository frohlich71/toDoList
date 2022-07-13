export function Input () {
  return (
    <div className="justify-center flex">
      <form>
        <input type="text" id="task" name="task" placeholder="Adicione uma nova tarefa" className="bg-[#262626] shadow-md shadow-black w-110 h-14 p-3 rounded-xl outline outline-2 outline-[#0D0D0D] text-white  "/>
        <button>Criar</button>
      </form>
    </div>
  )
}