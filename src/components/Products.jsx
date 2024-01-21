import React from "react";
import Lapii from "../assets/lapi.svg";
import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import Divider from "./Divider";
import Lottie from "lottie-react";
import lottie from "../assets/Animation - 1705837942004.json";
function Products() {
  return (
    <div className="mb-[30px]">
      <div className={`wrapped absolute`}>
        <div className="elem"></div>
      </div>
      <Divider text="Projects" />
      <h1 className="text-white text-[40px]">comming very soon...</h1>
      <Lottie className="w-[100%] h-[100%] absolute" animationData={lottie}/>
    </div>
  );
}

export default Products;
