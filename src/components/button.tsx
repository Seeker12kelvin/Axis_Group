type Props = {
  text: string
}

const Button = ({text}: Props) => {
  return (
    <button className='max-w-40 w-full p-3 bg-[#C63F60] hover:text-[#C63F60] hover:bg-transparent border-2 hover:border-[#C63F60] text-white font-bold duration-300 transition-all'>{text}</button>
  )
}

export default Button