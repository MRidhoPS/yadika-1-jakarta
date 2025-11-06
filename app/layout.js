import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.smayadika1jakarta.com/"),
  title: "SMA YADIKA 1 JAKARTA",
  description:
    "SMA YADIKA 1 JAKARTA — Sekolah Menengah Atas unggulan di Jakarta. Informasi resmi tentang kurikulum, PPDB (pendaftaran), prestasi siswa, ekstrakurikuler, fasilitas, dan pengumuman.",
  authors: [{ name: "SMA YADIKA 1 JAKARTA" }],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SMA YADIKA 1 JAKARTA - Sekolah Menengah Atas di Jakarta",
    description:
      "SMA YADIKA 1 JAKARTA — Informasi resmi: Kurikulum, PPDB, prestasi, ekstrakurikuler, fasilitas, dan kegiatan siswa.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SMA YADIKA 1 JAKARTA",
      },
    ],
    url: "https://www.smayadika1jakarta.com/",
    siteName: "SMA YADIKA 1 JAKARATA",
    locale: "id_ID",
    type: "website",
  },
  keywords: [
    "SMA Yadika 1 Jakarta",
    "SMA Jakarta",
    "Sekolah Menengah Atas Jakarta",
    "PPDB SMA Jakarta",
    "Sekolah swasta Jakarta",
    "SMA Swasta Terbaik",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMA YADIKA 1 JAKARTA" />
        <meta name="twitter:description" content="Mau olahraga tapi malas yang ribet? Coba kelas Zumba & aerobik Jakarta bareng instruktur berpengalaman. Seru, sehat, cocok usia 20–45 tahun!" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />


        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "name": "SMA YADIKA 1 JAKARTA",
            "description": metadata.description,
            "image": metadata.openGraph.images[0].url,
            "url": metadata.openGraph.url,
            "telephone": "+6281378888032",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressCountry": "ID",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
