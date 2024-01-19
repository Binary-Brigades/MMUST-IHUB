import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Logo from "../assets/MMU.png";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        ease: "linear",
        duration: 0.6,
      }}
      className="w-full text-white flex flex-row bg-white shadow-sm shadow-black  justify-between items-center fixed top-0 left-0 mb-10 md:px-20 lg:px-40 max-[768px]:px-10 z-50"
    >
      <div className="z-50 text-blue-500 flex items-center">
        <a href="/">
          <img
            className="w-[60px] h-[60px] object-cover cursor-pointer"
            src={Logo}
            alt=""
          />
        </a>
        Ihab
      </div>
      <div className="flex gap-10 text-blue-800">
        <ul
          className={`${
            isMenuOpen
              ? "min-[768px]:visible fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.9)] flex flex-col justify-center items-center"
              : "hidden"
          } md:flex flex-row w-full h-full gap-10`}
        >
          <li className=" active:text-purple-600 hover:text-purple-600">
            <a href="/">Home</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/about">About</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/services">Services</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/products">Products</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/events">Events</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/community">Community</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div
          className={`min-[768px]:hidden cursor-pointer z-50`}
          onClick={toggleMenu}
        >
          <TiThMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
