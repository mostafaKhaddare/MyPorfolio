import Section from "@/components/section";
import Image from "next/image";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
    const educations = [
        {
            type: "certification",
            title: "Meta Front-End Developeur Professional Certificate",
            institution: "Coursera / Meta",
            period: "2022 - Présent",
            description: "Certification professionnelle complète couvrant React, principes UX/UI, et développement web moderne. Validée par Meta.",
            image: "/assets/meta-logo.png", // Idéalement, trouve le logo Meta ou Coursera
            credentialLink: "https://www.coursera.org/professional-certificates/meta-front-end-developeur", // Lien vers la preuve si tu l'as
            tags: ["React", "UX/UI", "Testing"]
        },
        
        {
            type: "course",
            title: "Mastering Next.js & React (Advanced)",
            institution: "JS Mastery / Udemy",
            period: "2022 - Présent",
            description: "Spécialisation approfondie sur l'architecture Server-Side Rendering (SSR), les Server Actions et l'optimisation des performances web.",
            image: "/assets/jsmastery-logo.png",
            tags: ["Next.js 14", "Full Stack", "Performance"]
        },
        {
            type: "mentorship", // Type spécifique pour montrer que c'est du haut niveau
            title: "Data Engineering & Architecture", // Ou le nom spécifique du cours que tu as suivi avec lui
            institution: "Baraa / Ex-Mercedes Benz Lead",
            period: "2024",
            description: "Formation avancée avec un expert international (17+ ans d'expérience). Focus sur les architectures scalables, les standards industriels et les meilleures pratiques d'ingénierie.",
            image: "/assets/data-baraa-logo.jpg", // Tu peux mettre sa photo de profil, c'est très reconnaissable
            tags: ["System Design", "Best Practices", "Architecture"],
            // Pas de lien de certificat obligatoire si c'est du mentorat/cours privé, mais tu peux mettre sa chaîne/site si tu veux
        },
    ];

    return (
        <Section title="Formation & Certifications">
            <div className="space-y-6">
                {educations.map((edu, index) => (
                    <div 
                        key={index} 
                        className="group w-full border border-gray-200 bg-white p-6 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Logo / Icon Area */}
                            <div className="shrink-0">
                                <div className="size-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-indigo-600">
                                    {/* Logique : Si pas d'image, on affiche une icône par défaut */}
                                    {edu.image ? (
                                        <Image
                                            src={edu.image}
                                            alt={edu.institution}
                                            width={48}
                                            height={48}
                                            className="size-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        edu.type === "degree" ? <GraduationCap size={24}/> : <Award size={24}/>
                                    )}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                            {edu.title}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-700">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    
                                </div>

                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    {edu.description}
                                </p>

                                {/* Tags & Link */}
                                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {edu.tags && edu.tags.map(tag => (
                                            <span key={tag} className="text-[11px] px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {edu.credentialLink && (
                                        <a 
                                            href={edu.credentialLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                                        >
                                            Voir le certificat
                                            <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}