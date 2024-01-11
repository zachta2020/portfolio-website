import Link from 'next/link';

const links = [
    { name: 'Home', href: '/'},
    {
      name: 'Projects',
      href: '/projects',
    },
    { name: 'Contact', href: '/contact'},
  ];

export default function Navigation () {
    return (
        <div className = "flex flex-row gap-2">
          {links.map((link) => {
            return (
              <Link
                key = {link.name}
                href = {link.href}
                className = "hover:text-red"
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
      );
}