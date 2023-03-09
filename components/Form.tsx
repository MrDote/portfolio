import { useForm } from "react-hook-form";

function Form() {

    // type Email ={
    //     email: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i";
    // }

    type FormValues = {
        fullName: string,
        email: string,
        company?: string,
        message: string,
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            fullName: "",
            email: "",
            company: "",
            message: ""
    }});

    const onSubmit = (data: FormValues) => {
        const postData = async() => {
            const res = await fetch("/api/formData", {
                method: "POST",
                body: JSON.stringify(data)
            });
            return res.json();
        };
        postData().then((dt) => {
            console.log(dt.message)
        })
    }

    return (
        <div className='sm:my-8 my-12 text-xl max-w-4xl mx-auto
        '>
            <form className='font-Montserrat tracking-tight m-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="segment dark:segment-no-shadow text-center">
                    <p>Let's build something together!</p>
                </div>
                <div className='sm:p-10 py-10 relative'>
                    <div className='label py-2'>
                        <input className='input px-2 mb-1 focus:input-focus h-8 rounded-lg dark:shadow-none dark:bg-slate-600' {...register("fullName", { required: "This is a required field.", minLength: {value: 4, message: 'Min length is 4.'}})} placeholder="Name"/>
                        <p className="text-red-500">{errors.fullName?.message}</p>
                    </div>
                    <div className='label py-2'>
                        <input className='input px-2 mb-1 focus:input-focus h-8 rounded-lg dark:shadow-none dark:bg-slate-600' {...register("email", {required: "This is a required field.", minLength: {value: 4, message: 'Min length is 4.'}})} placeholder="Email Address"/>
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                    <div className='label py-2'>
                        <input className='input px-2 mb-1 focus:input-focus h-8 rounded-lg dark:shadow-none dark:bg-slate-600' {...register("company", {minLength: {value: 3, message: 'Min length is 3.'}})} placeholder="Company (Optional)"/>
                        <p className="text-red-500">{errors.company?.message}</p>
                    </div>
                    <div className='label py-2'>
                        <textarea className='w-full input focus:input-focus p-2 min-h-[4rem] rounded-lg dark:shadow-none dark:bg-slate-600' {...register("message", {required: "This is a required field.", minLength: {value: 4, message: 'Min length is 4.'}})} placeholder="Your message"></textarea>
                        <p className="text-red-500">{errors.message?.message}</p>
                    </div>
                    <button className="absolute bottom-[-1.5rem] right-1/2 transform translate-x-1/2 sm:transform-none sm:right-10 button dark:shadow-none dark:bg-slate-700 hover:button-hover active:button-active h-16 w-40 dark:text-text-dark" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form