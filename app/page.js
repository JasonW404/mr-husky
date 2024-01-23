'use client';

import Header from "./ui/header";
import History from "./ui/history";
import Chat from "./ui/chat";

import { useState } from "react";


export default function Home() {

  const [llm, setLLM] = useState('Llama2');

  // console.log(llm);

  return (
    <main className="bg-gray-600 m-0 p-3 h-screen flex flex-col">

      {/* A duplicated container div for future shadowing */}
      <div className="bg-gray-800 rounded-xl h-full grow flex flex-col overflow-hidden">

        <Header className="" llm={llm} setLLM={setLLM}/>

        <div className="wrapper grow flex overflow-hidden">
          <History className="rounded-bl-xl grow overflow-auto"/>
          <Chat    className="rounded-br-xl grow overflow-auto"/>
        </div>

      </div>
    </main>
  );
}
