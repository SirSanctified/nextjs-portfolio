import Image from "next/image";

export const strategies = [
    {
      title: "1. Understanding Your Needs",
      description:
        "My first priority is to understand the challenges you're facing. Through thorough discussions and active listening, I delve into the heart of your requirements. This phase is crucial as it lays the groundwork for crafting solutions that precisely address your unique needs.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white text-center">
          Understanding Your Needs
        </div>
      ),
    },
    {
      title: "2. Crafting a Tailored Strategy",
      description:
        "With insights gained from our discussions, I develop a strategy tailored specifically to your project. Drawing upon my expertise and experience, I design solutions that are not only effective but also aligned with your long-term goals. This personalized approach ensures that every aspect of the project is carefully crafted to deliver maximum value.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/planning.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Creating customised strategy"
          />
        </div>
      ),
    },
    {
      title: "3. Development and Iterative Refinement",
      description:
        "Working in iterative cycles allows me to remain flexible and responsive to changes in requirements. This approach ensures that I deliver incremental value with each iteration, providing you with early insights into the project's progress and the flexibility to make adjustments as needed.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white px-2 text-center">
          Development and Iterative Refinement
        </div>
      ),
    },
    {
      title: "4. Delivering Value and Ensuring Satisfaction",
      description:
        "Quality is paramount in my work. Throughout the development process, I prioritize rigorous testing and quality assurance measures to ensure that the final product meets the highest standards of excellence. My meticulous attention to detail guarantees that the solution I deliver not only meets but exceeds your expectations, providing you with a reliable and high-performing product.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white px-2 text-center">
          Delivering Value and Ensuring Satisfaction
        </div>
      ),
    },
  ];