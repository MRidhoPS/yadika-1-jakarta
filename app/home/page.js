import Script from "next/script";
import HeroSection from "@/component/heroSection";
import ContactSection from "@/component/contactSection";
import InformationSection from "@/component/informationSection";
import EkstrakulikulerSection from "@/component/ekstrakulikulerSection";

export const metadata = {
    title: "SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
    description:
        "SMA Yadika 1 Jakarta Barat adalah sekolah unggulan dengan program English One, Gramedia Academy, dan berkomitmen mencetak generasi berprestasi.",
    openGraph: {
        title: "SMA Yadika 1 Jakarta Barat",
        description:
            "Sekolah unggulan di Jakarta Barat dengan program inovatif dan tenaga pendidik profesional.",
        url: "https://www.smayadika1jakarta.com/",
        images: ["/kepsek.jpg"],
    },
};

export default function Home() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
    };

    return (
        <>
            {/* JSON-LD for FAQ */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
