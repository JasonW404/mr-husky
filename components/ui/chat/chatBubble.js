import { Image } from "@nextui-org/react";
import MdRenderer from "@/components/mdRenderer";

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

export default function ChatBubble({ role, message }) {
  const avatar = role === "user" ? "/image/cat_bg.jpg" : "/image/husky_bg.jpg";
  const userStyle1 = role === "user" ? "justify-end" : "";
  const userStyle2 = role === "user" ? "flex-row-reverse" : "";
  const userStyle3 = role === "user" ? "text-right" : "";

  return (
    <div className={`w-full flex mt-5 mb-3 flex-row ${userStyle1}`}>
      <div className={`max-w-5/6 flex ${userStyle2}`}>
        <div className="flex flex-col items-center min-w-14 ml-3 mr-3">
          <Avatar src={avatar} />
        </div>
        <div className="chatContent">
          <p className={`text-base text-gray-100 font-bold w-full ${userStyle3}`}>Husky</p>
          <div className="text-base text-gray-100 align-middle text-justify mt-2 p-3 rounded-xl border-2 border-gray-600">
            <MdRenderer content={message} />
          </div>
        </div>
      </div>
    </div>
  )
}
