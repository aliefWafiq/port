import Image from "next/image";
import ScrambleText from "@/components/scrambleText";
import { LogoScrollTrigger, SlideTransition } from "@/components/ScrollTrigger";
import { NameHeaderScroll } from "@/components/nameHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex items-start justify-center w-full h-[300vh] rounded-lg relative">
        <div className="w-full h-screen sticky top-0 flex flex-col justify-center items-center overflow-hidden">
          <Image
            alt="star"
            src="/star.png"
            width={600}
            height={600}
            className="absolute -top-40 -left-40 blur-sm rotate-6 h-auto max-w-none"
          />
          <NameHeaderScroll />

          <Image
            alt="star"
            src="/star.png"
            width={600}
            height={600}
            className="absolute -bottom-40 -right-40 blur-sm rotate-12 h-auto max-w-none"
          />

          <SlideTransition />
        </div>
      </main>

      {/* <div className="w-full h-screen flex justify-around px-6">
        <div>
          <LogoScrollTrigger
            src={"/languages/html-5-svgrepo-com.svg"}
            yStart={100}
            yEnd={40}
            xStart={0}
            xEnd={0}
          />
          <LogoScrollTrigger
            src={"/languages/arduino-svgrepo-com.svg"}
            yStart={200}
            yEnd={150}
            xStart={0}
            xEnd={0}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/css-3-svgrepo-com.svg"}
            yStart={200}
            yEnd={150}
            xStart={10}
            xEnd={10}
          />
          <LogoScrollTrigger
            src={"/languages/bootstrap-fill-svgrepo-com.svg"}
            yStart={500}
            yEnd={220}
            xStart={10}
            xEnd={10}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/js-svgrepo-com.svg"}
            yStart={300}
            yEnd={100}
            xStart={30}
            xEnd={30}
          />
          <LogoScrollTrigger
            src={"/languages/postman-icon.svg"}
            yStart={500}
            yEnd={250}
            xStart={30}
            xEnd={30}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/php-svgrepo-com.svg"}
            yStart={300}
            yEnd={150}
            xStart={15}
            xEnd={15}
          />
          <LogoScrollTrigger
            src={"/languages/mysql-svgrepo-com.svg"}
            yStart={600}
            yEnd={450}
            xStart={15}
            xEnd={15}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/python-svgrepo-com.svg"}
            yStart={400}
            yEnd={60}
            xStart={25}
            xEnd={25}
          />
          <LogoScrollTrigger
            src={"/languages/git-svgrepo-com.svg"}
            yStart={500}
            yEnd={300}
            xStart={25}
            xEnd={25}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/laravel-svgrepo-com.svg"}
            yStart={500}
            yEnd={220}
            xStart={5}
            xEnd={5}
          />
          <LogoScrollTrigger
            src={"/languages/prisma-svgrepo-com.svg"}
            yStart={600}
            yEnd={400}
            xStart={5}
            xEnd={5}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/tailwind-svgrepo-com.svg"}
            yStart={200}
            yEnd={110}
            xStart={20}
            xEnd={20}
          />
          <LogoScrollTrigger
            src={"/languages/figma-svgrepo-com.svg"}
            yStart={500}
            yEnd={300}
            xStart={20}
            xEnd={20}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/next-js-svgrepo-com.svg"}
            yStart={400}
            yEnd={130}
            xStart={40}
            xEnd={40}
          />
          <LogoScrollTrigger
            src={"/languages/mongodb-svgrepo-com.svg"}
            yStart={600}
            yEnd={500}
            xStart={40}
            xEnd={40}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/typescript-official-svgrepo-com.svg"}
            yStart={300}
            yEnd={190}
            xStart={50}
            xEnd={50}
          />
          <LogoScrollTrigger
            src={"/languages/npm-svgrepo-com.svg"}
            yStart={500}
            yEnd={300}
            xStart={50}
            xEnd={50}
          />
        </div>
        <div>
          <LogoScrollTrigger
            src={"/languages/lua-svgrepo-com.svg"}
            yStart={300}
            yEnd={80}
            xStart={55}
            xEnd={55}
          />
          <LogoScrollTrigger
            src={"/languages/react-svgrepo-com.svg"}
            yStart={500}
            yEnd={200}
            xStart={55}
            xEnd={55}
          />
        </div>
      </div> */}

      <div className="w-full h-screen flex justify-center items-center p-24 gap-4">
        <div className="w-2/5 shadow-xl rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="p-4">Python</div>
          <div className="w-full h-96 bg-red-200 relative">
            <Image src={"/projects/anything.png"} fill alt="anything" />
          </div>
          <div className="w-full p-6">
            <p className="text-4xl font-semibold my-4">Anything Tools</p>
            <p className="text-justify mb-4">
              A versatile Command Line Interface (CLI) application built with
              Python. This project bundles several handy utilities into a
              single, easy-to-use tool to help streamline your daily tasks.
            </p>
            {/* <div className="mb-12 w-fit border-2 border-green-600 rounded-2xl py-1 px-4">
              <p>Python</p>
            </div>
            <Link
              href={"https://github.com/aliefWafiq/Anything-Tools.git"}
              className="bg-blue-400 text-white p-4 rounded-lg"
            >
              View Project
            </Link> */}
          </div>
        </div>

        <div className="w-2/5 shadow-xl rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="p-4">Python</div>
          <div className="w-full h-96 bg-red-200 relative">
            <Image src={"/projects/anything.png"} fill alt="anything" />
          </div>
          <div className="w-full p-6">
            <p className="text-4xl font-semibold my-4">Anything Tools</p>
            <p className="text-justify mb-4">
              A versatile Command Line Interface (CLI) application built with
              Python. This project bundles several handy utilities into a
              single, easy-to-use tool to help streamline your daily tasks.
            </p>
            {/* <div className="mb-12 w-fit border-2 border-green-600 rounded-2xl py-1 px-4">
              <p>Python</p>
            </div>
            <Link
              href={"https://github.com/aliefWafiq/Anything-Tools.git"}
              className="bg-blue-400 text-white p-4 rounded-lg"
            >
              View Project
            </Link> */}
          </div>
        </div>

        <div className="w-2/5 shadow-xl rounded-2xl border-2 border-slate-200 overflow-hidden">
          <div className="p-4">Python</div>
          <div className="w-full h-96 bg-red-200 relative">
            <Image src={"/projects/anything.png"} fill alt="anything" />
          </div>
          <div className="w-full p-6">
            <p className="text-4xl font-semibold my-4">Anything Tools</p>
            <p className="text-justify mb-4">
              A versatile Command Line Interface (CLI) application built with
              Python. This project bundles several handy utilities into a
              single, easy-to-use tool to help streamline your daily tasks.
            </p>
            {/* <div className="mb-12 w-fit border-2 border-green-600 rounded-2xl py-1 px-4">
              <p>Python</p>
            </div>
            <Link
              href={"https://github.com/aliefWafiq/Anything-Tools.git"}
              className="bg-blue-400 text-white p-4 rounded-lg"
            >
              View Project
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
