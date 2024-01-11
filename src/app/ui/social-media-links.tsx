import Link from 'next/link';

const links = [
    {name: "Github", href: "https://github.com/zachta2020"},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/zachary-anderson-6101461b5/"}
]

export default function SocialMediaLinks () {
    return (
        <div className="flex flex-row gap-2">
            {links.map((link) => {
                return (
                    <Link 
                        key = {link.name}
                        href = {link.href}
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "hover:text-blue"
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}