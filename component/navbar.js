"use client";
import { useEffect, useState } from "react";
import React from 'react'

export default function Navbar() {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const fadeStart = 0;   // scroll 0px → opacity penuh
            const fadeEnd = 300;   // scroll 300px → opacity 0

            let newOpacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
            if (newOpacity < 0) newOpacity = 0;
            if (newOpacity > 1) newOpacity = 1;

            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-5 left-1/2 -translate-x-1/2 flex justify-center gap-5 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full w-fit z-50 shadow-md transition-all duration-300"
            style={{ opacity }}
        >
            <a href="#" className="text-white font-medium px-4 py-2 rounded-full hover:bg-white/20 transition">Home</a>
            <a href="#" className="text-white font-medium px-4 py-2 rounded-full hover:bg-black/20 transition">About</a>
            <a href="#" className="text-white font-medium px-4 py-2 rounded-full hover:bg-white/20 transition">News</a>
            <a href="#" className="bg-white text-black font-medium px-4 py-2 rounded-full transition">Contact</a>
        </nav>
    )
}


