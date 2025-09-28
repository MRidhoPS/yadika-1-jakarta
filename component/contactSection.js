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

    const personalWhatsAppNumber = "6281378888032";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nama, email, phone, city } = form;

        if (!nama || !email || !phone || !city) {
            alert("Please fill out all required fields.");
            return;
        }

        const messageText = `Hello! Saya ingin mendaftarkan anak saya ke sekolah SMA Yadika 1 Jakarta. Nama: ${nama}, Email: ${email}, Nomor Telephone: ${phone}, Kota: ${city}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${personalWhatsAppNumber}&text=${encodeURIComponent(messageText)}`;
        } else {
            window.open(
                `https://web.whatsapp.com/send?phone=${personalWhatsAppNumber}&text=${encodeURIComponent(messageText)}`,
                "_blank"
            );
        }

        setTimeout(() => {
            setForm({ nama: "", email: "", phone: "", city: "" });
        }, 1500);
    };

    return (
        <section className="relative w-full min-h-[750px] py-16 px-4 md:px-12 
            bg-white overflow-hidden">

            {/* Soft Abstract Background Accents */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px] top-[-100px] left-[-100px]" />
                <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] bottom-[-120px] right-[-80px]" />
            </div>

            {/* Decorative Grid Lines (tech aesthetic) */}
            <div className="absolute inset-0 -z-10 opacity-[0.05] 
                bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] 
                bg-[size:40px_40px]" />

            {/* Title separator */}
            <div className="relative mb-12 text-center">
                <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="border-t border-gray-300/50 mx-auto max-w-sm"
                />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white/70 backdrop-blur-md px-6 py-2 
                    text-gray-700 text-lg sm:text-xl rounded-full 
                    border border-gray-200 shadow-sm">
                    Contact
                </span>
            </div>

            {/* Headings */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-indigo-600 to-cyan-500">
                    Mulai Perjalanan Belajar Modern
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-4">
                    Daftarkan Anak Anda Sekarang — pendidikan inovatif untuk generasi teknologi.
                </p>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden 
                        border border-gray-200/60 bg-white/80 backdrop-blur-xl 
                        shadow-lg"
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
                    className="relative bg-white/80 backdrop-blur-2xl rounded-3xl 
                        border border-gray-200 shadow-lg 
                        p-6 sm:p-8 md:p-10"
                >
                    <p className="text-2xl font-semibold text-gray-800">
                        Bergabunglah Bersama Kami
                    </p>
                    <p className="text-base font-light text-gray-600 mt-2">
                        Masa depan anak Anda dimulai dari sini — pendidikan unggul & modern.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
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
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-cyan-500 
                                text-white py-3 rounded-xl font-semibold tracking-wide
                                shadow-md hover:shadow-[0_0_18px_rgba(56,189,248,0.3)] 
                                transition-all duration-300 border border-transparent"
                        >
                            Kirim
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

