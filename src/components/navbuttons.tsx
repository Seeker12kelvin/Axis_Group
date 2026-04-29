const Navbuttons = () => {
  
  return (
    <div className='fixed h-screen z-60 right-10 top-0 flex flex-col justify-center gap-4'>

      {Array(4).fill(0).map((_, index) => (
        <button key={index} className='w-5 h-5 border rounded-full bg-[#e1e7f73b] backdrop-blur-3xl'>

        </button>
      ))}

    </div>
  )
}

export default Navbuttons