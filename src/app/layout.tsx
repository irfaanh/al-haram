import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOMENTOR | Where Guidance Meets the Future",
    template: "%s | MOMENTOR",
  },
  description:
    "India's first Education Journalism platform and Future-Skills Training Academy. Empowering youth with global internships, career mentorship, and unbiased education insights.",
  keywords: [
    "Momentor",
    "Education Journalism India",
    "Future Skills Training",
    "Global Internship Gateway",
    "Career Mentorship",
    "Study Abroad Consultancy",
    "Global Career Readiness",
    "Youth Mentorship Ecosystem",
  ],
  authors: [{ name: "MOMENTOR" }],
  creator: "MOMENTOR",
  publisher: "MOMENTOR",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momentor.in", // Placeholder or actual URL if known
    siteName: "MOMENTOR",
    title: "MOMENTOR | Where Guidance Meets the Future",
    description:
      "India's first Education Journalism platform and Future-Skills Training Academy. Empowering youth with global internships and career mentorship.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "MOMENTOR Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMENTOR | Where Guidance Meets the Future",
    description:
      "India's first Education Journalism platform and Future-Skills Training Academy.",
    images: ["/images/logo.png"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
