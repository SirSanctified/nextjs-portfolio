import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="md:mt-8 min-h-[70vh] w-full relative">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
        Some of my work
      </h2>
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "DevsKonnekt",
    description:
      "A social media platform for developers to connect, share ideas, and collaborate on projects. Built with Express, MongoDB, Next.js, and TailwindCss.",
    header: <Skeleton />,
    className: "md:col-span-2 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://devskonnekt.vercel.app",
  },
  {
    title: "Car Rental Web App",
    description:
      "A modernised fullstack version of Impala Car Rental's website. Built with Django, PostgreSQL, React (Typescript), and TailwindCss.",
    header: <Skeleton />,
    className: "md:col-span-1 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://impala2.netlify.app",
  },
  {
    title: "Nicebuilt Construction Website",
    description:
      "Nicebuilt Construction's website. A modern, responsive, and SEO optimised website. Built with Next.js (Typescript) and TailwindCss",
    header: <Skeleton />,
    className: "md:col-span-1 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://nicebuiltconstruction.co.zw",
  },
  {
    title: "Roomio",
    description:
      "A room searching platform for students to find and book rooms near their universities. Built with Django, PostgreSQL, Next.js (Typecript), and TailwindCss, using Docker for containerization.",
    header: <Skeleton />,
    className: "md:col-span-2 bg-gradient-to-r from-indigo-400 to-purple-400",
    href: "https://github.com/student-accommodation-api",
  },
];
