"use client";
import React from "react";
import TextInput from "./textInput";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [form, setForm] = React.useState({
        nama: "",
        email: "",
        phone: "",
        city: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative w-full min-h-[700px] py-16 px-4 md:px-12 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
            {/* Title separator */}
            <div className="relative mb-12 text-center">
                <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="border-t border-gray-300 mx-auto max-w-sm"
                />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md px-4 text-gray-600 text-base sm:text-xl rounded-full shadow-sm">
                    Contact
                </span>
            </div>

            {/* Headings */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Saatnya Memulai Perjalanan Belajar yang Bermakna
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3">
                    Daftarkan Anak Anda Segera — jadikan pendidikan sebagai investasi masa depan terbaik!
                </p>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                >
                    <iframe
                        title="maps"
                        className="w-full h-[300px] md:h-[450px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6371722771114!2d106.76574250909921!3d-6.179296560519901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f700671617a9%3A0x93b54f5bc69ad4a5!2sSMA%20Yadika%201%20Duri%20Kepa!5e0!3m2!1sid!2sid!4v1756717692571!5m2!1sid!2sid"
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10"
                >
                    <p className="text-2xl font-semibold text-gray-800">
                        Bergabunglah Bersama Kami
                    </p>
                    <p className="text-base font-light text-gray-500 mt-2">
                        Membangun masa depan anak Anda dengan pendidikan yang unggul.
                    </p>

                    <form className="flex flex-col gap-5 mt-6">
                        <TextInput
                            name="nama"
                            placeholder="Nama lengkap"
                            value={form.nama}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="phone"
                            placeholder="Nomor Telephone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="city"
                            placeholder="Kota Domisili"
                            value={form.city}
                            onChange={handleChange}
                            required
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Kirim
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
