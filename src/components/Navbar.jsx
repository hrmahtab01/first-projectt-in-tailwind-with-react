import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='w-container mx-auto'>
      <div className='flex justify-between items-center'>
      <img src="images/Logo.png" alt="logo" />
      <div className='flex'>
      <ul className='flex gap-x-6 '>
            <li className='hover:text-hvc-500'>Home</li>
            <li className='hover:text-red-500'>Our services</li>
            <li className='hover:text-red-500'>About Us</li>
            <li className='hover:text-red-500'>What’s new?</li>
            </ul>
            <button>Contact us</button>

      </div>
      </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

