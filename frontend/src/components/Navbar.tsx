'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white text-gray-800 p-4 shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/favicon.webp"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority
                            className="w-8 h-8 object-contain"
                        />
                        <Link href="/" className="text-2xl font-bold tracking-wide">
                            NBA Stats
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 text-sm sm:text-base">
                        <Link href="/players" className="hover:text-red-400 transition">
                            Players
                        </Link>
                        <Link href="/teams" className="hover:text-red-400 transition">
                            Teams
                        </Link>
                        <Link href="/leaderboards" className="hover:text-red-400 transition">
                            Leaderboards
                        </Link>
                        <Link href="/about" className="hover:text-red-400 transition">
                            About
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg p-2"
                            aria-label="Toggle menu"
                        >
                            {!isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
                            <Link
                                href="/players"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-400 hover:bg-gray-50 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Players
                            </Link>
                            <Link
                                href="/teams"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-400 hover:bg-gray-50 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Teams
                            </Link>
                            <Link
                                href="/leaderboards"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-400 hover:bg-gray-50 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Leaderboards
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-400 hover:bg-gray-50 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}