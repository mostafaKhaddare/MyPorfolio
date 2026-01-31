// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import WhatsAppButton from "@/components/whatsapp-button";


export const metadata = {
  // Le titre doit être accrocheur. "Full Stack" fait plus pro que juste "Web".
  // Ajouter "Casablanca" aide pour le référencement local.
  // Titre parfait pour Google : Combine ton domaine et ta localisation
  title: "Mostafa Web Developer | Création de Sites Internet & E-commerce au Maroc",
  
  // Description qui contient les variantes
  description:
    "Portfolio de Mostafa El Khaddar (MostafaWebDeveloper). Expert en création de sites web sur mesure, React, Next.js et boutiques e-commerce à Casablanca.",
  
  icons: {
    icon: "/favicon.ico",
  },
  
  // Mots-clés méta pour aider les moteurs de recherche à comprendre le contexte
  keywords: [
    "Développeur web Maroc",
    "Freelance Casablanca",
    "Création site e-commerce Maroc",
    "Expert Next.js Maroc",
    "Site web sur mesure",
    "React.js développeur",
    "Agence web freelance",
    "Mostafa Khaddare"
  ],

  authors: [{ name: "Mostafa Khaddare" }],
  creator: "Mostafa Khaddare",

  openGraph: {
    title: "Mostafa Khaddare – Expert Développement Web & E-commerce",
    description:
      "Besoin d'un site web rapide et moderne ? Je développe des solutions digitales sur mesure pour les entreprises marocaines.",
    url: "https://mostafawebdeveloper.vercel.app",
    siteName: "Mostafa Khaddare Portfolio",
    locale: "fr_MA", // Ciblage spécifique Maroc
    type: "website",
    // Pense à ajouter une image pour le partage sur WhatsApp/LinkedIn (très important au Maroc)
    images: [
      {
        url: "/og-image.jpg", // Assure-toi d'avoir une image nommée ainsi dans ton dossier public
        width: 1200,
        height: 630,
        alt: "Mostafa Khaddare - Développeur Web Full Stack Maroc",
      },
    ],
  },
  
  // Important pour s'assurer que Google indexe bien tes pages
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Pour une meilleure vérification si tu utilises Google Search Console
  verification: {
    google: "votre-code-de-verification-google", // À ajouter plus tard
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <LenisScroll />
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
