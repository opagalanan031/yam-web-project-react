import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen mx-auto my-auto'>
        Dashboard Content
      </div>
    </div>
  );
}

export default Dashboard;