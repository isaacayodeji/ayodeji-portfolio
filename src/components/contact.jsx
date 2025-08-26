import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import EmailResponseModal from "./Email-response-modal";
import { styles } from "../utils/styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from "../components/canvas/Earth";
import Github from "../images/icons/github.svg";
import Linkedin from "../images/icons/linkdin.svg";
import Coffee from "../images/icons/coffee.svg";

const Contact = () => {
  const formRef = useRef();
  // Initialize the useForm hook
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_u63fa39",
        "template_1brl8ej",
        {
          from_name: form.name,
          to_name: "Ayodeji Olu Ewulo",
          from_email: form.email,
          to_email: "isaacayodejiewulotan@gmail.com",
          message: form.message,
        },
        "llwIs7b1PhTYdLGwO"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setStatus(response.status);
          setOpen(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
          setStatus(500);
          setOpen(true);
        }
      );
  };
  return (
    <div>
      <div
        className={`xl:mt-12 flex lg:px-48 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        id="contact"
      >
        <EmailResponseModal open={open} setOpen={setOpen} status={status} />
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={sendMail}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col 2xl:w-[30rem]">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col 2xl:w-[30rem]">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col 2xl:w-[30rem]">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="lg:px-56 py-4">
        <div className="flex justify-between items-center underline">
          <section className="flex gap-3">
            <a
              className="icons rounded-[50%] hover:bg-[#42446E] hover:scale-90 hover:translate-y-1"
              href="https://github.com/isaacayodeji"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              className="icons rounded-[50%] hover:bg-[#42446E] hover:scale-90 hover:translate-y-1"
              href="https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            {/* <a
              className="icons rounded-[50%] hover:bg-[#42446E] hover:scale-90 hover:translate-y-1"
              href="#/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="twitter" />
            </a> */}
          </section>
          <section className="cursor-pointer">
            <a
            className="flex gap-1 items-center"
              href="https://buymeacoffee.com/isaacayoden"
              target="_blank"
              rel="noreferrer"
            >
              Buy me coffee
              <img src={Coffee} alt="" className="pb-2"/>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
