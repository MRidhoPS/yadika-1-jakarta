"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '../service/newsServices';
import "react-quill-new/dist/quill.snow.css";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function News() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'Event', 'Prestasi', 'Pengumuman'];

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
  }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      let blogData;
      if (selectedCategory && selectedCategory !== 'All') {
        blogData = await blogService.getBlogsByCategory(selectedCategory);
      } else {
        blogData = await blogService.getAllBlogs();
      }
      setBlogs(blogData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-b-3xl shadow-md">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Yadika 1 News
        </motion.h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">
          Berita terbaru, prestasi, dan kegiatan seru untuk seluruh siswa
        </p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 mt-8">
        <div className="flex gap-3 flex-wrap md:flex-nowrap md:justify-center overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${(selectedCategory === category || (category === 'All' && selectedCategory === ''))
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full text-center text-gray-500">Loading...</div>
        ) : blogs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">Belum ada berita.</div>
        ) : (
          blogs.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <Image
                width={400}
                height={400}
                src={item.image || '/placeholder.jpg'}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(item.createdAt)}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-800">{item.title}</h2>
                <div className="text-gray-600 text-sm line-clamp-3"
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
      </div>
    </div>
  );
}


// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { blogService } from '../service/newsServices';

// export default function News() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const categories = ['All', 'Event', 'Prestasi', 'Pengumuman'];

//   useEffect(() => {
//     fetchBlogs();
//   }, [selectedCategory]);

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       let blogData;
//       if (selectedCategory && selectedCategory !== 'All') {
//         blogData = await blogService.getBlogsByCategory(selectedCategory);
//       } else {
//         blogData = await blogService.getAllBlogs();
//       }
//       setBlogs(blogData);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Hero Section */}
//       <div className="text-center py-30 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-b-3xl shadow-md">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold tracking-wide"
//         >
//           Yadika 1 News
//         </motion.h1>
//         <p className="mt-3 text-lg md:text-xl opacity-90">
//           Berita terbaru, prestasi, dan kegiatan seru untuk seluruh siswa
//         </p>
//       </div>

//       {/* News Grid */}
//       <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//         <div className="flex flex-wrap gap-2">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${(selectedCategory === category || (category === 'All' && selectedCategory === ''))
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
        
//         {loading ? (
//           <div className="col-span-full text-center text-gray-500">Loading...</div>
//         ) : blogs.length === 0 ? (
//           <div className="col-span-full text-center text-gray-500">Belum ada berita.</div>
//         ) : (
//           blogs.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
//             >
//               <Image
//                 width={400}
//                 height={400}
//                 src={item.image || '/placeholder.jpg'}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
//                   {item.category || 'Umum'}
//                 </span>
//                 <h2 className="mt-3 text-xl font-semibold text-gray-800">{item.title}</h2>
//                 <p className="mt-2 text-gray-600 text-sm">
//                   {item.excerpt || (item.description?.replace(/<[^>]+>/g, '').slice(0, 100) + '...')}
//                 </p>
//                 <Link
//                   href={`/news/${item.id}`}
//                   className="mt-4 inline-block text-blue-600 font-medium hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
