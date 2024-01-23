'use client';

import { Image } from "@nextui-org/react"

function Avatar({ src }) {
  return (
    <Image
      src={src}
      width={48}
      alt="MR. Husky"
      className="rounded-xl"
    />
  )
}

function Bot({ content }) {

  return (
    <div className="w-full flex mb-3">
      <div className="max-w-5/6 flex p-3">

        <div className="flex flex-col items-center min-w-14">
          <Avatar src="/image/husky_bg.jpg" />
        </div>

        <div className="ml-3">
          <p className="text-base text-gray-100 font-bold">Husky</p>
          <p className="text-base text-gray-100 align-middle text-justify mt-2 p-3 rounded-xl border-2 border-gray-600">{content}</p>
        </div>

      </div>
    </div>
  )
}

function User({ content }) {

  return (
    <div className="a w-full mb-3 flex flex-row justify-end">


      <div className="b max-w-5/6 flex flex-row">

        <div className="mr-3 flex flex-col justify-items-end">
          <p className="text-base font-bold text-gray-100 w-full text-right">You</p>
          <p className="text-base text-gray-100 align-middle text-justify mt-2 p-3 rounded-xl border-2 border-gray-600">{content}</p>
        </div>

        <div className="flex flex-col items-center min-w-14">
          <Avatar src="/image/cat_bg.jpg" />
        </div>

      </div>
    </div>
  )
}

export default function Chat({ className }) {
  return (
    <div className={`bg-gray-500 p-3 rounded-tl-xl ${className}`}>
      <Bot content={"Something here. ".repeat(48)} />
      <User content={"Something here. ".repeat(48)} />
      <Bot content={"Something here. ".repeat(48)} />
      <User content={"Something here. ".repeat(48)} />
      </div>
  )
}