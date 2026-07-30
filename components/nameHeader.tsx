"use client";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "@/components/scrambleText";
import { TextScrollTrigger } from "@/components/ScrollTrigger";
import { useEffect, useRef } from "react";

function RoleHeaderScroll() {
  const ElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ElementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ElementRef.current, {
        y: 0,
        x: -5000,
      });

      gsap.to(ElementRef.current, {
        y: 0,
        x: 1400,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ElementRef.current,
          start: "top 46%",
          end: "bottom 0%",
          scrub: 1.5,
        //   markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ElementRef} className="w-full flex items-center">
      <h1 className="text-[40rem] font-bold text-slate-100 w-full">
        FULLSTACK
      </h1>
    </div>
  );
}

function NameHeaderScroll() {
  const ElementRef = useRef<HTMLDivElement>(null);

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
          start: "top 30%",
          end: "bottom 20%",
          scrub: true,
          pin: true,
        //   markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ElementRef}>
      <ScrambleText
        text="ALIEF WAFIQ RAMADHAN"
        className="text-7xl font-bold text-center"
      />
      <div className="w-1/2 mt-6">
        <TextScrollTrigger
          text="dengan passion membuat sistem website yang efisien dan user
                friendly, antusias eksplorasi teknologi baru, fokus pada
                pengembangan antarmuka modern dan responsif. You have power
                over your mind, not outside events. Realize this, and you will
                find strength, Marcus Aurelius (Meditations)"
          className="text-base md:text-lg md:text-center md:tracking-wide"
          yStart={0}
          yEnd={0}
          xStart={0}
          xEnd={300}
        />
        <div className="w-[4000] h-screen absolute">
          <RoleHeaderScroll />
        </div>
      </div>
    </div>
  );
}

export { NameHeaderScroll, RoleHeaderScroll };
