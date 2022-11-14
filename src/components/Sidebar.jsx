import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='hidden lg:block lg:w-60 h-screen bg-gray-100 shadow-lg'>
      <div className='text-center py-5 bg-red-500 shadow font-bold uppercase text-white'>
        Pages
      </div>
      <div className='pt-5 text-center space-y-5'>
        <div className='font-bold'>
          <Link to='/dashboard' className='hover:text-blue-500'>Dashboard</Link>
        </div>
        <div className='font-bold'>
          <Link to='/profile' className='hover:text-blue-500'>Profile</Link>
        </div>
        <div className='font-bold'>
          <Link to='/about' className='hover:text-blue-500'>About</Link>
        </div>
        <div className='font-bold'>
          <Link to='/schedule' className='hover:text-blue-500'>Schedule</Link>
        </div>
        <div className='font-bold'>
          <Link to='/contact-us' className='hover:text-blue-500'>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;