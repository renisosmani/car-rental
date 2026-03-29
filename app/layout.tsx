import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AutoShqip — Albania's #1 Car Rental & Automotive Marketplace",
  description:
    "Rent or buy a car in Albania with zero commission. Connect directly with local Albanian car suppliers. Cars available in Tirana, Durrës, Vlorë, Sarandë, Shkodër and more.",
  keywords:
    "car rental Albania, rent a car Tirana, Albania car hire, makinë me qira Tiranë, AutoShqip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

