import { propsType } from './Navbar';

const CustomButton = ({isOut, setIsOut}: propsType) => {

    //* Disable page scrolling when sidebar is open (instead resolved by adding outside wrapper element)
    // useEffect(() => {
    //     if (isOut) {
    //         const x = window.scrollX;
    //         const y = window.scrollY;
    //         window.onscroll = () => window.scrollTo(x, y);
    //     }
    //     else window.onscroll = () => {};
    // }, [isOut]);

    return (
        <div 
        onClick={() => setIsOut(!isOut)}
        className={`md:hidden absolute flex justify-center items-center cursor-pointer w-20 h-20 box-border z-20 right-6 top-3`}>
            <div 
            className={`w-12 h-2 bg-slate-50 rounded-md shadow shadow-zinc-800 transition-all duration-500 ease-in-out
            before:absolute before:w-12 before:h-2 before:bg-bg-light before:rounded-md before:shadow before:shadow-zinc-800 before:transition-all before:duration-500 before:ease-in-out before:translate-y-[-1rem]
            after:absolute after:w-12 after:h-2 after:bg-bg-light after:rounded-md after:shadow after:shadow-zinc-800 after:transition-all after:duration-500 after:ease-in-out after:translate-y-4
            ${isOut ? `translate-x-[-3rem] bg-transparent shadow-none pointer-events-none
            before:rotate-45 before:translate-x-11 before:translate-y-0 before:w-16 before:bg-slate-800/90 dark:before:bg-bg-light before:shadow-none
            after:rotate-[-45deg] after:translate-x-11 after:translate-y-0 after:w-16 after:bg-slate-800/90 dark:after:bg-bg-light after:shadow-none` : ''}
            `}>
            </div>
        </div>
    );
};

export default CustomButton;
