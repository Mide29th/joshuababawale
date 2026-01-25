"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="relative py-32 px-4 bg-[#f0f0f0] overflow-hidden">
            {/* Decorative Text */}
            <div className="absolute top-0 right-0 text-[20vw] font-serif italic text-black/[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                Yoruba
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-accent font-bold uppercase tracking-widest text-sm"
                >
                    My Story
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-black mt-6 tracking-tighter leading-tight"
                >
                    Builder of digital solutions. <br />
                    <span className="text-black/30">Designer of elegant systems.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 space-y-6 text-xl md:text-2xl text-black/70 font-light"
                >
                    <p>
                        I am a digital nomad based anywhere you need me. I specialize in bridging the gap between design and development, ensuring that every pixel is purposeful and every line of code is performant.
                    </p>
                    <p>
                        With a focus on impact and conversion, I help brands and individuals transform their ideas into premium digital experiences that resonate with their audience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-wrap gap-4"
                >
                    {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Brand Strategy"].map((tag) => (
                        <span key={tag} className="px-6 py-3 rounded-full bg-white border border-black/5 text-sm font-medium shadow-sm">
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
