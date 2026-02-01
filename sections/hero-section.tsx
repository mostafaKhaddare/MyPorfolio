"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"; 
import { Poppins } from "next/font/google";

const fontPrimary = Poppins({ subsets: ['latin'], weight: ['300','400','600','700','800'], display: 'swap' });

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function HeroSection() {
    return (
        <>
            {/* NAVBAR (moved to component) */}
            <Navbar />

            {/* HERO (existing) */}
            <section className={`${fontPrimary.className} relative flex flex-col items-center pt-16 md:pt-20 pb-16 max-md:px-4 overflow-hidden`}>
                {/* J'ai gardé ton SVG d'arrière-plan, c'est un bon style technique */}
                <svg className="absolute -z-10 -mt-20 right-0 opacity-60" width="890" height="764" viewBox="0 0 890 764" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#e2e8f0" d="M.5.5h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 190.924h63.825v63.825H.5zm0 380.849h63.825v63.825H.5zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M.5 63.975h63.825V127.8H.5zm0 380.849h63.825v63.825H.5zM444.824 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM.5 254.4h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zM444.824 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M.5 127.449h63.825v63.825H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM.5 317.875h63.825V381.7H.5zm0 380.85h63.825v63.825H.5zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M190.924 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M190.924 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM127.449.5h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M127.449 381.35h63.825v63.825h-63.825zM571.775.5H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.326-380.849H635.6v63.825h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 63.975h63.825V127.8h-63.825z" />
                    <path stroke="#e2e8f0" d="M127.449 444.824h63.825v63.825h-63.825zM571.775 63.975H635.6V127.8h-63.825zm0 380.849H635.6v63.825h-63.825zM127.449 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM571.775 254.4H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 127.449h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M127.449 508.299h63.825v63.825h-63.825zm444.326-380.85H635.6v63.825h-63.825zm0 380.85H635.6v63.825h-63.825zM127.449 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.326-380.85H635.6V381.7h-63.825zm0 380.85H635.6v63.825h-63.825zM317.873.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M317.873 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM762.197 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM317.873 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM762.197 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M317.873 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM317.873 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973.5h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 190.924h63.825v63.825H63.973zm0 380.849h63.825v63.825H63.973zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M63.973 63.975h63.825V127.8H63.973zm0 380.849h63.825v63.825H63.973zM508.297 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM63.973 254.4h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zM508.297 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M63.973 127.449h63.825v63.825H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM63.973 317.875h63.825V381.7H63.973zm0 380.85h63.825v63.825H63.973zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4.5h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 190.924h63.825v63.825H254.4zm0 380.849h63.825v63.825H254.4zm444.325-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M254.4 63.975h63.825V127.8H254.4zm0 380.849h63.825v63.825H254.4zM698.725 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM254.4 254.4h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zM698.725 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M254.4 127.449h63.825v63.825H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM254.4 317.875h63.825V381.7H254.4zm0 380.85h63.825v63.825H254.4zm444.325-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924.5h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M190.924 381.35h63.825v63.825h-63.825zM635.248.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.324-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 63.975h63.825V127.8h-63.825z" />
                    <path stroke="#e2e8f0" d="M190.924 444.824h63.825v63.825h-63.825zM635.248 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM190.924 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM635.248 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 127.449h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M190.924 508.299h63.825v63.825h-63.825zm444.324-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM190.924 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.324-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674.5h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 190.924h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825zm444.322-380.849h63.825v63.825h-63.825zm0 380.849h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M381.352 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM825.674 63.975h63.825V127.8h-63.825zm0 380.849h63.825v63.825h-63.825zM381.352 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM825.674 254.4h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path stroke="#e2e8f0" d="M381.352 127.449h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825v63.825h-63.825zm0 380.85h63.825v63.825h-63.825zM381.352 317.875h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825zm444.322-380.85h63.825V381.7h-63.825zm0 380.85h63.825v63.825h-63.825z" />
                    <path fill="url(#a)" d="M0 0h889.999v763.049H0z" />
                    <defs>
                        <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 381.525 -445 0 445 381.525)">
                            <stop offset=".293" stopColor="#fff" stopOpacity="0" />
                            <stop offset="1" stopColor="#fff" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* Container Image avec un petit effet de "Glow" pour moderniser */}
                <div className="relative mt-8">
                    <div className="absolute -inset-1 rounded-full bg-indigo-500/20 blur-xl"></div>
                    <Image
                        src="/assets/portfolio-image.jpg"
                        alt="Mostafa Khaddare - Développeur Web Maroc"
                        className="relative size-36 rounded-full border-2 border-white shadow-lg object-cover"
                        width={144}
                        height={144}
                        priority // Important pour le chargement rapide (SEO/UX)
                    />
                </div>

                {/* TITRE H1 pour le SEO */}
               {/* H1 : On met en avant ton expertise (SEO fort) */}
                <div className="space-y-4">
                    <h1 className="text-4xl text-center md:text-7xl font-extrabold tracking-tight mt-12 text-slate-900 leading-tight">
                        <span className=" uppercase bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-pink-500">
                            Mostafa El Khaddar
                        </span>{" "} <br />
                      
                        <span className="text-slate-800 font-semibold block md:inline mt-4 md:mt-0"> web développeur</span>
                    </h1>

                    {/* H2 : On rassure avec ton vrai nom et ta mission */}
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl text-center font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Salut, je suis <span className="font-semibold text-slate-800">Mostafa El Khaddar</span>.
                            <br className="hidden md:block"/>
                            Je transforme vos idées en sites web performants.
                        </p>
                        
                        <p className="text-base md:text-lg text-center text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Je transforme vos idées en solutions digitales performantes (Next.js, React, Node.js).
                        </p>
                    </div>
                </div>

                {/* Call To Action (CTA) */}
                <div className="flex  sm:flex-row gap-4 mt-8">
                    <Link href="#contact" className=" w-fit bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-3 md:px-8 md:py-3 rounded-full font-medium shadow-lg hover:shadow-indigo-500/30">
                        Discuter de votre projet
                    </Link>
                    <Link href="#projects" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 md:px-8 md:py-3 rounded-full font-medium transition hover:shadow-md">
                        Voir mes travaux
                    </Link>
                </div>

                {/* Réseaux Sociaux */}
                <div className="flex items-center space-x-6  mt-6 md:mt-12 opacity-80 hover:opacity-100 transition-opacity">
                    <Link 
                        href="https://linkedin.com/in/ton-profil" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-[#0077b5] hover:-translate-y-1 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </Link>
                    
                    <Link 
                        href="https://github.com/mostafaKhaddare" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-black hover:-translate-y-1 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </Link>

                    <Link 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-pink-600 hover:-translate-y-1 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </Link>

                    <Link 
                        href="https://wa.me/212648522511?text=Bonjour Mostafa, je suis intéressé par vos services de développement web."// Remplace par ton numéro
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-[#25D366] hover:-translate-y-1 transition-all duration-300"
                        aria-label="WhatsApp"
                    >
                        <div className="w-7 h-7">
                            <FaWhatsapp size={24} />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}