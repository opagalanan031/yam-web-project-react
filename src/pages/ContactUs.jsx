import React from 'react';
import Sidebar from '../components/Sidebar';

function ContactUs() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen w-full'>
        Contact Us Content
      </div>
    </div>
  );
}

export default ContactUs;