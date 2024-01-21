import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Mobile from "../assets/mobile.jpeg";
import web from "../assets/web.jpeg";
import ai from "../assets/ai.jpeg";
import block from "../assets/block.jpeg";
import iot from "../assets/iot.jpeg";
function OurCarousel() {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <Carousel
        autoPlay="True"
        interval={3000}
        centerMode=""
        centerSlidePercentage={90}
        showIndicators="True"
        showThumbs=""
        showStatus=""
        className="max-w-[400px] rounded-lg h-[300px] object-cover"
      >
        <div className="">
          <img src={web} className="h-[300px] object-cover rounded-lg" />
          <p className="legend bg-red-500">Web Development</p>
        </div>
        <div className="">
          <img src={Mobile} className="rounded-lg"/>
          <p className="legend">Mobile App Development</p>
        </div>
        <div>
          <img src={iot} className="h-[300px] object-cover rounded-lg" />
          <p className="legend ">Iternet Of Things</p>
        </div>
        <div>
          <img src={ai} className="h-[300px] object-cover rounded-lg" />
          <p className="legend ">ML and AI</p>
        </div>
        <div>
          <img src={block} className="h-[300px] object-cover rounded-lg" />
          <p className="legend">Blockchain Technology</p>
        </div>
      </Carousel>
    </div>
  );
}

export default OurCarousel;
