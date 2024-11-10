import React, { useState } from 'react';
import mypic from './img/mypic.jpg';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  return (<>
    <div className='bg-slate-900 text-slate-200 text-center py-14'>
      <img 
        src={mypic} 
        alt='mypic' 
        className='mx-auto mb-8 w-48 h-48 object-cover border-none rounded-full hover:scale-105 transition-transform duration-300' 
      />
      <h1 
        className={`font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent 
          transition-transform duration-300 ${isHovered ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className='text-5xl underline'>ABHASH RAJ</p>
        <span className='block text-2xl'>CSE, 2nd Year (B.Tech), IIT INDORE</span>
       
        
      </h1>
      <a 
          href='https://drive.usercontent.google.com/u/0/uc?id=1mOkEk9fRe8GX8J8Fr94eHIzq0dWJ9bEw&export=download'
          download 
          className="inline-block px-4 py-2 mr-8 mt-4 text-white font-semibold text-lg border-2 border-purple-600 rounded-full bg-transparent hover:bg-purple-600 hover:scale-105 cursor-pointer transition-all duration-300"
        >
          Download CV
        </a>
        <a href="#contact"
            className="inline-block px-2 py-2 text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Connect me
          </a>
    </div>
    
    </>
    
  );
}

export default Hero;
