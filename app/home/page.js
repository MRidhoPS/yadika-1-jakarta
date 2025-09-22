'use clients';
import React from 'react'
import HeroSection from '@/component/heroSection'
import ContactSection from '@/component/contactSection'
import InformationSection from '@/component/informationSection'
import EkstrakulikulerSection from '@/component/ekstrakulikulerSection'

export default function Home() {
    return (
        <>
            <section id="home" className="overflow-x-hidden">
                <HeroSection />
                
            </section>

            <section id="eskul" className="overflow-x-hidden">
                <EkstrakulikulerSection />

            </section>

            <section id="information" className="overflow-x-hidden">
                <InformationSection />

            </section>

            <section id='contact' className='overflow-x-hidden'>
                <ContactSection />
            </section>
        </>
    )
}
