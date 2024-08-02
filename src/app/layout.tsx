import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActionLens",
  description: "ActionsLens. Site onde você grava seus videos de jogadas incriveis",
  abstract: 'Momentos unicos.Videos imperdiveis.',
  generator: 'Next.js',
  applicationName: 'ActionLens',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'ActionLens', 'video', 'esportes', 'gravacao', 'jogadas'],
  authors: [{ name: 'Leandro Patricio', url: 'https://www.linkedin.com/in/leandro-patrico/' }, { name: 'Guilherme Seki' }],
  creator: 'Leandro Patricio',
  publisher: 'Leandro Patricio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (

    <html lang="en">
      <body className={`${inter.className} bg-darkBlue text-offWhite`}>{children}</body>
    </html>
  );
}
