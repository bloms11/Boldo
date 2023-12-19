import React from "react";
import Navbar from "./Navbar";
import HeroContents from "./HeroContents";
import Elipse from "../assets/elipse.png";
const Hero = () => {
  return (
    <div className="relative">
      <div className=" flex flex-col w-[90%] mxl:w-[80%] mx-auto">
        <Navbar />
        <HeroContents />
      </div>
      <img
        width={700}
        className="absolute top-0 z-[-100] right-0"
        src={Elipse}
      />
    </div>
  );
};

export default Hero;
