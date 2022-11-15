import React from 'react';
import Sidebar from '../components/Sidebar';

function Schedule() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen w-full'>
        Schedule Content
      </div>
    </div>
  );
}

export default Schedule;