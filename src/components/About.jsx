import React from "react";
import location from "../images/location.svg";
import office from "../images/office.svg";
import calendar from "../images/calendar.svg";
import { motion } from "framer-motion";
import { staggeredChildren, staggeredListMotion } from "../utils/motion";
import { education, services } from "../utils/constants";
import ServiceCard from "./Services";

const About = () => {

  return (
    <div
      className="mt-10 px-2 xl:px-36 3xl:ml-36"
      id="about"
      data-aos="fade-up"
      data-aos-anchor="#about"
    >
      <div className="lg:w-[60%]">
        <h1 className="text-[#42446E] text-[2rem] lg:text-[2.5rem] font-bold font-[poppins-extrabold]">
          About me
        </h1>
        <p className="text-justify leading-loose text-[#c4c4c4]">
          I am an accomplished frontend engineer with a strong educational
          background, holding a computer science degree (BSC). With several years of valuable experience in the Fin-tech
          industry, I have developed a deep understanding of building
          cutting-edge Fin-tech products. My primary expertise lies in using
          modern and industry-leading technologies such as ReactJS, Typescript,
          Redux Toolkit state management library, and the Tailwind CSS
          preprocessor. These tools allow me to craft sophisticated and
          user-friendly interfaces, ensuring an exceptional user experience.
        </p>
      </div>
      <div className="mt-20 grid lg:flex gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-10 lg:w-[60%]">
        <h1 className="text-[#42446E] text-[2.5rem] font-bold mb-7 font-[poppins-extrabold]">
          Education
        </h1>
        <motion.div
          className="grid gap-5"
          variants={staggeredListMotion()} 
          initial="hidden"
          animate="visible"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="text-[#c4c4c4] pb-5 flex justify-between items-center border-b-[1px] border-b-[#ebeaed]"
              variants={staggeredChildren}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              whileHover={{ scale: 1.05 }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-start gap-2">
                <h1 className="md:text-[1.2rem] tracking-widest break-words">{item.course}</h1>
                <section className=" text-[0.6rem] md:text-[0.8rem]">
                  <span className="flex items-center gap-1">
                    <img src={office} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.school}
                    </p>
                  </span>
                  <span className="md:flex items-center gap-1 hidden">
                    <img src={location} alt="" />
                    <p className="font-[poppins-light] tracking-widest">
                      {item.location}
                    </p>
                  </span>
                </section>
              </div>
              <div className="flex flex-col items-end gap-3 w-max">
                <p className="rounded-3xl bg-[#D7FFE0] text-[#018C0F] px-2 md:px-5 text-[0.6rem] md:text-[0.8rem] py-1 w-fit">
                  {item.type}
                </p>
                <p className="flex items-center w-max gap-1 text-[0.6rem] md:text-[0.8rem] tracking-widest">
                  <img src={calendar} alt="" /> {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
