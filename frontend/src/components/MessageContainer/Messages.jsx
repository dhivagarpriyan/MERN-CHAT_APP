import { useEffect, useRef } from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessage";
import useListenMessages from "../../Hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (!loading && messages && messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [loading, messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages?.length > 0 && !loading && (
        <>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          <div ref={lastMessageRef}></div>
        </>
      )}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && !messages?.length && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
