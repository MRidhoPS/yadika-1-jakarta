"use client";
import React from "react";
import TextInput from "./textInput";

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
        <div className="w-full min-h-[600px] relative overflow-hidden mb-10 max-w-screen px-4">
            <hr className="border-t border-gray-300 my-4" />

            <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-4xl font-medium">
                    Saatnya Memulai Perjalanan Belajar yang Bermakna
                </p>
                <p className="text-sm sm:text-base md:text-xl font-light text-gray-500 mt-1">
                    Daftarkan Anak Anda Segera!!!
                </p>
            </div>

            <div className="flex flex-col md:px-20 md:flex-row items-center justify-center mt-8 gap-8">
                {/* Map */}
                <div className="w-full md:w-1/2 h-64 md:h-[400px]">
                    <iframe
                        title="maps"
                        className="w-full h-full rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6371722771114!2d106.76574250909921!3d-6.179296560519901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f700671617a9%3A0x93b54f5bc69ad4a5!2sSMA%20Yadika%201%20Duri%20Kepa!5e0!3m2!1sid!2sid!4v1756717692571!5m2!1sid!2sid"
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Form */}
                <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-2xl font-medium">Bergabunglah Bersama Kami</p>
                    <p className="text-base font-light text-gray-500 mt-1">
                        Membangun masa depan anak anda dengan pendidikan
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
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
                        <button className="bg-black text-white p-2 rounded-2xl hover:bg-gray-800 transition">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
