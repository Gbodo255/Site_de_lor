import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Joubert - Achat, Vente Or & Argent, Devises et Numismatique",
  description: "Achetez, vendez ou stockez de l’or et de l’argent avec Maison Joubert. Métaux précieux, numismatique et devises : expertise depuis 1909.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} ${dmSerif.variable} antialiased dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#090D16] text-white flex flex-col selection:bg-[#b8a468] selection:text-black">
        {children}
      </body>
    </html>
  );
}
