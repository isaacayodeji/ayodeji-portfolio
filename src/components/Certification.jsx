import React from "react";
import { motion } from "framer-motion";

import { styles } from "../utils/styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certification } from "../utils/constants";

const CertificationCard = ({
  index,
  name,
  issuingOrganization,
  logo,
  date,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-center text-[15px]'>{name}</p>

    <div className='mt-1'>
      <img className="tracking-wider rounded-[10px]" src={image} alt=""/>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {issuingOrganization}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {date}
          </p>
        </div>

        <img
          src={logo}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Certification = () => {
  return (
    <div className={`mt-12 bg-[#100d25] rounded-[20px]`}>
      <div
        className={`bg-[#151030] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid lg:flex gap-7`}>
        {certification.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");
