"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
    { label: "Design Efficiency", value: "60%", description: "Increase in workflow speed" },
    { label: "Customer Reach", value: "3x", description: "Average engagement growth" },
    { label: "Projects Completed", value: "50+", description: "Bespoke digital experiences" },
];

export function Impact() {
    return (
        <section className="py-24 px-4 bg-white/30 backdrop-blur-sm border-y border-black/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-6xl md:text-8xl font-black text-accent mb-4 tracking-tighter">
                            {metric.value}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
                        <p className="text-black/50 max-w-[200px]">{metric.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
