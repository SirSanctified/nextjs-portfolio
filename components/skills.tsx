import { skills } from "@/constants";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full my-4 mt-8  md:pl-24">
      <div className="flex items-baseline justify-start gap-8">
        <h1 className="text-lg md:text-xl font-medium text-start w-max mb-2">
          My Skills
        </h1>
        <div className="flex gap-1">
          <div className="w-[40px] h-1 bg-gray-400" />
          <div className="w-2 h-1 bg-gray-400" />
        </div>
      </div>
      <div className="w-full flex flex-wrap items-center flex-col justify-center md:flex-row gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 px-4 py-2 rounded-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
