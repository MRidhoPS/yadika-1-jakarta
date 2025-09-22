"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogService } from "../service/newsServices";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function News() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", "Event", "Prestasi", "Pengumuman"];

  const formatDate = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      let blogData;
      if (selectedCategory && selectedCategory !== "All") {
        blogData = await blogService.getBlogsByCategory(selectedCategory);
      } else {
        blogData = await blogService.getAllBlogs();
      }
      setBlogs(blogData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-tr from-black via-gray-900 to-black text-white rounded-b-3xl shadow-md relative overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Yadika 1 News
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-3 text-lg md:text-xl opacity-90"
        >
          Berita terbaru, prestasi, dan kegiatan seru untuk seluruh siswa
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 mt-8">
        <motion.div
          className="flex gap-3 flex-wrap md:flex-nowrap md:justify-center overflow-x-auto pb-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() =>
                setSelectedCategory(category === "All" ? "" : category)
              }
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category ||
                (category === "All" && selectedCategory === "")
                ? "bg-gradient-to-r from-white-600 to-black-600 text-black shadow-lg"
                : "bg-gradient-to-tr from-black via-gray-900 to-black text-gray-200 hover:opacity-90"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* News Grid */}
      <motion.div
        className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
      >
        {loading ? (
          <div className="col-span-full text-center text-gray-500">
            Loading...
          </div>
        ) : blogs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            Belum ada berita.
          </div>
        ) : (
          blogs.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <Image
                width={400}
                height={400}
                src={item.image || "/placeholder.jpg"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-gradient-to-r from-black via-gray-900 to-black text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(item.createdAt)}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <div
                  className="text-gray-600 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <Link
                  href={`/news/${item.id}`}
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
