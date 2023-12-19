import React from "react";
import ManChart from "../assets/manchart.png";
import { GoCheckCircleFill } from "react-icons/go";
const Income = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-16 mt-[4%] w-[90%] mxl:w-[80%] mx-auto">
      <div className=" flex w-[100%] md:w-[40%]">
        <img className="w-full" src={ManChart} />
      </div>
      <div className="flex w-[100%] md:w-[45%] mb-[7%] justify-end space-y-6 flex-col ">
        <h4 className="text-[30px] md:text-[36px] md:leading-[56px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h4>
        <div className="flex flex-col space-y-4">
          <div className="flex gap-x-4 items-center">
            <GoCheckCircleFill color="#0A2640" size={26} />
            <p className="text-[20px] leading-[32px] text-black">
              We connect our customers with the best.
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <GoCheckCircleFill color="#0A2640" size={26} />
            <p className="text-[20px] leading-[32px] text-black">
              Advisor success customer launch party.
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <GoCheckCircleFill color="#0A2640" size={26} />
            <p className="text-[20px] leading-[32px] text-black">
              Business-to-consumer long tail.
            </p>
          </div>
        </div>
        <button className="font-[700] w-max rounded-full py-4 bg-[#0A2640] text-[white] hover:bg-white hover:text-[#0A2640] border-2 border-[#0A2640] px-14">
          Start now
        </button>
      </div>
    </div>
  );
};

export default Income;
