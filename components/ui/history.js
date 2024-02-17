import { Button, ButtonGroup } from "@nextui-org/react";

import { getChatHistory } from "app/lib/husky-db";

function NewChat({ className, topic, activeChat, setActiveChat }) {
  return (
    <div className={`m-0 p-1 ${className}`}>
      <Button 
        className={`${activeChat === topic ? " bg-gray-500" : "bg-gray-600"} rounded-xl w-full flex flex-row items-center min-h-12 p-2`}
        onPress={() => setActiveChat(topic)}  
      >
        <div className="grow">
          <p className="text-gray-100 text-xl text-left"><strong>New Chat</strong></p>
        </div>
          
        <div size="sm" className="bg-transparent p-0 m-0 min-w-unit-8 inline-flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </Button>
    </div>
  )
}


function HistoryItem({ topic, activeChat, setActiveChat }) {

  let more = false;
  // console.log(more);

  function toggleMore() {
    // console.log("toggleMore");
    setMore(!more);
  }

  function deleteItem() {
    console.log("deleteItem");
  }

  return (
    <div className="m-0 p-1">

      <Button 
        className={`${activeChat === topic ? "bg-gray-500" : "bg-gray-600"} rounded-xl w-full flex flex-row items-center min-h-12 p-2`}
        onPress={() => setActiveChat(topic)}
      >
        <div className="grow">
          <p className="text-gray-100 text-xl text-left">{topic}</p>
        </div>

        <div>
          {more ?
            <ButtonGroup size="sm" >
              {/* ✅ */}
              <Button onPress={deleteItem} size="sm" className="bg-transparent p-0 m-0 min-w-unit-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </Button>
              {/* ❎ */}
              <Button onPress={toggleMore} size="sm" className="bg-transparent p-0 m-0 min-w-unit-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </Button>
            </ButtonGroup>
            :
            // 🗑️
            <Button onPress={toggleMore} size="sm" className="bg-transparent p-0 m-0 min-w-unit-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </Button>
          }
        </div>
      </Button>
    </div>
  )
}

function HistoryItems ({ activeChat, setActiveChat }) {

  return (
    <div>
      <HistoryItem topic="Llama2" activeChat={activeChat} setActiveChat={setActiveChat} />
      <HistoryItem topic="CodeLlama" activeChat={activeChat} setActiveChat={setActiveChat} />
    </div>
  )

}

export default function History({ className, activeChat, setActiveChat }) {
  // console.log(activeChat);

  // const [rows, fields] = await getChatHistory();
  // console.log(rows.keys());

  return (
    <div className={`bg-transparent ${className}`}>

      <NewChat topic="new" activeChat={activeChat} setActiveChat={setActiveChat} />

      <HistoryItems activeChat={activeChat} setActiveChat={setActiveChat} />
    </div>
  )
}