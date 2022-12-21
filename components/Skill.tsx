const Skill = ({ obj }: {obj: [string, number]}) => {

    const [name, score] = obj
    const width = `w-[${score*10}%]`

    //! build sorter -> slow at start & end, fast mid 
    return (
        <div className="w-full relative flex text-lg font-bold h-9">
            <div className={`absolute h-full ${width} bg-sky-600 flex items-center pl-4 rounded-l-lg z-10 select-none`}>
                <p>{name}</p>
            </div>
            <div className="bg-sky-400 w-full h-full rounded-lg"></div>
        </div>
    )
}

export default Skill