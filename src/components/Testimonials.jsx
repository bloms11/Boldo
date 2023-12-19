import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../assets/user1.png";
import img2 from "../assets/user2.png";
import img3 from "../assets/user3.png";

const Testimonials = () => {
  const testimonials = [
    {
      title:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      author: "Albus Dumbledore",
      role: "Manager @ Howarts",
      image: img1,
    },
    {
      title:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      author: "Steve Snape",
      role: "Manager @ Slytherin",
      image: img2,
    },
    {
      title:
        "Release facebook responsive web design business model canvas seed money monetization.",
      author: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      image: img3,
    },
  ];
  return (
    <div className="flex items-center justify-center bg-[#0A2640] mt-[4%] py-16">
      <div className="flex flex-col space-y-12 w-[90%] mxl:w-[85%]">
        <div className="flex flex-col md:flex-row w-full justify-between">
          <h1 className="text-white w-[full] md:w-[700px]">
            An enterprise template to ramp up your company website
          </h1>
          <div className="flex mx-auto md:mx-0 mt-6 md:mt-0 items-end gap-x-4">
            <div className="flex items-center cursor-pointer p-3 justify-center rounded-full bg-white text-[#0A2640]">
              <GoArrowLeft size={26} />
            </div>
            <div className="flex items-center cursor-pointer p-3 justify-center rounded-full bg-white text-[#0A2640]">
              <GoArrowRight size={26} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 gap-x-16 md:gap-x-8 mxl:gap-x-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={` ${
                testimonial.image === img2
                  ? "h-[430px]"
                  : testimonial.image === img3
                  ? "h-[390px]"
                  : "h-[350px]"
              } flex bg-white flex-col space-y-14 p-5  rounded-[12px]`}
            >
              <h4 className="text-[24px] leading-[36px]">{`"${testimonial.title}"`}</h4>
              <div className="flex gap-x-3">
                <img src={testimonial.image} />
                <div className="flex flex-col space-y-1">
                  <p>{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
