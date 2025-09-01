import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
    return (
        <div className="bg-transparent w-full overflow-hidden">
            <div className="w-full h-[660px] mb-10 max-w-screen px-3 py-5">
                {/* Wrapper gambar + overlay */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/31039079/pexels-photo-31039079.jpeg?_gl=1*segse4*_ga*MTc5MzQ3MzA5OS4xNzQ0MDIyODMx*_ga_8JE65Q40S6*czE3NTY3MTMwNjckbzE0JGcxJHQxNzU2NzEzNTcxJGo3JGwwJGgw"
                        alt="Hero Image"
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
                                Inspiring Future Leaders. Today.
                            </h1>
                            <p className="mt-8 text-sm font-light text-gray-50 sm:text-xl">
                                Membangun generasi mada depan yang adaptif, cerdas dan berkarakter di era digital
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
