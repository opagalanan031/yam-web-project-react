import React from 'react';
import Sidebar from '../components/Sidebar';

function Schedule() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen mx-auto my-auto'>
        Schedule Content
      </div>
    </div>
  );
}

export default Schedule;