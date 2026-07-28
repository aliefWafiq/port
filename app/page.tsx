import Image from "next/image";
import ScrambleText from "@/components/scrambleText";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full flex-col items-center justify-between  px-16 bg-white dark:bg-black sm:items-start">
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
        <div className="w-full h-1/2 flex gap-6">
          <div>
            <Image
              src="/Desain tanpa judul(3).png"
              alt="Photo 1"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/Desain tanpa judul(4).png"
              alt="Photo 1"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/Desain tanpa judul(5).png"
              alt="Photo 1"
              width={200}
              height={200}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
