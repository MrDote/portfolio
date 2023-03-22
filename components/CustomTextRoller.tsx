const CustomTextRoller = () => {
  return (
    <div className="flex -z-10">
        <h2 className="mr-2 mt-32 sm:mt-28">&lt;</h2>
        <div className='relative select-none bg-bg-light'>
            <div className="flex flex-col text-center h-60 justify-end py-1
                before:bg-bg-light dark:before:bg-bg-dark before:w-[101%] before:h-[8.5em] before:absolute before:top-0 before:z-10
                after:bg-bg-light dark:after:bg-bg-dark after:w-[101%] after:h-[4.3em] after:absolute after:bottom-0
                sm:before:h-[7.5em]
                sm:after:h-[5.0em]
            ">
                <h2 className='relative animate-move'>Hello, I'm <span className="text-red-light dark:text-red-dark">Anton</span></h2>
                <h2 className='relative animate-move'>A Front-End Developer</h2>
                <h2 className='relative animate-move'>Welcome!</h2>
            </div>
        </div>
        <h2 className="ml-2 mt-32 sm:mt-28">&gt;</h2>
    </div>
  )
}

export default CustomTextRoller;