import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogOutButton = () => {
  return (
    <div className='absolute bottom-3'>
        <button>
           <BiLogOut className="w-6 h-6 text-white cursor-pointer"/> 
        </button>
       
    </div>
  )
}

export default LogOutButton