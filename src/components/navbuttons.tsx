import { useContext, useRef } from "react"
import UserContext from "./userContext"
import gsap from "gsap"

const Navbuttons = () => {

  const titleRef = useRef(null)
  const context = useContext(UserContext)
  if(!context) return 
  const { handleScrolling } = context

  const nav = ['Home', 'Services', 'Teams']

  const onEnter = (index: number): void => {
    gsap.to(`.char-${index}`, {opacity: 1, duration: 0.5})
  }

  const onLeave = (index: number): void => {
    gsap.to(`.char-${index}`, {opacity: 0, duration: 0.5})
  }
  
  return (
    <div className='fixed h-screen w-20 z-60 right-10 top-0 flex flex-col justify-center gap-4'>

      {Array(nav.length).fill(0).map((_, index) => (
        <div key={index} className="flex w-full justify-between items-center text-right relative mb-4">
          <p ref={titleRef} className={`opacity-0 text-[#3B58B8] font-light uppercase tracking-wider text-sm char-${index} absolute right-6`}>{nav[index]}</p>
          <button
            onMouseEnter={(): void => onEnter(index)}
            onMouseLeave={(): void => onLeave(index)}
            onClick={(): void => handleScrolling(index)} className='w-4 h-4 border-[#3B58B8] border-2 rounded-full bg-[#e1e7f73b backdrop-blur-3xl focus:bg-[#3B58B8] cursor-pointer absolute right-0'
          />
        </div>
      ))}

    </div>
  )
}

export default Navbuttons