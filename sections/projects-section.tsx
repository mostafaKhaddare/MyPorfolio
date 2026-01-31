import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function ProjectsSection() {
    const projects = [
       {
    title: "LNKO - E-commerce Optique",
    description: "Plateforme de référence pour les lunettes optiques et solaires au Maroc. Interface immersive mettant en avant les collections anti-lumière bleue, avec un parcours d'achat fluide et optimisé.",
    image: "/assets/LNKO_1.png", // Make sure to rename your image file to match this
    tags: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
    demoLink: "https://lnkobrand.com",
    codeLink: null, // Kept null as it is likely a client project
},
       {
    title: "Manyani Shipping - Services Maritimes",
    description: "Site vitrine pour un fournisseur de services maritimes opérant dans les principaux ports du Maroc. Présentation des services d'approvisionnement, de réparation et d'assistance technique pour navires.",
    image: "/assets/manyani_shipping.png", // Make sure to update the file name
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demoLink: "https://manyanishipping.com/", // Add the real link if you have it
    codeLink: null, // null implies a private client project
},
       {
    title: "Next.js Commerce - Storefront",
    description: "Le standard de l'e-commerce moderne. Architecture Headless haute performance utilisant Next.js App Router, Server Components et une gestion optimisée des Core Web Vitals.",
    image: "/assets/acme_store.png", // Don't forget to take a screenshot of the site
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Edge Runtime"],
    demoLink: "https://demo.vercel.store/",
    codeLink: "https://github.com/vercel/commerce", // Official link to the repository
}
    ];

    return (
        <Section id="projects" title="Projets Récents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-100 transition-all duration-300"
                    >
                        {/* Zone Image avec effet Zoom */}
                        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                            
                            
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="object-scale-down w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Contenu */}
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-sm text-gray-500 mt-2 mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tags Tech */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Boutons d'action */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <Link 
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Voir le site
                                </Link>

                                {project.codeLink ? (
                                    <Link 
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <Github size={18} />
                                        Code
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-400 px-3 py-2 cursor-not-allowed" title="Code privé">
                                        <Lock size={16} />
                                        Privé
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}