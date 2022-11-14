import React from 'react';
import Sidebar from '../components/Sidebar';

function About() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen mx-auto my-auto'>
        About Content
      </div>
    </div>
  );
}

export default About;