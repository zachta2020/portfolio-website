'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const apiEndpoint = '/api/contact';

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                alert(`Response: ${response.message}`);
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="mx-32">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-3xl bg-deep-purple border-solid border-b-8 border-dark-deep-purple">
                <p className="font-bold text-5xl text-white">Contact</p>
                <div className="my-6 flex flex-col gap-4 w-500">
                    {/* <label htmlFor="name" className="text-white text-2xl">Name</label> */}
                    <input id="name" autoComplete="name" maxLength={50} placeholder="Name (optional)"
                        className="px-4 rounded-lg border-solid border-2 border-pale-purple text-black text-2xl focus:outline-purple placeholder:text-pale-purple"
                        {...register("name")} />

                    {/* <label htmlFor="email" className="text-white text-2xl">Email:</label> */}
                    <input id="email" required autoComplete="email" maxLength={80} type="email" placeholder="Email"
                        className="px-4 rounded-lg border-solid border-2 border-pale-purple text-black text-2xl focus:outline-purple placeholder:text-pale-purple"
                        {...register("email", {
                            pattern: /^\S+@\S+\.+\S+$/
                        })} />

                    {/* <label htmlFor="subject" className="text-white text-2xl">Subject</label> */}
                    <input id="subject" maxLength={80} placeholder="Subject (optional)"
                        className="px-4 rounded-lg border-solid border-2 border-pale-purple text-black text-2xl focus:outline-purple placeholder:text-pale-purple"
                        {...register("subject")} />

                    {/* <label htmlFor="message" className="text-white text-2xl"> Message: </label> */}
                    <textarea id="message" required rows={5} placeholder="Message"
                        className="px-4 rounded-lg border-solid border-2 border-pale-purple text-black text-2xl focus:outline-purple placeholder:text-pale-purple"
                        {...register("message")} />

                </div>
                <div className="flex justify-center">
                    <button
                        className="w-1/6 py-2 rounded-3xl bg-purple border-solid border-b-4 border-dark-purple text-center text-2xl text-white 
                                        hover:bg-pale-purple hover:border-purple hover:text-white 
                                        active:bg-white active:border-pale-purple active:text-purple"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    )
}

