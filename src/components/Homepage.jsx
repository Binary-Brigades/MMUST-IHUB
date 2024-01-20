import React from "react";
import Lapii from "../../public/lapi.svg";import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight} from "react-icons/go";
function Homepage() {
  return (
    <div className="flex flex-col mt-[70px] w-full px-5 py-5 items-start justify-between md:flex-row ">
      <div className="flex-col items-start justify-start flex">
        <div className="flex-col items-start justify-start md:flex-row ">
          <h1 class="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10 text-left ">
            Ignite Innovation,
            <br />
            <span class="text-[#9ae9e9]">Transforming Ideas </span>
            into <span class="text-indigo-300 mx-2">Reality</span>
          </h1>
          <p class="leading-relaxed text-gray-300 text-lg my-5 md:my-7 md:text-xl text-left">
                      Welcome to ,<strong class="text-white mx-1">Mmust Ihub</strong>{" "}
                      
            where
            <strong class="text-white mx-1"> collaboration</strong> meets
            <strong class="text-white mx-1"> creativity</strong>. <br />
            Join us on the forefront of
            <strong class="text-white mx-1"> innovation</strong>
          </p>
        </div>
        <button className="flex gap-2 items-center md:mt-8 py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-white uppercase font-bold  hover:gap-4 shadow-md shadow-[#b2f8f8]">
          contact us <GoArrowRight className="" />
        </button>
      </div>
      <div className="flex items-start justify-start p-0">
        <img className="" src={Lapii} alt="" />
      </div>
    </div>
  );
}

export default Homepage;
