"use client";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "@/components/scrambleText";
import { TextScrollTrigger } from "@/components/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface props {
  text?: string;
  yEnd?: number;
}

const firstNameList = ["ALIEF WAFIQ", "IM A TECH", "BUILD REAL"]
const secondNameList = ["RAMADHAN", "ENTHUSIAST", "PROJECTS"]

function RoleHeaderScroll({ text, yEnd }: props) {
  const ElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ElementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ElementRef.current, {
        y: yEnd,
        x: -5000,
      });

      gsap.to(ElementRef.current, {
        y: yEnd,
        x: 0,
        duration: 1,
        position: "absolute",
        ease: "power1.out",
        scrollTrigger: {
          trigger: ElementRef.current,
          start: "top 46%",
          end: "bottom 0%",
          scrub: 1.5,
          // markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ElementRef} className="w-full flex items-center">
      <h1 className="text-[26rem] font-bold text-white w-full">{text}</h1>
    </div>
  );
}

function NameHeaderScroll() {
  const ElementRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % secondNameList.length )
    }, 3000);
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!ElementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ElementRef.current, {
        y: 0,
        x: 0,
      });

      gsap.to(ElementRef.current, {
        y: 0,
        x: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ElementRef.current,
          start: "top 10%",
          end: "+=1500",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ElementRef} className="h-screen absolute flex justify-center">
      <Image 
        alt="sign"
        src="/sign.png"
        width={600}
        height={600}
      />
      <ScrambleText
        key={`first-${currentIndex}`}
        text={firstNameList[currentIndex]}
        className="text-6xl font-bold text-center absolute text-slate-100 left-20 top-35 -rotate-3"
      />
      <ScrambleText
        key={`second-${currentIndex}`}
        text={secondNameList[currentIndex]}
        className="text-6xl font-bold text-center absolute text-slate-100 top-96 rotate-6 w-3/4"
      />
      {/* <div className="w-1/2 mt-6">
        <TextScrollTrigger
          text="You have power
                over your mind, not outside events. Realize this, and you will
                find strength, Marcus Aurelius (Meditations)"
          className="text-base md:text-lg md:text-center md:tracking-wide"
          yStart={0}
          yEnd={0}
          xStart={0}
          xEnd={360}
        />
      </div>  */}
    </div>
  );
}

export { NameHeaderScroll, RoleHeaderScroll };
