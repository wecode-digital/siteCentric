
import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import GoogleTagManager, { GoogleTagManagerNoScript } from './components/GoogleTagManager';

const myFont = localFont({
  src: './assets/fonts/Jost-400-Book.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Agora somos Norden",
  description: "Wecode, Brava e Centric agora são Norden.",
  icons: {
    icon: "/favicon.svg",
  },
};

/** Sinaliza ao Google que a Centric (nome antigo) é a mesma entidade da Norden. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Centric",
  sameAs: ["https://norden.ec"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="pt-BR" className={myFont.className}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
