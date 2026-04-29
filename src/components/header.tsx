import { useContext, type JSX } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import UserContext from './userContext';

const Header = (): JSX.Element | null | undefined => {

  const navbarItems = ["Home", "About", "Services", "Plans", "News & Updates", "Financial Tools", "More", "Login"]

  const context = useContext(UserContext)
  if(!context) return 
  const { setMenuBtn } = context

  const handleMenu = (): void => {
    setMenuBtn(true)
  }

  return (
    <header className='flex min-[1000px]:justify-around max-[1000px]:justify-between items-center w-full gap-20 min-[940px]:p-5 max-[940px]:px-3 max-[940px]:py-5 fixed top-0 bg-white z-10'>

      <p className='text-2xl max-[940px]:w-full'>Axis<span style={{color: 'rgba(0, 0, 255, 0.456)'}}>Group</span></p>
      
      <nav className='text-sm max-md:hidden max-[940px]:w-full'>
        
        <ul className='w-full h-full flex gap-7 max-[940px]:text-xs text-center'>
          {navbarItems.map((data: string, index: number) => (
            <li key={index}>
              <a href="#" className={`${index < navbarItems.length - 2 ? 'font-light' : 'font-semibold'}`}>{data}</a>
            </li>
          ))}
        </ul>
        
      </nav>

      <button onClick={(): void => handleMenu()} className='md:hidden'>
        <MdOutlineMenu size={34} />
      </button>

    </header>
  )
}

export default Header