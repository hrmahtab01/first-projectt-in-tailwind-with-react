import React, { useState } from 'react';

const Navbar = () => {
  
  

  return (
    <>
      <div className={`${darkmode && 'dark'}`}>
        <nav className={darkmode ? 'dark:bg-black' : ''}>
          <div className='w-container mx-auto'>
            <div className='flex justify-between items-center dark:text-[#FFCC00]'>
              <img src="images/Logo.png" alt="logo" />
              <div className='flex items-center gap-24'>
                <ul className='flex gap-x-6'>
                  <li className='hover:text-red-500'>Home</li>
                  <li className='hover:text-red-500'>Our services</li>
                  <li className='hover:text-red-500'>About Us</li>
                  <li className='hover:text-red-500'>What’s new?</li>
                </ul>
                <button className='ml-10px'>Contact us</button>
                <button className='w-16 h-16 bottom-16 right-16 bg-[#FFCC00] dark:bg-teal-500 rounded-full dark:text-black font-semibold ml-10px' onClick={toggleDarkmode}>
                  {darkmode ? "LGT" : "DRK"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
