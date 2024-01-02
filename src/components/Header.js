import Image from "next/image";
import React, { useState } from "react";
import Menu from "./Menu";

function Header({ menu, setMenu, options, darkState, toggleDarkMode }) {
  return (
    <div className="flex p-4 justify-between items-center z-10 fixed top-0 w-full h-[68px] dark:bg-black bg-white">
      <a href='#' className="text-[30px] font-bold dark:text-white">Title</a>
      <div className="hidden text-[16px] text-[#4B5563] dark:text-[#D1D5DB] gap-6 web:flex items-center">
        {options.map((item) => {
          return (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          );
        })}
        <div className="h-[24px] w-[1px]"></div>
        <Image
          src={darkState ? "/sun.svg" : '/moon.svg'}
          width={24}
          height={24}
          alt="menu"
          className="cursor-pointer"
          onClick={toggleDarkMode}
        />
        <h1 className="dark:bg-white dark:text-black bg-black text-white rounded-md px-[16px] py-[6px]">
          Download CV
        </h1>
      </div>
      <Image
        src="/menu.svg"
        width={24}
        height={24}
        alt="menu"
        className="web:hidden"
        onClick={() => setMenu((prev) => !prev)}
      />
    </div>
  );
}

export default Header;
