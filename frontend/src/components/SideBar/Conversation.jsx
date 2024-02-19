import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className=' flex items-center hover:bg-sky-500 gap-2 p-2 py-1 cursor-pointer '>
        <div className="avatar online">
           <div className="w-12 rounded-full">
             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
           </div>
        </div>
        <div className=' flex justify-between flex-1'>
            <p className='text-gray-300 font-semibold'>DHIVAGAR MK</p>
            <span>⚽</span>
        </div>
    </div>
    <div  className='divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation