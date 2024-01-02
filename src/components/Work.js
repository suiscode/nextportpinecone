import Image from "next/image";
import React from "react";

function Work() {
  const data = [
    {
      title: "Fiskil",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      skill: ["React", "React", "React", "React", "React", "React"],
      img:'/project.png',
      position:false
    },
    {
      title: "woow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      skill: ["React", "React", "React", "React", "React", "React", "React"],
      img:'/project.png',
      position:true

    },
    {
      title: "daaad",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      skill: ["React", "React", "React", "React", "React", "React"],
      img:'/project.png',
      position:false

    },
  ];
  return (
    <div className="flex flex-col items-center px-4 py-16 web:px-28 web:py-24 dark:text-[#D1D5DB]" id='Testimonials'>
      <h1 className="bg-[#E5E7EB] px-[20px] py-[4px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] mb-4">
        Work
      </h1>
      <p className="mb-6 text-center text-[18px]">
        Some of the noteworthy projects I have built:
      </p>
      <ul className="flex flex-col gap-6 ">
        {data.map(item=>(
            <li key={crypto.randomUUID()} className={`web:flex dark:bg-[#111827] rounded-xl ${item.position ? 'web:flex-row-reverse': 'web:flex-row'}`} style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)" }}>
                <div className="flex justify-center items-center p-8 web:p-12 bg-[#F9FAFB] dark:bg-[#374151] rounded-xl web:w-[50%]" >
                    <Image
                        src={item.img}
                        width={0}
                        height={0}
                        alt="img"
                        sizes="100vw"
                        className="w-full rounded-xl"
                        style={{ boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)" }}
                    />
                </div>
                <div className="p-8 gap-6 flex flex-col web:w-[50%]">
                    <h1 className="text-[20px] font-semibold">{item.title}</h1>
                    <p>{item.desc}</p>
                    <ul className="flex gap-2 flex-wrap">
                    {item.skill.map(item=>(
                        <li key={crypto.randomUUID()} className="bg-[#E5E7EB] rounded-xl px-5 py-1 dark:bg-[#374151]">{item}</li>
                    ))}
                    </ul>
                    <Image
                        src='./open.svg'
                        width={24}
                        height={24}
                        alt="img"
                    />
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
