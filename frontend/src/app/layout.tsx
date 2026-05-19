import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ConfirmProvider } from "@/components/common/confirm-dialog";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LegerOne | Business Operations Platform",
  description: "A modern ERP platform designed for foreign trade business operations, including suppliers, products, customers, approvals, inventory, and order management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="antialiased font-sans">
        <ConfirmProvider>
          {children} <Toaster />
        </ConfirmProvider>
      </body>
    </html>
  );
}
