'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { roboto_slab } from './fonts';


type Color = "red" | "green" | "blue" | "none";
type navLink = {
  name: string,
  href: string,
}

const links: navLink[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row bg-section-fill border-solid border-b-8 border-section-border p-5 shadow-lg">
      <Link
        key="Home"
        href="/"
        className="py-2 rounded-xl text-center text-4xl text-white"
      >
        &lt;ZTA&nbsp;/&gt;
      </Link>
      <div className="w-11/12 flex justify-end space-x-3 ">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="w-40 py-2 rounded-3xl bg-button-fill-normal border-solid border-b-4 border-button-border-normal text-center text-2xl text-white"
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

