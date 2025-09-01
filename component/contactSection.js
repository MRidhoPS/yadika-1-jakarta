'use client'
import React from 'react'
import TextInput from "./textInput";

export default function contactSection() {

    const [form, setForm] = React.useState({ nama: "", email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    return (
        <div className='w-full h-[600px] relative overflow-hidden mb-10 max-w-screen '>
            <hr className="border-t border-gray-300 my-4" />

            <div className='text-center'>
                <p className='text-4xl font-medium'>Saatnya Memulai Perjalanan Belajar yang Bermakna</p>
                <p className='text-xl font-light text-gray-500 mt-0.5'>Daftarkan Anak Anda Segera!!!</p>
            </div>
            <div className="flex flex-row items-center justify-center  mt-5 gap-5">
                <div className='w-120 h-120'>
                    <iframe
                        title="maps"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6371722771114!2d106.76574250909921!3d-6.179296560519901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f700671617a9%3A0x93b54f5bc69ad4a5!2sSMA%20Yadika%201%20Duri%20Kepa!5e0!3m2!1sid!2sid!4v1756717692571!5m2!1sid!2sid"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className='flex flex-col'>
                    <p className='text-3xl font-medium'>Bergabunglah Bersama Kami</p>
                    <p className='text-lg font-light text-gray-500 mt-0.5'>Membangun masa depan anak anda dengan pendidikan</p>

                    <div className='flex flex-col gap-4 mt-4'>
                        <TextInput
                            name="nama"
                            placeholder="Nama lengkap"
                            value={form.nama}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="Email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="Nomor Telephone"
                            placeholder="Nomor Telephone"
                            value={form.nama}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="Kota Domisili"
                            placeholder="Kota Domisili"
                            value={form.nama}
                            onChange={handleChange}
                            required
                        />
                       <button className='bg-black text-white p-2 rounded-2xl'>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
