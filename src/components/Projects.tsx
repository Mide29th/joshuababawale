"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
        <section id="portfolio" className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
                        >
                            Portfolio
                        </motion.span>
                        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[1.1] font-serif">
                            Selected <br /> Work
                        </h2>
                    </div>
                    <p className="text-black/40 max-w-sm text-lg font-medium leading-relaxed">
                        A curated selection of digital products and brands I've helped build from concept to launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className={cn(
                                "relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group-hover:-translate-y-2",
                                project.color
                            )}>
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-[20rem] select-none">
                                        {project.title.charAt(0)}
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
                                    <p className="text-white/80 font-medium leading-relaxed max-w-xs">{project.description}</p>
                                </div>
                            </div>

                            <div className="flex items-start justify-between px-2">
                                <div>
                                    <h3 className="text-4xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                    <span className="text-black/30 font-bold uppercase tracking-widest text-xs">{project.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
