import React from "react";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter, 
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsPinMapFill
} from "react-icons/bs";
import { Link } from "react-scroll";



const Contact = () => {
  return (
    <div>
      
      {/* <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-sm leading-7 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          minus doloribus voluptatem illo velit quia eum aperiam! Repudiandae,
          tempore. Lorem ipsum dolor sit amet.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold">
            Subscribe
          </button>
        </motion.form>
      </div> */}
      <div id="contact" className="flex container mx-auto justify-center items-center min-h-screen">
          <div className="flex flex-col space-y-6 bg-blue-500 w-full max-w-6xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div> 
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-blue-200 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi itaque eveniet distinctio deserunt laborum, alias ut expedita perferendis quas libero,</p>
                </div>
              <div className="flex flex-col space-y-6 text-blue-200">
              <div className="inline-flex space-x-2 items-center">
                  <BsFillTelephoneFill size={20}  />
                  <span>+91 34848247</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <BsFillEnvelopeFill size={20}  />
                  <span>+actvisionelectronics@gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <BsPinMapFill size={20}  />
                  <span>Dubai</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link> <BsFacebook  size={20} /></Link>
                <Link><BsInstagram  size={20} /></Link>
                <Link><BsTwitter size={20}  /></Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-40 h-40 bg-sky-400 rounded-full z-0 -right-28 -top-28 "></div>
              <div className="absolute w-40 h-40 bg-sky-400 rounded-full -left-28 -bottom-16"></div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-black md:w-80 relative z-10">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-sm">Your Name</label>
                    <input type="text"  placeholder="Your Name" className="ring-1 ring-gray-100 w-full rounded-md space-x-4 space-y-2 outline-none focus:ring-2 focus:ring-blue-200 mt-2 placeholder:p-2"/>
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">Your Email</label>
                    <input type="text"  placeholder="Your Email" className="ring-1 ring-gray-100 w-full rounded-md space-x-4 space-y-2 outline-none focus:ring-2 focus:ring-blue-200 mt-2 placeholder:p-2"/>
                  </div>
                  <div>
                  <label htmlFor="" className="text-sm">Your Message</label>
                    <textarea type="text" rows={4} placeholder="Your Message" className="ring-1 ring-gray-100 w-full rounded-md space-x-4 space-y-2 outline-none focus:ring-2 focus:ring-blue-200 mt-2 placeholder:px-2"/>
                  </div>
                    <button className="inline-block self-end text-white rounded-lg bg-blue-500 text-sm font-bold px-6 py-2 uppercase">SEND</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
