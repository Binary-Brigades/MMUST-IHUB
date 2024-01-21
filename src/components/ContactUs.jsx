import React, { useEffect } from "react";
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";
import Lapii from "../assets/Object/Other 18.svg";
import Glowing from "./Glowing";
import Divider from "./Divider";
import Lottie from "lottie-react";
import lottie from "../assets/Animation - 1705841276404.json";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function ContactUs() {
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
    <section
      class="w-full py-16 md:py-24 lg:py-32  flex-col flex  relative"
      id="contact"
    >
      <Divider text="Contact Us" />
      <div class="space-y-2 mt-6">
        <p class="mx-auto max-w-[700px]  md:text-xl  text-white">
          We'd love to hear from you. Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
      </div>
      <div className="flex-col flex md:flex-row mt-12 items-start justify-start">
        <Glowing className={"top-[400px] md:top-[380px] md:left-[100px]"} />
        <div class="container space-y-12 px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="w-full max-w-sm space-y-2">
              <motion.form
                ref={ref}
                className="flex-col items-start justify-start md:flex-row  space-y-6 gap-8"
                initial={{ x: "-100%", opacity: 0 }}
                animate={controls}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                }}
              >
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
                <input
                  type="email"
                  class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
                <textarea
                  class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  id="message"
                  placeholder="Describe briefly what you want us do for you..."
                  required=""
                ></textarea>
                <button
                  className="flex gap-x-2 items-center py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-[#123] uppercase font-bold  hover:gap-x-5 shadow-sm shadow-[#b2f8f8] text-center  justify-center hover:gap-5 transition-all duration-500 ease-in-out hover:bg-gradient hover:from-purple-500 hover:to-[#9ae9e9]"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                >
                  Send Message <GoArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
        <motion.div
          className="flex items-start justify-start p-0 md:mt-[-120px] -z-50"
          initial={{ x: "100%", opacity: 0 }}
          animate={controls}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <Lottie
            className="h-[100%] w-full object-cover"
            animationData={lottie}
          />
          {/* <img className="" src={Lapii} alt="" /> */}
        </motion.div>
        <Glowing className={"top-5 md:top-16 right-10 md:right-[300px]"} />
      </div>
    </section>
  );
}

export default ContactUs;
