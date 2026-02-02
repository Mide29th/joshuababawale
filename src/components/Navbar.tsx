"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Work", href: "#portfolio" },
    { name: "Visuals", href: "#flyers" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on scroll or click
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
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
                    {/* Desktop Nav Items */}
                    <div className="hidden md:flex items-center gap-1">
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
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center p-2.5 rounded-full text-black/70 hover:text-black transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    <div className="h-6 w-[1px] bg-black/5 mx-1" />

                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-black/80 transition-all active:scale-95"
                        onClick={closeMenu}
                    >
                        {isOpen ? "Contact" : "Hire"}
                    </a>
                </motion.div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                        className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-[280px] z-[10001] bg-white shadow-2xl md:hidden p-8 flex flex-col"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={closeMenu}
                                className="p-2 -mr-2 text-black/50 hover:text-black transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-bold text-black/80 hover:text-black transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto pt-8 border-t border-black/5">
                            <p className="text-sm text-black/40 mb-4">Let&apos;s build something great</p>
                            <a
                                href="mailto:jbabawale1@gmail.com"
                                className="block w-full py-4 bg-black text-white rounded-2xl text-center font-semibold hover:bg-black/90 transition-colors"
                                onClick={closeMenu}
                            >
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
