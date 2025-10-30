"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left big title and columns */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl text-white mb-8">Ekosystem</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <p className="text-sm text-gray-400 mb-3">Nadpis</p>
                  <ul className="space-y-2">
                    <li className="text-sm">Položka</li>
                    <li className="text-sm">Položka</li>
                    <li className="text-sm">Položka</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right descriptive block */}
          <div className="col-span-12 lg:col-span-4">
            <div>
              <p className="text-sm text-gray-100">01 — Effortless motion</p>
              <div className="h-px bg-gray-700 my-4 w-full" />
              <p className="text-sm leading-6 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper tincidunt est id maximus. In condimentum sapien non
                eros tempor tincidunt. Duis tristique, lacus in commodo posuere,
                lorem felis lacinia arcu, quis venenatis massa elit vel velit.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-gray-700 pt-6 text-xs text-gray-500">
          Copyright {new Date().getFullYear()} PSCoat
        </div>
      </div>
    </footer>
  );
}
