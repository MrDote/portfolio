import React, { useState, useLayoutEffect } from 'react'

const Sidebar = ({isOut, setIsOut}: {isOut: boolean, setIsOut: () => void}) => {

  // custom hook to track window width
  function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  // initialize width
  const [width] = useWindowSize();
  // close sidebar if too wide
  useLayoutEffect(() => {
    if (width > 768 && isOut) setIsOut();
  }, [width]);

  return (
    <div 
    className={`transition-all duration-500 ease-in-out fixed right-0 top-0 w-full h-screen -z-10 md:hidden
    ${isOut ? `bg-black/60` : ``}
    `}>
        <div className={`fixed right-0 top-0 w-8/12 sm:w-7/12 md:w-5/12 lg:w-1/3 h-screen p-10 transition-all ease-in-out duration-500
        ${isOut ? `bg-slate-50` : ``}
        `}>
            <div>
                
            </div>
        </div>
    </div>
  );
}

export default Sidebar