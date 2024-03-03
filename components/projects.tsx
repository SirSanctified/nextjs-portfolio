import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import DottedUnderline from "./dottedUnderline";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="md:mt-8 min-h-[70vh] w-full relative">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-2">
        Some of my work
      </h2>
      <DottedUnderline direction="horizontal" />
      <p className="text-gray-400 text-center text-md mt-6 mb-4 max-w-[60ch] lg:max-w-4xl mx-auto">
        Here are some of the projects I have worked on. You can find more of my
        work on my{" "}
        <Link
          href="https://github.com/SirSanctified"
          passHref
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </Link>
      </p>
      <ProjectGrid />
    </section>
  );
}

function ProjectGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "DevsKonnekt",
    description:
      "A social media platform for developers to connect, share ideas, and collaborate on projects. Built with Express, MongoDB, Next.js, and TailwindCss.",
    header: (
      <Image
        src="/devskonnekt.png"
        alt="DevsKonnekt"
        width={500}
        height={500}
        className="rounded-xl object-cover"
      />
    ),
    className: "md:col-span-2 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://devskonnekt.vercel.app",
  },
  {
    title: "Car Rental Web App",
    description:
      "A modernised fullstack version of Impala Car Rental's website. Built with Django, PostgreSQL, React (Typescript), and TailwindCss.",
    header: (
      <Image
        src="/impala.png"
        alt="Impala Car Rental"
        width={500}
        height={500}
        className="rounded-xl object-cover"
      />
    ),
    className: "md:col-span-1 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://impala2.netlify.app",
  },
  {
    title: "Nicebuilt Construction Website",
    description:
      "Nicebuilt Construction's website. A modern, responsive, and SEO optimised website. Built with Next.js (Typescript) and TailwindCss",
    header: (
      <Image
        src="/nicebuilt.png"
        alt="Nicebuilt Construction"
        width={500}
        height={500}
        className="rounded-xl object-cover"
      />
    ),
    className: "md:col-span-1 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://nicebuiltconstruction.co.zw",
  },
  {
    title: "Roomio",
    description:
      "A room searching platform for students to find and book rooms near their universities. Built with Django, PostgreSQL, Next.js (Typecript), and TailwindCss, using Docker for containerization.",
    header: (
      <Image
        src="/roomio.png"
        alt="Roomio"
        width={500}
        height={500}
        className="rounded-xl object-cover"
      />
    ),
    className: "md:col-span-2 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://github.com/student-accommodation-api",
  },
];
