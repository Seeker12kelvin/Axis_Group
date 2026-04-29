import { useRef, useState, type JSX } from "react"
import UserContext from "./components/userContext"
import Landingpage from "./pages/landingpage"


function App(): JSX.Element {

  const [menuBtn, setMenuBtn] = useState<boolean>(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const handleScrolling = (): void => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <UserContext.Provider value={{ menuBtn, setMenuBtn, sectionRef, handleScrolling }}>
      <Landingpage />
    </UserContext.Provider>
  )
}

export default App
