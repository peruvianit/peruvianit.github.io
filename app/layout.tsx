import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Arellano | Senior Software Developer",
  description: "Senior Software Developer e Software Architect specializzato in Java, Spring Boot, microservizi e sistemi distribuiti.",
  openGraph: {
    title: "Sergio Arellano | Senior Software Developer",
    description: "Java, Spring Boot e sistemi distribuiti. Oltre 25 anni di esperienza nel software enterprise.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Sergio Arellano, Senior Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Arellano | Senior Software Developer",
    description: "Java, Spring Boot e sistemi distribuiti.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K55L2DD3N4"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K55L2DD3N4');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
