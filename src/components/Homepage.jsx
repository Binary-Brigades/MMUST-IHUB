import React from "react";
import Lapii from "../assets/lapi.svg";
import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import Lottie from "lottie-react";
import lottie from "../assets/Animation - 1705837942004.json";
import Glowing from "./Glowing";
function Homepage() {
  return (
    <div className="flex flex-col mt-[70px] w-full px-5 py-5 items-start justify-between md:flex-row ">
      <div className="flex-col items-start justify-start flex">
        <div className="flex-col items-start justify-start md:flex-row ">
          <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10 text-left ">
            Ignite Innovation,
            <br />
            <span className="text-[#9ae9e9]">Transforming Ideas </span>
            into <span className="text-indigo-300 mx-2">Reality</span>
          </h1>
          <p className="leading-relaxed text-gray-300 text-lg my-5 md:my-7 md:text-xl text-left">
            Welcome to ,<strong className="text-white mx-1">Mmust Ihub</strong>{" "}
            where
            <strong className="text-white mx-1"> collaboration</strong> meets
            <strong className="text-white mx-1"> creativity</strong>. <br />
            Join us on the forefront of
            <strong className="text-white mx-1"> innovation</strong>
          </p>
        </div>
        <button className="flex gap-2 items-center md:mt-8 py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-[#123] uppercase font-bold  hover:gap-5 shadow-sm shadow-[#b2f8f8] transition-all duration-500 ease-in-out">
          contact us <GoArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className=" md:h-[400px] md:w-[50%]">
        <Lottie className="h-[100%] w-full object-cover" animationData={lottie} />
        {/* <img className="" src={Lapii} alt="" /> */}
      </div>
      <Glowing className={"top-0 right-8"} />
    </div>
  );
}

export default Homepage;
