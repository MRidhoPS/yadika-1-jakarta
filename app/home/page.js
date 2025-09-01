import React from 'react'
import HeroSection from '@/component/heroSection'
import ContactSection from '@/component/contactSection'

export default function Home() {
    return (
        <>
            <section id="home" className="overflow-x-hidden">
                <HeroSection />
                
            </section>

            <section id='contact' className='overflow-x-hidden'>
                <ContactSection />
            </section>
        </>
    )
}
