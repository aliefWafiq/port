import Image from "next/image";
import ScrambleText from "@/components/scrambleText";
import ScrollTrigger from "@/components/ScrollTrigger";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full flex-col items-center justify-between rounded-lg px-16 bg-white dark:bg-black sm:items-start overflow-hidden">
        <div className="w-full h-1/2 flex flex-col justify-center">
          <div className="flex mb-5 md:mb-2 lg:mb-5">
            <div className="w-1/2">
              <ScrambleText
                text="dengan passion membuat sistem website yang efisien dan user
                friendly, antusias eksplorasi teknologi baru, fokus pada
                pengembangan antarmuka modern dan responsif. You have power
                over your mind, not outside events. Realize this, and you will
                find strength, Marcus Aurelius (Meditations)"
                className="text-base md:text-lg md:text-justify md:tracking-wide"
              />
            </div>
            <div className="w-1/3 px-6">
              <ScrambleText
                text="FULLSTACK DEVELOPER"
                className="text-6xl opacity-0 font-bold"
              />
            </div>
          </div>
          <ScrambleText
            text="ALIEF WAFIQ RAMADHAN"
            className="text-7xl font-bold"
          />
        </div>
        <div className="w-full h-1/2">
          <div>
            <Image
              src="/callmeifyougetlostid(1).png"
              alt="Photo 1"
              width={800}
              height={800}
            />
          </div>
        </div>
      </main>

      <div className="w-full h-screen flex justify-around px-6">
        <div>
          <ScrollTrigger src={"/languages/html-5-svgrepo-com.svg"} yStart={100} yEnd={40} xStart={0} xEnd={0} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={200} yEnd={150} xStart={0} xEnd={0} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/css-3-svgrepo-com.svg"} yStart={200} yEnd={150} xStart={10} xEnd={10} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={400} xStart={10} xEnd={10} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/js-svgrepo-com.svg"} yStart={300} yEnd={100} xStart={30} xEnd={30} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={250} xStart={30} xEnd={30} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={300} yEnd={150} xStart={15} xEnd={15} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={600} yEnd={450} xStart={15} xEnd={15} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/python-svgrepo-com.svg"} yStart={400} yEnd={60} xStart={25} xEnd={25} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={300} xStart={25} xEnd={25} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/laravel-svgrepo-com.svg"} yStart={500} yEnd={220} xStart={5} xEnd={5} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={600} yEnd={400} xStart={5} xEnd={5} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/tailwind-svgrepo-com.svg"} yStart={200} yEnd={110} xStart={20} xEnd={20} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={300} xStart={20} xEnd={20} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/next-js-svgrepo-com.svg"} yStart={400} yEnd={130} xStart={40} xEnd={40} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={600} yEnd={500} xStart={40} xEnd={40} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={300} yEnd={190} xStart={50} xEnd={50} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={300} xStart={50} xEnd={50} />
        </div>
        <div>
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={300} yEnd={80} xStart={55} xEnd={55} />
          <ScrollTrigger src={"/languages/php-svgrepo-com.svg"} yStart={500} yEnd={200} xStart={55} xEnd={55} />
        </div>
      </div>
      <div className="w-full h-screen bg-zinc-400"></div>
    </div>
  );
}
