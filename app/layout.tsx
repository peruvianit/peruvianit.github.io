import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Arellano | Senior Software Engineer",
  description: "Senior Software Engineer e Software Architect specializzato in Java, Spring Boot, microservizi e sistemi distribuiti.",
  openGraph: {
    title: "Sergio Arellano | Senior Software Engineer",
    description: "Java, Spring Boot e sistemi distribuiti. Oltre 25 anni di esperienza nel software enterprise.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Sergio Arellano, Senior Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Arellano | Senior Software Engineer",
    description: "Java, Spring Boot e sistemi distribuiti.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
