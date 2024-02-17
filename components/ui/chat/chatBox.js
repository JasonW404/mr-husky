'use client'; 

import { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";

const axios = require('axios');

export default function ChatBox({ className, chatHistory, setChatHistory }) {

  const [prompt, setPrompt] = useState("")

  const askQuestion = async () => {
    setPrompt("")

    setChatHistory(prevChatHistory => [
      ...prevChatHistory, 
      {
        role: "user",
        message: prompt
      }
    ])

    const data = {
      "model": "llama2",
      "messages": [
        {
          "role": "user",
          "content": prompt.toString()
        }
      ],
      "stream": false
    }
    // console.log(data)

    axios.post('http://localhost:11434/api/chat', data)
      .then(function (response) {
        // handle success
        console.log(response);
        setChatHistory(prevChatHistory => [
          ...prevChatHistory, 
            {
              role: "bot",
              message: response.data.message.content
            }
          ])
        }
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // Handle Enter key press event
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent newline in textarea
      askQuestion(); // Call askQuestion function when Enter is pressed
    }
  };

  return (
    <div className={`m-0 p-0 flex relative ${className}`}>
      <Textarea
        label="You"
        variant="flat" minRows={1} maxRows={6} radius="md" color="bg-gray-500"
        className="text-gray-100 bg-gray-500 w-full rounded-xl"
        value={prompt} onValueChange={setPrompt} 
        onKeyDown={handleKeyPress} //Enable Enter key press event
      ></Textarea>

      <div className="absolute bottom-2 right-2">
        <Button
          variant="light" radius="md"
          isIconOnly
          onClick={askQuestion}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </Button>
      </div>

    </div>
  )
}