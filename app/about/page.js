import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className="bg-transparent w-full overflow-hidden">
            <div className="w-full md:h-[450px] max-w-screen">
                {/* Wrapper gambar + overlay */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/29885889/pexels-photo-29885889.jpeg?_gl=1*15jd7xe*_ga*MTc5MzQ3MzA5OS4xNzQ0MDIyODMx*_ga_8JE65Q40S6*czE3NTY3Mzc4NDckbzE2JGcxJHQxNzU2NzM4OTM0JGoxNCRsMCRoMA.."
                        alt="Hero Image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                    />

                    {/* Konten di atas overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                        <div className="mx-auto max-w-3xl text-left">
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">
                                We Build Your Dream
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:h-[510px] py-10 max-w-screen bg-gray-100 shadow-2xl shadow-gray-300">
                <div className='mx-4 flex flex-col md:flex-row gap-10'>
                    <Image
                        src="https://images.pexels.com/photos/29885889/pexels-photo-29885889.jpeg?_gl=1*15jd7xe*_ga*MTc5MzQ3MzA5OS4xNzQ0MDIyODMx*_ga_8JE65Q40S6*czE3NTY3Mzc4NDckbzE2JGcxJHQxNzU2NzM4OTM0JGoxNCRsMCRoMA.."
                        alt="Hero Image"
                        width={1920}
                        height={1080}
                        className="sm:w-1/2 sm:h-full object-cover rounded-lg sm:rounded-4xl"
                    />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-4xl md:text-6xl font-black'>Our Story</h2>
                        <p className='text-[20px] sm:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className="w-full py-10 max-w-screen  shadow-xl shadow-gray-200">
                <div className='sm:mx-4 px-3 flex flex-col md:flex-row gap-10 justify-center items-center'>
                    <div className='w-full sm:w-1/2 h-full border p-6 rounded-md flex flex-col gap-4 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-2xl'>Our Vision</h3>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-full sm:w-1/2 h-full border p-6 rounded-md flex flex-col gap-4 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-2xl'>Our Mission</h3>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-14 mb-4">
                <hr className="border-t border-gray-300" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-[12px] sm:text-xl">
                    Our Featured Programs
                </span>
            </div>

            <div className="w-full max-w-screen mb-10">


                <p className='text-center mb-7 text-gray-400'>Choose according to your interest</p>
                <div className='sm:mx-4 px-3 flex flex-col md:flex-row gap-4 justify-center items-center'>
                    <div className='w-full sm:w-1/2 h-full border p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>Coding & Software Development</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-full sm:w-1/2 h-full border p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>AI & Machine Learning</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='w-full sm:w-1/2 h-full border p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                        <h3 className='font-bold text-[20px] md:text-[16px]'>UI/UX Design</h3>
                        <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
