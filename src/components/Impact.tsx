"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const metrics = [
    { label: "Design Efficiency", value: 60, suffix: "%", description: "Increase in workflow speed" },
    { label: "Customer Reach", value: 3, suffix: "x", description: "Average engagement growth" },
    { label: "Projects Completed", value: 50, suffix: "+", description: "Bespoke digital experiences" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="text-7xl md:text-9xl font-black text-accent tracking-tighter">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export function Impact() {
    return (
        <section className="py-32 px-4 bg-white/30 backdrop-blur-sm border-y border-black/5 relative overflow-hidden">
            {/* Soft Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center text-center group"
                    >
                        <CountUp value={metric.value} suffix={metric.suffix} />
                        <h3 className="text-xl font-bold mt-6 mb-2 tracking-tight">{metric.label}</h3>
                        <p className="text-black/40 max-w-[220px] font-medium">{metric.description}</p>

                        <div className="mt-8 w-12 h-[2px] bg-accent/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
