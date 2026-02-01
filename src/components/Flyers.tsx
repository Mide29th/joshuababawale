"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const flyers = [
    {
        title: "Early Detection Saves Lives",
        subtitle: "Health Awareness Flyer",
        image: "/flyers/hiv-test.png",
        color: "bg-[#F8F9FA]"
    },
    {
        title: "Cocktail & Awards",
        subtitle: "Event Invitation",
        image: "/flyers/cocktail-awards.png",
        color: "bg-[#FFFFFF]"
    },
    {
        title: "Hello October",
        subtitle: "Lifestyle Visual",
        image: "/flyers/hello-october.png",
        color: "bg-[#1A1A1A]"
    },
    {
        title: "Night of Thanksgiving",
        subtitle: "Religious Event Flyer",
        image: "/flyers/thanksgiving.png",
        color: "bg-[#F3F4F6]"
    },
    {
        title: "New Adventures 2026",
        subtitle: "Corporate Promo",
        image: "/flyers/new-adventures.png",
        color: "bg-[#FFFFFF]"
    },
    {
        title: "Join Us This January",
        subtitle: "Religious Event Flyer",
        image: "/flyers/january-fasting.png",
        color: "bg-[#E7F3E7]"
    },
    {
        title: "Democratic Journey",
        subtitle: "National Awareness",
        image: "/flyers/democratic-journey.png",
        color: "bg-[#F0F7F0]"
    },
    {
        title: "Fund-Raising Luncheon",
        subtitle: "Lions Club Event",
        image: "/flyers/fund-raising.png",
        color: "bg-[#E8F0F8]"
    },
    {
        title: "Nativity Sunday",
        subtitle: "Event Invitation",
        image: "/flyers/nativity-sunday.jpg",
        color: "bg-[#E9F2EA]"
    },
    {
        title: "Happy Birthday Wale",
        subtitle: "Birthday Visual",
        image: "/flyers/lions-birthday.jpg",
        color: "bg-[#F0F4FA]"
    }
];

export function Flyers() {
    return (
        <section id="flyers" className="py-32 px-4 bg-[#F2F2F2]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
                        >
                            Visual Design
                        </motion.span>
                        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[1.1] font-serif">
                            Flyer <br /> Designs
                        </h2>
                    </div>
                    <p className="text-black/40 max-w-sm text-lg font-medium leading-relaxed">
                        A collection of high-impact visual communications designed for events, awareness, and brand promotion.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {flyers.map((flyer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="break-inside-avoid group mb-8"
                        >
                            <div className={cn(
                                "relative rounded-3xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1",
                                flyer.color
                            )}>
                                <img
                                    src={flyer.image}
                                    alt={flyer.title}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">
                                    {flyer.title}
                                </h3>
                                <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">
                                    {flyer.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
