'use client';

import { useState, useContext } from "react";

import Header from "components/ui/header";
import History from "@/components/ui/history";
import Chat from "@/components/ui/chat";


export default function Home() {

  const [llm, setLLM] = useState('Llama2');

  // console.log(llm);
  // console.log(activeChat);

  return (
    <main className="bg-gray-700 m-0 p-3 h-screen flex flex-col">
      <div className="bg-gray-800 rounded-xl h-full grow flex flex-col overflow-hidden">

        <Header className="" llm={llm} setLLM={setLLM} />

        <div className="grow flex flex-row overflow-hidden">
          <div className="grow overflow-hidden rounded-br-xl w-[80vw] mt-2">
            <Chat />
          </div>
        </div>

      </div>
    </main>
  );
}
