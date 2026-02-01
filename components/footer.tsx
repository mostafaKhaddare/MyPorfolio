import Link from "next/link";
// On importe depuis "react-icons/fa" (FontAwesome) pour avoir les logos officiels remplis
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"; 

export default function Footer() {
    return (
        <footer className="mt-32 w-full bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col items-center gap-6">
                
                {/* Liens Sociaux avec les vrais logos */}
                <div className="flex items-center gap-8">
                    
                    {/* GitHub - Devient Noir/Gris foncé */}
                    <Link 
                        href="https://github.com/mostafaKhaddare" 
                        target="_blank" 
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110"
                    >
                        <FaGithub size={24} />
                    </Link>

                    {/* LinkedIn - Devient Bleu LinkedIn */}
                    <Link 
                        href="https://linkedin.com/in/ton-profil" 
                        target="_blank" 
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-110"
                    >
                        <FaLinkedin size={24} />
                    </Link>

                    {/* Instagram - Devient Rose */}
                    <Link 
                        href="https://instagram.com" 
                        target="_blank" 
                        aria-label="Instagram"
                        className="text-gray-400 hover:text-[#E1306C] transition-all transform hover:scale-110"
                    >
                        <FaInstagram size={24} />
                    </Link>

                    {/* WhatsApp - Devient Vert (Vrai logo avec le téléphone dedans) */}
                    <Link 
                         href="https://wa.me/212648522511?text=Bonjour Mostafa, je suis intéressé par vos services de développement web."
                        target="_blank" 
                        aria-label="WhatsApp"
                        className="text-gray-400 hover:text-[#25D366] transition-all transform hover:scale-110"
                    >
                        <FaWhatsapp size={24} />
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()}{" "}
                        <Link 
                            href="/" 
                            className="  font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                        >
                            Mostafa El Khaddare
                        </Link>
                        . Tous droits réservés.
                    </p>
                    <p className="text-xs text-gray-400">
                        Développé avec Next.js & Tailwind CSS à Casablanca 🇲🇦
                    </p>
                </div>

            </div>
        </footer>
    );
}