import React from "react";

export default function About() {
  return (
    <div className="About">
      <h1 className=" font-[1000]  text-3xl text-blue-600">
        {" "}
        اكتشف دورات تدريبيه مميزه في مختلف المجالات{" "}
      </h1>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row xl:flex-row justify-center gap-4 ">
          <a
            className=" items-center justify-center rounded-xl border-2 border-yellow-500 px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center"
            href="#"
          >
            Mobile Applications
          </a>
          <a
            className="x items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Back-end
          </a>
          <a
            className="x items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Front-end
          </a>
          <a
            className=" items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            UI/UX Design
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row  xl:flex-row justify-center gap-4 ">
          <a
            className="  inline-flex items-center justify-center rounded-xl border-2 px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] text-center  border-yellow-500"
            href="#"
          >
            Video Editing
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Data Analysis
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Graphic Design
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row  xl:flex-row justify-center gap-4 ">
          <a
            className="  inline-flex items-center justify-center rounded-xl border-2 border-blue-900 px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] text-center  border-yellow-500"
            href="#"
          >
            Germany
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Italy
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            {" "}
            English
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            Voice Over
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl  px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
            href="#"
          >
            3D Design
          </a>
        </div>
      </div>
    </div>
  );
}
