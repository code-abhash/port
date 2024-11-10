import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='bg-slate-900 text-slate-200 py-14 px-4'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-5xl font-bold mb-8'>Contact</h1>
        
        <div className='flex space-x-8 mb-6'>
          <a href='https://www.instagram.com/abhash__raj/' target='_blank' rel='noopener noreferrer' className='text-purple-400 hover:underline'>
            <FontAwesomeIcon icon={faInstagram} className='text-4xl' />
          </a>
          
          <a href='https://www.linkedin.com/in/abhash-raj-5486402a5/' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
            <FontAwesomeIcon icon={faLinkedin} className='text-4xl' />
          </a>
          
          <a href='https://www.facebook.com/profile.php?id=100086664092936' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
            <FontAwesomeIcon icon={faFacebook} className='text-4xl' />
          </a>
          <a href='abhashraj751@gmail.com' target='_blank' rel='noopener noreferrer' className='text-red-400 hover:underline'>
          <FontAwesomeIcon icon={faEnvelope}  className='text-4xl' />
          </a>
        </div>
        
        <p className='text-lg mb-4'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-red-400' />
          Email: <a href='mailto:abhashraj069@gmail.com' className='hover:underline'>abhashraj069@gmail.com</a>
        </p>

        <p className='text-lg mb-4'>
          <FontAwesomeIcon icon={faPhone} className='mr-2 text-green-400' />
          Phone: <a href='tel:875770XXXX' className='hover:underline'>875770XXXX</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
