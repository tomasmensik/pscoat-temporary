import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavbarProvider from "../components/NavbarProvider";
import Footer from "../components/shared/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-lexend",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

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
    <html lang="cs" className={`${lexend.variable} ${raleway.variable}`}>
      <body className="font-sans">
        <NavbarProvider>{children}</NavbarProvider>
        <Footer />
      </body>
    </html>
  );
}
