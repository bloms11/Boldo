import React from "react";
import Banner from "../assets/banner.png";
import { MdExpandCircleDown } from "react-icons/md";
const Faqs = () => {
  return (
    <div className="flex flex-col items-center mt-[6%] w-[90%] mxl:w-[75%] mx-auto">
      <img className="w-full" src={Banner} />
      <div className="flex flex-col md:flex-row mt-6 justify-between w-full">
        <h1 className="md:text-[36px] w-full md:w-[45%]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <div className="flex flex-col mt-4 md:mt-0 space-y-3">
          <div className="flex items-center w-full md:w-[400px] border-b-2 py-4 justify-between">
            <p className="w-[80%]">We connect our customers with the best?</p>
            <MdExpandCircleDown color="#0A2640" size={24} />
          </div>
          <div className="flex items-center w-full md:w-[400px] border-b-2 py-4 justify-between">
            <p className="w-[80%]">Android research & development rockstar? </p>
            <MdExpandCircleDown color="#0A2640" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
