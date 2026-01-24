import Section from "@/components/section";

export default function AboutSection() {
    return (
        <Section title="À propos">
            <div className="text-sm/6.5">
                <p>
                    Je suis Mostafa Khaddare, un développeur web full-stack passionné par la création d'expériences numériques complètes, performantes et centrées sur l'utilisateur. Maîtrisant les technologies front-end et back-end, j'aime transformer des idées en applications web fonctionnelles et intuitives.
                </p>
                <p className="mt-5">
                    Mes compétences incluent React, Next.js pour des interfaces dynamiques, et Tailwind CSS pour un design moderne. Côté serveur, je travaille avec Node.js pour construire des API robustes. J'ai également de l'expérience dans la gestion de bases de données SQL comme PostgreSQL et MySQL, ce qui me permet de livrer des solutions fiables et complètes.
                </p>
                <p className="mt-5">
                    Spécialisé dans le développement de solutions e-commerce, je peux créer des boutiques en ligne optimisées pour le marché marocain, en intégrant des systèmes de paiement locaux et une logistique adaptée.
                </p>
            </div>
        </Section>
    );
}