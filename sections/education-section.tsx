import Section from "@/components/section";
import Image from "next/image";

export default function EducationSection() {
    const educations = [
        {
            title: "Cours Meta Front-End / Full-Stack",
            institution: "En ligne",
            period: "Apprentissage continu",
            description: "Formation axée sur la pratique et la réalisation de projets concrets pour maîtriser le développement web de bout en bout.",
            image: "/assets/education-image-1.png",
        },
        {
            title: "JavaScript & React Avancé",
            institution: "JS Mastery (en ligne)",
            period: "Apprentissage continu",
            description: "Approfondissement des concepts avancés de JavaScript et React à travers des projets complexes et modernes.",
            image: "/assets/education-image-1.png", 
        }
    ];

    return (
        <Section title="Formation">
            <div className="space-y-4">
                {educations.map((edu) => (
                    <div key={edu.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={edu.image}
                                        alt={edu.title}
                                        width={25}
                                        height={25}
                                        className="size-5.5"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {edu.title}
                                    </h3>
                                    <div>{edu.institution}</div>
                                </div>
                            </div>
                            <div>{edu.period}</div>
                        </div>
                        <p className="mt-6 text-gray-500">{edu.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}