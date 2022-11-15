import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen w-full'>
        <div className='container m-10 w-4/5'>
          <header className='text-4xl font-bold mb-2'>Latest News</header>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;