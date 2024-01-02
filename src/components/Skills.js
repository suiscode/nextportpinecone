import Image from "next/image";
import React from "react";

function Skills({darkState}) {
  const data = [
    { img: "./icon-javscript.svg", title: "Javascript" },
    { img: "./icon-typescript.svg", title: "Typescript" },
    { img: "./icon-react.svg", title: "React" },
    { img: "./icon-nextjs.svg", title: "Next.js" },
    { img: "./icon-nodejs.svg", title: "Node.js" },
    { img: !darkState ? "./icon-express.svg" : "./icon-express-dark.svg", title: "Expres.js" },
    { img: "./icon-nest.svg", title: "Nest" },
    { img: !darkState ? "./icon-socket.svg" : "./icon-socket-dark.svg", title: "Socket" },
    { img: "./icon-postgresql.svg", title: "Postgresql" },
    { img: "./icon-mongodb.svg", title: "MongoDB" },
    { img: "./icon-sass.svg", title: "Sass" },
    { img: "./icon-tailwindcss.svg", title: "Tailwindcss" },
    { img: "./icon-figma.svg", title: "Figma" },
    { img: !darkState ? "./icon-cypress.svg" : "./icon-cypress-dark.svg", title: "Cypress" },
    { img: "./icon-storybook.svg", title: "Storybook" },
    { img: "./icon-git.svg", title: "Git" },
  ];

  console.log();

  return (
    <div className="px-4 py-16 text-[#4B5563] flex flex-col items-center dark:bg-[#030712] dark:text-[#D1D5DB]">
      <h1 className="bg-[#E5E7EB] px-[20px] py-[4px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] mb-4">
        Skills
      </h1>
      <p className="mb-6 text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <ul className="flex flex-wrap gap-8 justify-center web:gap-[80px]">
        {data.map((item) => (
          <li key={crypto.randomUUID()} className="flex flex-col items-center">
            <Image src={item.img} width={64} height={64} alt={item.title} className="w-16 h-16"/>
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
