import React from "react";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import B1 from "../assets/b1.png";
import B2 from "../assets/b2.png";
import B3 from "../assets/b3.png";

const Blog = () => {
  const blogs = [
    {
      image: Blog1,
      post: "Pitch termsheet backing validation focus release.",
      authorImg: B1,
      author: "Chandler Bing",
    },
    {
      image: Blog2,
      post: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      authorImg: B2,
      author: "Rachel Green",
    },
    {
      image: Blog3,
      post: "Beta prototype sales iPad gen-z marketing network effects value proposition",
      authorImg: B3,
      author: "Monica Geller",
    },
  ];
  return (
    <div className="w-[90%] mxl:w-[70%] items-center mx-auto mt-[10%] md:mt-[5%] flex flex-col">
      <p className="text-[20px] text-[grey]">Our Blog</p>
      <h1 className="text-center mt-2">
        Value proposition accelerator product <br /> management venture
      </h1>
      <div className="grid mt-12 grid-cols-1 space-y-20 md:space-y-0 md:grid-cols-3 gap-x-14">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col space-y-3 justify-between">
            <img src={blog.image} />
            <div className="flex gap-x-4">
              <p className="font-[500] text-[#0A2640]">Category</p>
              <p className="text-[grey]">November 22, 2021</p>
            </div>
            <p>{blog.post}</p>
            <div className="flex gap-x-4 items-center">
              <img src={blog.authorImg} />
              <p>{blog.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="font-[700] mt-16 rounded-full py-4 w-max border-[#0A2640] hover:bg-[#0A2640] hover:text-white border-2 text-[#0A2640] px-14">
        Load more
      </button>
    </div>
  );
};

export default Blog;
