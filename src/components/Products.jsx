import React from "react";
import Lapii from "../assets/lapi.svg";
import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import Divider from "./Divider";

function Products() {
  return (
    <div className="mb-[30px]" id="products">
      <div className={`wrapped absolute`}>
        <div className="elem"></div>
      </div>
      <Divider text="Projects" />
      <h1 className="text-white text-[40px]">comming very soon...</h1>
      
    </div>
  );
}

export default Products;
