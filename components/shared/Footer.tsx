"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#0f1113] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-12 gap-10">
          {/* Brand + short value prop */}
          <div className="col-span-12 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.svg" alt="PScoat" width={120} height={32} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 text-sm leading-6 text-gray-400 max-w-prose">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-6 md:col-span-3">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">{t("footer.navigation")}</p>
            <ul className="space-y-2">
              <li><Link href="/co-je-pscoat" className="hover:text-white">{t("footer.coJepscoat")}</Link></li>
              <li><Link href="/produkty" className="hover:text-white">{t("nav.produkty")}</Link></li>
              <li><Link href="/reference" className="hover:text-white">{t("footer.reference")}</Link></li>
              <li><Link href="/o-nas" className="hover:text-white">{t("footer.onas")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-4">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">{t("footer.contactTitle")}</p>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">PSCoat, s.r.o.</li>
              <li className="text-gray-400">{t("footer.address")}</li>
              <li>
                <a href="mailto:info@pscoat.com" className="hover:text-white">info@pscoat.com</a>
              </li>
              <li>
                <a href="tel:+420777633665" className="hover:text-white">+420 777 633 665</a>
              </li>
            </ul>
            <div className="h-px bg-gray-700 my-5" />
            <p className="text-xs text-gray-500">{t("footer.manufacturer")}</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-4">
            <Link href="/pozadat-o-nabidku" className="hover:text-white">{t("footer.requestOffer")}</Link>
            <Link href="/o-nas#oceneni" className="hover:text-white">{t("footer.certification")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
