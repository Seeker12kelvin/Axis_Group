import { useState, type JSX } from "react"
import UserContext from "./components/userContext"
import Landingpage from "./pages/landingpage"


function App(): JSX.Element {

  const [menuBtn, setMenuBtn] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ menuBtn, setMenuBtn }}>
      <Landingpage />
    </UserContext.Provider>
  )
}

export default App
