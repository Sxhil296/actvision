import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
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
    <div className="container mx-auto pb-30 pt-24 md:pt-48" id="home">
      <div className="md:flex items-center justify-center">
        <div className="md:mr-10 mx-6">
          <div className="md:text-8xl sm:text-6xl text-3xl font-bold ">
            SECURITY <br /> SERVICES <br /> 
          </div>
          <p className="text-sm sm:text-xl leading-7 text-gray max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <Link to="services" smooth duration={500}>
            <button className="px-6 py-3 font-bold text-white bg-blue-500 rounded-lg mr-4 text-sm">
              Services
            </button>
            </Link>
           <Link to="contact" smooth duration={500}> <button className="px-6 py-3 font-bold border border-solid border-blue-500 rounded-lg text-sm">
              Contact
            </button></Link>
          </div>
        </div>
        <div className="md:w-[60%] w-[80%] md:ml-10">
          <img src={hero} alt="" />
        </div>
      </div>
      {/* <div className="pt-20">
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
      </div> */}
    </div>
  );
};

export default Home;
