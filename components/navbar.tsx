"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Poppins } from "next/font/google";

// load a broad set of weights for the whole site
const fontPrimary = Poppins({ subsets: ['latin'], weight: ['300','400','600','700','800'], display: 'swap' });

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        // apply font to header so navbar text uses the chosen font
        <header className={`${fontPrimary.className} fixed top-4 left-1/2 transform -translate-x-1/2 w-[min(1100px,calc(100%-2rem))] z-50`}>
            <nav className="bg-white/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center" aria-label="Mostafa El Khaddar — home">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-semibold mr-2 text-sm">
                            MK
                        </div>
                        <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
                            Mostafa El Khaddar
                        </span>
                    </Link>
                </div>

                <div className="hidden sm:flex items-center gap-6">
                    <Link href="#projects" className="text-slate-700 hover:text-indigo-600 transition">
                        Projects
                    </Link>
                    <Link href="#skills" className="text-slate-700 hover:text-indigo-600 transition">
                        Skills
                    </Link>
                    <Link href="#contact" className="text-slate-700 hover:text-indigo-600 transition">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#contact" className="hidden sm:inline bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm">
                        Contact
                    </Link>

                    <button
                        className="sm:hidden p-2 rounded-md hover:bg-slate-100"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </nav>

            {mobileOpen && (
                <div className="mt-2 bg-white/95 rounded-lg shadow-md p-3 sm:hidden">
                    <Link href="#projects" className="block py-2 px-3 text-slate-700 rounded hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
                        Projects
                    </Link>
                    <Link href="#skills" className="block py-2 px-3 text-slate-700 rounded hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
                        Skills
                    </Link>
                    <Link href="#contact" className="block py-2 px-3 text-slate-700 rounded hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
