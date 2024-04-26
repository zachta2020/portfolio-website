import Link from 'next/link';

const links = [
    { name: "Github", href: "https://github.com/zachta2020" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/zachary-anderson-6101461b5/" }
]

export default function SocialMediaLinks() {
    return (
        <div className="fixed bottom-0 w-full bg-deep-purple border-solid border-b-8 border-dark-deep-purple py-5">
            <div className="w-full flex justify-center flex-row gap-3">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-40 py-2 rounded-3xl bg-purple border-solid border-b-4 border-dark-purple text-center text-2xl text-white 
                                        hover:bg-pale-purple hover:border-purple hover:text-white 
                                        active:bg-white active:border-pale-purple active:text-purple"
                        >
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}