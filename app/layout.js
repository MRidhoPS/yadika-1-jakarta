import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.smayadika1jakarta.com";
const SITE_NAME = "SMA YADIKA 1 JAKARTA";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Sekolah Menengah Atas Unggulan di Jakarta`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SMA YADIKA 1 JAKARTA adalah Sekolah Menengah Atas swasta unggulan di Jakarta. Temukan informasi resmi seputar kurikulum, jadwal PPDB (pendaftaran siswa baru), prestasi akademik & non-akademik, ekstrakurikuler, fasilitas belajar, dan pengumuman terbaru.",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
    },
  },
  openGraph: {
    title: `${SITE_NAME} - Sekolah Menengah Atas di Jakarta`,
    description:
      "Informasi resmi SMA YADIKA 1 JAKARTA: kurikulum, PPDB, prestasi siswa, ekstrakurikuler, fasilitas, dan kegiatan sekolah terbaru.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: `Logo ${SITE_NAME}`,
      },
    ],
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Informasi resmi SMA YADIKA 1 JAKARTA: kurikulum, PPDB, prestasi siswa, ekstrakurikuler, dan fasilitas sekolah.",
    images: ["/logo.png"],
  },
  keywords: [
    "SMA Yadika 1 Jakarta",
    "SMA Jakarta",
    "Sekolah Menengah Atas Jakarta",
    "PPDB SMA Jakarta",
    "Sekolah swasta Jakarta",
    "SMA Swasta Terbaik Jakarta",
    "Pendaftaran siswa baru Jakarta",
  ],
  verification: {
    google: "4Hve-GuRIBqZLbg3Jjm99kKGV3jkgqV1mIWS6FPx0b0",
  },
  other: {
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  alternateName: "SMA Yadika 1 Jakarta",
  description: metadata.description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: "+6281378888032",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  // Ganti dengan akun resmi sekolah agar Google mengaitkan entitas dengan benar
  sameAs: [
    // "https://www.instagram.com/smayadika1jakarta",
    // "https://www.facebook.com/smayadika1jakarta",
    // "https://www.youtube.com/@smayadika1jakarta",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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