import Header from "../components/Header";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import Introduction from "@/components/Introduction";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contacts from "@/components/Contacts";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const isLocalStorageAvailable =
  typeof window !== "undefined" && window.localStorage;

const storedDarkState = isLocalStorageAvailable
  ? JSON.parse(localStorage.getItem("DARKSTATE")) || false
  : false;

const [darkState, setDarkState] = useState(storedDarkState);

const toggleDarkMode = () => {
  setDarkState((prev) => {
    localStorage.setItem("DARKSTATE", JSON.stringify(!prev));
    return !prev;
  });
};

  const options = ["About", "Work", "Testimonials", "Contact"];

  
  return (
    <main className={darkState ? 'dark' : ''}>
      {/* {menu ? (
        <Menu
          menu={menu}
          setMenu={setMenu}
          options={options}
          toggleDarkMode={toggleDarkMode}
          darkState={darkState}
        />
      ) : ( */}
        <div
          className={`flex justify-center items-center w-[100vw] dark:bg-black`}
        >
          <div className="web:w-[1440px] relative flex flex-col items-center gap-4 mt-4 ">
            <Header
              menu={menu}
              setMenu={setMenu}
              toggleDarkMode={toggleDarkMode}
              options={options}
              darkState={darkState}
            />
            <Introduction />
            <Hero />
            <Skills darkState={darkState} />
            <Experience />
            <Work />
            <Contacts />
          </div>
        </div>
      {/* )} */}
    </main>
  );
}
