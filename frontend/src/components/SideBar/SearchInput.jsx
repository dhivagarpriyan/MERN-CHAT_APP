import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className=' flex items-center gap-2 py-2'>
        
          <input type='text' placeholder='SEARCH...' className='h-10 px-3 py-2 rounded-full'/>
          <button className=' btn btn-circle bg-sky-500 text-white outline-none'>
            <IoSearchSharp  className='w-6 h-6 outline-none'/>
          </button>
        
    </form>
  )
}

export default SearchInput