import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import WhatsAppButton from "@/components/whatsapp-button";


export const metadata: Metadata = {
    title: "Ryan Walker Portfolio - PrebuiltUI",
    description: "Ryan Walker's portfolio built by PrebuiltUI. A free and open-source UI template for React.js, Next.js and Tailwind CSS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LenisScroll />
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
