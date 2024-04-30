import { Metadata } from 'next';
import Contact from '../ui/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <main>
      <div className="py-10 px-40 flex flex-col justify-center gap-6">
        <h1 className="text-5xl font-bold">Want to Talk?</h1>
        <p className="text-2xl">If you have any questions or wish to talk business, fill my contact form, or email me directly at zachta2020@gmail.com, and I'll get back to you as soon as possible. </p>
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
}