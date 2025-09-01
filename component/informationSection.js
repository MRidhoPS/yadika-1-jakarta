import Link from 'next/link'
import React from 'react'

export default function informationSection() {
    return (
        <>
            <div className="relative mt-5 mb-5">
                <hr className="border-t border-gray-300" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-[12px] sm:text-xl">
                    Information
                </span>
            </div>

            <div className="w-full pt-4 pb-4 max-w-screen  shadow-xl shadow-gray-200">
               <div className='flex flex-col  md:flex-row justify-between px-8 sm:px-8 md:items-center'>
                    <h1 className='text-[30px] sm:text-4xl'>Informasi Terbaru</h1>
                    <Link href='/news' className='text-[12px] sm:text-xl text-yellow-600'>Lihat Semua</Link>
               </div>
               <div className='flex flex-col md:flex-row m-2'>
                    <div className='w-full sm:w-1/2 h-full border-b md:border-r p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>Penerimaan Siswa 2025</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[12px] pt-2 text-gray-500'>13 Mei 2025</p>
                            <p>↗️</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 h-full border-b md:border-r p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>Juara 1 Coding Indonesia</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[12px] pt-2 text-gray-500'>13 Mei 2025</p>
                            <p>↗️</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 h-full border-b md:border-r p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>Festival 17 Agustus</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[12px] pt-2 text-gray-500'>13 Mei 2025</p>
                            <p>↗️</p>
                        </div>
                    </div>
               </div>
            </div>

        </>
    )
}
