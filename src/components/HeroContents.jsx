import React from "react";
import HeroImage from "../assets/heroimage.png";
import Logo from "../assets/Logo.png";
import Presto from "../assets/presto.png";
import Pres from "../assets/pres.png";
import Boldo from "../assets/boldo.png";
const HeroContents = () => {
  return (
    <div className="mt-2 md:mt-6">
      <div className="grid-cols-1 grid md:grid-cols-2 gap-x-10">
        <div className="flex justify-end space-y-8 flex-col">
          <h1>Save time by building fast with Boldo Template</h1>
          <p className="text-[#777]">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex gap-x-4 mx-auto md:mx-0">
            <button className="font-[700] rounded-full py-4 px-6 bg-[#0A2640] text-[white] md:px-14">
              Buy template
            </button>
            <button className="font-[700] rounded-full py-4 px-6 border-[#0A2640] border-2 text-[#0A2640] md:px-14">
              Explore
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <img width={550} src={HeroImage} />
        </div>
      </div>
      <div className="grid gap-x-10 grid-cols-3 md:flex items-center w-[100%]  md:w-[95%] mx-auto mt-[9%]  md:justify-between">
        <img width={160} className="mb-4" src={Logo} />
        <img width={150} className="mb-4" src={Presto} />
        <img width={160} className="mb-4" src={Logo} />
        <img width={150} className="mb-4" src={Presto} />
        <img width={160} className="mb-4" src={Boldo} />
        <img width={120} className="mb-4" src={Pres} />
      </div>
    </div>
  );
};

export default HeroContents;
