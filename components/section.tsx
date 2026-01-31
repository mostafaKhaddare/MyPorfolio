interface Props {
    title: string;
    children: React.ReactNode;
    id?: string; // Permet de forcer un ID spécifique si besoin (ex: "contact")
}

export default function Section({ title, children, id }: Props) {
    // Génère un ID simple si aucun n'est fourni (ex: "À propos" devient "a-propos")
    // Utile pour la navigation (ancres)
    const sectionId = id || title.toLowerCase().replace(/\s+/g, '-');

    return (
        <section 
            id={sectionId}
            className="flex flex-col md:flex-row md:items-start gap-8 w-full max-w-4xl mx-auto mt-24 px-4 scroll-mt-28"
        >
            {/* Colonne Titre */}
            {/* md:sticky + md:top-24 : Le titre reste visible quand on scrolle le contenu long */}
            <div className="w-full md:w-48 md:shrink-0 md:sticky md:top-24">
                <h2 className="text-2xl font-bold text-gray-900 md:text-lg md:font-semibold md:text-gray-500">
                    {title}
                </h2>
            </div>

            {/* Colonne Contenu */}
            <div className="w-full min-w-0">
                {children}
            </div>
        </section>
    );
}