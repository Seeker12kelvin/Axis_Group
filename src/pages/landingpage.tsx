import { useContext, type JSX } from 'react'
import Header from '../components/header'
import HeroSection from '../components/heroSection'
import OurServices from '../components/ourServices'
import OurTeam from '../components/ourTeam'
import Menu from '../components/menu'
import UserContext from '../components/userContext'

const Landingpage = (): JSX.Element | null | undefined => {

  const context = useContext(UserContext)
  if(!context) return 
  const { menuBtn } = context

  return (
    <main className='w-full h-full'>

      <Header />

      {menuBtn && <Menu />}

      <HeroSection />

      <OurServices />

      <OurTeam />

    </main>
  )
}

export default Landingpage