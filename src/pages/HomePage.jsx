import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className='lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-10 sm:py-12 sm:px-10 lg:py-0 lg:px-20 sm:my-10 lg:my-0 h-screen'>
        <div className="text-center mx-auto my-auto">
          <img src="https://parkforestbaptist.org/wp-content/uploads/2019/10/YAM-Graphic-e1571669386998.jpg" 
            alt='yam' className='rounded-lg mx-auto' /> 
          <p className="invisible lg:visible mt-5 font-bold text-3xl">Welcome to the Young Adults Ministry!</p>
        </div>
        <div className='text-center lg:mx-auto my-auto lg:w-3/4'>
          <div className='border border-4 border-black rounded-2xl divide-y-4 divide-black mx-auto'>
            <div className='xl:flex justify-center py-10'>
              <div className='mx-3 py-2 font-semibold'>
                Don't have an account?
              </div>
              <div className="py-2">
                <Link to='/register' className='border-2 border-black rounded-lg px-3 py-2 bg-blue-500 font-bold hover:bg-blue-400 hover:text-white hover:border-gray-300'>Register Here</Link>
              </div>
            </div>
            <div className='xl:flex justify-center py-10'>
              <div className='mx-3 py-2 font-semibold'>
                Already have an account?
              </div>
              <div className="py-2">
                <Link to='/login' className='border-2 border-black rounded-lg px-3 py-2 bg-blue-500 font-bold hover:bg-blue-400 hover:text-white hover:border-gray-300'>Login Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;