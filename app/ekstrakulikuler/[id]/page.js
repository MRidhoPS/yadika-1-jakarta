import Image from "next/image";
import Link from "next/link";
import eskul from "@/app/data/eskul";

export async function generateMetadata({ params }) {
    const { id } = await params; 
    const detail = eskul.find((item) => item.id === Number(id));
    if (!detail) {
        return {
            title: "Ekstrakurikuler Tidak Ditemukan | SMA Yadika 1 Jakarta Barat",
            description: "Halaman ekstrakurikuler tidak ditemukan.",
        };
    }

    return {
        title: `${detail.title} | Ekstrakurikuler SMA Yadika 1 Jakarta Barat`,
        description: detail.description.slice(0, 160),
        openGraph: {
            title: detail.title,
            description: detail.description,
            url: `https://yadika-1-jakarta.vercel.app/eskul/${detail.id}`,
            siteName: "SMA Yadika 1 Jakarta Barat",
            images: Object.values(detail.image).map((img) => ({
                url: img,
                width: 1200,
                height: 630,
                alt: detail.alt,
            })),
            locale: "id_ID",
            type: "article",
        },
    };
}

export default async function EkstrakulikulerDetail({ params }) {
    const { id } = await params; 
    const detail = eskul.find((item) => item.id === Number(id));

    if (!detail) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-600 px-4">
                <p className="text-base sm:text-lg text-center">
                    Ekstrakurikuler tidak ditemukan
                </p>
                <Link
                    href="/home#eskul"
                    className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm sm:text-base hover:opacity-90 transition-all"
                >
                    Kembali
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute top-20 left-5 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-400/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-5 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-400/25 rounded-full blur-[110px]" />

            <div className="relative w-full max-w-4xl bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-lg shadow-gray-200/40 border border-white/60 p-6 sm:p-8 md:p-12">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                    {detail.title}
                </h1>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                    {detail.description}
                </p>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    {Object.values(detail.image).map((img, i) => (
                        <div
                            key={i}
                            className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-md border border-white/40"
                        >
                            <Image
                                src={img}
                                alt={detail.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Back Button */}
                <div className="flex justify-center">
                    <Link
                        href="/home#eskul"
                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm sm:text-base shadow-md hover:opacity-90 transition-all"
                    >
                        Kembali ke Daftar
                    </Link>
                </div>
            </div>
        </div>
    );
}
