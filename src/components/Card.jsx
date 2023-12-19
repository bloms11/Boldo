import React from "react";
import Elipse2 from "../assets/elipse2.png";
const Card = () => {
  return (
    <div className="relative mt-[5%] py-16 items-center rounded-[12px] w-[90%] md:w-[80%] mx-auto flex flex-col bg-[#0A2640]">
      <h1 className="text-center z-10  text-white">
        An enterprise template to ramp <br /> up your company website
      </h1>
      <div className="flex flex-col md:flex-row z-[100] gap-x-4 mt-12">
        <input
          placeholder="Your email address"
          className="bg-white  md:w-[400px] outline-none text-black rounded-full p-2 px-8 py-4 md:py-0"
        />
        <div className="font-[700] mt-4 mx-auto  md:mt-0 rounded-full py-4 w-max  text-[#0A2640] bg-[#65E4A3] px-14">
          Start now
        </div>
      </div>
      <img width={900} src={Elipse2} className="absolute top-0  right-0" />
    </div>
  );
};

export default Card;
