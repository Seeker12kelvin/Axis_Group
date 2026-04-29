import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useContext, useRef, type JSX } from "react"
import { IoCloseSharp } from "react-icons/io5";
import UserContext from './userContext';

const Menu = (): JSX.Element | null | undefined => {

  const navbarItems = ["Home", "About", "More", "Login", "Plans", "Services", "News & Updates", "Financial Tools"]
  const menuBarRef = useRef<HTMLElement | null>(null)
  
  useGSAP(() => {
    gsap.fromTo(menuBarRef.current, {xPercent: 100}, {xPercent: 0, duration: 0.5, ease: "power2.out"})
  }, [])

  const context = useContext(UserContext)
  if(!context) return 
  const { setMenuBtn } = context

  const handleMenu = (): void => {
    const tl = gsap.timeline()
    tl
    .fromTo(menuBarRef.current, {xPercent: 0}, {xPercent: 100, duration: 0.5, ease: "power2.out"})
    .call((): void => {
      setMenuBtn(false)
    })
  }

  return (
    <aside ref={menuBarRef} className="w-screen h-screen bg-[#e1e7f73b] backdrop-blur-3xl fixed top-0 left-0 z-50 flex flex-col items-center gap-10 p-20">
      
      <button onClick={(): void =>handleMenu()}>
        <IoCloseSharp size={54} className='cursor-pointer' />
      </button>
      
      <nav className="w-full h-full">

        <ul className='w-full h-full flex flex-col gap-7 text-xl items-center tracking-widest'>
          {navbarItems.map((data: string, index: number) => (
            <li key={index}>
              <a href="#" className={`${index < navbarItems.length - 2 ? 'font-normal' : 'font-normal'} border-b border-gray-50`}>{data}</a>
            </li>
          ))}
        </ul>

      </nav>

    </aside>
  )
}

export default Menu