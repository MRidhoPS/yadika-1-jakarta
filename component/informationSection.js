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
            {/* Divider with magenta tone */}
            <div className="relative mt-5 mb-5">
                <hr className="border-t border-pink-200" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-white px-2 text-fuchsia-600 font-medium text-[12px] sm:text-xl">
                    Information
                </span>
            </div>

            {/* Container with soft magenta accent shadow */}
            <div className="w-full pt-4 pb-4 max-w-screen shadow-xl shadow-pink-100/70 rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-100">
                <div className="flex flex-col md:flex-row justify-between px-8 sm:px-8 md:items-center">
                    <h1 className="text-[30px] sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-400">
                        Informasi Terbaru
                    </h1>

                    {/* Only show "Lihat Semua" if blogs exist */}
                    {!loading && blogs.length > 0 && (
                        <Link
                            href="/news"
                            className="text-[12px] sm:text-xl font-semibold text-fuchsia-600 hover:text-pink-500 transition-colors duration-200"
                        >
                            Lihat Semua
                        </Link>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row m-2">
                    {loading ? (
                        <div className="w-full text-center text-fuchsia-400 py-6">
                            Loading...
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="w-full text-center text-gray-400 py-6">
                            Belum ada berita.
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="w-full sm:w-1/2 h-full border-b md:border-r p-6 rounded-md flex flex-col gap-2 border-pink-100 hover:bg-pink-50/40 transition-all duration-200"
                            >
                                <h3 className="font-bold text-[20px] md:text-[16px] text-fuchsia-700">
                                    {blog.title}
                                </h3>
                                <div
                                    className="text-gray-700 text-[14px] line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: blog.description }}
                                />
                                <div className="flex flex-row justify-between">
                                    <p className="text-[12px] pt-2 text-gray-400">
                                        {formatDate(blog.createdAt)}
                                    </p>
                                    <Link
                                        href={`/news/${blog.id}`}
                                        className="text-fuchsia-600 hover:text-pink-500 transition-colors duration-200"
                                    >
                                        ↗️
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>

    );
}
