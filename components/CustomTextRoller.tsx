import React from 'react'

const CustomTextRoller = () => {
  return (
    <>
        <h2>"</h2>
        <div className='relative'>
            <div className="flex flex-col text-center h-60 justify-end py-1
                before:bg-[color:var(--primary-bg-color)] before:w-full before:h-[8.5em] before:absolute before:top-0 before:z-10
                after:bg-[color:var(--primary-bg-color)] after:w-full after:h-[4.3em] after:absolute after:bottom-0 after:z-10
                sm:before:h-[7.5em]
                sm:after:h-[5.0em]
            ">
                {/* [color:var(--primary-bg-color)] */}
                <h2 className='relative animate-move'>Hello, I'm Anton</h2>
                <h2 className='relative animate-move'>A Front-End Developer</h2>
                <h2 className='relative animate-move'>Keep Scrolling!</h2>
            </div>
        </div>
        <h2>"</h2>
    </>
  )
}

export default CustomTextRoller;