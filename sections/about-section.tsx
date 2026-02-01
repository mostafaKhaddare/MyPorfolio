import Section from "@/components/section";
import { MapPin, Terminal, ShoppingBag } from "lucide-react"; // Optionnel : pour ajouter des petites icônes

export default function AboutSection() {
    return (
        <Section title="À propos">
            {/* JSON-LD structured data for better SEO and rich results */}
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Mostafa El Khaddare",
                    jobTitle: "Développeur Full Stack / Développeur Web",
                    description: "Développeur Full Stack basé au Maroc — création de sites web et boutiques e-commerce performantes (Next.js, React, Node.js).",
                    url: "https://mostafawebdevelopereur.vercel.app",
                    address: {
                        "@type": "PostalAddress",
                        addressCountry: "MA",
                        addressLocality: "Casablanca"
                    },
                    sameAs: [
                        "https://github.com/mostafaKhaddare",
                        "https://linkedin.com/in/ton-profil"
                    ]
                }) }}
            />

            <div className="flex flex-col gap-6">

                {/* Paragraphe 1 : Intro / Qui je suis (Style "Lead") */}
                <div className="relative pl-4 border-l-4 border-indigo-500">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                        Bonjour, je suis <span className="text-indigo-700 font-bold">Mostafa El Khaddare</span>, <strong className="text-gray-900">Développeur Full Stack</strong> basé au <address className="not-italic inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-0.5 rounded-md text-sm font-bold border border-red-100"><MapPin size={14}/> Maroc</address>.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Je conçois des solutions digitales sur mesure pour les entreprises qui cherchent à allier performance technique, SEO et croissance commerciale.
                    </p>
                </div>

                {/* Grille pour les détails techniques et business */}
                <div className="grid md:grid-cols-2 gap-4 mt-2">

                    {/* Carte Stack Technique */}
                    <article className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors" aria-labelledby="expertise-tech">
                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <Terminal size={18} />
                            <h3 id="expertise-tech" className="font-semibold text-sm uppercase tracking-wider">Expertise Technique</h3>
                        </div>
                        <p className="text-sm leading-7 text-gray-600">
                            Mon expertise repose sur une stack moderne pour des sites rapides, accessibles et bien référencés.
                        </p>

                        <ul className="mt-3 flex flex-wrap gap-2">
                            <li className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold border border-blue-100">React.js</li>
                            <li className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold border border-blue-100">Next.js (SSR & SSG)</li>
                            <li className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-semibold border border-green-100">Node.js</li>
                            <li className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-semibold border border-green-100">PostgreSQL</li>
                            <li className="bg-gray-50 text-gray-800 px-2 py-0.5 rounded text-xs font-semibold border border-gray-100">SEO Technique</li>
                        </ul>
                    </article>

                    {/* Carte E-commerce */}
                    <article className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 hover:border-indigo-100 transition-colors" aria-labelledby="ecommerce-solution">
                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <ShoppingBag size={18} />
                            <h3 id="ecommerce-solution" className="font-semibold text-sm uppercase tracking-wider">Solution E-commerce</h3>
                        </div>
                        <p className="text-sm leading-7 text-gray-600">
                            Spécialiste du <strong className="text-gray-900">e-commerce au Maroc</strong>, je crée des boutiques performantes et optimisées pour la conversion.
                        </p>

                        <ul className="mt-3 text-sm text-gray-600 leading-7">
                            <li>Intégration des paiements locaux et internationaux</li>
                            <li>Optimisation SEO & performance</li>
                            <li>Expérience utilisateur et conversion (UX / CRO)</li>
                        </ul>
                    </article>

                </div>
            </div>
        </Section>
    );
}