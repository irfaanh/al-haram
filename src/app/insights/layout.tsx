import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education Journalism",
    description: "Al Haram Institute is a values-based educational center focused on nurturing knowledge, moral character, and leadership through the integration of Islamic teachings and modern learning.",
};

export default function JournalismLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
