import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import DottedUnderline from "./dottedUnderline";
import Services from "./services";
import Skills from "./skills";

const About = () => {
  return (
    <section id="about" className="md:mt-8 min-h-[70vh] w-full relative">
      <h1 className="md:pl-24 text-lg md:text-xl font-medium text-start w-full mb-2">
        About Me
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
        Turning Code Into Creative Solutions.
      </h2>
      <p className="text-gray-400 text-center text-md mt-6 max-w-[60ch] lg:max-w-4xl mx-auto">
        Consistently learning and growing in the field of software development.
        I have been building software solutions for over 3 years now and my
        passion for technology has only grown. I amalways burning with the
        desire to solve problems with code, tackle tough challenges and build
        innovative solutions.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <div className="bg-indigo-400 rounded-lg p-4 w-full sm:max-w-[300px]">
          <h3 className="text-white text-center font-semibold text-lg">
            3+ Years of Experience
          </h3>
        </div>
        <div className="bg-indigo-400 rounded-lg p-4 w-full sm:max-w-[300px]">
          <h3 className="text-white text-center font-semibold text-lg">
            10+ Projects Completed
          </h3>
        </div>
        <div className="bg-indigo-400 rounded-lg p-4 w-full sm:max-w-[300px]">
          <h3 className="text-white text-center font-semibold text-lg">
            90%+ Client Satisfaction
          </h3>
        </div>
      </div>
      <Services />
      <Skills />
      <div className="absolute bottom-16 -left-8 xl:left-0 hidden md:block max-w-[50px]">
        <div className="flex flex-col gap-4 items-center mb-4">
          <Link
            href="https://linkedin.com/in/pritchard-mambambo"
            className="flex flex-col gap-2 items-center text-gray-400 hover:text-indigo-600 transition-all duration-300 ease-linear hover:scale-105"
          >
            <p className="text-xs transform -rotate-90 -translate-y-16 whitespace-nowrap">
              Follow me on Linkedin
            </p>
            <Linkedin size={32} />
          </Link>
        </div>
        <DottedUnderline direction="vertical" />
      </div>
    </section>
  );
};

export default About;
