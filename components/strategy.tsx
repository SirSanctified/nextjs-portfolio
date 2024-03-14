import { strategies } from "@/constants/project-approach";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import DottedUnderline from "./dottedUnderline";

const Strategy = () => {
  return <section className="w-full mt-8">
     <h1 className="text-lg md:text-xl font-medium text-center w-full mb-2">
        How I Approach Your Project
      </h1>
      <DottedUnderline direction="horizontal" />
      <p  className="text-gray-400 text-md mt-6 pb-4 max-w-[60ch] lg:max-w-4xl mx-auto">With this focused approach, I am dedicated to delivering a solution that not only addresses your immediate needs but also sets the stage for your long-term success.</p>
    <StickyScroll content={strategies} />
    </section>;
};

export default Strategy;
