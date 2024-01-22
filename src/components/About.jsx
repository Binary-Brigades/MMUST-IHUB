import React, { useEffect } from "react";
import Lapii from "../assets/Object/Other 17.svg";
import { motion, useAnimation } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import Glowing from "./Glowing";
import Divider from "./Divider";
import { useInView } from "react-intersection-observer";
function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <div className="flex flex-col" id="about">
      <Glowing className="left-5" />
      <Divider text="About Us" />

      <div className="flex flex-col mt-[10px] md:mt-[40px] w-full px-5 py-5 items-start justify-between md:flex-row-reverse relative md:gap-40">
        <div className="flex-col items-start justify-start flex">
          <motion.div
            className="flex-col items-start justify-start md:flex-row "
            initial={{ x: "100%", opacity: 0 }}
            animate={controls}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
            }}
          >
            <h1 className="text-2xl lg:text-[1.5rem] md:font-extrabold lg:leading-[2.1rem] font-bold text-white leading-7 text-left md:w-[85%] text-wrap">
              We are A{/* <br /> */}
              <span className="text-[#9ae9e9]"> vibrant community </span>, where
              <span className="text-indigo-300 mx-2">creative minds</span>
              converge to redefine what's possible
            </h1>
            <p className="leading-relaxed text-gray-300 text-lg my-3 md:my-4 md:text-xl text-left md:w-[85%] text-wrap">
              We are dedicated to empowering individuals to pioneer change
              through the synergy of collaboration, knowledge-sharing, and
              relentless innovation
            </p>
          </motion.div>
          <motion.a
            initial={{ x: "300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
            }}
            href="#"
            className="flex gap-2 items-center md:mt-8 py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-[#123] uppercase font-bold  hover:gap-5 shadow-sm shadow-[#b2f8f8] transition-all duration-500 ease-in-out hover:bg-gradient hover:from-purple-500 hover:to-[#9ae9e9]"
          >
            learn more <GoArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
        <motion.div
          className="flex md:w-[80%] items-start justify-start p-0 md:mt-[-10px]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={controls}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <img className="" src={Lapii} alt="" ref={ref} />
        </motion.div>
        <div
          className={`wrapper absolute top-[250px] md:top-[40px] right-[100px]`}
        >
          <div className="element"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
