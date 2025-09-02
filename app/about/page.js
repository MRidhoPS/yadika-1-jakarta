"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import keunggulan from '../data/keunggulan';

export default function About() {
    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 w-full overflow-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh]">
                <Image
                    src="https://images.pexels.com/photos/29885889/pexels-photo-29885889.jpeg?_gl=1*15jd7xe*_ga*MTc5MzQ3MzA5OS4xNzQ0MDIyODMx*_ga_8JE65Q40S6*czE3NTY3Mzc4NDckbzE2JGcxJHQxNzU2NzM4OTM0JGoxNCRsMCRoMA.."
                    alt="Hero Image"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
                    >
                        We Build Your Dream
                    </motion.h1>
                </div>
            </div>

            {/* Yadika Story */}
            <div className="py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src="/hero.png"
                        alt="Yadika Story"
                        width={600}
                        height={400}
                        className="rounded-3xl shadow-lg object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-4 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Yadika Story
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Yayasan Abdi Karya (Yadika) didirikan oleh dua tokoh masyarakat yakni Dr. Sutan Raja D.L. Sitorus dan Ny. L. Siagian, BSc, pada tanggal 14 Februari 1976. Maksud dan tujuan didirikannya YADIKA adalah untuk mencerdaskan kehidupan bangsa dan memajukan kesejahteraan umum dalam rangka ikut serta mewujudkan masyarakat Indonesia yang adil dan makmur, baik spiritual maupun material berdasarkan Pancasila dan UUD '45.
                    </p>
                </motion.div>
            </div>

            {/* Kepala Sekolah */}
            <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-inner">
                <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4 text-center md:text-left"
                    >
                        <h2 className="text-xl md:text-3xl font-light text-gray-600">Kepala Sekolah</h2>
                        <p className="text-3xl sm:text-4xl font-bold text-indigo-800">Dra. Luky Mardiana</p>
                        <p className="text-lg italic text-gray-700">"Pendidikan bukan hanya tentang ilmu pengetahuan, tetapi juga tentang membentuk karakter dan mempersiapkan generasi yang mampu menghadapi tantangan zaman dengan penuh percaya diri."</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/hero.png"
                            alt="Kepala Sekolah"
                            width={500}
                            height={400}
                            className="rounded-3xl shadow-xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Keunggulan */}
            <div className="py-16 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {keunggulan.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition p-6 text-center"
                        >
                            <h3 className="font-bold text-xl text-indigo-700 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Featured Programs */}
            <div className="relative mt-14 mb-4 text-center">
                <hr className="border-t border-gray-300 mx-auto w-2/3" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-3 text-gray-500 text-lg font-medium">
                    Our Featured Programs
                </span>
            </div>

            <div className="max-w-6xl mx-auto px-4 mb-20 text-center">
                <p className='text-gray-500 mb-10'>Choose according to your interest</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { title: "Coding & Software Development" },
                        { title: "AI & Machine Learning" },
                        { title: "UI/UX Design" }
                    ].map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 hover:-translate-y-1 transition"
                        >
                            <h3 className='font-bold text-lg mb-2 text-indigo-700'>{prog.title}</h3>
                            <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
