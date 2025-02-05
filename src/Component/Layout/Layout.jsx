import React from "react";
import MyImage from "../../assets/images/page.png";

export const Layout = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={MyImage}
        alt=''
        className='mx-auto mb-8 w-48 h-48 rounded-full  object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4x1 font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Samson Ibironke
        </span>
        ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I Specialize in building modern and responsive web applications
      </p>
      <div className='mt-8 space-x-4'>
        <button className="className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect With Me
        </button>
        <button className="className='bg-gradient-to-r from-blue-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};
