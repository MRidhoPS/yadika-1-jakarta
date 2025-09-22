"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const [opacity, setOpacity] = useState(1);
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/home";
    const isEskulDetail = pathname.startsWith("/ekstrakulikuler/");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const fadeStart = 0;
            const fadeEnd = 300;

            let newOpacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
            if (newOpacity < 0) newOpacity = 0;
            if (newOpacity > 1) newOpacity = 1;

            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let textClass = "text-white";
    let hoverClass = "hover:bg-white/20";
    let contactClass = "bg-white text-black";

    if (isEskulDetail) {
        textClass = "text-black";
        hoverClass = "hover:bg-black/10";
        contactClass = "bg-black text-white";
    } else if (!isHome) {
        textClass = "text-white";
        hoverClass = "hover:bg-black/10";
        contactClass = "bg-black text-white";
    }

    return (
        <nav
            className="fixed top-3 left-1/2 -translate-x-1/2 flex justify-center 
                 gap-2 sm:gap-3 md:gap-5
                 bg-white/10 backdrop-blur-md
                 px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2
                 rounded-full w-fit z-50 shadow-md
                 text-xs sm:text-sm md:text-base
                 transition-all duration-300"
            style={{ opacity }}
        >
            <Link
                href="/home"
                className={`${textClass} font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full ${hoverClass} transition`}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={`${textClass} font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full ${hoverClass} transition`}
            >
                About
            </Link>
            <Link
                href="/news"
                className={`${textClass} font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full ${hoverClass} transition`}
            >
                News
            </Link>
            <Link
                href="/home#contact"
                className={`${contactClass} font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full transition`}
            >
                Contact
            </Link>
        </nav>
    );
}
