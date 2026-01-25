"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Dunmade",
        category: "Case Study",
        description: "Brand identity and product design for luxury home goods.",
        image: "/projects/dunmade.png",
        color: "bg-[#0047AB]"
    },
    {
        title: "Aura Real Estate",
        category: "Website",
        description: "High-end property discovery platform with interactive maps.",
        image: null,
        color: "bg-slate-900"
    },
    {
        title: "Eco-Track Dashboard",
        category: "Case Study",
        description: "Sustainability metrics visualization for green startups.",
        image: null,
        color: "bg-emerald-900"
    },
    {
        title: "Nomad Lens",
        category: "Website",
        description: "Photography portfolio with seamless transition effects.",
        image: null,
        color: "bg-zinc-800"
    }
];

export function Projects() {
    return (
        <section id="portfolio" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm">Portfolio</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-4">Selected Work</h2>
                    </div>
                    <p className="text-black/50 max-w-md text-lg">
                        A curated selection of digital products and brands I've helped build from concept to launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={cn(
                                "relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl transition-transform duration-700 group-hover:scale-[1.02]",
                                project.color
                            )}>
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl select-none">
                                        {project.title.charAt(0)}
                                    </div>
                                )}

                                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <span className="text-sm font-bold uppercase tracking-widest opacity-80">{project.category}</span>
                                    <p className="mt-2 text-white/90">{project.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                                    <p className="text-black/40 mt-1 uppercase text-xs font-bold tracking-widest">{project.category}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                                    <svg className="w-6 h-6 transform -rotate-45 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
