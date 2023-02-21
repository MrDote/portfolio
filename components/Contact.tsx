import Form from "./Form";

const Contact = () => {

    return (
        <div className='relative p-5 border-t-4 border-[var(--primary-border-color)] bg-[var(--primary-bg-color)] bg-gradient-to-b from-[var(--secondary-bg-color)]'>
            <a id='contact' className="absolute top-[-6rem] left-0"></a>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-[var(--primary-text-color)] after:w-24 after:h-1 after:-bottom-3 after:left-[49%] after:-ml-10
            ">Contact</h1>
            
            <Form />
        </div>
    )
}

export default Contact