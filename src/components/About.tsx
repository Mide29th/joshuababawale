"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const metrics = [
    { label: "Efficiency", value: "60%", description: "Workflow speed" },
    { label: "Reach", value: "3x", description: "Engagement" },
    { label: "Projects", value: "50+", description: "Completed" },
];

export function About() {
    return (
        <section id="about" className="relative py-32 px-4 bg-[#fdfdfd] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="relative z-10 w-full">
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
                            className="space-y-8 text-xl text-black/60 font-medium leading-relaxed max-w-2xl mx-auto"
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
                            className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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
                            className="mt-16 flex flex-wrap justify-center gap-3"
                        >
                            {["Next.js", "TypeScript", "Tailwind", "Framer", "Motion", "UX/UI", "Figma", "Canva", "Adobe Suite"].map((tag) => (
                                <span key={tag} className="px-5 py-2 rounded-full border border-black/5 bg-white text-xs font-bold uppercase tracking-widest text-black/40 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
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
