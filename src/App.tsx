import Landingpage from "./pages/landingpage"
import { useRef, useState, type JSX } from "react"
import UserContext from "./components/userContext"


function App(): JSX.Element {

  const [menuBtn, setMenuBtn] = useState<boolean>(false)
  const serviceSectionRef = useRef<HTMLElement | null>(null)
  const teamSectionRef = useRef<HTMLElement | null>(null)
  const homeSectionRef = useRef<HTMLElement | null>(null)
  const nav = [homeSectionRef, serviceSectionRef, teamSectionRef]
  const handleScrolling = (index: number): void => {
    nav[index].current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <UserContext.Provider value={{ menuBtn, setMenuBtn, serviceSectionRef, teamSectionRef, homeSectionRef, handleScrolling }}>
      <Landingpage />
    </UserContext.Provider>
  )
}

export default App
