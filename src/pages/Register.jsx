import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: ''
  });

  const { firstName, lastName, email, username, password, confirmPassword, address, city, state} = formData;

  // const options = [
  //   { value: 'AK', label: 'AK' }, { value: 'AL', label: 'AL' }, { value: 'AR', label: 'AR' }, { value: 'AS', label: 'AS' }, { value: 'AZ', label: 'AZ' },
  //   { value: 'CA', label: 'CA' }, { value: 'CO', label: 'CO' }, { value: 'CT', label: 'CT' }, { value: 'DC', label: 'DC' }, { value: 'DE', label: 'DE' },
  //   { value: 'FL', label: 'FL' }, { value: 'GA', label: 'GA' }, { value: 'GU', label: 'GU' }, { value: 'HI', label: 'HI' }, { value: 'IA', label: 'IA' },
  //   { value: 'ID', label: 'ID' }, { value: 'IL', label: 'IL' }, { value: 'IN', label: 'IN' }, { value: 'KS', label: 'KS' }, { value: 'KY', label: 'KY' },
  //   { value: 'LA', label: 'LA' }, { value: 'MA', label: 'MA' }, { value: 'MD', label: 'MD' }, { value: 'ME', label: 'ME' }, { value: 'MN', label: 'MN' },
  //   { value: 'MI', label: 'MI' }, { value: 'MN', label: 'MN' }, { value: 'MO', label: 'MO' }, { value: 'MS', label: 'MS' }, { value: 'MT', label: 'MT' },
  //   { value: 'NC', label: 'NC' }, { value: 'ND', label: 'ND' }, { value: 'NE', label: 'NE' }, { value: 'NH', label: 'NH' }, { value: 'NJ', label: 'NJ' },
  //   { value: 'NM', label: 'NM' }, { value: 'NV', label: 'NV' }, { value: 'NY', label: 'NY' }, { value: 'OH', label: 'OH' }, { value: 'OK', label: 'OK' },
  //   { value: 'OR', label: 'OR' }, { value: 'PA', label: 'PA' }, { value: 'PR', label: 'PR' }, { value: 'RI', label: 'RI' }, { value: 'SC', label: 'SC' },
  //   { value: 'SD', label: 'SD' }, { value: 'TN', label: 'TN' }, { value: 'TX', label: 'TX' }, { value: 'UT', label: 'UT' }, { value: 'VA', label: 'VA' },
  //   { value: 'VI', label: 'VI' }, { value: 'VT', label: 'VT' }, { value: 'WA', label: 'WA' }, { value: 'WI', label: 'WI' }, { value: 'WV', label: 'WV' }, 
  //   { value: 'WY', label: 'WY' },
  // ]

  const states =  [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        username,
        password,
        address,
        city,
        state
      }

      console.log(userData);
        
      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          toast.success('Registration successful!');
          navigate('/');
        })
        .catch(toast.error);
    }
  }


  return (
    <>
      <div className='mx-auto justify-center sm:mt-20 lg:mt-40'>
        <header>
          <p className='text-3xl mb-5 mx-auto text-center font-bold font-serif'>
            Create an Account
          </p>
        </header>
        <form onSubmit={onSubmit}>
          <div className='grid lg:grid-cols-2 w-3/4 mx-auto xl:py-3 place-content-center'>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='First Name'
              required
            />
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='Last Name'
              required
            />
          </div>
          <div className='grid lg:grid-cols-2 w-3/4 mx-auto xl:py-3 place-content-center'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='Email'
              required
            />
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='Username'
              required
            />
          </div>
          <div className='grid lg:grid-cols-2 w-3/4 mx-auto xl:py-3 place-content-center'>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              className='form-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='Password'
              required
            />
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              className='form-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='Confirm Password'
              required
            />
          </div>
          <div className='grid grid-cols-1 md:px-4 lg:px-5 lg:w-3/4 mx-auto xl:py-3 text-center'>
            <input
              type='text'
              id='address'
              name='address'
              value={address}
              onChange={onChange}
              className='from-input border-2 my-2.5 py-3 w-80 lg:w-full rounded-full mx-auto text-center'
              placeholder='Address'
              required
            />
          </div>
          <div className='grid lg:grid-cols-2 w-3/4 mx-auto xl:py-3 place-content-center'>
            <input
              type='text'
              id='city'
              name='city'
              value={city}
              onChange={onChange}
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
              placeholder='City'
              required
            />
            <select
              id='state'
              name='state'
              onChange={onChange}
              placeholder='State'
              required
              className='from-input border-2 my-2.5 w-80 lg:w-11/12 rounded-full mx-auto text-center'
            >
              <option selected disabled>
                Select State...
              </option>
              {states.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='py-4 grid place-content-center'>
            <button
              type='submit'
              className='bg-blue-500 px-4 py-2 sm:w-48 lg:w-72 rounded font-bold hover:bg-blue-400 hover:text-white'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;