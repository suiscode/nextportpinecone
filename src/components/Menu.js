import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// ${menu ? 'block' : 'hidden'}

function Menu({options, setMenu, toggleDarkMode,menu, darkState }) {
  return (
    <AnimatePresence>
      {menu &&
    <motion.div
    initial={{ x: '100%' }}
    animate={{ x: 0, transition: { duration: 0.5 } }}
    exit={{ x: '100%'}}
      className={` w-full h-screen web:hidden dark:bg-black top-0 bg-white py-3 px-4 flex flex-col gap-4 absolute z-[100]`}
    >
      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold dark:text-white">Title</h1>
        <Image
          src={!darkState ? "/close.svg" : "/darkclose.svg"}
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
            <a key={item} href={`#${item}`} onClick={()=>setMenu(false)}>
              {item}
            </a>
          );
        })}
      </div>
      <div className="h-[1px] w-full border-[1px]"></div>

      <div className="flex justify-between">
        <h1 className="dark:text-[#D1D5DB] text-[#4B5563]">Switch Theme</h1>
        <Image
          src={darkState ? "/moon.svg" : "/sun.svg"}
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
    </motion.div>}
    </AnimatePresence>
  );
}

export default Menu;
