import React from "react";
import ProfileImage from "../images/personal-image.jpg";
import { FiDownload } from "react-icons/fi";
import saveAs from "file-saver";

const Hero = () => {
  return (
    <div
      className="md:h-screen relative md:mx-14"
      id="home"
      data-aos="fade-up"
    >
      <div className="lg:absolute md:pt-0 pt-20 inset-0 top-[7rem] 3xl:top-[120px] xl:mt-36 px-5 lg:px-0 max-w-7xl justify-between mx-auto flex flex-wrap items-start gap-5">
        <section className="">
          <div className="text-[1.6rem] lg:text-[3.6rem] font-bold text-[#f5f5f5] font-[poppins-extrabold]">
            Hi 👋, <br /> My name is <br />
            <span className="name">Ayodeji Olu-Ewulo</span>
            <br />
            I'm a software engineer
          </div>
          <span>
            <button
              onClick={() =>
                saveAs(
                  "https://rsvces5zjq.ufs.sh/f/0sAvw7BAPn5H37bKbBmeodgky5YjW86XEcpJDTsvKwa4mtFP",
                  "Isaac Ayodeji CV"
                )
              }
              className="py-2 profile-image px-4 rounded-lg bg-black text-white flex gap-2 items-center hover:scale-95 transition-all"
            >
              Download Resume <FiDownload className="h-4 pt-1" />
            </button>
          </span>
        </section>
        <section>
          <img
            src={ProfileImage}
            alt=""
            className="rounded-full w-[17rem] h-[17rem] md:w-[27rem] md:h-[27rem] p-3 profile-image md:float-right object-cover"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
