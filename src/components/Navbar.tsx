"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "flex items-center gap-2 p-2 rounded-full border border-black/5 bg-white/70 backdrop-blur-md transition-all duration-300 pointer-events-auto shadow-sm",
                    isScrolled && "shadow-lg scale-95"
                )}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="px-6 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5 text-black/80 hover:text-black"
                    >
                        {item.name}
                    </a>
                ))}
            </motion.div>
        </nav>
    );
}
