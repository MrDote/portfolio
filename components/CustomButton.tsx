const CustomButton = ({isOut, setIsOut}: {isOut: boolean, setIsOut: () => void}) => {

    return (
        <div 
        onClick={() => setIsOut()}
        className={`md:hidden relative flex justify-center items-center cursor-pointer transition-all duration-500 ease-in-out w-20 h-20 box-border mx-4 my-2`}>
            <div 
            className={`w-12 h-2 bg-slate-50 rounded-md shadow shadow-zinc-800 transition-all duration-500 ease-in-out
            before:absolute before:w-12 before:h-2 before:bg-slate-50 before:rounded-md before:shadow before:shadow-zinc-800 before:transition-all before:duration-500 before:ease-in-out before:translate-y-[-1rem]
            after:absolute after:w-12 after:h-2 after:bg-slate-50 after:rounded-md after:shadow after:shadow-zinc-800 after:transition-all after:duration-500 after:ease-in-out after:translate-y-4
            ${isOut ? `translate-x-[-3rem] bg-transparent shadow-none pointer-events-none
            before:rotate-45 before:translate-x-11 before:translate-y-0 before:w-16 before:bg-slate-800/90 before:shadow-none
            after:rotate-[-45deg] after:translate-x-11 after:translate-y-0 after:w-16 after:bg-slate-800/90 after:shadow-none ` : ''}
            `}>
            </div>
        </div>
    );
};

export default CustomButton;
