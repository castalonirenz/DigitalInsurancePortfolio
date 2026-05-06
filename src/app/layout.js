import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Blue Royale Portfolio | Dan Louie P. Decena',
  description:
    'Blue Royale and Select medical insurance portfolio by Dan Louie P. Decena, Account Executive at Pacific Cross.',
  keywords: 'Blue Royale, Select Plan, insurance, medical insurance, Pacific Cross',
  authors: [{ name: "Dan Louie P. Decena" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
