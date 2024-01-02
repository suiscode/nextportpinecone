import React from "react";
import Image from "next/image";

function Menu({options, setMenu, toggleDarkMode, darkState }) {
  return (
    /* <div
        className={`${menu ? 'block' : 'hidden'} w-[320px] border-[1px] bg-white p-4 flex flex-col gap-4 absolute z-10`}
      ></div> */
    <div
      className={`w-full h-full web:hidden dark:bg-black bg-white p-4 flex flex-col gap-4 absolute z-[100]`}
    >
      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold dark:text-white">Title</h1>
        <Image
          src={darkState ? "/close.svg" : "/darkclose.svg"}
          width={24}
          height={24}
          alt="menu"
          onClick={() => setMenu((prev) => !prev)}
        />
      </div>
      <div className="h-[1px] w-full "></div>
      <div className=" text-[16px] flex-col dark:text-[#D1D5DB] text-[#4B5563] font-medium gap-[16px] flex items-start">
        {options.map((item) => {
          return (
            <a key={item} href={item}>
              {item}
            </a>
          );
        })}
      </div>
      <div className="h-[1px] w-full border-[1px]"></div>

      <div className="flex justify-between">
        <h1 className="dark:text-[#D1D5DB] text-[#4B5563]">Switch Theme</h1>
        <Image
          src={!darkState ? "/moon.svg" : "/sun.svg"}
          width={24}
          height={24}
          alt="menu"
          className="cursor-pointer"
          onClick={toggleDarkMode}
        />
      </div>
      <h1 className="bg-black dark:bg-white dark:text-black text-white rounded-xl px-[16px] py-[6px] text-center">
        Download CV
      </h1>
    </div>
  );
}

export default Menu;
