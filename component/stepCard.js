'use client';
import Image from "next/image";
import { motion } from 'framer-motion'

export default function Steps() {
    const steps = [
        {
            id: 1,
            title: "Tari Saman",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Saman SMA Yadika 1 Jakarta',
            image: {
                'image1': '/saman1.jpg',
                'image2': '/saman2.jpg',
                'image3': '/saman3.jpg',
            }
        },
        {
            id: 2,
            title: "Tari Tartra",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Tartra SMA Yadika 1 Jakarta',

            image: {
                'image1': '/tartra1.jpg',
                'image2': '/tartra2.jpg',
                'image3': '/tartra1.jpg',
            }
        },
        {
            id: 3,
            title: "Karate",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Karate SMA Yadika 1 Jakarta',

            image: {
                'image1': '/karate1.jpg',
                'image2': '/karate2.jpg',
                'image3': '/karate2.jpg',
            }
        },
        {
            id: 4,
            title: "Paskibra",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Paskibra SMA Yadika 1 Jakarta',

            image: {
                'image1': '/paskib1.jpg',
                'image2': '/paskib2.jpg',
                'image3': '/paskib3.jpg',
            }
        },
        {
            id: 5,
            title: "Basket",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Basket SMA Yadika 1 Jakarta',

            image: {
                'image1': '/basket1.jpg',
                'image2': '/basket2.jpg',
                'image3': '/basket3.jpg',
            }
        },
        {
            id: 6,
            title: "Futsal",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Futsal SMA Yadika 1 Jakarta',

            image: {
                'image1': '/futsal1.jpg',
                'image2': '/futsal2.jpg',
                'image3': '/futsal3.jpg',
            }
        },
        {
            id: 7,
            title: "Modern Dance",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'Modern Dance SMA Yadika 1 Jakarta',

            image: {
                'image1': '/md1.jpg',
                'image2': '/md2.jpg',
                'image3': '/md3.jpg',
            }
        },
        {
            id: 8,
            title: "KIR",
            description: "Lorem Ipsum Dolor sit amet",
            alt: 'KIR SMA Yadika 1 Jakarta',

            image: {
                'image1': '/kir1.jpg',
                'image2': '/kir2.jpg',
                'image3': '/kir3.jpg',
            }
        },
    ];

    return (
        <div className="flex flex-col gap-20 md:gap-28 py-10 md:py-16">
            {steps.map((step, index) => {
                const isEven = index % 2 !== 0;
                return (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Stack Image Boxes */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60">
                            <Image
                                src={step.image.image1}
                                alt={step.alt}
                                width={600}
                                height={600}
                                className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl opacity-70 translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4 object-cover"
                            />
                            <Image
                                src={step.image.image2}
                                alt={step.alt}
                                width={600}
                                height={600}
                                className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl opacity-55 translate-x-4 sm:translate-x-6 md:translate-x-8 translate-y-4 sm:translate-y-6 md:translate-y-8 object-cover"
                            />
                            <Image
                                src={step.image.image3}
                                                            alt={step.alt}
                                                            width={600}
                                                            height={600}
                                                            className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl object-cover"
                            />
                        </div>

                        {/* Step Content */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 flex items-center gap-4 sm:gap-6 w-full md:min-w-[400px] max-w-md border border-gray-100 hover:border-blue-300 hover:shadow-blue-100 transition-all duration-300"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
                                {step.id}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900">
                                    {step.title}
                                </h3>
                                {/* <p className="text-gray-500 text-sm sm:text-base">{step.description}</p> */}
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );


}
