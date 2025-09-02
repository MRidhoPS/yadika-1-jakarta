import React from 'react'
import { Instagram, Phone, MapPin, Copyright, MessageCircle } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative w-full bg-gradient-to-tr from-black via-gray-900 to-black text-white px-4 md:px-6 py-12 md:py-16">
            <div className="container mx-auto">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg border border-white/20 p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

                    {/* Nama & Alamat Sekolah */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wide">SMA Yadika 1 Jakarta</h2>
                        <div className="flex items-start justify-center sm:justify-start gap-3 text-gray-200">
                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">
                                Jalan Taman Ratu Indah Blok EE 5 No.5,<br />
                                RT.9/RW.1, Duri Kepa, Kebonjeruk,<br />
                                West Jakarta City, Jakarta 11510
                            </p>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-200">
                            <Phone className="w-5 h-5 flex-shrink-0" />
                            <a href="https://wa.me/6281378888032" className="hover:underline text-sm break-all">
                                +62 813 7888 8032
                            </a>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center justify-center space-y-4 order-last md:order-none">
                        <h3 className="text-base md:text-lg font-semibold">Follow Us</h3>
                        <div className="flex gap-6">
                            <a
                                href="https://www.instagram.com/smayadika1dk?igsh=aDh0Ync2dGlnMjJo"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:text-pink-400 transition transform hover:scale-110"
                            >
                                <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@smayadika1dk?_t=ZS-8zOEA7iKiZe&_r=1"
                                target="_blank" rel="noopener noreferrer"
                                className="hover:text-gray-200 transition transform hover:scale-110"
                            >
                                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                            </a>
                        </div>
                    </div>

                    {/* Hak Cipta */}
                    <div className="flex flex-col items-center sm:items-end justify-center text-gray-300 space-y-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                            <Copyright className="w-4 h-4" />
                            <span>{new Date().getFullYear()} SMA Yadika 1 Jakarta</span>
                        </div>
                        <p className="text-[10px] md:text-xs">All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}
