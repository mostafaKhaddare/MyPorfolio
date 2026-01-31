import Section from "@/components/section";
import { Code2, Database, Layout, Wrench } from "lucide-react"; // Assure-toi d'avoir lucide-react

export default function SkillsSection() {
    // On organise les compétences par domaine d'expertise
    const skillCategories = [
        {
            title: "Frontend & UI",
            icon: <Layout className="w-5 h-5 text-indigo-600" />,
            skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "Backend & Architecture",
            icon: <Code2 className="w-5 h-5 text-indigo-600" />,
            skills: ["Node.js", "Express", "Medusa.js", "Strapi CMS", "REST API"],
        },
        {
            title: "Base de Données",
            icon: <Database className="w-5 h-5 text-indigo-600" />,
            skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Supabase"],
        },
        {
            title: "Outils & DevOps",
            icon: <Wrench className="w-5 h-5 text-indigo-600" />,
            skills: ["Git / GitHub", "Vercel", "Docker", "Figma", "VS Code"],
        },
    ];

    return (
        <Section id="skills" title="Compétences Techniques">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-indigo-50 p-2 rounded-lg">
                                {category.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800">
                                {category.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span 
                                    key={skill} 
                                    className="bg-white border border-gray-200 text-gray-600 text-[13px] font-medium px-3 py-1 rounded-md hover:text-indigo-600 hover:border-indigo-200 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}