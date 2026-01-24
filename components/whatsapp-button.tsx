import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/YOUR_NUMBER_HERE" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110"
        >
            <svg height={32} width={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>WhatsApp</title><path d="M12.04 2.4c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6c1.5 0 3-.4 4.3-1.1l3.1.8-1.2-3.5c.9-1.4 1.4-3.1 1.4-4.8.1-5.3-4.2-9.6-9.5-9.6zm0 17.5c-1.3 0-2.6-.3-3.8-.9l-4.2 1.1 1.2-3.9c-.8-1.3-1.2-2.8-1.2-4.4 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.1-5.6c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1-.5.7-.7.8-.3.2-.6.1c-.3-.1-1.1-.4-2.1-1.3s-1.6-2.1-1.8-2.5-.2-1-.1-.2c0-.1 0-.2.1-.3s.2-.2.3-.4.2-.2.3-.3.1-.2 0-.4c-.1-.2-.6-1.3-.8-1.8s-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.9.8-1.1 2-.2 2.3.2 2.8.9 2.2 2 3.1 1.9 1.4 4.5 1.9.5.1.8-.1.9-.4 1-1.1.1-2.1.1-2.2z"/></svg>
        </Link>
    );
}
