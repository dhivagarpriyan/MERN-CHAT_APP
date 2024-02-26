import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../Hooks/useLogout';

const LogOutButton = () => {
    const {loading,logout}=useLogout();
  return (
    <div className='absolute bottom-1 mt-2'>
      {
         !loading?(
          <button>
            <BiLogOut className="w-6 h-6 text-white cursor-pointer"
              onClick={logout}
            /> 
          </button>
       ):(
          <span className="loading loading-spinner loading-lg"></span>
         )
      }
       
       
    </div>
  )
}

export default LogOutButton