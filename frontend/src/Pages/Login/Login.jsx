import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../Hooks/useLogin';

const Login = () => {
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");

    const{loading,login}=useLogin();

    const HandleLogin=async(e)=>{
        e.preventDefault();
       await login(username,password);
    }
  return (
    <div className=' flex flex-col justify-center items-center min-w-96'>
        <div className=' w-full p-4 bg-gray-500 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
            <h1 className="font-bold text-3xl text-center text-gray-300">LOGIN</h1>
           <form  onSubmit={HandleLogin}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>USERNAME</span>
                </label>
                <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
                   value={username}
                   onChange={(e)=>setUserName(e.target.value)}
                />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>PASSWORD</span>
                </label>
                <input type='password' placeholder='Password' className='w-full input input-bordered h-10'
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <Link to={"/signup"} className=' text-md hover:underline hover:text-blue-600 inline-block mt-2'>
                Don't have an account?
            </Link>

            <div>
                <button className='btn btn-block btn-sm mt-2'
                
                >Login</button>
            </div>
           </form>
        </div>
    </div>
  )
}

export default Login