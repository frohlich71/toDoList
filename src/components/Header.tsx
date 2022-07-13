import toDoLogo from '../assets/Logo.svg'
import '../index.css'

export function Header () {
  return(
    <header className="bg-[#0D0D0D] h-48 justify-center flex"> 
      <img src={toDoLogo} alt='Logo do to do list' className='absolute top-16'/>
    </header>
  )
}