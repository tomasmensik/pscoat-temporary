import { COLORS, GRADIENTS, TYPOGRAPHY } from "../../lib/constants/design";

const keyFeatures = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "UV odolný",
    description: "Netoxický a ekologický pro bezpečné použití",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Energetické úspory",
    description: "Významná úspora energií a nákladů",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Certifikovaný",
    description: "Plně certifikované produkty",
  },
];

const surfaceTypes = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Na kov",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    label: "Na stěny",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    label: "Na dřevo",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    label: "Na PVC / střechy",
  },
];

export default function KeyFeatures() {
  return (
    <div className="relative rounded-[3rem] overflow-hidden bg-white border border-gray-200/50">
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-gray-900">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className={`${TYPOGRAPHY.heading.h2} mb-4 text-gray-900`}>
            Klíčové vlastnosti{" "}
            <span className={`font-bold text-[${COLORS.brand.primary}]`}>
              PScoat
            </span>
          </h3>
          <p
            className={`${TYPOGRAPHY.body.regular} text-gray-600 max-w-2xl mx-auto`}
          >
            PScoat odráží{" "}
            <span
              className={`font-bold text-lg text-[${COLORS.brand.primary}]`}
            >
              &gt;92%
            </span>{" "}
            světelného záření v celém svém spektru (TSR)
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Main Features Grid */}
          <div className="mb-6">
            <h4
              className={`${TYPOGRAPHY.heading.h4} mb-4 flex items-center gap-2 text-gray-900`}
            >
              <svg
                className={`w-6 h-6 text-[${COLORS.brand.primary}]`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Benefity
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${GRADIENTS.brand} flex items-center justify-center mb-4 text-white`}
                >
                  {feature.icon}
                </div>
                <h4 className={`${TYPOGRAPHY.heading.h4} mb-2 text-gray-900`}>
                  {feature.title}
                </h4>
                <p className={`${TYPOGRAPHY.body.small} text-gray-600`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Surface Types Grid */}
          <div className="mt-8">
            <h4
              className={`${TYPOGRAPHY.heading.h4} mb-4 flex items-center gap-2 text-gray-900`}
            >
              <svg
                className={`w-6 h-6 text-[${COLORS.brand.primary}]`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              Typy povrchů
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {surfaceTypes.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 group hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-[${COLORS.brand.primary}]/30`}
                >
                  <div
                    className={`group-hover:scale-110 transition-transform duration-200 text-[${COLORS.brand.primary}]`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`font-medium ${TYPOGRAPHY.body.small} text-center text-gray-900`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
