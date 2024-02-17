"use client";

import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


export default function Header({llm, setLLM}) {
  return (
    <header 
      className="m-0 p-6 bg-gray-800 rounded-t-xl flex justify-between min-h-32">

      <div className="flex items-end space-x-3">
        <h1 className="text-gray-300 text-5xl leading-none">MR. Husky</h1>
        <Image src="/image/husky.png" alt="Husky" width={50} height={50} />
      </div>

      <div className="flex items-end">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              className="text-2xl"
            >
              {llm}
            </Button>
          </DropdownTrigger>

          <DropdownMenu 
            aria-label="Static Actions" 
            disabledKeys={[llm]}
            onAction={(key) => setLLM(key)}  
          >
            <DropdownItem 
              key="Llama2" 
              className="text-gray-300">Llama2</DropdownItem>
            <DropdownItem 
              key="CodeLlama" className="text-gray-300">CodeLlama</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      
    </header>
  )
}