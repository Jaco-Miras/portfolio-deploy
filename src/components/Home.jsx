import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#EEEEEE] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#3A3845]">
          Jaco Raven Miras
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#3A3845]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#3A3845] py-4 max-w-[700px]">
          I am a junior frontend developer that is willing to learn another
          skillset of programming, development and has a enthusiast of coding
          especially in frontend development.
        </p>
        <div>
          <button className="text-[#3A3845] group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-[#E83A14] hover:border-[#E83A14]">
            <Link to="work" smooth={true} duration={500}>
              View Works
            </Link>
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
