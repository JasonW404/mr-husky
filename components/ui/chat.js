'use client';

import { useState } from "react";
import { useRef, useEffect } from "react";

import Idle from "@/components/ui/chat/idle";
import ChatBox from "@/components/ui/chat/chatBox";
import ChatBubble from "@/components/ui/chat/chatBubble";

const axios = require('axios').default;


export default function Chat({ className }) {

  const [chatHistory, setChatHistory] = useState([])

  return (
    <div className={`chat h-full bg-gray-500 pb-3 pt-0 rounded-tl-xl flex flex-col overflow-hidden ${className}`}>
      
      {chatHistory.length == 0 ?
        <Idle className='grow overflow-auto'/>
      :
        <div className='grow overflow-auto'>
          {chatHistory.map(
            (chat, index) => <ChatBubble key={index} role={chat.role} message={chat.message}/>
          )}
        </div>
      }

      <ChatBox className="ml-3 mr-3" chatHistory={chatHistory} setChatHistory={setChatHistory}/>

    </div>
  )
}