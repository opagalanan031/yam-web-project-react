import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

function Profile() {
  // TODO: Modify retrieval from auth to user service
  const { user } = useSelector((state) => state.auth);


  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-screen w-full'>
        <div className='container my-20 mx-auto'>
          <div className='container mx-auto lg:w-1/2 sm:w-3/4'>
            <div className='border-2 mx-auto border-black rounded-lg shadow-sm'>
              <div className='text-center py-10 px-4 space-y-2'>
                <header className='text-3xl font-bold mb-5'>
                  User Details
                </header>
                <p>
                  <span className='font-bold'>Email Address: </span>
                  {user.email}
                </p>
                <p>
                  <span className='font-bold'>Username: </span>{user.username}
                </p>
                <p>
                  <span className='font-bold'>First Name: </span>{user.firstName}
                </p>
                <p>
                  <span className='font-bold'>Last Name: </span>{user.lastName}
                </p>
                <p>
                  <span className='font-bold'>Phone: </span>{user.phone ? user.phone : 'xxx-xxx-xxxx'}
                </p>
              </div>
            </div>
          </div>
          {/*TODO: Retrieval of Adress Details*/}
          <div className='container mx-auto mt-10 lg:w-1/2 sm:w-3/4'>
            <div className='border-2 mx-auto border-black rounded-lg shadow-sm'>
              <div className='text-center py-10 px-4 space-y-2'>
                <header className='text-3xl font-bold mb-5'>
                  Address Details
                </header>
                <p>
                  <span className='font-bold'>Address: </span>
                </p>
                <p>
                  <span className='font-bold'>City: </span>
                </p>
                <p>
                  <span className='font-bold'>State: </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;