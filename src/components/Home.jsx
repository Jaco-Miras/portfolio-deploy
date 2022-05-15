import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="bg-[#EB5353] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Jaco Raven Miras
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#3A3845]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          I am a junior frontend developer that is willing to learn another
          skillset of programming, development and has a enthusiast of coding
          especially in frontend development.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#383838] hover:border-[#383838]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
