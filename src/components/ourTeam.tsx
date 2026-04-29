import Button from './button'
import { useState } from 'react'
import office from '../images/team-pic.avif'
import litOffice from '../images/team-lit-pic.avif'

const OurTeam = () => {

  const [image, setImages] = useState(office)

  const onEnter = () => {
    setImages(litOffice)
  }

  const onLeave = () => {
    setImages(office)
  }

  return (
    <section className='bg-[#e1e7f73b] w-full h-fit md:py-30 max-md:py-20 flex max-md:flex-col max-md:gap-10 md:gap-50 items-center justify-center'>

      <div className='h-full flex flex-col gap-7 max-md:items-center max-md:text-center'>

        <h2 className='uppercase text-4xl font-bold'>Our Team</h2>

        <p className='text-lg font-extralight w-full max-md:max-w-70 max-md:text-sm md:max-w-110 tracking-widest '>
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