import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { TaskList } from "./components/TaskList"

export function App () {
  return (
    <div className="relative">
        <Header/>
      <div className="justify-center flex mt-[-2rem]  relative">
        <Input/>
      </div>

      <main className="justify-center flex relative">
        <TaskList />
      </main>

    </div>
  )
}

export default App