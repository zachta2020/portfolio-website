import { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <main>
      <div className="flex flex-row mx-40 my-10 gap-10">
        <div>
          <h1 className="text-5xl font-bold">Enter the Dreamer</h1>
          <p className="text-2xl mt-6">Enter the Dreamer is a personal video game project currently in development. It is a 2D-Platformer written in Rust, utilizing the Bevy game engine, the Rapier physics engine,
            and a library that facilitates the use of the Level Designer's Toolkit to design levels. Development so far has focused on player movement, with the implementation of basic horizontal movement, jumping,
            horizontal dashing, wall sliding, and wall jumping. The eventual goal is to create a set of content that involves two levels and a boss fight, complete with graphic and audio assets, enemies, and obstacles.</p>
        </div>
        <div className="rounded-3xl px-8 pt-8 pb-6 bg-deep-purple border-solid border-b-8 border-dark-deep-purple">
          <Image
            src="/ETD_screenshot.png"
            alt="Screenshot of the Enter the Dreamer Prototype"
            width="4000"
            height="4000"
          />
          <Link
            key="Enter the Dreamer Repository"
            href="https://github.com/zachta2020/enter_the_dreamer"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 mx-20 mt-6 flex justify-center rounded-3xl bg-purple border-solid border-b-4 border-dark-purple text-center text-2xl text-white 
            hover:bg-pale-purple hover:border-purple hover:text-white 
            active:bg-white active:border-pale-purple active:text-purple"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}