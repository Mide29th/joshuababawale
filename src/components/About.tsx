"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const gridImages = [
    { src: "/profile.png", alt: "Design 1", className: "col-span-2 row-span-2" },
    { src: "/projects/dunmade.png", alt: "Design 2", className: "col-span-1 row-span-1" },
    { src: "/profile.png", alt: "Design 3", className: "col-span-1 row-span-1" },
    { src: "/projects/dunmade.png", alt: "Design 4", className: "col-span-1 row-span-2" },
    { src: "/profile.png", alt: "Design 5", className: "col-span-1 row-span-1" },
];

const metrics = [
    { label: "Efficiency", value: "60%", description: "Workflow speed" },
    { label: "Reach", value: "3x", description: "Engagement" },
    { label: "Projects", value: "50+", description: "Completed" },
];

export function About() {
    return (
        <section id="about" className="relative py-32 px-4 bg-[#fdfdfd] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-8 block"
                        >
                            The Designer
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.9] font-serif mb-12"
                        >
                            Joshua Babawale <br />
                            <span className="text-black/20 italic font-medium">Digital Nomad</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8 text-xl text-black/60 font-medium leading-relaxed max-w-lg"
                        >
                            <p>
                                Based anywhere there's a problem to solve. I specialize in creating simple and innovative solutions that user friendly and business oriented.
                            </p>
                        </motion.div>

                        {/* Integrated Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-12 grid grid-cols-3 gap-8 max-w-lg"
                        >
                            {metrics.map((metric) => (
                                <div key={metric.label} className="flex flex-col">
                                    <span className="text-3xl font-black text-accent tracking-tighter">{metric.value}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-black/40 mt-1">{metric.label}</span>
                                    <span className="text-[10px] text-black/30 font-medium mt-0.5">{metric.description}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 flex flex-wrap gap-3"
                        >
                            {["Next.js", "TypeScript", "Tailwind", "Framer", "Motion", "UX/UI"].map((tag) => (
                                <span key={tag} className="px-5 py-2 rounded-full border border-black/5 bg-white text-xs font-bold uppercase tracking-widest text-black/40 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>


                    <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[600px] md:h-[800px]">
                        {gridImages.map((image, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={image.className + " relative rounded-[2rem] overflow-hidden shadow-lg group grayscale hover:grayscale-0 transition-all duration-700"}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Accent Text */}
            <div className="absolute bottom-0 right-0 text-[20vw] font-serif italic text-black/[0.02] select-none pointer-events-none translate-y-1/3">
                Creativite
            </div>
        </section>
    );
}
