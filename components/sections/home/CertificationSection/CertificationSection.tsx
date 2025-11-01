"use client";

import { useI18n } from "@/lib/contexts/I18nContext";
import HeadingGrid from "./HeadingGrid";

const HEADING_LINE_HEIGHT_EM = 1.3;
const HEADING_ROWS = 3;

export default function CertificationSection() {
  const { t } = useI18n();
  
  return (
    <section className="w-full bg-white min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <HeadingGrid lines={[t("certification.heading1"), "", ""]} />
              </div>
              <img
                src="/home/certifikace/tuv-logo.png"
                alt="TÜV logo"
                className="object-contain"
                style={{ height: `${HEADING_LINE_HEIGHT_EM * HEADING_ROWS}em`, width: "auto" }} />
            </div>
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              {t("certification.text1")}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <HeadingGrid
              lines={[
                t("certification.heading2").split('. ')[0] + '.',
                t("certification.heading2").split('. ')[1] + '.',
                t("certification.heading2").split('. ')[2] + '.',
              ]}
            />
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              {t("certification.text2")}
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <HeadingGrid lines={[t("certification.heading3"), "", ""]} />
            <div className="h-px bg-slate-300/70 my-4 w-full" />
            <p className="text-sm leading-6 text-slate-600">
              {t("certification.text3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

