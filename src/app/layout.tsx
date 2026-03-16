import type { Metadata } from "next";
import { Alexandria, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/globals.scss";

const alexandria = Alexandria({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khwarizm",
  description: "وكالة تقنية متميزة تصنع تجارب رقمية استثنائية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${alexandria.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
