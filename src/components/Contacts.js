import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import React from "react";

function Contacts() {
  const isBiggerScreen = useMediaQuery({ minWidth: 375 });
  return (
    <div className="flex flex-col py-16 px-4 items-center text-[#4B5563] web:w-[40%] dark:text-[#D1D5DB]" id='Contact'>
      <h1 className="bg-[#E5E7EB] px-[20px] py-[4px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] mb-4">
        Get in touch
      </h1>
      <div className="flex flex-col gap-6  web:gap-12">
        <p className="text-center web:text-[20px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-4">
            <Image
              src="/mail.svg"
              width={isBiggerScreen ? 32 : 24}
              height={isBiggerScreen ? 32 : 24}
              alt="mail"
            />
            <h1 className="text-[18px] text-[#111827] font-semibold web:text-[36px] dark:text-[#F9FAFB]">dummyemail@mail.com</h1>
            <Image
              src="/copy.svg"
              width={isBiggerScreen ? 32 : 24}
              height={isBiggerScreen ? 32 : 24}
              alt="copy"
              className="cursor-pointer"
              onClick={() => {navigator.clipboard.writeText('dummyemail@mail.com')}}


            />
          </div>
          <div className="flex gap-4">
            <Image
              src="/number.svg"
              width={isBiggerScreen ? 32 : 24}
              height={isBiggerScreen ? 32 : 24}
              alt="mail"

            />
            <h1 className="text-[18px] text-[#111827] font-semibold web:text-[36px] dark:text-[#F9FAFB]">+123123123123</h1>
            <Image
              src="/copy.svg"
              width={isBiggerScreen ? 32 : 24}
              height={isBiggerScreen ? 32 : 24}
              alt="copy"
              className="cursor-pointer"
              onClick={() => {navigator.clipboard.writeText('+123123123123')}}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-center">
            You may also find me on these platforms!
          </p>
          <div className="flex gap-4">
            <a href="https://www.twitter.com/" target="_blank">
              <Image
                src="/github.svg"
                width={24}
                height={24}
                alt="pfp"
                stroke="white"
              />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <Image src="/twitter.svg" width={24} height={24} alt="pfp" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <Image src="/figma.svg" width={24} height={24} alt="pfp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
