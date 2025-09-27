import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OWN LAB — RWA Investment Bank & Tokenization-as-a-Service",
  description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
  keywords: ["RWA", "tokenization", "Shariah", "Islamic finance", "SECP", "GCC", "Malaysia", "blockchain", "institutional"],
  authors: [{ name: "OWN LAB" }],
  openGraph: {
    title: "OWN LAB — RWA Investment Bank & Tokenization-as-a-Service",
    description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWN LAB — RWA Investment Bank & Tokenization-as-a-Service",
    description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OWN LAB",
              "description": "RWA Investment Bank & Tokenization-as-a-Service",
              "url": "https://ownlab.com",
              "logo": "https://ownlab.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/own-lab",
                "https://twitter.com/own_lab"
              ],
              "offers": {
                "@type": "Service",
                "name": "Tokenization-as-a-Service",
                "description": "Turnkey, Shariah-compliant tokenization platform for institutional RWAs"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
