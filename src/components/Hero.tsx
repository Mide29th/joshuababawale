"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            {/* Decorative Background Text Case 1 */}
            <motion.div
                style={{ y: y1 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.03, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-40 left-[-5%] text-[18vw] font-serif italic pointer-events-none whitespace-nowrap select-none"
            >
                Creative Mind
            </motion.div>

            {/* Decorative Background Text Case 2 */}
            <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.03, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-20 right-[-5%] text-[15vw] font-serif italic pointer-events-none whitespace-nowrap select-none"
            >
                Digital Soul
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 2 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-none group"
                >
                    <Image
                        src="/profile.png"
                        alt="J Babawale"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-[8rem] font-bold tracking-tight mb-4 font-serif leading-[0.9]"
                >
                    J Babawale
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-3xl text-black/50 font-medium tracking-tight"
                >
                    Independent Designer & Digital Fixer
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 flex flex-wrap justify-center gap-3"
                >
                    <div className="px-6 py-2.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available for Projects
                    </div>
                    <div className="px-6 py-2.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-sm font-semibold">
                        Digital Nomad
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
