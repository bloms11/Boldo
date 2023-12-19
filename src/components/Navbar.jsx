import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-7 md:py-14 flex justify-between items-center">
        <img className="w-[100px] md:w-auto" src={Logo} />
        <div className="hidden md:flex items-center gap-x-[40px]">
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Product
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Services
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            About
          </p>
          <button className="border-[#0A2640] text-[#0A2640] font-[600] border-2 p-2 px-10 rounded-[24px]">
            Log In
          </button>
        </div>
        <RiMenu3Fill
          onClick={() => setOpen(!open)}
          className="flex md:hidden"
          color="#0A2640"
        />
      </div>

      {open && (
        <div className="flex border-2 p-2 flex-col space-y-4">
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Product
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Services
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            About
          </p>
          <button className="border-[#0A2640] text-[#0A2640] font-[600] border-2 p-2 px-10 rounded-[24px]">
            Log In
          </button>
        </div>
      )}
    </>
  );
};
export default Navbar;
