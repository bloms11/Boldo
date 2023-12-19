import React from "react";
import WomanChart from "../assets/womanchart.png";
import { TbLeaf } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi2";
import { TbSunHigh } from "react-icons/tb";
const Connect = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between mt-[4%] w-[90%] mxl:w-[80%] mx-auto">
      <div className="flex flex-col w-[100%] md:w-[47%] justify-end space-y-8 mb-[14%]">
        <h4 className="md:text-[36px] md:leading-[56px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h4>
        <div className="flex flex-col space-y-6">
          <div className="flex shadow items-center gap-x-5 w-[100%] md:w-[400px] mxl:w-[450px] p-5 bg-[#0A2640] text-white rounded-[4px]">
            <TbLeaf size={24} />{" "}
            <p className="font-[600]">
              We connect our customers with the best.
            </p>
          </div>
          <div className="flex shadow items-center gap-x-5 w-[100%] md:w-[400px] mxl:w-[450px] hover:bg-[#0a2640] hover:text-white p-5  rounded-[4px]">
            <HiOutlineEye size={24} />{" "}
            <p className="font-[600]">Advisor success customer launch party.</p>
          </div>
          <div className="flex shadow items-center gap-x-5 w-[100%] md:w-[400px] mxl:w-[450px] hover:bg-[#0a2640] hover:text-white  p-5 rounded-[4px]">
            <TbSunHigh size={24} />{" "}
            <p className="font-[600]">Business-to-consumer long tail.</p>
          </div>
        </div>
      </div>

      <div className=" flex w-[100%] md:w-[45%]">
        <img className="w-full" src={WomanChart} />
      </div>
    </div>
  );
};

export default Connect;
