import Form from "./Form";

const Contact = () => {

    return (
        <div id='contact' className='p-10 bg-[var(--form-color-bg)]'>
            <h1 className="uppercase tracking-wide text-center relative
            after:absolute after:content[''] after:bg-[var(--primary-text-color)] after:w-24 after:h-1 after:-bottom-3 after:left-[49%] after:-ml-10
            ">Contact</h1>
            
            <Form />
        </div>
    )
}

export default Contact