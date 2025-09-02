"use client";
import React from 'react';
import { motion } from 'framer-motion';
import newsData from '../data/news';
import Link from 'next/link';



export default function News() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="text-center py-30 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-b-3xl shadow-md">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Yadika 1 News
        </motion.h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">Berita terbaru, prestasi, dan kegiatan seru untuk seluruh siswa</p>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                {item.category}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">{item.excerpt}</p>
              <Link
                href={`/news/${item.id}`}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
