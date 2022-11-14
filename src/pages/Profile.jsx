import React from 'react';
import Sidebar from '../components/Sidebar';

function Profile() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen mx-auto my-auto'>
        Profile Content
      </div>
    </div>
  );
}

export default Profile;