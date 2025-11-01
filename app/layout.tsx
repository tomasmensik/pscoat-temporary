import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavbarProvider from "../components/shared/navbar/NavbarProvider";
import Footer from "../components/shared/Footer";
import { I18nProvider } from "@/lib/contexts/I18nContext";

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
    <html className={`${lexend.variable} ${raleway.variable}`}>
      <body className="font-sans">
        <I18nProvider>
          <NavbarProvider>{children}</NavbarProvider>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
