
import type { Metadata } from "next";
import Footer from "@/public/components/Footer/Footer";
import "./globals.css";
import localFont from 'next/font/local';
import GoogleTagManager, { GoogleTagManagerNoScript } from './components/GoogleTagManager';

const myFont = localFont({
  src: './assets/fonts/Jost-400-Book.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Centric",
  description: "Somos especialistas em aumento de receita e maximização de ROAS através da nossa experiência em gestão de e-commerce, modelo boutique e plano de mídia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="pt-BR" className={myFont.className}>
      <head>
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        {children}
        <> 
            <Footer/>
        </>
      </body>
    </html>
  );
}
