"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-height-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            {/* Decorative Background Text */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.05, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-40 left-[-5%] text-[15vw] font-serif italic pointer-events-none whitespace-nowrap"
            >
                Creative Mind
            </motion.div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden mb-12 shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-500"
                >
                    <Image
                        src="/headshot.png"
                        alt="J Babawale"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-4"
                >
                    J Babawale
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-3xl text-black/60 font-light"
                >
                    Designer & Builder
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 flex gap-4"
                >
                    <div className="px-6 py-2 rounded-full border border-black/10 text-sm backdrop-blur-sm">
                        Available for Projects
                    </div>
                    <div className="px-6 py-2 rounded-full border border-black/10 text-sm backdrop-blur-sm">
                        Digital Nomad
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
