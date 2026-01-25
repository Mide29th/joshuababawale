"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <footer id="contact" className="bg-black text-white pt-32 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            Get in <br /> <span className="text-accent">Touch.</span>
                        </motion.h2>
                        <p className="text-white/50 text-xl max-w-sm mb-12">
                            Ready to build something extraordinary? Let's discuss your next project.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:hello@jbabawale.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</p>
                                    <p className="text-lg">hello@jbabawale.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Address</p>
                                    <p className="text-lg">Anywhere you need me</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end lg:items-end">
                        <div className="space-y-4 text-right">
                            {["LinkedIn", "Twitter", "Instagram", "GitHub"].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="flex items-center justify-end gap-2 text-3xl md:text-5xl font-black group hover:text-accent transition-colors tracking-tighter"
                                >
                                    {link}
                                    <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 text-white/30 text-sm font-medium">
                    <p>© 2026 J Babawale. Mide29th Branding.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
