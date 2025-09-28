'use client';
import { blogService } from '@/app/service/newsServices';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

export default function InformationSection() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatDate = (date) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const blogData = await blogService.getAllBlogs();
            setBlogs(blogData);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative mt-5 mb-5">
                <hr className="border-t border-gray-300" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-[12px] sm:text-xl">
                    Information
                </span>
            </div>

            <div className="w-full pt-4 pb-4 max-w-screen shadow-xl shadow-gray-200">
                <div className='flex flex-col md:flex-row justify-between px-8 sm:px-8 md:items-center'>
                    <h1 className='text-[30px] sm:text-4xl'>Informasi Terbaru</h1>
                    {/* Hanya tampilkan link "Lihat Semua" kalau ada blog */}
                    {!loading && blogs.length > 0 && (
                        <Link href='/news' className='text-[12px] sm:text-xl text-yellow-600'>
                            Lihat Semua
                        </Link>
                    )}
                </div>

                <div className='flex flex-col md:flex-row m-2'>
                    {loading ? (
                        <div className="w-full text-center text-gray-500 py-6">Loading...</div>
                    ) : blogs.length === 0 ? (
                        <div className="w-full text-center text-gray-500 py-6">Belum ada berita.</div>
                    ) : (
                        blogs.map(blog => (
                            <div
                                key={blog.id}
                                className='w-full sm:w-1/2 h-full border-b md:border-r p-6 rounded-md flex flex-col gap-2 border-gray-300'>
                                <h3 className='font-bold text-[20px] md:text-[16px]'>{blog.title}</h3>
                                <div
                                    className='text-black text-[14px] line-clamp-3'
                                    dangerouslySetInnerHTML={{ __html: blog.description }}
                                />
                                <div className='flex flex-row justify-between'>
                                    <p className='text-[12px] pt-2 text-gray-500'>
                                        {formatDate(blog.createdAt)}
                                    </p>
                                    <Link href={`/news/${blog.id}`}>↗️</Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
