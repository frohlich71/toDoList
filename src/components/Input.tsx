export function Input () {
  return (
      <form>
        <input type="text" id="task" name="task" placeholder="Adicione uma nova tarefa" className="bg-[#262626] shadow-md shadow-black w-110 h-14 p-3 rounded-xl outline outline-2 outline-[#0D0D0D] text-white  "/>
        <button type="button" className="bg-[#1E6F9F] w-16 h-14 rounded-xl ml-3 text-white shadow-md shadow-black outline outline-1 outline-[#0D0D0D]">Criar</button>
      </form>
  )
}