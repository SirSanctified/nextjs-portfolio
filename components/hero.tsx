import Link from "next/link";
import DottedUnderline from "./dottedUnderline";
import { Button } from "./ui/button";
import { Github, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <main className="w-full mt-6 relative min-h-[70vh] flex flex-col justify-center">
      <h1 className="text-lg md:text-xl font-medium text-center w-full mb-2">
        Hi, I am Pritchard Mambambo!
      </h1>
      <DottedUnderline direction="horizontal" />
      <div className="text-center mt-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
          Innovative Software Solutions. <br /> Turning Ideas into Reality.{" "}
          <br /> Building A Connected{" "}
          <code className="text-indigo-600">{"{World}"}</code>.
        </h2>
        <p className="text-gray-400 text-md mt-6 max-w-[60ch] lg:max-w-4xl mx-auto">
          I build software solutions that are scalable, reliable and secure
          using modern technologies. In need of a software solution or someone
          to help you change the world with your brilliant idea? I am just a
          message away.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-8">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-full w-full sm:max-w-[150px] hover:from-indigo-800 hover:to-purple-700 hover:text-white transition-all duration-300 ease-linear"
          >
            <Link href="/#about">Know More</Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            className="bg-transperant hover:text-white hover:bg-gradient-to-r from-purple-700 to-indigo-800 rounded-full w-full sm:max-w-[150px] transition-all duration-300 ease-linear hover:border-indigo-800"
          >
            <Link href="/#contact" className="flex gap-3 items-center">
              Let&#39;s Talk <MoveRight />{" "}
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute top-16 hidden md:block -right-8 xl:right-0 mx-w-[50px]">
        <DottedUnderline direction="vertical" />
        <div className="flex flex-col gap-4 items-center mt-4">
          <Link
            href="https://github.com/SirSanctified"
            className="flex flex-col gap-2 items-center text-gray-400 hover:text-indigo-600 transition-all duration-300 ease-linear hover:scale-105"
          >
            <Github size={32} />
            <p className="text-xs transform rotate-90 translate-y-12">
              Find me on Github
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
