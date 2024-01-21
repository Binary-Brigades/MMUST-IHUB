import React from "react";

function Divider({ text }) {
  return (
    <div className="w-full flex  items-center">
      <div className="h-[2px] flex bg-[#9ae9e9] flex-1"></div>
      <p className="mx-4 text-3xl lg:text-[2rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-[#90E6FF] leading-10 text-center ">
        {text}
      </p>
      <div className="h-[2px] flex bg-[#9ae9e9] flex-1"></div>
    </div>
  );
}

export default Divider;
