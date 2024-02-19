import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className=' flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
      <SideBar />
      <MessageContainer/>
    </div>
  )
}

export default Home