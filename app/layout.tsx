import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay L'héronde — Développeur web",
  description:
    "Portfolio de Jay L'héronde, étudiant en BUT 2 Informatique à la recherche d'une alternance. Développement web, automatisation et projets open source.",
  authors: [{ name: "Jay L'héronde" }],
  keywords: ["développeur", "alternance", "BUT informatique", "React", "Next.js", "portfolio"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Jay L'héronde — Développeur web",
    description:
      "Étudiant en BUT 2 Informatique à la recherche d'une alternance. Développement web, automatisation et projets open source.",
    siteName: "Portfolio Jay L'héronde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
