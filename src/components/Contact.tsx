"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "GitHub", href: "#", icon: Github },
];

export function Contact() {
    return (
        <footer id="contact" className="relative bg-[#050505] text-white pt-40 pb-16 px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-8 block"
                        >
                            Contact
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.9] font-serif mb-12"
                        >
                            Let's build <br /> <span className="text-accent italic">the future.</span>
                        </motion.h2>
                        <p className="text-white/40 text-xl max-w-sm mb-16 font-medium leading-relaxed">
                            Have a vision? Let's turn it into a premium digital reality.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:hello@jbabawale.com" className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 scale-90 group-hover:scale-100">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/20 uppercase font-black tracking-widest mb-1">Email</p>
                                    <p className="text-2xl font-bold tracking-tight">hello@jbabawale.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/20 uppercase font-black tracking-widest mb-1">Location</p>
                                    <p className="text-2xl font-bold tracking-tight">Digital Nomad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end lg:items-end">
                        <div className="space-y-6 text-right w-full">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-center justify-end gap-6 group text-4xl md:text-6xl font-bold tracking-tighter transition-all hover:translate-x-[-10px]"
                                >
                                    <span className="text-white/20 group-hover:text-accent transition-colors duration-500">{link.name}</span>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-black uppercase tracking-[0.3em]">
                    <p>© 2026 J BABAWALE • MIDE29TH DESIGN</p>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="hover:text-accent transition-colors"
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
