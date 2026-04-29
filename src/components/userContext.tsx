import { createContext, type RefObject } from "react";

export interface UserContextType {
  // displayProgress: number
  // setDisplayProgress: React.Dispatch<React.SetStateAction<number>>
  // opacity: number,
  // modal: boolean,
  // setModal: React.Dispatch<React.SetStateAction<boolean>>,
  // selectedImage: string | undefined,
  // setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  // payUp: (image: string | undefined) => void,
  // contactModal: boolean,
  // setContactModal: React.Dispatch<React.SetStateAction<boolean>>,
  setMenuBtn: React.Dispatch<React.SetStateAction<boolean>>,
  sectionRef: RefObject<HTMLElement | null>,
  handleScrolling: () => void,
  menuBtn: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export default UserContext