import { COLORS, TYPOGRAPHY } from "../../lib/constants/design";

export default function PScoatHero() {
  return (
    <>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 bg-[${COLORS.brand.primary}]/5 rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 bg-[${COLORS.brand.secondary}]/5 rounded-full blur-3xl`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[${COLORS.brand.primary}]/5 to-[${COLORS.brand.secondary}]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2`}
        />
      </div>

      {/* Modern Hero Text */}
      <div className="text-center mb-8 relative z-10">
        <h2
          className={`${TYPOGRAPHY.heading.h1} text-gray-900 mb-6 tracking-tight`}
        >
          POWER
          <span className={`text-[${COLORS.brand.primary}] font-bold`}>
            {" "}
            SMART{" "}
          </span>
          COAT
        </h2>
        <p
          className={`${TYPOGRAPHY.body.large} text-gray-600 max-w-3xl mx-auto leading-relaxed`}
        >
          Špičkové moderní nátěry s využitím nanotechnologie pro dokonalou
          ochranu povrchů, výrazné energetické úspory a dlouhou životnost
        </p>
      </div>
    </>
  );
}
