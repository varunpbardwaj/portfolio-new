import { MovingCards } from "@/components/ui/MovingCards";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiSvelte } from "react-icons/si";
import { TbBrandSolidjs } from "react-icons/tb";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { HoverEffect } from "@/components/ui/CardHover";
import Image from "next/image";
// import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function Home() {
  return (
    <>
      <div className="min-h-[25rem] md:min-h-[30rem] w-full bg-black relative flex flex-col items-center justify-center antialiased bg-dot-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full flex flex-col items-center justify-center px-10 py-0 md:py-20 pt-0 md:pt-32 lg:px-40 lg:pt-40 lg:pb-20">
          {/* <BackgroundGradient containerClassName="mb-8"> */}
          <Image
            width="0"
            height="0"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 contrast-125 brightness-75 rounded-full mb-8"
            src="/varun.jpeg"
            alt="varun"
            unoptimized
          />
          {/* </BackgroundGradient> */}
          <div className="relative text-xl md:text-5xl text-center font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-neutral-200 to-neutral-500">
              Hello, I&apos;m Varun Bardwaj
            </span>{" "}
            <span className="text-xl md:text-4xl">👋</span>
          </div>
          <div className="text-neutral-500 max-w-lg mx-auto text-center relative z-10 text-sm md:text-lg mt-5">
            Front End developer from India with industry experience building web
            apps. I specialise in TypeScript, JavaScript and have professional
            experience working with React.{" "}
            {/* I share what I learn through{" "}
            <a className="underline underline-offset-4 font-bold cursor-pointer">
              blog
            </a> */}
            {/* I am an avid singer and you can find my cover songs{" "}
            <a className="underline underline-offset-4 font-bold cursor-pointer">
              here
            </a>
            . */}
          </div>
        </div>
      </div>
      <div className="flex flex-col antialiased items-center justify-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-neutral-500 text-lg md:text-3xl font-bold mb-5 md:mb-10">
          Tech Stack
        </h1>
      </div>
      <MovingCards
        items={[
          {
            name: "React",
            logo: <FaReact />,
            className: "bg-[#139ECA]/10 hover:bg-[#139ECA]/50",
          },
          {
            name: "TypeScript",
            logo: <BiLogoTypescript />,
            className: "bg-[#2F73BF]/10 hover:bg-[#2F73BF]/50",
          },
          {
            name: "JavaScript",
            logo: <IoLogoJavascript />,
            className: "bg-[#EFD81A]/10 hover:bg-[#EFD81A]/50",
          },
          {
            name: "Tailwind CSS",
            logo: <BiLogoTailwindCss />,
            className: "bg-[#37BCF8]/10 hover:bg-[#37BCF8]/50",
          },
          {
            name: "Next.js",
            logo: <TbBrandNextjs />,
            className: "bg-[#404040]/20 hover:bg-[#404040]/50",
          },
          {
            name: "Svelte",
            logo: <SiSvelte />,
            className: "bg-[#F73B01]/10 hover:bg-[#F73B01]/50",
          },
          {
            name: "Solid JS",
            logo: <TbBrandSolidjs />,
            className: "bg-[#254681]/10 hover:bg-[#254681]/50",
          },
          {
            name: "HTML",
            logo: <BiLogoHtml5 />,
            className: "bg-[#DC4A25]/10 hover:bg-[#DC4A25]/50",
          },
          {
            name: "CSS",
            logo: <BiLogoCss3 />,
            className: "bg-[#244BDD]/10 hover:bg-[#244BDD]/50",
          },
        ]}
        direction="right"
        speed="normal"
        className="pt-10 pb-0 md:pt-10"
      />
      <div className="relative h-auto w-full bg-black bg-grid-white/[0.085]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mt-20">
          <div className="flex flex-col antialiased items-center justify-center relative">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-neutral-500 text-lg md:text-3xl font-bold mb-0 md:mb-10 mt-10">
              Recent Work
            </h1>
          </div>
          <div className="max-w-5xl mx-auto pt-0 md:pt-4 py-8">
            <HoverEffect
              items={[
                {
                  title: "Reesume",
                  subTitle: "React",
                  description:
                    "Create a Minimalistic and Impactful Resume in Minutes.",
                  link: "https://reesume-46947.web.app/",
                },
                {
                  title: "Repile",
                  subTitle: "React",
                  description: "A centralized store for React apps.",
                  link: "https://repile.pages.dev/",
                },
                {
                  title: "Reactify",
                  subTitle: "React",
                  description:
                    "Design and Export React components with HTML and CSS knowledge.",
                  link: "https://beta-reactify.pages.dev/",
                },
                {
                  title: "RCTV",
                  subTitle: "React",
                  description:
                    "A tree view component presents a hierarchical list.",
                  link: "https://rctv-varunbardwaj.pages.dev/",
                },
                {
                  title: "React Snippets",
                  subTitle: "VSIX",
                  description:
                    "An extension for Visual Studio Code adds snippets for React for JavaScript.",
                  link: "https://marketplace.visualstudio.com/items?itemName=VarunBardwaj.Reactjssnippets",
                },
                {
                  title: "Audio Player Template",
                  subTitle: "Remotion",
                  description:
                    "A Reusable audio player template created using Remotion.",
                  link: "https://www.remotion.dev/showcase#eKnHTDXWCBsQgm00vOl59ZVF300otry3STKzFe025O7M5E",
                },
                {
                  title: "React Logger",
                  subTitle: "React",
                  description: "A React library to log the data.",
                  link: "https://react-logger-js-varunbardwaj.pages.dev/",
                },
                {
                  title: "Nucleus",
                  subTitle: "React",
                  description:
                    "A React Library that can be used to fabricate any design.",
                  link: "https://nucleus-js.web.app/",
                },
                {
                  title: "Bloc",
                  subTitle: "VSIX",
                  description:
                    "A Dark Blue and Pinkish theme for Visual Studio Code.",
                  link: "https://marketplace.visualstudio.com/items?itemName=VarunBardwaj.bloc",
                },
              ]}
            />
            <div className="w-full flex justify-center px-10">
              <a
                className="text-white underline underline-offset-8 font-bold cursor-pointer text-right mb-10"
                href="https://github.com/varunpbardwaj#recent-works"
                target="blank"
              >
                All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto text-neutral-500 flex flex-col items-center pt-14 text-center pb-5 text-[0.5rem] md:text-sm px-10 sm:px-10 font-medium">
        <div className="flex justify-between w-full flex-wrap gap-5">
          <div className="flex justify-center items-center">
            Built with{" "}
            <a
              className="mx-1 cursor-pointer border-b border-b-neutral-500 font-bold"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            +{" "}
            <a
              className="ml-1 cursor-pointer border-b border-b-neutral-500 font-bold"
              href="https://www.framer.com/motion/"
            >
              Framer Motion
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="mr-2 border-b border-b-neutral-500"
              href="mailto:varunbardwajp@gmail.com"
              target="_blank"
            >
              Gmail
            </a>
            {" - "}
            <a
              className="ml-2 mr-2 cursor-pointer border-b border-b-neutral-500"
              href="https://www.linkedin.com/in/varun-bardwaj-2984891b3"
              target="blank"
            >
              LinkedIN
            </a>
            {" - "}
            <a
              className="ml-2 cursor-pointer border-b border-b-neutral-500"
              href="https://github.com/varunpbardwaj"
              target="blank"
            >
              {" "}
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
