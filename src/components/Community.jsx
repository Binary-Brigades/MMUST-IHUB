import React from "react";
import first from "../assets/community/IMG-20230401-WA0003.jpg";
import second from "../assets/community/IMG-20240129-WA0010.jpg";
import third from "../assets/community/IMG-20240129-WA0012.jpg";
import forth from "../assets/community/IMG-20240129-WA0016.jpg";
import fifth from "../assets/community/IMG-20240129-WA0020.jpg";
import six from "../assets/community/IMG-20240129-WA0025.jpg";
function Community() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet our Community
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A group of passionate individuals who love to share and learn.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={six}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={first}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={second}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={third}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={forth}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center w-[200px h-[100px">
              <img
                className="flex h-full w-full items-center justify-center rounded-lg bg-muted"
                src={fifth}
              />
              <h3 className="mt-2 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
