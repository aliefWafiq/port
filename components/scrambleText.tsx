"use client";
import { gsap } from "gsap";

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

import { useRef } from "react";
import { useEffect } from "react";

gsap.registerPlugin(
  ScrambleTextPlugin,
  // ScrollTrigger,
  // ScrollSmoother,
  // ScrollToPlugin,
  TextPlugin,
  SplitText,
);

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className }: ScrambleTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const tl = gsap.timeline();
    const splitChars = SplitText.create(elementRef.current, { type: "chars" });

    tl.set(elementRef.current, { opacity: 1 });
    tl.set(splitChars.chars, { opacity: 0 });

    const randomChars = "!@#$%^&*-=+<>?/";
    const staggerDelay = 0.035;

    splitChars.chars.forEach((char, index) => {
      const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
      const delay = staggerDelay * index;

      tl.set(
        char,
        {
          text: randomChar,
          opacity: 1,
        },
        delay,
      );

      tl.to(
        char,
        {
          scrambleText: {
            text: char.textContent || "",
            chars: randomChars,
            speed: 1,
          },
          duration: 1,
          ease: "linear",
        },
        delay,
      );
    });
  });

  return (
    <h1 ref={elementRef} className={className}>
      {text}
    </h1>
  )
}
