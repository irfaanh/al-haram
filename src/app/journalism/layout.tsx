import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education Journalism",
    description: "INDIA's First Career & Education Truth Platform. Momentor provides unbiased, honest, and data-driven reporting on career realities and the future of work.",
};

export default function JournalismLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
