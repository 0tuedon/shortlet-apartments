import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import { Sora } from 'next/font/google'
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Shortlet Portharcourt",
  description: "Experience Luxury in the Heart of the City",
  icons:"favicon.ico"
};

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={sora.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
