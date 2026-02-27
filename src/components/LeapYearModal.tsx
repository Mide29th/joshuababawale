"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jokes = [
    // 1-19
    "Error 404: February 29th not found in 2026. Please try again in 2028.",
    "Sorry, 2026 is on a diet. It cut out February 29th completely.",
    "I tried to schedule this for Feb 29th, 2026, but my calendar just laughed at me.",
    "As a leap year baby, I age 4x slower. Too bad 2026 isn't helping my cause!",
    "February 28th, 2026: 'Look at me. I am the captain now.'",
    "No February 29th this year! I guess I'm staying the same age for another year.",
    "My birthday is like a limited edition drop. Too bad 2026 is out of stock.",
    "February in 2026 ended before it even started for me.",
    "Ah, 2026... another year of celebrating on March 1st and pretending it's fine.",
    "2026 said 'New Year, New Me', but still forgot my birthday.",
    "Leap year babies: The only people who get ghosted by the calendar.",
    "I'm not getting older in 2026. It's scientifically impossible without a Feb 29th.",
    "Imagine waiting four years for a birthday, and 2026 is just the halftime show.",
    "2026 has 365 days, and somehow none of them are mine.",
    "My birthday in 2026 is currently hiding in the witness protection program.",
    "Breaking News: 2026 refuses to acknowledge February 29th. Negotiations have stalled.",
    "Who needs a birthday anyway? *cries in leap year*",
    "I save so much money on birthday candles during non-leap years.",
    "Every year I’m not 100% sure when to celebrate. 2026 continues the tradition.",
    // 20-28
    "Due to inflation, February 29th has been postponed until 2028.",
    "I checked under the bed, in the closet, and the couch cushions... no Feb 29th.",
    "2026: The year my birthday went out for milk and never came back.",
    "I’m officially putting 2026 on trial for birthday theft.",
    "February 29th in 2026 is like the quiet kid in class—just not there.",
    "Plot twist: February 29th is actually trapped in a parallel universe.",
    "If anyone finds February 29th, please return it to its rightful owner. Reward offered.",
    "2026 skipped my birthday like it was an unskippable YouTube ad.",
    "My birthday is a myth. 2026 proves it.",
    // 29
    "" // Missing just like February 29th!
];

export function LeapYearModal() {
    const [isOpen, setIsOpen] = useState(false);

    // An array of indices to track which jokes have been seen
    const [seenJokes, setSeenJokes] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Start by picking a random first joke (excluding the blank 29th joke initially)
        const initialRandomIndex = Math.floor(Math.random() * (jokes.length - 1));
        setSeenJokes([initialRandomIndex]);
        setCurrentIndex(0);

        // Show modal a few milliseconds after open (e.g. 500ms)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const nextJoke = () => {
        if (currentIndex < seenJokes.length - 1) {
            // If we've already generated the next one, just go forward in history
            setCurrentIndex(currentIndex + 1);
        } else {
            // Generate a new random joke that hasn't been seen yet
            const remainingJokes = jokes
                .map((_, i) => i)
                .filter(i => !seenJokes.includes(i) && i !== jokes.length - 1); // exclude 29th for now

            if (remainingJokes.length > 0) {
                const randomNext = remainingJokes[Math.floor(Math.random() * remainingJokes.length)];
                setSeenJokes([...seenJokes, randomNext]);
                setCurrentIndex(currentIndex + 1);
            } else if (!seenJokes.includes(jokes.length - 1)) {
                // If all 28 have been seen, show the 29th joke!
                setSeenJokes([...seenJokes, jokes.length - 1]);
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    const prevJoke = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentJokeIndex = seenJokes[currentIndex];
    const isLastJoke = seenJokes.length === jokes.length && currentIndex === jokes.length - 1;

    // Prevent rendering on server to avoid hydration mismatch with random joke
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm cursor-pointer"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-black/5 overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-4 shrink-0 transition-opacity z-20">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-black/40 hover:text-black hover:bg-black/5 hover:rotate-90 transition-all duration-300 rounded-full"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Animated decorative background blobs */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-32 -right-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, -90, 0]
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"
                        />

                        <div className="relative z-10 flex flex-col h-full">
                            {!showForm ? (
                                <motion.div
                                    className="flex flex-col h-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                        className="mb-6 flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-full mx-auto shrink-0 shadow-lg shadow-blue-500/20"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    <h3 className="text-3xl font-serif font-bold text-center mb-1 shrink-0 text-gray-900 leading-tight">
                                        Leap Year Problems <motion.span
                                            className="inline-block"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                        >🐸</motion.span>
                                    </h3>
                                    <p className="text-sm text-indigo-500/80 text-center mb-6 font-semibold tracking-wider uppercase font-sans">
                                        Joke {currentIndex + 1} of {jokes.length}
                                    </p>

                                    <div className="flex-1 flex flex-col items-center justify-center min-h-[140px] mb-8 relative px-4">
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={currentJokeIndex}
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-medium"
                                            >
                                                {jokes[currentJokeIndex] || (
                                                    <span className="italic opacity-40 font-serif line-through decoration-indigo-500/30">"Missing just like February 29th!"</span>
                                                )}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 mt-auto shrink-0">
                                        <button
                                            onClick={prevJoke}
                                            disabled={currentIndex === 0}
                                            className={`p-4 rounded-2xl font-medium transition-all duration-300 flex justify-center items-center gap-2 border ${currentIndex === 0
                                                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                                                : "bg-white text-gray-700 border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-sm"
                                                }`}
                                            aria-label="Previous Joke"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M15 18l-6-6 6-6" />
                                            </svg>
                                        </button>

                                        {isLastJoke ? (
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setShowForm(true)}
                                                className="flex-1 py-4 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all text-center block text-lg shadow-md"
                                            >
                                                Send Birthday Wishes! 🎉
                                            </motion.button>
                                        ) : (
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={nextJoke}
                                                className="flex-1 py-4 px-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-md hover:shadow-xl"
                                            >
                                                Next Joke
                                                <motion.svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-70 group-hover:translate-x-1 transition-transform"
                                                >
                                                    <path d="M9 18l6-6-6-6" />
                                                </motion.svg>
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="flex flex-col h-full justify-center"
                                >
                                    <div className="mb-8 flex flex-col items-center">
                                        <motion.div
                                            animate={{ rotate: [0, 15, -15, 0] }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="text-6xl mb-4"
                                        >
                                            🎉
                                        </motion.div>
                                        <h3 className="text-3xl font-serif font-bold text-center text-gray-900">
                                            Send Birthday Wishes
                                        </h3>
                                        <p className="text-gray-500 mt-2 text-center text-sm px-4">
                                            Make up for the lost leap year birthday!
                                        </p>
                                    </div>

                                    <form action="https://formsubmit.co/jbabawale1@gmail.com" method="POST" className="space-y-5">
                                        <input type="hidden" name="_subject" value="New Birthday Wish from LeapYearModal 🐸" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="space-y-1.5">
                                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                placeholder="e.g. Awesome Friend"
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all bg-gray-50/50 text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required
                                                rows={3}
                                                placeholder="Happy Leap Year Birthday! Sorry 2026 did you dirty..."
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all bg-gray-50/50 text-gray-900 placeholder-gray-400 resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4 flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setShowForm(false)}
                                                className="px-6 py-4 rounded-2xl font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                                            >
                                                Back
                                            </button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
                                            >
                                                Send Wishes 🚀
                                            </motion.button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
