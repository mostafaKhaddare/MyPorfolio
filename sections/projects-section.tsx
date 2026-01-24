import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
        const projects = [
        {
            title: "Site E-commerce 'Tech-Shop'",
            description: "Site e-commerce complet avec React et Node.js.",
            image: "/assets/project-1.png",
            link: "#",
        },
        {
            title: "Dashboard Admin 'Analytics-Pro'",
            description: "Dashboard d'analyse de données avec Next.js et PostgreSQL.",
            image: "/assets/project-2.png",
            link: "#",
        },
        {
            title: "Site Vitrine 'Créa-Web'",
            description: "Site vitrine pour une agence créative, utilisant Tailwind CSS.",
            image: "/assets/project-1.png",
            link: "#",
        },
    ];

    return (
        <Section title="Projets">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                                        <Link href={project.link} key={project.title} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <Image
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}