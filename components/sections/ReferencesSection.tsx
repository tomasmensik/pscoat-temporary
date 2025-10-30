"use client";

import { useState } from "react";

const logosTop = [
  "/home/references/agrofert.png",
  "/home/references/veolia.png",
  "/home/references/linde.png",
  "/home/references/opel.png",
  "/home/references/mol.png",
];

const logosBottom = [
  "/home/references/slovnaft.png",
  "/home/references/orlen.png",
  "/home/references/chevron.png",
  "/home/references/heineken.png",
];

export default function ReferencesSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="w-full bg-white min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-center text-3xl md:text-4xl text-slate-900">
          PS Coat využívají
        </h2>

        {/* Logos grid */}
        <div className="mt-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
            {logosTop.map((src) => (
              <img
                key={src}
                src={src}
                alt="reference logo"
                className="h-30 md:h-36 object-contain opacity-70"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {logosBottom.map((src) => (
              <img
                key={src}
                src={src}
                alt="reference logo"
                className="h-30 md:h-36 object-contain opacity-70"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-slate-300/60 w-full" />

        {/* Collapsible list of companies */}
        <div
          className={`mt-6 text-center text-[12px] md:text-sm text-slate-500 leading-6 space-y-1 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden mx-auto ${
            expanded ? "opacity-100 max-h-[1200px]" : "opacity-0 max-h-0"
          }`}
          style={{ maxWidth: 860 }}
        >
          <p>AIR LIQUID - industrial gases</p>
          <p>AIR Products - industrial gases</p>
          <p>UWC, Thailand - ecological production of elektricity</p>
          <p>GREEN GAS - ecological production of elektricity</p>
          <p>MAVIR, Almásfüzitő, Hungary - power plants, heating plants</p>
          <p>WEGLOKOKS, PL - power plants, heating plants</p>
          <p>ZEM, PL - power plants, heating plants</p>
          <p>EC MIKOLAJ, PL - power plants, heating plants</p>
          <p>AZOTY GROUP - chemical industry</p>
          <p>SYNTHOS - chemical industry</p>
          <p>KGHM (Polish copper) - copper mining</p>
          <p>KOSOWNIA CZENSTOCHOWA, (ZARMEN G.A.) - production of coal coke</p>
          <p>
            PLYNEX, (VAE Controls) - ecological biogas plant, production of
            elektricity
          </p>
          <p>TEMPEST HOLD, SK - industry, construction industry</p>
          <p>VÝVOJ MARTIN, (CZECHOSLOVAK GROUP AG) - military industry</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
            aria-expanded={expanded}
          >
            <span className="text-sm font-medium">
              {expanded ? "Skrýt" : "Zobrazit více"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
