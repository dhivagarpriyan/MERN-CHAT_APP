import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom';
import useSignup from '../../Hooks/useSIGNUP.js';

const Signup = () => {
    const [inputs,setInputs]=useState({
        fullname:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    });
      
    const { signup } = useSignup();

    const HandleCheckBox = (gender)=>{
        setInputs({...inputs,gender})
    }

    const HandleSubmit =async(e)=>{
        e.preventDefault();
        await signup(inputs)
    }
  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full p-4 bg-gray-500 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
            <h1 className='font-bold text-3xl text-center text-gray-300'>SIGNUP</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>FULLNAME</span>
                  </label>
                  <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-8'
                    value={inputs.fullname}
                    onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
                  />
                </div>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>USERNAME</span>
                  </label>
                  <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-8'
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                  />
                </div>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>PASSWORD</span>
                  </label>
                  <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-8'
                     value={inputs.password}
                     onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                  />
                </div>
                <div>
                <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>CONFIRM PASSWORD</span>
                </label>
                <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-8'
                   value={inputs.confirmPassword}
                   onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
                </div>
                 
                 <GenderCheckbox onCheckBoxChange={HandleCheckBox} selectedGender={inputs.gender}/>

                <Link to="/login" className=' text-md hover:underline hover:text-blue-600 inline-block  text-white'>
                  Already have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>SignUp</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup