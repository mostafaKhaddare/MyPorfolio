import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import WhatsAppButton from "@/components/whatsapp-button";


export const metadata: Metadata = {
    title: "Mostafa Web Developeur - Développeur Web Full-Stack",
    description: "Portfolio de Mostafa Khaddare, développeur web full-stack spécialisé dans la création d'applications web performantes et de solutions e-commerce pour le marché marocain en utilisant React, Next.js et Node.js.",
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
     
             <head>
        <meta
          name="google-site-verification"
          content="DpMjB0T5x_tUthToHe_m7h5C2fNmQtRigagMM8oQYi4"
        />
      </head>
            <body className={inter.className}>
                <LenisScroll />
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
