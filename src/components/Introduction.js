import Image from "next/image";
import React from "react";

function Introduction() {
  return (
    <div className="mt-[52px] py-[64px] flex flex-col justify-center items-center px-[16px] gap-[48px] web:flex-row-reverse web:justify-between web:px-[80px]">
      <div className="dark:bg-[#374151] bg-[#E5E7EB] w-[280px] flex justify-center h-[280px] border-[8px] border-white dark:border-black relative web:h-[336px]">
        <Image
          src="/pfp.png"
          width={240}
          height={280}
          alt="pfp"
          className="absolute bottom-[32px] border-[8px] web:bottom-[32px] web:w-[280px] web:h-[320px] web:right-[32px] dark:border-black border-white"
        />
      </div>
      <div className="flex flex-col gap-[48px] web:w-[60%]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[36px] font-semibold dark:text-white">Hi, I'm Name 👋</h1>
          <p className="text-[16px] text-[#4B5563] dark:text-[#D1D5DB]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex gap-[8px] w-full">
            <Image src="/location.svg" width={24} height={24} alt="pfp" />
            <h1 className="dark:text-[#D1D5DB]">Ahmedabad, India</h1>
          </div>
          <div className="flex gap-[16px] w-full items-center ml-[7px]">
            <div className="w-[8px] h-[8px] bg-[#10B981] border-white rounded-[50%]"></div>
            <h1 className="dark:text-[#D1D5DB]">Available for new projects</h1>
          </div>
        </div>
        <div className="flex gap-[4px]">
          <a href="https://www.twitter.com/" target="_blank">
            <Image src="/github.svg" width={24} height={24} alt="pfp" stroke="white"/>
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
  );
}

export default Introduction;
