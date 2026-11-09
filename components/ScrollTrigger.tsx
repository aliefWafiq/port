"use client";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { RoleHeaderScroll} from "@/components/nameHeader";

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
          start: "top 10%",
          end: "bottom 0%",
          scrub: 1.2,
          // markers: true,
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !blueRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(blueRef.current, { xPercent: -100, height: "50vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 20%",
          end: "bottom 10%",
          scrub: 1.2,   
          // markers: true,
        },
      });

      tl
        .to(blueRef.current, {
          height: "100vh",
          duration: 1,
          ease: "power1.out",
        })
        .to(blueRef.current, {
          xPercent: 0,
          duration: 1,
          ease: "power1.out",
        });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-screen">
      <div
        ref={blueRef}
        className="absolute bottom-0 left-0 bg-blue-400 w-full"
      >
        <div className="w-full h-2/3" />
        <div className="w-full h-1/2">
          <RoleHeaderScroll text={"FULL"} yEnd={-600} />
          <RoleHeaderScroll text={"STACK"} yEnd={-200} />
        </div>
      </div>
    </div>
  );
}

export { LogoScrollTrigger, TextScrollTrigger, SlideTransition };
