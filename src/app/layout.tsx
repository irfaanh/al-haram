import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alharaminstitute.com"),
  title: {
    default: "AL Haram | Where Knowledge Guides the Future",
    template: "%s | AL Haram",
  },
  description:
    "AL Haram Institute is a values-based educational center focused on nurturing knowledge, moral character, and leadership through the integration of Islamic teachings and modern learning.",
  keywords: [
    "AL Haram",
    "Education Journalism India",
    "Future Skills Training",
    "Global Internship Gateway",
    "Career Mentorship",
    "Career & Future-Skills Mentorship",
    "Global Career Readiness",
    "Youth Mentorship Ecosystem",
  ],
  authors: [{ name: "AL Haram" }],
  creator: "AL Haram",
  publisher: "AL Haram",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alharaminstitute.com", // Placeholder or actual URL if known
    siteName: "AL HARAM",
    title: "AL HARAM | Where Guidance Meets the Future",
    description:
      "AL HARAM Institute is a values-based educational center focused on nurturing knowledge, moral character, and leadership through the integration of Islamic teachings and modern learning.",
    images: [
      {
        url: "/images/applogo.png?v=2",
        width: 1200,
        height: 630,
        alt: "AL HARAM Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL HARAM | Where Knowledge Guides the Future",
    description:
      "AL HARAM Institute is a values-based educational center focused on nurturing knowledge, moral character, and leadership through the integration of Islamic teachings and modern learning.",
    images: ["/images/applogo.png?v=2"],
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
        <WhatsAppIcon />
      </body>
    </html>
  );
}
