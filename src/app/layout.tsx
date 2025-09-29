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
  title: "OWN LAB — AI-Powered RWA Infrastructure",
  description: "Agentic AI driving Shariah-compliant tokenization. Institutional gateway for RWA tokenization with automated compliance, onboarding, and lifecycle management.",
  keywords: ["RWA", "tokenization", "Shariah", "Islamic finance", "SECP", "GCC", "Malaysia", "blockchain", "institutional", "AI", "agentic", "compliance"],
  authors: [{ name: "OWN LAB" }],
  openGraph: {
    title: "OWN LAB — AI-Powered RWA Infrastructure",
    description: "Agentic AI driving Shariah-compliant tokenization. Institutional gateway for RWA tokenization with automated compliance, onboarding, and lifecycle management.",
    type: "website",
    locale: "en_US",
    siteName: "OWN LAB",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWN LAB — AI-Powered RWA Infrastructure",
    description: "Agentic AI driving Shariah-compliant tokenization. Institutional gateway for RWA tokenization with automated compliance, onboarding, and lifecycle management.",
    creator: "@own_lab",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
              "description": "AI-Powered RWA Infrastructure for Shariah-compliant tokenization",
              "url": "https://ownlab.com",
              "logo": "https://ownlab.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/own-lab",
                "https://twitter.com/own_lab"
              ],
              "offers": {
                "@type": "Service",
                "name": "Tokenization-as-a-Service",
                "description": "Agentic AI automates compliance, onboarding, and lifecycle management for institutional RWAs"
              },
              "product": {
                "@type": "Product",
                "name": "OWN LAB Platform",
                "description": "Agentic AI driving Shariah-compliant tokenization with automated compliance and institutional connectivity"
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
