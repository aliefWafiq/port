"use client";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";

interface props {
  xStart?: number;
  yStart?: number;
  xEnd?: number;
  yEnd?: number;
  src?: string;
  className?: string;
  text?: string;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

function LogoScrollTrigger({ xStart, yStart, xEnd, yEnd, src }: props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(elementRef.current, {
        y: yStart,
        x: xStart,
        opacity: 0,
      });

      gsap.to(elementRef.current, {
        y: yEnd,
        x: xEnd,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
          // markers: true,
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={elementRef}
      className="w-24 h-24 relative rounded-lg overflow-hidden"
    >
      <Image src={src || ""} alt="logo" fill />
    </div>
  );
}

function TextScrollTrigger({
  xStart,
  yStart,
  xEnd,
  yEnd,
  className,
  text,
}: props) {
  const ElementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ElementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ElementRef.current, {
        y: yStart,
        x: xStart,
        opacity: 0,
      });

      gsap.to(ElementRef.current, {
        y: yEnd,
        x: xEnd,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ElementRef.current,
          start: "top 30%",
          end: "bottom 0%",
          scrub: 1.2,
          //   markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <h1 ref={ElementRef} className={className}>
      {text}
    </h1>
  );
}

function SlideTransition() {
  const ElementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ElementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(ElementRef.current, {
        y: 0,
        x: -5000,
      });

      gsap.to(ElementRef.current, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ElementRef.current,
          start: "top 30%",
          end: "bottom 10%",
          scrub: 1.2,
          markers: true,
        },
      });
    }, ElementRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ElementRef} className="bg-blue-400 absolute w-[150%] h-screen">
    </div>
  );
}

export { LogoScrollTrigger, TextScrollTrigger, SlideTransition };
