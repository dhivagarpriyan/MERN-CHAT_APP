import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations'
import LogOutButton from './LogOutButton';


const SideBar = () => {
  return (
    < div className='px-2 flex flex-col  border-r border-slate-500 '>
        
        <SearchInput/>
        <div className='divider '/>
        <Conversations />
        <LogOutButton/>
        
        
    </div>
  )
}

export default SideBar