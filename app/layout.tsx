import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'katex/dist/katex.min.css'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoviLab UA",
  description: "this page was created by LeñaBross. its goal is to teach physics to students of the University of the Amazonia in an interactive way through games and simulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <Toaster />
      </body>
    </html>
  );
}
