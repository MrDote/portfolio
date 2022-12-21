const CustomTextTyping = () => {
    return (
        // dummy div to simulate the body element
        <div className="h-screen w-screen flex items-center justify-center bg-slate-600 overflow-hidden">
            {/* wrapper */}
            <div className="flex">
                {/* static-txt */}
                <div className="text-stone-200 font-medium text-4xl font-mono
                ">Some text before:</div>
                {/* dynamic-txts */}
                <ul className="ml-4 text-4xl h-10 font-medium font-mono text-red-400 flex flex-col gap-4 pointer-events-none overflow-hidden
                ">
                    <li><span className="relative animate-slide
                    after:absolute after:h-full after:w-full after:left-0 after:border-l-[3px] after:border-l-cyan-400 after:animate-type-5 after:bg-slate-600
                    ">Hello</span></li>
                    <li><span className="relative animate-slide
                    after:absolute after:h-full after:w-full after:left-0 after:border-l-[3px] after:border-l-cyan-400 after:animate-type-4 after:bg-slate-600
                    ">Hola</span></li>
                    <li><span className="relative animate-slide
                    after:absolute after:h-full after:w-full after:left-0 after:border-l-[3px] after:border-l-cyan-400 after:animate-type-4 after:bg-slate-600
                    ">Halo</span></li>
                    <li><span className="relative animate-slide block pr-2
                    after:absolute after:h-full after:w-full after:left-0 after:border-l-[3px] after:border-l-cyan-400 after:animate-type-7 after:bg-slate-600
                    ">Arigato</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CustomTextTyping