"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".about-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="max-w-6xl mx-auto px-6 py-24 text-slate-200">
      <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Bio */}
        <div className="about-card md:col-span-2 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-2xl font-semibold mb-4 text-white">The Journey</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            Fullstack developer dengan fokus pada performa dan user experience. 
            Membangun solusi digital yang tidak hanya berfungsi, tapi memberikan 
            dampak nyata. Terinspirasi oleh efisiensi dan desain bersih.
          </p>
        </div>

        {/* Tech */}
        <div className="about-card bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-2xl font-semibold mb-4 text-white">Stack</h3>
          <ul className="text-slate-400 space-y-2">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>GSAP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
