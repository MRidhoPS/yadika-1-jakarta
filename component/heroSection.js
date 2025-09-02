'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from "react";

export default function HeroSection() {

    const [paddingX, setPaddingX] = useState(10); // default px-10

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 300;

            // Cek lebar layar
            const screenWidth = window.innerWidth;

            // padding min beda antara mobile dan desktop
            const minPadding = screenWidth < 640 ? 20 : 0; // misal mobile jangan sampai 0, minimal 20px

            // Hitung padding
            const newPadding = Math.max(
                minPadding,
                40 - (scrollY / maxScroll) * (40 - minPadding)
            );

            setPaddingX(newPadding);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-transparent w-full overflow-hidden">
            <div className="w-full h-[660px] mb-10 max-w-screen py-5"
                style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }}
            >
                {/* Wrapper gambar + overlay */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="/hero.png"
                        alt="Yadika 1 Jakarta"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    {/* Overlay hanya di atas gambar */}
                    <div className="absolute inset-0 bg-black/50 z-10 rounded-3xl" />

                    {/* Konten di atas overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                SMA YADIKA 1 JAKARTA
                            </h1>
                            <h2 className='mt-8 text-sm font-light text-gray-200 sm:text-xl'>
                                Inspiring Future Leaders. Today.

                            </h2>
                            <p className="text-sm font-light text-gray-300 sm:text-xl mb-5">
                                Membangun generasi mada depan yang adaptif, cerdas dan berkarakter di era digital
                            </p>
                            <Link
                                href="#contact"
                                className="text-black text-center bg-white px-10 py-2 rounded-2xl font-medium hover:bg-black hover:text-white transition duration-200"
                            >
                                Join Now
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
