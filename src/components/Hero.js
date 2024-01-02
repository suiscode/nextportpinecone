import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full bg-[#F9FAFB] dark:bg-[#111827] px-4 flex flex-col items-center gap-6 web:px-[80px] py-[96px]" id='About'>
      <h1 className="bg-[#E5E7EB] px-[20px] py-[4px] rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB]">About me</h1>
      <div className="flex flex-col items-center web:flex-row web:justify-between web:px-8">
        <div className="dark:bg-[#374151] bg-[#E5E7EB] w-[280px] flex justify-center h-[280px] border-[8px] border-[#F9FAFB] dark:border-black relative web:h-[336px] mt-4">
          <Image
            src="/pfp.png"
            width={240}
            height={280}
            alt="pfp"
            priority={true}
            className="absolute bottom-[34px] border-[8px] web:bottom-[32px] web:w-[280px] web:h-[320px] web:left-[32px] dark:border-black border-[#F9FAFB]"
          />
        </div>
        <div className="text-[#4B5563] flex flex-col gap-[16px] web:w-[50%] dark:text-[#D1D5DB]">
          <h1 className="text-[#111827] text-[24px] font-semibold mb-[8px] web:text-[30px] dark:text-[white]">
            Curious about me? Here you have it:
          </h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on{" "}
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="underline"
            >
              Twitter
            </a>{" "}
            or on indie hacker, witnessing the journey of early startups or
            enjoying some free time. You can follow me on Twitter where I share
            tech-related bites and build in public, or you can follow me on{" "}
            <a
              href="https://www.github.com/"
              target="_blank"
              className="underline"
            >
              Github
            </a>
            .
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="w-full flex justify-around items-center gap-[30px] ml-[22px]">
            <ul className="flex list-disc justify-around flex-col h-[100px]">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
            </ul>
            <ul className="flex list-disc justify-around flex-col h-[100px]">
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
