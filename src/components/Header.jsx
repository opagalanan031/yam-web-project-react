import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice'
import { FaBars } from 'react-icons/fa';

function Header() {
  const [displayMenu, setDisplayMenu] = useState('none');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    if(displayMenu === 'none') {
      setDisplayMenu('block');
    } else {
      setDisplayMenu('none');
    }
  }

  const onLogout = () => {
    dispatch(logout());
    setDisplayMenu('none');
    navigate('/');
  }

  return (
    <>
      <nav className='navbar relative shadow-lg bg-blue-600 text-neutral-content'>
        <div className='flex max-w-6xl mx-auto py-5'>
          <div className='flex-none px-2 mx-2 hover:text-white'>
            <Link to='/' className='text-3xl font-bold align-middle'>
              Young Adults Ministry
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2 my-auto'>
            {user ? (
              <>
                <div className='hidden lg:flex justify-end items-center'>
                  <button
                    className='mx-5 font-bold hover:text-white'
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </div>
                <div className='lg:hidden flex justify-end my-auto hover:text-white'>
                  <button id='menu-btn' onClick={onClick}>
                    <FaBars />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='hidden lg:flex justify-end items-center'>
                  <Link
                    to='/register'
                    className='mx-5 font-bold hover:text-white'
                  >
                    Register
                  </Link>
                  <Link to='/login' className='mx-5 font-bold hover:text-white'>
                    Login
                  </Link>
                </div>
                <div className='lg:hidden flex justify-end my-auto hover:text-white'>
                  <button id='menu-btn' onClick={onClick}>
                    <FaBars />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className='lg:hidden'>
            <div
              id='menu'
              className='absolute flex-col hidden items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:self-center left-6 right-6 drop-shadow-md'
            >
              <Link to='/register' className='mx-5 font-bold hover:text-white'>
                Register
              </Link>
              <Link to='/login' className='mx-5 font-bold hover:text-white'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ display: displayMenu }}>
        <div className='lg:hidden bg-gray-200 py-8 text-center shadow-lg'>
          {user ? (
            <>
              <div className='text-center space-y-5'>
                <div className='font-bold'>
                  <Link to='/dashboard' className='hover:text-blue-500' onClick={onClick}>
                    Dashboard
                  </Link>
                </div>
                <div className='font-bold'>
                  <Link to='/profile' className='hover:text-blue-500' onClick={onClick}>
                    Profile
                  </Link>
                </div>
                <div className='font-bold'>
                  <Link to='/about' className='hover:text-blue-500' onClick={onClick}>
                    About
                  </Link>
                </div>
                <div className='font-bold'>
                  <Link to='/schedule' className='hover:text-blue-500' onClick={onClick}>
                    Schedule
                  </Link>
                </div>
                <div className='font-bold'>
                  <Link to='/contact-us' className='hover:text-blue-500' onClick={onClick}>
                    Contact Us
                  </Link>
                </div>
                <button
                  className='mx-5 font-bold hover:text-blue-500'
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to='/register'
                className='grid mx-5 font-bold hover:text-blue-500 mb-4'
                onClick={onClick}
              >
                Register
              </Link>
              <Link
                to='/login'
                className='grid mx-5 font-bold hover:text-blue-500'
                onClick={onClick}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;