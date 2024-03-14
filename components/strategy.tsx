import { strategies } from "@/constants/project-approach";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import DottedUnderline from "./dottedUnderline";

const Strategy = () => {
  return <section className="w-full mt-8">
     <h1 className="text-lg md:text-xl font-medium text-center w-full mb-2">
        How I Approach Your Project
      </h1>
      <DottedUnderline direction="horizontal" />
    <StickyScroll content={strategies} />
    </section>;
};

export default Strategy;
