import Form from "./Form";

const Contact = () => {

    return (
        <div className='relative p-5 border-t-4 border-border-light bg-gradient-to-b from-bg-light-2 dark:from-bg-dark-2'>
            <a id='contact' className="absolute top-[-6rem] left-0"></a>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-text-light dark:after:bg-text-dark after:w-24 after:h-1 after:-bottom-3 after:left-[50%] after:-ml-10
            ">Contact</h1>
            
            <Form />
        </div>
    )
}

export default Contact