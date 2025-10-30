"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
              Tenkovrstvé termoizolační nátěry s vysokým obsahem mikrosfér. Izolují,
              snižují kondenzaci a korozi a zvyšují bezpečnost provozu napříč obory.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-6 md:col-span-3">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Navigace</p>
            <ul className="space-y-2">
              <li><Link href="/co-je-pscoat" className="hover:text-white">Co je PScoat?</Link></li>
              <li><Link href="/produkty" className="hover:text-white">Produkty</Link></li>
              <li><Link href="/reference" className="hover:text-white">Reference</Link></li>
              <li><Link href="/o-nas" className="hover:text-white">O nás</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-4">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">PSCoat, s.r.o.</li>
              <li className="text-gray-400">Hlubinská 1378/36, 702 00 Ostrava</li>
              <li>
                <a href="mailto:info@pscoat.com" className="hover:text-white">info@pscoat.com</a>
              </li>
              <li>
                <a href="tel:+420777633665" className="hover:text-white">+420 777 633 665</a>
              </li>
            </ul>
            <div className="h-px bg-gray-700 my-5" />
            <p className="text-xs text-gray-500">Výrobce: RIVER POWER s.r.o., Hlubinská 1378/36, 702 00 Ostrava</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PScoat</p>
          <div className="flex gap-4">
            <Link href="/pozadat-o-nabidku" className="hover:text-white">Požádat o nabídku</Link>
            <Link href="/o-nas#oceneni" className="hover:text-white">Certifikace</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
