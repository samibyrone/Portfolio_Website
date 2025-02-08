import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className='bg-black text-white px-8 pt-6 md:px-16 lg:px-24'>
        <div className='py-2 flex md:justify-between items-center'>
          <div className='text-4xl font-bold hidden md:inline'>Samibyrone</div>
          <div className='space-x-10 font-bold text-2xl'>
            <a href='#home' className='hover:text-gray-400'>
              Home
            </a>
            <a href='#about' className='hover:text-gray-400'>
              About Me
            </a>
            <a href='#service' className='hover:text-gray-400'>
              Services
            </a>
            <a href='#project' className='hover:text-gray-400'>
              Projects
            </a>
            <a href='#contact' className='hover:text-gray-400'>
              Contact
            </a>
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Connect Me
          </button>
        </div>
      </nav>
    </>
  );
};
