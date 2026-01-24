import Section from "@/components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">mostafa.khaddare@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Téléphone:</td>
                        <td className="py-2 text-gray-500">+212 6 48 52 25 11</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}