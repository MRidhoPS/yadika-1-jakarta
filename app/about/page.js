import Script from "next/script";
import keunggulan from "../data/keunggulan";
import AboutClient from "./AboutClient";

export const metadata = {
    title: "Tentang SMA Yadika 1 Jakarta Barat | Sekolah ASIK & Berprestasi",
    description:
        "SMA Yadika 1 Jakarta Barat adalah sekolah unggulan dengan program English One, Gramedia Academy, dan berkomitmen mencetak generasi berprestasi. Temukan profil sekolah & sambutan kepala sekolah di sini.",
    keywords: [
        "SMA Yadika 1",
        "Sekolah Jakarta Barat",
        "Sekolah Swasta",
        "SMA Unggulan Jakarta",
        "Sekolah Yadika",
        "Pendaftaran SMA Jakarta Barat",
    ],
    openGraph: {
        title: "Tentang SMA Yadika 1 Jakarta Barat",
        description:
            "Sekolah unggulan di Jakarta Barat dengan program inovatif, tenaga pendidik profesional, dan prestasi membanggakan.",
        url: "https://www.smayadika1jakarta.com/about",
        siteName: "SMA Yadika 1 Jakarta Barat",
        images: [
            {
                url: "/kepsek.jpg",
                width: 1200,
                height: 630,
                alt: "Foto Kepala Sekolah SMA Yadika 1 Jakarta Barat - Dra. Luky Mardiana",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 w-full overflow-hidden">
            <Script
                id="school-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "SMA Yadika 1 Jakarta Barat",
                        alternateName: "Sekolah ASIK Yadika 1",
                        url: "https://www.smayadika1jakarta.com/",
                        logo: "https://www.smayadika1jakarta.com/logo.png",
                        image: "https://www.smayadika1jakarta.com/kepsek.jpg",
                        description:
                            "SMA Yadika 1 Jakarta Barat adalah sekolah unggulan di bawah Yayasan Abdi Karya (Yadika) dengan program English One dan Gramedia Academy, berkomitmen mencetak generasi berprestasi.",
                        foundingDate: "1976-02-14",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Jl. Duri Kepa No. 1",
                            addressLocality: "Jakarta Barat",
                            addressRegion: "DKI Jakarta",
                            postalCode: "11510",
                            addressCountry: "ID",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+62-21-1234567",
                            contactType: "Customer Service",
                            areaServed: "ID",
                            availableLanguage: ["Indonesian", "English"],
                        },
                        sameAs: [
                            "https://www.facebook.com/smayadika1",
                            "https://www.instagram.com/smayadika1dk?igsh=aDh0Ync2dGlnMjJo",
                            "https://www.tiktok.com/@smayadika1dk?_t=ZS-8zOEA7iKiZe&_r=1",
                        ],
                    }),
                }}
            />
            <AboutClient keunggulan={keunggulan} />
        </main>
    );
}
