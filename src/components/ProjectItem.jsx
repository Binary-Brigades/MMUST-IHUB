import React from "react";

function ProjectItem({ image, title, description, link }) {
  return (
    <div
      className="flex flex-col bg-white  justify-center
             border rounded-xl overflow-hidden shadow-sm  "
    >
      <img
        alt="Project"
        className="object-cover"
        height="600"
        src={image}
        style={{
          aspectRatio: "800/400",
          objectFit: "cover",
        }}
        width="800"
      />
      <div className="p-4 lg:p-6 bg-[aliceblue] ">
        <h3 className="font-bold text-xl mb-2 leading-none text-gray-500">
          {title}
        </h3>
        <p className="text-md text-gray-600 dark:text-gray-600 text-left">
          {description}
        </p>
      </div>
      <a
        className="inline-flex h-10 items-center justify-center rounded-b-md bg-[aliceblue] px-4"
        href={link}
        target="_blank"
      >
        <span className="border border-white text-white px-12 py-1 rounded-md font-bold bg-slate-500">
          View It Live
        </span>
      </a>
    </div>
  );
}

export default ProjectItem;
