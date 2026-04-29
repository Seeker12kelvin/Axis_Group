import Button from './button'
import stats from '../images/round-services.avif'
import litStats from '../images/round-lit-services.avif'
import { useContext, useState } from 'react'
import UserContext from './userContext'

const OurServices = () => {

  const [image, setImages] = useState(stats)

  const context = useContext(UserContext)
  if(!context) return 
  const { serviceSectionRef } = context

  const onEnter = () => {
    setImages(litStats)
  }

  const onLeave = () => {
    setImages(stats)
  }

  return (
    <section ref={serviceSectionRef} className='w-full h-fit min-[767px]:py-30 min-[767px]:px-10 max-md:py-20 flex max-md:flex-col max-md:gap-10 min-[767px]:gap-50 items-center justify-center'>

      <div className='h-full'>

        <img onMouseEnter={onEnter} onMouseLeave={onLeave} src={image} alt="Stats" className='h-62.5 object-cover'/>

      </div>

      <div className='h-full flex flex-col gap-7 max-md:items-center max-md:text-center max-[1000px]:gap-5'>

        <h2 className='uppercase text-4xl font-bold'>Our Services</h2>

        <p className='text-lg font-extralight w-full max-md:max-w-70 max-md:text-sm max-[1000px]:text-sm min-[767px]:max-w-110 tracking-widest max-[1000px]:leading-6'>
          I'm a paragraph. Click here to add your own text and edit me. 
          I’m a great place for you to tell a story and let your users know a little more about you.
        </p>

        <Button text="Read More" />

      </div>

    </section>
  )
}

export default OurServices