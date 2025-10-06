"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutClient({ keunggulan }) {


    const images = [
        "/gedung1.jpg",
        "/gedung2.jpg",
        "/gedung3.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] overflow-hidden">
                {/* Background carousel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={images[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt={`Gedung ${index + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
                    >
                        Tentang SMA Yadika 1 Jakarta Barat
                    </motion.h1>
                </div>
            </section>

            {/* Sejarah Sekolah */}
            <section
                id="sejarah"
                className="py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src="/hero.png"
                        alt="Sejarah SMA Yadika 1 Jakarta Barat"
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
                        SMA YADIKA 1 JAKARTA
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        <strong>SMA Yadika 1 Jakarta Barat</strong> adalah sekolah dalam
                        grup <strong>Yayasan Abdi Karya (Yadika)</strong> dan merupakan
                        sekolah menengah pertama yang didirikan oleh{" "}
                        <strong>Bpk. Dr. HC Sutan Raja DL Sitorus (Alm.)</strong> pada{" "}
                        <time dateTime="1976-02-14">14 Februari 1976</time>.
                    </p>
                </motion.div>
            </section>

            {/* Kepala Sekolah */}
            <section
                id="kepala-sekolah"
                className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-inner"
            >
                <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 items-center">
                    {/* Sambutan */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-5 text-center md:text-left"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide">
                            Sambutan Kepala Sekolah
                        </h2>
                        <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                            Dra. Luky Mardiana
                        </p>

                        <p className="italic text-gray-600">
                            Assalamualaikum wr. wb. <br /> Salam sejahtera untuk kita semua
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Saya, <strong>Ibu Luky Mardiana</strong>, Kepala{" "}
                            <strong>SMA Yadika 1 Durikepa, Jakarta Barat</strong>, dengan
                            bangga memperkenalkan sekolah kami sebagai{" "}
                            <span className="font-semibold text-indigo-700">Sekolah ASIK</span>{" "}
                            – Aman dari bully dan narkoba, Solid dalam kebersamaan, Inovatif
                            dalam berkarya, dan Keren dalam prestasi.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Sejak berdiri pada{" "}
                            <time dateTime="1976-02-14">14 Februari 1976</time> di bawah
                            naungan <strong>Yayasan Abdi Karya (Yadika)</strong>, sekolah ini
                            terus berkomitmen menghadirkan tenaga pendidik profesional, serta
                            program unggulan seperti <em>English One</em> dan{" "}
                            <em>Gramedia Academy</em>.
                        </p>

                        <p className="italic text-gray-600">
                            Wassalamualaikum wr. wb. <br /> Salam sehat dan sukses selalu
                        </p>

                        <div>
                            <a
                                href="/home#contact"
                                className="inline-block mt-4 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition"
                            >
                                Daftar Sekarang
                            </a>
                        </div>
                    </motion.div>

                    {/* Foto Kepala Sekolah */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end w-full md:w-1/2"
                    >
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
                            <Image
                                src="/kepsek.jpg"
                                alt="Foto Kepala Sekolah SMA Yadika 1 Jakarta Barat - Dra. Luky Mardiana"
                                fill
                                className="rounded-3xl shadow-2xl object-cover border-4 border-white"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Keunggulan */}
            <section id="keunggulan" className="py-16 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Keunggulan SMA Yadika 1 Jakarta Barat
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {keunggulan.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition p-6 text-center"
                        >
                            <h3 className="font-bold text-xl text-indigo-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Program Unggulan */}
            <section
                id="program"
                className="max-w-6xl mx-auto px-4 mb-20 text-center"
            >
                <div className="relative mt-14 mb-4 text-center">
                    <hr className="border-t border-gray-300 mx-auto w-2/3" />
                    <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-3 text-gray-500 text-lg font-medium">
                        Our Featured Programs
                    </span>
                </div>

                <p className="text-gray-500 mb-10">
                    Pilih program unggulan sesuai minat Anda
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { title: "English One", desc: "Program unggulan untuk mengasah kemampuan bahasa siswa agar siap menghadapi tantangan global." },
                        { title: "Gramedia Academy", desc: "Meningkatkan kreativitas dan literasi melalui pembelajaran modern berbasis project." },
                    ].map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 hover:border-indigo-200 transition-all duration-300"
                        >
                            {/* Accent background hover effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-7-9-7-9 7 9 7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-xl text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                                    {prog.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {prog.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </section>
        </>
    );
}
