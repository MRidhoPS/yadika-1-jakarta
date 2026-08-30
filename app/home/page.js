import Script from "next/script";
import HeroSection from "@/component/heroSection";
import ContactSection from "@/component/contactSection";
import InformationSection from "@/component/informationSection";
import EkstrakulikulerSection from "@/component/ekstrakulikulerSection";

const SITE_URL = "https://www.smayadika1jakarta.com";

export const metadata = {
    // "absolute" dipakai supaya title INI TIDAK digabung dengan template
    // "%s | SMA YADIKA 1 JAKARTA" dari layout.js — kalau tidak, hasilnya jadi
    // dobel: "...Berprestasi | SMA YADIKA 1 JAKARTA" (terlalu panjang, terpotong di SERP).
    title: {
        absolute: "SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
    },
    description:
        "SMA Yadika 1 Jakarta Barat adalah sekolah unggulan dengan program English One (native speaker), Gramedia Academy (digitalpreneur), dan berkomitmen mencetak generasi berprestasi, adaptif, dan berkarakter.",
    keywords: [
        "SMA Yadika 1 Jakarta Barat",
        "Sekolah ASIK",
        "English One SMA Yadika",
        "Gramedia Academy",
        "SMA swasta terbaik Jakarta Barat",
        "PPDB SMA Yadika 1",
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
        description:
            "Sekolah unggulan di Jakarta Barat dengan program inovatif English One, Gramedia Academy, dan tenaga pendidik profesional.",
        url: SITE_URL,
        type: "website",
        images: [
            {
                url: "/new_kepsek.jpeg",
                width: 1200,
                height: 630,
                alt: "Kepala Sekolah SMA Yadika 1 Jakarta Barat",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
        description:
            "Sekolah unggulan di Jakarta Barat dengan program English One dan Gramedia Academy.",
        images: ["/new_kepsek.jpeg"],
    },
};

export default function Home() {
    // Digabung dalam satu @graph: WebPage + FAQPage
    // biar Google paham relasi antar entity di halaman ini, bukan cuma FAQ berdiri sendiri.
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${SITE_URL}/#webpage`,
                url: SITE_URL,
                name: "SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
                isPartOf: {
                    "@id": `${SITE_URL}/#website`,
                },
                about: {
                    "@id": `${SITE_URL}/#organization`,
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/#faq`,
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Apa keunggulan SMA Yadika 1 Jakarta Barat?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "SMA Yadika 1 adalah Sekolah ASIK: Aman, Solid, Inovatif, Keren.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Program unggulan apa saja di SMA Yadika 1?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "English One (Bahasa Inggris dengan native speaker) dan Gramedia Academy (Digitalpreneur).",
                        },
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Script
                id="home-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <section id="home" className="overflow-x-hidden">
                <HeroSection />
            </section>

            <section id="eskul" className="overflow-x-hidden">
                <EkstrakulikulerSection />
            </section>

            <section id="information" className="overflow-x-hidden">
                <InformationSection />
            </section>

            <section id="contact" className="overflow-x-hidden">
                <ContactSection />
            </section>
        </>
    );
}