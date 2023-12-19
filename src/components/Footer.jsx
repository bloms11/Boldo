import React from "react";
import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 smd:grid-cols-3 space-y-6 md:grid-cols-4 w-[90%] md:w-[80%] mx-auto gap-x-20 mt-[5%]">
        <div className="flex flex-col">
          <img width={170} src={Logo} />
          <p className="text-[#777] mt-8">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex flex-col">
          <h3>Landings</h3>
          <div className="flex text-[#777] space-y-8 flex-col mt-8">
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3>Company</h3>
          <div className="flex text-[#777] space-y-8 flex-col mt-8">
            <p>Home</p>
            <div className="flex gap-x-2 items-center">
              Careers
              <div className="flex rounded-full p-1 text-[11px] font-[600] px-2 items-center justify-center text-[#0A2640] bg-[#65E4A3]">
                Hiring!
              </div>
            </div>
            <p>Services</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3>Resources</h3>
          <div className="flex text-[#777] space-y-8 flex-col mt-8">
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
      <p className="text-[#777] mt-5 ml-[10%]">All right reserved.</p>
    </>
  );
};

export default Footer;
