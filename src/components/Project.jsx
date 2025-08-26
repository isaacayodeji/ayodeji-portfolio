import React from "react";
import { ProjectGallery } from "./ProjectGallery";

const Project = () => {
  return (
    <div
      className="mt-10 px-2 xl:px-36 3xl:ml-36"
      id="about"
      data-aos="fade-up"
      data-aos-anchor="#project"
    >
      <div className="lg:w-[60%]">
        <h1 className="text-[#42446E] text-[2rem] lg:text-[2.5rem] font-bold font-[poppins-extrabold]">
          Projects
        </h1>
      </div>
        <ProjectGallery/>
    </div>
  );
};

export default Project;
