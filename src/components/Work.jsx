import React from "react";
import Slidedepot from "../assets/slidedepot.png";
import DORSHS from "../assets/Dorshs.png";
import GENCO from "../assets/genco.png";
import CROWDPH from "../assets/crowdph.png";

const Work = () => {
  return (
    <div name="work" className="w-full text-[#3A3845] bg-[#ECB365]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#3A3845] border-[#383838]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Slidedepot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Slide Depot
              </span>
              <div className="pt-8 text-center">
                <h1 className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Tech Stack - Django, ReactJS
                </h1>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DORSHS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DORSHS
              </span>
              <div className="pt-8 text-center">
                <h1 className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Tech Stack - Firebase, ReactJS
                </h1>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GENCO})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Genco Pizza
              </span>
              <div className="pt-8 text-center">
                <h1 className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Tech Stack - Firebase, ReactJS
                </h1>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${CROWDPH})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crowd PH
              </span>
              <div className="pt-8 text-center">
                <h1 className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Tech Stack - Firebase, ReactJS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
