import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full p-4 bg-gray-500 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
            <h1 className='font-bold text-3xl text-center text-gray-300'>SIGNUP</h1>
            <form>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>FULLNAME</span>
                  </label>
                  <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-8'/>
                </div>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>USERNAME</span>
                  </label>
                  <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-8'/>
                </div>
                <div>
                  <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>PASSWORD</span>
                  </label>
                  <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-8'/>
                </div>
                <div>
                <label className='label p-1'>
                    <span className='text-base label-text font-semibold'>CONFIRM PASSWORD</span>
                </label>
                <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-8'/>
                </div>
                 
                 <GenderCheckbox/>

                <a href='#' className=' text-md hover:underline hover:text-blue-600 inline-block  text-white'>
                  Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>SignUp</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup