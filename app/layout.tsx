
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
      </body>
    </html>
  );
}
