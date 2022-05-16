import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ECB365] text-[#3A3845]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#3A3845]">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Jak, nice to meet you. Please take a look around</p>
          </div>
          <div className="text-lg font-normal">
            <p>
              I am passionate about developing especially in the frontend that
              improves the lives around me. What would you do if you had a
              frontend developer available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
