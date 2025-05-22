import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import "./animations.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fachadas MC - Limpeza de Fachadas",
  description: "Especialistas em limpeza de fachadas, oferecendo soluções completas para preservar e valorizar seu patrimônio.",
  keywords: "limpeza de fachadas, serviços de fachada, limpeza predial, ancora, linha de vida, limpeza de vidro, limpeza de pele de vidro, limpeza de fulget, limpeza de cerâmica, limpeza de alvenaria",
  openGraph: {
    title: "Fachadas MC - Limpeza Fachadas e Ancoragem Predial",
    description: "Especialistas em limpeza de fachadas, oferecendo soluções completas para preservar e valorizar seu patrimônio.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://fachadasmc.com.br" />
        <meta name="theme-color" content="#ffffff" />
        <GoogleAnalytics gaId="GTM-TSD7RCD4" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
