"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
    {
        name: "DoroMecho",
        logo: "/brands/doromecho.png",
    },
    {
        name: "Inside Osogbo",
        logo: "/brands/inside-osogbo.png",
    },
    {
        name: "Fruitieways",
        logo: "/brands/fruitieways.png",
    },
    {
        name: "Dunmade",
        logo: "/brands/dunmade.png",
    },
    {
        name: "Osun New Era Lions Club",
        logo: "/brands/lions-club.png",
    },
    {
        name: "House on the Rock",
        logo: "/brands/hotr.png",
    },
];


export const Brands = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[var(--background)]">
            {/* Background radial gradient for depth - simplified for light mode */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,81,255,0.03),transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
                        Trusted by <span className="text-blue-600">Innovative Brands</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Collaborating with forward-thinking organizations to build impactful digital solutions.
                    </p>
                </motion.div>

                {/* Marquee Structure */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="py-12 animate-marquee flex whitespace-nowrap">
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={`${brand.name}-${index}`}
                                className="mx-8 flex items-center justify-center transition-all duration-500 hover:scale-110"
                            >
                                <div className="px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center min-w-[200px] h-[100px]">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-[60px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 py-12 animate-marquee2 flex whitespace-nowrap">
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={`${brand.name}-duplicate-${index}`}
                                className="mx-8 flex items-center justify-center transition-all duration-500 hover:scale-110"
                            >
                                <div className="px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center min-w-[200px] h-[100px]">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-[60px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

