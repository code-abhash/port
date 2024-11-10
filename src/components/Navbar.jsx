import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-slate-200 px-6 md:px-16 lg:px-64'>
      <div className='container flex justify-center md:justify-between items-center'>
        <div className='text-3xl font-serif font-extrabold md:inline'>Abhash Raj</div>
        <div className='space-x-7'>
          <a href="#home" className='hover:text-gray-500'>Home</a>
          <a href="#about" className='hover:text-gray-500'>About Me</a>
          <a href="#services" className='hover:text-gray-500'>Skills</a>
          <a href="#project" className='hover:text-gray-500'>Projects</a>
        </div>
        <div className='m-1'>
          <a href="#contact"
            className="inline-block px-2 py-2 text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Connect me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
