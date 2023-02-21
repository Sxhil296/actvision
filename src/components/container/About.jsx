import React from "react";
import { Link } from "react-scroll";
import about from "../../assets/camAbout.jpg";


const About = () => {
  return (
    <div className="container mx-auto pt-20 md:mt-40  pb-28 md:mb-20" id="about">
      
      <div className="md:mb-16 sm:mb-14 md:text-[100px] sm:text-8xl text-4xl font-bold text-white ml-6 mb-6">About Us</div>
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[2px] border-solid border-blue-500 rounded-lg md:w-[550px] sm:w-[500px] w-[340px] md:ml-10">
          <img src={about} alt="/" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] md:text-5xl mb-5 mx-10 md:ml-16">
            We provide the <br /> best{" "}
            <span className="text-blue-500">security services.</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4 mx-10 md:ml-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          
          <Link to='/services'><button className="py-3 px-6 text-sm border border-solid border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-bold mx-10 md:ml-16">
            Know More
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
