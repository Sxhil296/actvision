import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div className="pr-10">
          <div className="font-bold text-xs text-blue-500 mb-4">
            {" "}
            your e-service partner
          </div>
          <div className="md:text-8xl text-2xl font-bold ">
            SECURITY <br /> SERVICES <br /> 
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-blue-500 rounded-lg mr-4 text-sm">
              Services
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-blue-500 rounded-lg text-sm">
              Contact
            </button>
          </div>
        </div>
        <div className="md:w-[60%] w-[80%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="pt-20">
        <p className="text-center text-xl">
          We have provided security{" "}
          <span className="text-blue-500">
             to 100+ homes and offices.
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2 pt-8"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
