"use client";

import { useMemo, useState } from "react";

type SquareItem = {
  id: string;
  label: string; // left small square main label
  sublabel?: string; // smaller line in the small square
  images: string[]; // 1-2 images for the large square content
  contentTitle: string; // large square heading
  contentText?: string; // paragraph under heading
  imageLayout?:
    | "leftRight"
    | "twoStack"
    | "single"
    | "imageLeftTextRight"
    | "imageTopLeft"; // arrangement for big square
};

export default function SquareDynamicSection() {
  const TYRE_BIG1 = "/home/square-sekce/tyre-velky-ctverec-1.png";
  const TYRE_BIG2 = "/home/square-sekce/tyre-velky-ctverec-2.png";
  const ELEC_1 = "/home/square-sekce/elektrarna-velky-ctverec-1.png";
  const ELEC_2 = "/home/square-sekce/elektrarna-velky-ctverec-2.png";
  const KOSTEL_1 = "/home/square-sekce/kostel-velky-ctverec-1.png";
  const SILO_1 = "/home/square-sekce/silo-velky-ctverec-1.png";
  const TYRE_THUMB = "/home/square-sekce/tyre-maly-ctverec-thumbnail.png";
  const items: SquareItem[] = useMemo(
    () => [
      {
        id: "tyre",
        label: "Výroba pneumatik",
        sublabel: "Continental",
        images: [TYRE_BIG1, TYRE_BIG2],
        contentTitle: "Použití při výrobě pneumatik.",
        contentText:
          "Měření ukázalo, že ušetří 50% energie elektrické na to aby vyrobili pneumatikou na traktor.",
        imageLayout: "leftRight",
      },
      {
        id: "biogas",
        label: "Bioplynová elektrárna",
        sublabel: "PLYNEX",
        images: [ELEC_1, ELEC_2],
        contentTitle: "Úspory tepla a ochrana zařízení.",
        contentText:
          "Stálá ochrana proti kondenzaci a korozi, rychlá návratnost investice.",
        imageLayout: "twoStack",
      },
      {
        id: "facade",
        label: "Fasáda historického objektu",
        sublabel: "Kostel a fara",
        images: [KOSTEL_1, KOSTEL_1],
        contentTitle: "Citlivá ochrana kulturní památky.",
        contentText:
          "Snižuje tepelné ztráty a vlhkost, bez zásahu do vzhledu fasády.",
        imageLayout: "imageLeftTextRight",
      },
      {
        id: "silo",
        label: "Skladování a zásobníky",
        sublabel: "Silo",
        images: [SILO_1, SILO_1],
        contentTitle: "Menší kondenzace, více jistoty.",
        contentText: "Zabraňuje rosení a tvorbě plísní, chrání povrch a obsah.",
        imageLayout: "imageTopLeft",
      },
    ],
    []
  );

  // only 3 visible on the left
  const visibleCount = 3;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [firstVisible, setFirstVisible] = useState(0);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(max, Math.max(min, n));

  const go = (dir: 1 | -1) => {
    const next = clamp(selectedIndex + dir, 0, items.length - 1);
    setSelectedIndex(next);
    // keep selected within the 3 visible window
    if (next < firstVisible) setFirstVisible(next);
    if (next >= firstVisible + visibleCount)
      setFirstVisible(next - visibleCount + 1);
  };

  const canUp = firstVisible > 0;
  const canDown = firstVisible + visibleCount < items.length;

  return (
    <section className="relative w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-thin text-slate-900">
                Potvrzeno provozem
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left small squares column */}
          <div className="col-span-12 md:col-span-3 flex justify-end">
            <div className="relative h-[90vh] overflow-hidden w-[75%] ml-auto">
              {/* sliding list */}
              <div
                className="h-full transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateY(calc(-${firstVisible} * (calc((100% - 16px)/3 + 8px))))`,
                }}
              >
                {items.map((it, idx) => (
                  <button
                    key={it.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full mb-2 text-left border border-gray-200 overflow-hidden group`}
                    style={{ height: "calc((100% - 16px)/3)" }}
                  >
                    <div className="relative h-full w-full">
                      {/* photo */}
                      <img
                        src={TYRE_THUMB}
                        alt="thumbnail"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* content */}
                      <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
                        <div>
                          <p className="text-lg leading-tight">{it.label}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs opacity-90">{it.sublabel}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-5 h-5 opacity-90"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* arrows sit visually in the big square per spec, but also mirror here for UX */}
            </div>
          </div>

          {/* Right big square */}
          <div className="col-span-12 md:col-span-9">
            <div className="relative bg-gray-100 overflow-hidden">
              <div className="relative w-full h-[90vh] p-4 md:p-6">
                {/* Top image area - variable layouts */}
                {items[selectedIndex].imageLayout === "leftRight" && (
                  <div
                    className="grid grid-cols-12 gap-4 md:gap-6"
                    style={{ height: "62%" }}
                  >
                    <div className="col-span-8 h-full overflow-hidden bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={`${items[selectedIndex].id}-left`}
                        src={items[selectedIndex].images[0]}
                        alt={items[selectedIndex].label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-4 h-full overflow-hidden bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={`${items[selectedIndex].id}-right`}
                        src={
                          items[selectedIndex].images[1] ||
                          items[selectedIndex].images[0]
                        }
                        alt={items[selectedIndex].label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                {items[selectedIndex].imageLayout === "twoStack" && (
                  <div
                    className="grid grid-cols-12 gap-4 md:gap-6"
                    style={{ height: "62%" }}
                  >
                    {/* Left: two stacked images */}
                    <div className="col-span-8 grid grid-rows-2 gap-2 md:gap-4 h-full">
                      <div className="relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={items[selectedIndex].images[0]}
                          alt={items[selectedIndex].label}
                          className="absolute top-0 left-0 w-full h-auto"
                          style={{
                            transform: "scale(0.67)",
                            transformOrigin: "top left",
                          }}
                        />
                        <div className=" pb-[50%]" />
                      </div>
                      <div className="relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            items[selectedIndex].images[1] ||
                            items[selectedIndex].images[0]
                          }
                          alt={items[selectedIndex].label}
                          className="absolute top-0 left-0 w-full h-auto"
                          style={{
                            transform: "scale(0.67)",
                            transformOrigin: "top left",
                          }}
                        />
                        <div className="pb-[50%]" />
                      </div>
                    </div>
                    {/* Right: text block aligned like mock */}
                    <div className="col-span-4 flex items-start">
                      <div className="pt-2">
                        <div className="inline-block">
                          <h3 className="text-[20px] md:text-[22px] text-slate-800">
                            {items[selectedIndex].contentTitle}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            I co bude dál.
                          </p>
                          <div className="h-px bg-slate-300/70 my-4 w-full" />
                        </div>
                        {items[selectedIndex].contentText && (
                          <p className="text-[12px] leading-relaxed text-slate-600 max-w-[36ch]">
                            {items[selectedIndex].contentText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {items[selectedIndex].imageLayout === "single" && (
                  <div className="h-[62%] overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={items[selectedIndex].images[0]}
                      alt={items[selectedIndex].label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {items[selectedIndex].imageLayout === "imageTopLeft" && (
                  <div className="h-full flex flex-col">
                    {/* image top-left with constrained width */}
                    <div className="w-[50%] max-w-[680px] aspect-[4/3] overflow-hidden bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={items[selectedIndex].images[0]}
                        alt={items[selectedIndex].label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* text below left */}
                    <div className="mt-8">
                      <div className="inline-block">
                        <h3 className="text-[20px] md:text-[22px] text-slate-800">
                          {items[selectedIndex].contentTitle}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          I co bude dál.
                        </p>
                        <div className="h-px bg-slate-300/70 my-4 w-full" />
                      </div>
                      {items[selectedIndex].contentText && (
                        <p className="text-[12px] leading-relaxed text-slate-600 max-w-[36ch]">
                          {items[selectedIndex].contentText}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {items[selectedIndex].imageLayout === "imageLeftTextRight" && (
                  <div
                    className="grid grid-cols-12 gap-4 md:gap-6"
                    style={{ height: "100%" }}
                  >
                    <div className="col-span-8 h-full overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={items[selectedIndex].images[0]}
                        alt={items[selectedIndex].label}
                        className="absolute top-0 left-0 w-full h-auto"
                        style={{
                          transform: "scale(0.75)",
                          transformOrigin: "top left",
                        }}
                      />
                    </div>
                    <div className="col-span-4 flex items-start">
                      <div className="pt-2">
                        <div className="inline-block">
                          <h3 className="text-[20px] md:text-[22px] text-slate-800">
                            {items[selectedIndex].contentTitle}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            I co bude dál.
                          </p>
                          <div className="h-px bg-slate-300/70 my-4 w-full" />
                        </div>
                        {items[selectedIndex].contentText && (
                          <p className="text-[12px] leading-relaxed text-slate-600 max-w-[36ch]">
                            {items[selectedIndex].contentText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom text block - not shown for twoStack (text is on the right) */}
                {items[selectedIndex].imageLayout !== "twoStack" &&
                  items[selectedIndex].imageLayout !== "imageLeftTextRight" &&
                  items[selectedIndex].imageLayout !== "imageTopLeft" && (
                    <div
                      className="flex flex-col justify-start"
                      style={{ height: "38%" }}
                    >
                      <div className="mt-6">
                        <div className="inline-block">
                          <h3 className="text-[20px] md:text-[22px] text-slate-800">
                            {items[selectedIndex].contentTitle}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            I co bude dál.
                          </p>
                          <div className="h-px bg-slate-300/70 my-4 w-full" />
                        </div>
                        {items[selectedIndex].contentText && (
                          <p className="text-[12px] leading-relaxed text-slate-600 max-w-[36ch]">
                            {items[selectedIndex].contentText}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
              </div>

              {/* bottom-right arrows controlling selection */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => go(-1)}
                  disabled={selectedIndex === 0}
                  className={`w-9 h-9 rounded-full flex items-center justify-center bg-white/80 text-slate-900 shadow ${
                    selectedIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white"
                  }`}
                  aria-label="Předchozí"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => go(1)}
                  disabled={selectedIndex === items.length - 1}
                  className={`w-9 h-9 rounded-full flex items-center justify-center bg-white/80 text-slate-900 shadow ${
                    selectedIndex === items.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-white"
                  }`}
                  aria-label="Další"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(6px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
