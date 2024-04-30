'use client'

import Link from "next/link"
import { FormEvent } from "react";

export default function Contact() {
    /* async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target)

        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });
    }; */

    return (
        <div className="mx-32">
            <form /* onSubmit={handleSubmit} */ className="p-8 rounded-3xl bg-deep-purple border-solid border-b-8 border-dark-deep-purple">
                <p className="text-5xl text-white">Contact</p>
                <div className="my-4 flex flex-col w-500">
                    <label htmlFor="form-name" className="text-white text-2xl">Name</label>
                    <input id="form-name" autoComplete="name" maxLength={50} /* size="lg" */ name="name"
                        className="rounded-lg border-solid border-2 border-pale-purple text-black text-2xl" />

                    <label htmlFor="form-email" className="text-white text-2xl">Email:</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email"
                        className="rounded-lg border-solid border-2 border-pale-purple text-black text-2xl" />

                    <label htmlFor="form-subject" className="text-white text-2xl">Subject</label>
                    <input id="form-subject" maxLength={80} name="subject"
                        className="rounded-lg border-solid border-2 border-pale-purple text-black text-2xl" />

                    <label htmlFor="form-message" className="text-white text-2xl"> Message: </label>
                    <textarea id="form-message" required name="message" rows={5}
                        className="rounded-lg border-solid border-2 border-pale-purple text-black text-2xl" />

                </div>
                <button
                    className="w-40 py-2 rounded-3xl bg-purple border-solid border-b-4 border-dark-purple text-center text-2xl text-white 
                                        hover:bg-pale-purple hover:border-purple hover:text-white 
                                        active:bg-white active:border-pale-purple active:text-purple"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

