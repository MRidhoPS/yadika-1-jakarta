import { blogService } from '@/app/service/newsServices';
import Link from 'next/link';

// ISR: halaman di-regenerate otomatis tiap 1 jam sekali di background,
// jadi tetap cepat (statis) TAPI kontennya tetap fresh untuk Google & user.
export const revalidate = 3600;

function formatDate(date) {
    if (!date) return '';
    return new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
}

// Server Component: fetch data terjadi di server SEBELUM HTML dikirim ke browser.
// Ini memastikan konten blog sudah ada di initial HTML -> bisa di-index Google,
// Bing, dan semua crawler lain (termasuk yang tidak render JavaScript).
export default async function InformationSection() {
    let blogs = [];
    let hasError = false;

    try {
        blogs = await blogService.getAllBlogs();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        hasError = true;
    }

    return (
        <>
            {/* Divider with magenta tone */}
            <div className="relative mt-5 mb-5">
                <hr className="border-t border-pink-200" />
                <span
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-white px-2 text-fuchsia-600 font-medium text-[12px] sm:text-xl"
                >
                    Information
                </span>
            </div>

            {/* Container with soft magenta accent shadow */}
            <div
                className="w-full pt-4 pb-4 max-w-screen shadow-xl shadow-pink-100/70
                rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-100"
            >
                <div className="flex flex-col md:flex-row justify-between px-8 sm:px-8 md:items-center">
                    <h2
                        className="text-[30px] sm:text-4xl font-extrabold text-transparent
                        bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-400"
                    >
                        Informasi Terbaru
                    </h2>

                    {blogs.length > 0 && (
                        <Link
                            href="/news"
                            className="text-[12px] sm:text-xl font-semibold text-fuchsia-600
                            hover:text-pink-500 transition-colors duration-200"
                        >
                            Lihat Semua
                        </Link>
                    )}
                </div>

                <div className="flex flex-col md:flex-row m-2">
                    {blogs.length === 0 ? (
                        /* Empty / Error State */
                        <div className="w-full px-4 sm:px-6 py-10 sm:py-14">
                            <div className="max-w-xl mx-auto flex flex-col items-center justify-center text-center">
                                <div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full
                                    bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50
                                    border border-pink-100 flex items-center justify-center shadow-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8 sm:w-10 sm:h-10 text-fuchsia-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A3.375 3.375 0 0 1 11.25 4.875v-.75m0 0H8.25A3.375 3.375 0 0 0 4.875 7.5v9A3.375 3.375 0 0 0 8.25 19.875h7.5a3.375 3.375 0 0 0 3.375-3.375v-2.25M11.25 4.125L19.5 12.375"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mt-5 text-lg sm:text-xl font-bold text-gray-700">
                                    Belum Ada Informasi
                                </h3>
                                <p className="mt-2 max-w-md text-sm sm:text-base leading-relaxed text-gray-400">
                                    {hasError
                                        ? 'Informasi sedang tidak dapat dimuat. Silakan kembali lagi nanti.'
                                        : 'Belum ada berita atau informasi terbaru untuk ditampilkan saat ini. Silakan kembali lagi nanti.'}
                                </p>
                                <div className="mt-5 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-300" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="w-full sm:w-1/2 h-full border-b md:border-r
                                p-6 rounded-md flex flex-col gap-2 border-pink-100
                                hover:bg-pink-50/40 transition-all duration-200"
                            >
                                <h3 className="font-bold text-[20px] md:text-[16px] text-fuchsia-700">
                                    <Link href={`/news/${blog.id}`}>{blog.title}</Link>
                                </h3>

                                <div
                                    className="text-gray-700 text-[14px] line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: blog.description }}
                                />

                                <div className="flex flex-row justify-between">
                                    <time
                                        dateTime={new Date(blog.createdAt).toISOString()}
                                        className="text-[12px] pt-2 text-gray-400"
                                    >
                                        {formatDate(blog.createdAt)}
                                    </time>

                                    <Link
                                        href={`/news/${blog.id}`}
                                        aria-label={`Baca selengkapnya: ${blog.title}`}
                                        className="text-fuchsia-600 hover:text-pink-500 transition-colors duration-200"
                                    >
                                        ↗️
                                    </Link>
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}