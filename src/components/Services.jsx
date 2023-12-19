import React from "react";
import img1 from "../assets/feature1.png";
import img2 from "../assets/feature2.png";
import img3 from "../assets/feature3.png";
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  const services = [
    { img: img1, title: "Cool feature title" },
    { img: img2, title: "Even cooler feature" },
    { img: img3, title: "Cool feature title" },
  ];
  return (
    <div className="bg-[#0A2640] mt-[4%] flex justify-center items-center py-20 w-full">
      <div className="flex flex-col items-center w-[90%] md:w-[85%] ">
        <p className="text-[20px] text-[white] font-[400] mb-6">Our services</p>
        <h1 className="text-center w-[100%] md:w-[850px] text-white">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <div className="grid grid-cols-1 space-y-6 md:grid-cols-3 mt-[4%] gap-x-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <img src={service.img} />
              <p className="text-[24px] text-white">{service.title}</p>
              <h3 className="flex cursor-pointer w-max items-center text-white py-2 border-b-2 gap-x-4">
                Explore page <FaArrowRight size={22} />{" "}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
