'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { link } from 'fs';

type Color = "red" | "green" | "blue" | "none";
type navLink = {
  name: string,
  href: string,
  color: Color,
}

const links: navLink[] = [
    { 
      name: 'Home', 
      href: '/',
      color: 'red',
    },
    {
      name: 'Projects',
      href: '/projects',
      color: 'blue',
    },
    { 
      name: 'Contact', 
      href: '/contact',
      color: 'green',
    },
  ];

export default function Navigation () {
  const pathname = usePathname();

  return (
      <div>
        <div className = "flex flex-row">
          {links.map((link) => {
            return (
                <Link
                  key = {link.name}
                  href = {link.href}
                  className = {`rounded-t-xl w-1/12 bg-${link.color} border-solid border-t-2 border-x-2 border-dark-${link.color} py-1 text-center text-2xl hover:-translate-y-1 hover:scale-y-125`}
                >
                  <p>{link.name}</p>
                </Link>
            );
          })}
        </div>
        <div className="flex flex-row">
          <NavTopSegment color="red" />
          <NavTopSegment color="blue" />
          <NavTopSegment color="green" />
          <NavTopSegment color="none" />
        </div>
        <div className={clsx("box-border h-5 w-screen border-solid border-b-2 shadow-md", 
              {
                "bg-red border-dark-red": pathname === "/",
                "bg-blue border-dark-blue": pathname === "/projects",
                "bg-green border-dark-green" : pathname === "/contact"
              },
            )}
          >
        </div>
      </div>
    );
}

function NavTopSegment ({color} : {color: Color}) {
  const pathname = usePathname();

  const width: String = color !== "none" ? "w-1/12" : "grow" ;
  return (
    <div className={clsx(`box-border h-5 ${width} border-solid border-t-2`,
          {
            "bg-red border-dark-red": pathname === "/" && color !== "red",
            "bg-red border-red": pathname === "/" && color === "red",
            "bg-blue border-dark-blue": pathname === "/projects" && color !== "blue",
            "bg-blue border-blue": pathname === "/projects" && color === "blue",
            "bg-green border-dark-green": pathname === "/contact" && color !== "green",
            "bg-green border-green": pathname === "/contact" && color === "green", 
          },
        )}
      >
    </div>
  );
}

