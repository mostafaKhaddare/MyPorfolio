import Section from "@/components/section";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; 

export default function ContactSection() {
    return (
        <Section id="contact" title="Me Contacter">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                
                {/* Colonne Gauche : Texte d'accroche */}
                <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Vous avez un projet e-commerce ou une idée d&apos;application web ? 
                        Discutons-en. Je suis disponible pour des missions freelance sur 
                        <strong> Casablanca</strong> et en remote partout au Maroc.
                    </p>
                    
                    {/* Bouton d'action principal (WhatsApp) */}
                    <Link 
                        href="https://wa.me/212648522511?text=Bonjour Mostafa, je suis intéressé par vos services de développement web."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        <div className="w-5 h-5 fill-current">
                            <FaWhatsapp size={24} className="text-white" />
                        </div>
                        Discuter sur WhatsApp
                    </Link>
                </div>

                {/* Colonne Droite : Coordonnées détaillées */}
                <div className="flex-1 w-full md:max-w-md bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="space-y-2"> {/* Réduit l'espace vertical car on ajoute du padding aux liens */}
                        
                        {/* Email - Tout le bloc est un lien */}
                        <Link 
                            href="mailto:mostafa.khaddare@gmail.com"
                            className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all group"
                        >
                            <div className="bg-white group-hover:bg-indigo-50 p-2.5 rounded-lg border border-gray-200 group-hover:border-indigo-100 text-indigo-600 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Email</p>
                                <p className="text-gray-600 group-hover:text-indigo-600 transition-colors mt-0.5">
                                    mostafa.khaddare@gmail.com
                                </p>
                            </div>
                        </Link>

                        {/* Téléphone - Tout le bloc est un lien */}
                        <Link 
                            href="tel:+212648522511"
                            className="flex  cursor-pointer items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all group"
                        >
                            <div className="bg-white group-hover:bg-indigo-50 p-2.5 rounded-lg border border-gray-200 group-hover:border-indigo-100 text-indigo-600 transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Téléphone</p>
                                <p className="text-gray-600 group-hover:text-indigo-600 transition-colors mt-0.5">
                                    +212 6 48 52 25 11
                                </p>
                            </div>
                        </Link>

                        {/* Localisation - Lien vers Google Maps */}
                        <Link 
                            href="https://www.google.com/maps/search/?api=1&query=Casablanca+Maroc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex cursor-pointer items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all group"
                        >
                            <div className="bg-white group-hover:bg-indigo-50 p-2.5 rounded-lg border border-gray-200 group-hover:border-indigo-100 text-indigo-600 transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Localisation</p>
                                <p className="text-gray-600 group-hover:text-indigo-600 transition-colors mt-0.5">
                                    Casablanca, Maroc
                                </p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </Section>
    );
}