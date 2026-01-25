"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-8 left-0 right-0 z-[10000] flex justify-center px-4 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "flex items-center gap-1 p-1.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-xl transition-all duration-500 pointer-events-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]",
                    isScrolled && "scale-95 shadow-[0_2px_10px_-1px_rgba(0,0,0,0.05)] bg-white/80"
                )}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors text-black/70 hover:text-black"
                    >
                        {hoveredItem === item.name && (
                            <motion.div
                                layoutId="nav-hover"
                                className="absolute inset-0 bg-black/5 rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                            />
                        )}
                        {item.name}
                    </a>
                ))}
                
                <div className="h-6 w-[1px] bg-black/5 mx-1" />
                
                <a 
                    href="#contact" 
                    className="px-5 py-2.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-black/80 transition-all active:scale-95"
                >
                    Hire
                </a>
            </motion.div>
        </nav>
    );
}
