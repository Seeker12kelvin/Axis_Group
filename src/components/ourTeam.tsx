import Button from './button'
import { useContext, useState } from 'react'
import office from '../images/team-pic.avif'
import litOffice from '../images/team-lit-pic.avif'
import UserContext from './userContext'

const OurTeam = () => {

  const [image, setImages] = useState(office)

  const context = useContext(UserContext)
  if(!context) return 
  const { teamSectionRef } = context

  const onEnter = () => {
    setImages(litOffice)
  }

  const onLeave = () => {
    setImages(office)
  }

  return (
    <section ref={teamSectionRef} className='bg-[#e1e7f73b] w-full h-fit min-[767px]:py-30 min-[767px]:px-10 max-md:py-20 flex max-md:flex-col max-md:gap-10 min-[767px]:gap-30 items-center justify-center'>

      <div className='h-full flex flex-col gap-7 max-md:items-center max-md:text-center max-[1000px]:gap-5'>

        <h2 className='uppercase text-4xl font-medium'>Our Team</h2>

        <p className='text-lg font-extralight w-full max-md:max-w-70 max-md:text-sm max-[1000px]:text-sm min-[767px]:max-w-110 tracking-wide max-[1000px]:leading-6'>
          I'm a paragraph. Click here to add your own text and
          edit me. I’m a great place for you to tell a story and let
          your users know a little
          more about you.
        </p>

        <Button text="Read More" />

      </div>

      <div className='relative h-full'>

        <img onMouseEnter={onEnter} onMouseLeave={onLeave} src={image} alt="office" className=' h-62.5 object-cover'/>

      </div>

    </section>
  )
}

export default OurTeam