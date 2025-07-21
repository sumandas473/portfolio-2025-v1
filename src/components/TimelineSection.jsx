import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { Cover } from "./ui/cover";

export function TimelineSection() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Junior Frontend Developer</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">
              Heltech IT Services </span><br />
            <span className="text-blue-400 my-[10px]"> Sep 2024 – Dec 2024 </span>

            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              • Developed responsive web pages using HTML, CSS, and JavaScript based on UI/UX designs.
              • Collaborated with backend developers and designers to implement dynamic features.
              • Gained hands-on experience with modern frontend frameworks and version control.
            </p>
          </div>


          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover> Frontend Developer</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">
              Atomax Tech Service </span><br />
            <span className="text-blue-400 my-[10px]">  May 2025 – Present </span>

            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Contributed as a frontend developer to "Feliz", a medical web application that allows users to book hospital
              facilities such as OPD, X-Ray, Lab Tests, ECG, and more — directly from home. The platform emphasizes
              accessibility, responsive design, and ease of use.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Sister Nivedita University</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Sept 2022 - July 2024</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Master of Computer Applications
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Calcutta University </Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Aug 2019 - Nov 2022</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Bachelor of Science
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1rem] lg:text-[1.8rem] font-[600]">
              <Cover>Chatra Kunja Rani Bani Bhawan</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2017 - 2019</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Class 12th
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <Timeline data={data} />
    </div>
  );
}
