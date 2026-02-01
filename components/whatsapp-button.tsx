import { FaWhatsapp } from "react-icons/fa"; 

import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
                         href="https://wa.me/212648522511?text=Bonjour Mostafa, je suis intéressé par vos services de développement web."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110"
        >
            <FaWhatsapp size={32} />
        </Link>
    );
}
