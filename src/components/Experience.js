import Image from "next/image";
import React from "react";

function Experience() {
  const data = [
    {
      date: [{ start: "Nov 2012", end: "Present" }],
      title: "Sr.Frontend Developer",
      Work: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      date: [{ start: "Jul 2017", end: "Oct 2021" }],
      title: "Team Lead",
      Work: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      date: [{ start: "Dec 2015", end: "May 2017" }],
      title: "Full Stack Developer",
      Work: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center bg-[#F9FAFB] dark:text-[#D1D5DB] dark:bg-[#111827] px-4 py-16 w-full web:px-[80px] web:py-[96px]" id='Work'>
      <h1 className="bg-[#E5E7EB] px-[20px] py-[4px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] mb-4">
        Experience
      </h1>
      <p className="mb-6 text-center">
        Here is a quick summary of my most recent experiences:
      </p>
      <ul className="flex flex-col gap-6 web:w-[70%]">
        {data.map((item) => (
          <li
            key={crypto.randomUUID()}
            className="flex flex-col items-start web:flex-row justify-start web:justify-between dark:bg-[#1F2937] bg-white rounded-lg p-8 gap-4"
            style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)" }}>
            <Image
              src="/logo-upwork.svg"
              width={102}
              height={28}
              alt={item.title}
            />
            <div className="flex flex-col gap-4 web:flex-row-reverse">
              {item.date.map((item) => (
                <h1 className="text-[#374151] dark:text-[#D1D5DB]" key={crypto.randomUUID()}>
                  {item.start}-{item.end}
                </h1>
              ))}
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111827] dark:text-white font-semibold text-[18px]">
                  {item.title}
                </h1>
                <ul className="list-disc ml-6 gap-1 flex flex-col">
                  {item.Work.map((item) => (
                    <li key={crypto.randomUUID()} className="text-[#4B5563] dark:text-[#D1D5DB]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
