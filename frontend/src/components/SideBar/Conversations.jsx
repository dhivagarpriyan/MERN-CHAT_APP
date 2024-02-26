import React, { useEffect } from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from "../../utils/emojis";
import useGetConversation from '../../Hooks/useGetConversation'

const Conversations = () => {
  const{loading,conversations}=useGetConversation();
  
  console.log(conversations); 

 
  return (
    <div className='py-2 flex flex-col overflow-auto mb-6'>
    {conversations.map((conversation, idx) => (
      <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length - 1}
      />
    ))}

    {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
  </div>
  )
}

export default Conversations 

