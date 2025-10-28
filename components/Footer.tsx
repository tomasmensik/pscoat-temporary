"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="PScoat Logo"
                width={120}
                height={32}
                className="h-8 w-auto mb-4"
                priority
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Inovativní řešení pro termoizolaci s využitím nejmodernějších
              nanotechnologií.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#0180ae] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#0180ae] transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links - Co je PSCoat? */}
          <div>
            <h3 className="text-white font-bold mb-4">Co je PSCoat?</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/co-je-pscoat/vlastnosti"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Specifické vlastnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/co-je-pscoat/porovnani"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Porovnání izolací
                </Link>
              </li>
              <li>
                <Link
                  href="/co-je-pscoat/aplikace"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Aplikace
                </Link>
              </li>
              <li>
                <Link
                  href="/co-je-pscoat/pouziti"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Použití
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Produkty a Společnost */}
          <div>
            <h3 className="text-white font-bold mb-4">Produkty</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  href="/produkty/stavebnictvi"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Stavebnictví
                </Link>
              </li>
              <li>
                <Link
                  href="/produkty/prumysl"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Průmysl
                </Link>
              </li>
              <li>
                <Link
                  href="/produkty/verejny-sektor"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  Veřejný sektor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#0180ae] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@pscoat.cz"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  info@pscoat.cz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#0180ae] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+420123456789"
                  className="hover:text-[#0180ae] transition-colors"
                >
                  +420 123 456 789
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-sm mt-4"
                >
                  Kontaktovat
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PScoat. Všechna práva vyhrazena.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/o-nas/cerna-listina"
                className="hover:text-[#0180ae] transition-colors"
              >
                Černá listina
              </Link>
              <Link
                href="/kontakt"
                className="hover:text-[#0180ae] transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
