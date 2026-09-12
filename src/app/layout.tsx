import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Brew Haven Coffee Shop",
  description: "A cozy neighborhood coffee shop serving artisanal coffee and pastries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}