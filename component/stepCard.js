'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import eskul from "@/app/data/eskul";
import Link from "next/link";

export default function EkstrakulikulerCard() {
    return (
        <div className="flex flex-col gap-20 md:gap-28 py-10 md:py-16">
            {eskul.map((step, index) => {
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
                        {/* Stacked Image Boxes */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60">
                            <Image
                                src={step.image.image1}
                                alt={step.alt}
                                width={600}
                                height={600}
                                className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl 
                                           opacity-70 translate-x-2 sm:translate-x-3 md:translate-x-4 
                                           translate-y-2 sm:translate-y-3 md:translate-y-4 
                                           object-cover shadow-[0_0_25px_rgba(255,0,150,0.25)]"
                            />
                            <Image
                                src={step.image.image2}
                                alt={step.alt}
                                width={600}
                                height={600}
                                className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl 
                                           opacity-55 translate-x-4 sm:translate-x-6 md:translate-x-8 
                                           translate-y-4 sm:translate-y-6 md:translate-y-8 
                                           object-cover shadow-[0_0_35px_rgba(255,0,180,0.25)]"
                            />
                            <Image
                                src={step.image.image3}
                                alt={step.alt}
                                width={600}
                                height={600}
                                className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-xl 
                                           object-cover shadow-[0_0_45px_rgba(255,20,147,0.3)]"
                            />
                        </div>

                        {/* Step Content */}
                        <Link href={`/ekstrakulikuler/${step.id}`}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-white via-fuchsia-50 to-pink-50 
                                           rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl 
                                           px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 
                                           flex items-center gap-4 sm:gap-6 w-full md:min-w-[400px] max-w-md 
                                           border border-pink-200/70 hover:border-fuchsia-400 
                                           hover:shadow-[0_0_25px_rgba(255,0,150,0.3)] 
                                           transition-all duration-300"
                            >
                                <div className="bg-gradient-to-br from-pink-500 to-fuchsia-600 
                                                text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                                                flex items-center justify-center font-bold 
                                                text-base sm:text-lg shadow-[0_0_15px_rgba(255,0,150,0.4)]">
                                    {step.id}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-fuchsia-900">
                                        {step.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
