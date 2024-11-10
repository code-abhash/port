import React from 'react';
import mypic from './img/230001002.png';

const About = () => {
  return (
    <div className='bg-slate-900 text-slate-200 py-14 px-4'>
      <h1 className='text-5xl font-bold mb-8 ml-20 px-3'>About Me</h1>
      <div className='flex flex-row items-center justify-between max-w-6xl mx-auto'>
        <img 
          src={mypic} 
          alt='mypic' 
          className='w-48 h-48 object-cover border-4 rounded-md transition-transform duration-300 hover:scale-105' 
        />
        <div className='ml-8 text-left'>
          <p>
            Hello! I'm <span className='font-bold'>Abhash Raj</span>, a passionate B.Tech student specializing in <span className='font-bold'>Computer Science Engineering</span> at <span className='font-bold'>IIT Indore</span>. Currently in my second year, I am driven by a profound interest in technology and its ability to solve real-world problems. My journey in the field of computer science began with a fascination for coding and web development, which has only grown as I explore the endless possibilities that technology offers.
            <h2 className='text-2xl font-bold mb-4 mt-2'>My Interests</h2>
            <ul className='list-disc list-inside text-left max-w-2xl mx-auto'>
            <li className='font-bold'>Web Development</li>
            <li className='font-bold'>Machine Learning</li>
            <li className='font-bold'>Finance</li>
        </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
