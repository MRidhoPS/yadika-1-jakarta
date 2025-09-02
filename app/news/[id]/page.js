"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from 'next/navigation';
import newsData from "@/app/data/news";
import Image from "next/image";

export default function NewsDetail() {
    const params = useParams();
    const router = useRouter();
    const id = parseInt(params?.id, 10);

    const news = newsData.find((item) => item.id === id);

    if (!news) {
        return <p className="text-center mt-20 text-gray-500">Berita tidak ditemukan atau sedang dimuat...</p>;
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-video md:h-[450px] overflow-hidden rounded-b-3xl shadow-lg"
            >
                <Image
                    width={1600}
                    height={900}
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-5xl text-white font-bold drop-shadow-lg text-center px-4"
                    >
                        {news.title}
                    </motion.h1>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative gradient background */}
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-purple-400 to-blue-300 rounded-full opacity-20 blur-2xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-blue-400 to-purple-300 rounded-full opacity-20 blur-2xl -z-10"></div>

                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                        {news.excerpt}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.back()}
                            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl transition"
                        >
                            ← Kembali ke Berita
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.95, rotate: -1 }}
                            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-md hover:shadow-xl transition"
                        >
                            Bagikan 📢
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
