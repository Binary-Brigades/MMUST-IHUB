import React from "react";
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";

function ContactUs() {
  return (
    <section class="w-full py-16 md:py-24 lg:py-32">
      <div class="container space-y-12 px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-4xl lg:text-[2rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-[#90E6FF] leading-10 text-center">
              Contact Us
            </h1>
            <p class="mx-auto max-w-[700px]  md:text-xl  text-white">
              We'd love to hear from you. Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>
          <div class="w-full max-w-sm space-y-2">
            <form class="flex flex-col space-y-2">
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
              <button className="flex gap-x-2 items-center py-2 px-4 bg-gradient-to-l from-indigo-300 to-[#9ae9e9] rounded-full text-[#123] uppercase font-bold  hover:gap-x-5 shadow-sm shadow-[#b2f8f8] text-center  justify-center">
                Send Message <GoArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
