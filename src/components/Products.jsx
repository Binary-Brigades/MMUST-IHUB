import React from "react";
import Lapii from "../assets/lapi.svg";
import { TiArrowForward } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import Divider from "./Divider";
import MMUStjosa from "../assets/mmustjosa.png";
function Products() {
  return (
    <div className="mb-[30px]" id="products">
      <Divider text="Projects" />
      <section className="w-full py-4 md:py-24 lg:py-32">
        <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Projects
            </h2> */}
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Take a look at some of the amazing projects we've been working on.
            </p>
          </div>
        </div>
        <div className="container px-4 py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3">
            <div
              className="flex flex-col items-stretch justify-start
             border rounded-xl overflow-hidden shadow-sm dark:divide-y-0 "
            >
              <img
                alt="Project"
                className="object-cover"
                height="600"
                src={MMUStjosa}
                style={{
                  aspectRatio: "800/400",
                  objectFit: "cover",
                }}
                width="800"
              />
              <div className="p-4 lg:p-6 bg-white">
                <h3 className="font-bold text-lg leading-none text-gray-500">
                  MMUST JOSA
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A brief description of the first project.
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center rounded-b-md bg-gray-900 px-4 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Details
              </a>
            </div>
            <div className="flex flex-col items-stretch justify-start space-y-2 border rounded-xl overflow-hidden shadow-sm dark:divide-y-0">
              <img
                alt="Project"
                className="object-cover"
                height="300"
                src="../assets/top.png"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="p-4 lg:p-6">
                <h3 className="font-bold text-lg leading-none text-white">
                  Project Two
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A brief description of the second project.
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center rounded-b-md bg-gray-900 px-4 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Details
              </a>
            </div>
            <div className="flex flex-col items-stretch justify-start space-y-2 border rounded-xl overflow-hidden shadow-sm dark:divide-y-0">
              <img
                alt="Project"
                className="object-cover"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="p-4 lg:p-6">
                <h3 className="font-bold text-lg leading-none text-white">
                  Project Three
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A brief description of the third project.
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center rounded-b-md bg-gray-900 px-4 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
