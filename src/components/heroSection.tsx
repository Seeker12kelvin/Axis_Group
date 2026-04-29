import { useContext, type JSX } from 'react'
import background from '../images/download1.png'
import UserContext from './userContext'

const HeroSection = (): JSX.Element | null | undefined => {

  const context = useContext(UserContext)
  if(!context) return 
  const { handleScrolling } = context

  return (
    <section style={{backgroundImage: `url(${background})`}} className='w-full max-[768px]:h-screen md:h-[75vh] md:mt-18 bg-cover bg-fixed'>

      {/* <div className='' /> */}

      <div className='flex flex-col gap-5 w-full h-full text-white justify-center items-center'>

        <h1 className='md:text-[6.25rem] max-[768px]:text-7xl font-bold max-[768px]:leading-20 max-[550px]:leading-10 md:leading-25 max-[550px]:text-6xl max-[460px]:text-5xl'>The Axis Group</h1>

        <p className='md:text-3xl max-[768px]:text-lg max-[460px]:text-base font-bold'>Financial Consulting. Let Us Do the Math</p>

        <button onClick={(): void => handleScrolling()} className='bg-[#C63F60] text-white max-[768px]:max-w-35 max-w-50 w-full py-3.5 px-4.5 hover:bg-[#273B7B] transition-all duration-300 cursor-pointer'>Get Started</button>
        
      </div>

    </section>
  )
}

export default HeroSection