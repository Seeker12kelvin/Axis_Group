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
    <header className='flex md:justify-center max-md:justify-around items-center w-full gap-20 md:p-5 max-md:p-5 fixed top-0 bg-white z-10'>

      <p className='text-2xl'>Axis<span style={{color: 'rgba(0, 0, 255, 0.456)'}}>Group</span></p>
      
      <nav className='text-sm max-md:hidden'>
        
        <ul className='w-full h-full flex gap-7'>
          {navbarItems.map((data: string, index: number) => (
            <li key={index}>
              <a href="#" className={`${index < navbarItems.length - 2 ? 'font-light' : 'font-semibold'}`}>{data}</a>
            </li>
          ))}
        </ul>
        
      </nav>

      <button onClick={(): void => handleMenu()}>
        <MdOutlineMenu size={34} className='md:hidden' />
      </button>

    </header>
  )
}

export default Header