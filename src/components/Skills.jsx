import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/Boostrap.png";
import MUI from "../assets/MUI.png";
import Tailwind from "../assets/tailwind.png";
import Next from "../assets/next.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#EB5353] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#383838]">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={HTML} alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={CSS} alt="Html icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-3 w-20"
              src={JavaScript}
              alt="Html icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={ReactImg} alt="Html icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={Node} alt="Html icon" />
            <p className="my-4">NodeJs</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={Tailwind} alt="Html icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={GitHub} alt="Html icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="mx-auto my-5 w-20"
              src={Bootstrap}
              alt="Html icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-3 w-20" src={MUI} alt="Html icon" />
            <p className="my-4">Material-UI</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="mx-auto my-7 w-20" src={Next} alt="Html icon" />
            <p className="my-4">NextJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
