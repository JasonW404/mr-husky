import { Image } from "@nextui-org/react";

export default function Idle({ className }) {

  return (
    <div className={`h-full ${className}`}>
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          alt="Mr. Husky"
          src="/image/husky_bg.jpg"
          width={96}
          height={96}
          className="rounded-xl"
        ></Image>
        <p className="text-gray-100 text-xl mt-3">Mr. Husky is here ready to assist you.</p>
        <p className="text-gray-100 text-xl">Start asking questions now! </p>
      </div>
    </div>
  )

}