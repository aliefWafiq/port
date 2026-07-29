"use client";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";

interface props {
    xStart?: number,
    yStart?: number,
    xEnd?: number,
    yEnd?: number,
    src?: string
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function ScrollTriggerComponent({ xStart, yStart, xEnd, yEnd, src }: props) {
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(!elementRef.current) return
        
        const ctx = gsap.context(() => {
            gsap.set(elementRef.current, {
                y: yStart,
                x: xStart,
                opacity: 0
            })

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
                    markers: true
                },
            })
        }, elementRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={elementRef} className="w-24 h-24 relative rounded-lg overflow-hidden">
            <Image 
                src={src || ""}
                alt="logo"
                fill
            />
        </div>
    )
}