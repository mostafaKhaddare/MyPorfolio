import Section from "@/components/section";
import { MapPin, Terminal, ShoppingBag } from "lucide-react"; // Optionnel : pour ajouter des petites icônes

export default function AboutSection() {
    return (
        <Section title="À propos">
            <div className="flex flex-col gap-6">
                
                {/* Paragraphe 1 : Intro / Qui je suis (Style "Lead") */}
                <div className="relative pl-4 border-l-4 border-indigo-500">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                        Bonjour, je suis <span className="text-indigo-700 font-bold">Mostafa Khaddare</span>, développeur Full Stack basé au <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold border border-red-100"><MapPin size={14}/> Maroc</span>.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Je conçois des solutions digitales sur mesure pour les entreprises qui cherchent à allier performance technique et croissance commerciale.
                    </p>
                </div>

                {/* Grille pour les détails techniques et business */}
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                    
                    {/* Carte Stack Technique */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <Terminal size={18} />
                            <h4 className="font-semibold text-sm uppercase tracking-wider">Expertise Technique</h4>
                        </div>
                        <p className="text-sm leading-7 text-gray-600">
                            Mon expertise repose sur une stack moderne :
                            <span className="mx-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-semibold border border-blue-100">React.js & Next.js</span>
                            pour des interfaces rapides (SEO), couplés à
                            <span className="mx-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs font-semibold border border-green-100">Node.js & PostgreSQL</span>
                            pour une architecture backend robuste.
                        </p>
                    </div>

                    {/* Carte E-commerce */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <ShoppingBag size={18} />
                            <h4 className="font-semibold text-sm uppercase tracking-wider">Solution E-commerce</h4>
                        </div>
                        <p className="text-sm leading-7 text-gray-600">
                            Spécialiste du <strong className="text-gray-900">e-commerce au Maroc</strong>, je crée des boutiques performantes. De l&apos;UX fluide à l&apos;intégration des
                            <span className="mx-1 bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded text-xs font-bold border border-yellow-100">paiements locaux</span>
                            et la logistique, je transforme vos visiteurs en clients fidèles.
                        </p>
                    </div>

                </div>
            </div>
        </Section>
    );
}