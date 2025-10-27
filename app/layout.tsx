import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarProvider from "../components/NavbarProvider";
import Footer from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PScoat - Termoizolační ochrana",
  description:
    "Inovativní řešení pro termoizolaci s využitím nejmodernějších nanotechnologií",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <NavbarProvider>{children}</NavbarProvider>
        <Footer />
      </body>
    </html>
  );
}
