import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LebensWERT Iserlohn — Gemeinsam für ein lebenswertes Iserlohn",
    template: "%s | LebensWERT Iserlohn",
  },
  description:
    "LebensWERT Iserlohn e.V. stärkt Menschen in der südlichen Innenstadt. Zukunftswerkstatt, Jugendcafé Checkpoint, Lichtblick und mehr.",
  keywords: [
    "LebensWERT Iserlohn",
    "Zukunftswerkstatt Iserlohn",
    "Soziale Projekte Iserlohn",
    "Bewerbungshilfe Iserlohn",
    "Jugendcafé Iserlohn",
    "Spenden Iserlohn",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "LebensWERT Iserlohn e.V.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
