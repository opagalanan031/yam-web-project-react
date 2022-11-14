import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password
    }

    dispatch(login(userData))
      .unwrap().then((user) => {
        navigate('/dashboard');
      })
      .catch(toast.error);
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className='mx-auto justify-center sm:mt-20 lg:mt-40'>
        <header>
          <p className='text-3xl mb-5 mx-auto text-center font-bold font-serif'>Login here</p>
        </header>
        <form onSubmit={onSubmit}>
          <div className='grid place-content-center'>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 rounded-full text-center'
              placeholder='Username'
              required
            />
          </div>
          <div className='grid place-content-center'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              className='form-input border-2 my-2.5 w-80 rounded-full text-center'
              placeholder='Password'
              required
            />
          </div>
          <div className="py-4 grid place-content-center">
            <button type="submit" className='bg-blue-500 px-4 py-2 w-32 rounded font-bold hover:bg-blue-400 hover:text-white'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;