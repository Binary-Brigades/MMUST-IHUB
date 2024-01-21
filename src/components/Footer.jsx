import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  TiSocialGithub,
  TiSocialGithubCircular,
  TiSocialTwitter,
} from "react-icons/ti";

function Footer() {
  return (
    <footer className="w-full border-t  pt-8 pb-0 py-0 text-white ">
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 text-left">
        <div className="space-y-2 md:col-span-2 lg:col-span-1 ">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <p className="text-gray-500">Kakamega, Kenya</p>
          <p className="text-gray-500">Phone: (123) 456-7890</p>
          <p className="text-gray-500">Email: info@company.com</p>
        </div>
        <div className="space-y-2 md:col-span-2 lg:col-span-1 ">
          <h2 className="text-xl font-bold">Social</h2>
          <p className="flex gap-4 text-gray-500">
            {" "}
            <a href="">
              <TiSocialTwitter className="w-8 h-8 hover:text-white transition-all duration-500 ease-in-out" />
            </a>
            <a href="">
              <TiSocialGithubCircular className="w-8 h-8 hover:text-white  transition-all duration-500 ease-in-out" />
            </a>
          </p>
        </div>
        <div className="space-y-2 col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold">Newsletter</h2>
          <p className="text-gray-500">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex md:flex-row gap-4 w-full flex-col">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              placeholder="Enter your email..."
              type="email"
            />
            <button className="flex gap-x-2 items-center py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-[#123] uppercase font-bold  hover:gap-x-5 shadow-sm shadow-[#b2f8f8] w-[40%] hover:gap-5 transition-all duration-500 ease-in-out hover:bg-gradient hover:from-purple-500 hover:to-[#9ae9e9]">
              Subscribe <GoArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-8  text-center text-gray-500 border-t  pt-8 ">
        <p>MMUST-IHUB © 2024 Company Name. All rights reserved.</p>
        <p className="text-sm">
          <span className="text-[#9ae9e9]">
            Made with ❤ by @Binary Brigates
          </span>
          🚀
        </p>
      </div>
    </footer>
  );
}

export default Footer;
