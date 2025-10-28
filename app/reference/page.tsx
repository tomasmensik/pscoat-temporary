export default function Reference() {
  const references = [
    {
      company: "HEINEKEN",
      industry: "pivovarnictví",
      category: "Potravinářství",
    },
    {
      company: "CHEVRON",
      industry: "petrochemický průmysl",
      category: "Petrochemie",
    },
    {
      company: "ORLEN",
      industry: "petrochemický průmysl",
      category: "Petrochemie",
    },
    {
      company: "SLOVNAFT",
      industry: "petrochemický průmysl",
      category: "Petrochemie",
    },
    {
      company: "MOL",
      industry: "petrochemický průmysl",
      category: "Petrochemie",
    },
    { company: "OPEL", industry: "automotive", category: "Automotive" },
    {
      company: "AIR LIQUID",
      industry: "průmyslové plyny",
      category: "Průmyslové plyny",
    },
    {
      company: "AIR Products",
      industry: "průmyslové plyny",
      category: "Průmyslové plyny",
    },
    {
      company: "LINDE",
      industry: "průmyslové plyny",
      category: "Průmyslové plyny",
    },
    {
      company: "VEOLIA",
      industry: "elektrárny, teplárny, distribuce vody",
      category: "Energetika",
    },
    {
      company: "UWC",
      industry: "ekologická výroba elektrické energie",
      category: "Energetika",
    },
    {
      company: "GREEN GAS",
      industry: "ekologická výroba elektrické energie",
      category: "Energetika",
    },
    {
      company: "PLYNEX",
      industry: "bioplynová elektrárna",
      category: "Energetika",
    },
    {
      company: "GRUPA AZOTY",
      industry: "chemický průmysl",
      category: "Chemie",
    },
    { company: "AGROFERT", industry: "chemický průmysl", category: "Chemie" },
    { company: "SYNTHOS", industry: "chemický průmysl", category: "Chemie" },
    { company: "KGHM", industry: "těžba mědi", category: "Těžba" },
    {
      company: "ZEM, PL",
      industry: "elektrárny, teplárny",
      category: "Energetika",
    },
    {
      company: "ZARMEN G.A.",
      industry: "výroba koksu",
      category: "Průmysl",
    },
    {
      company: "MAVIR",
      industry: "elektrárny, teplárny",
      category: "Energetika",
    },
    {
      company: "EC MIKOLAJ",
      industry: "elektrárny, teplárny",
      category: "Energetika",
    },
    {
      company: "WEGLOKOKS",
      industry: "elektrárny, teplárny",
      category: "Energetika",
    },
    {
      company: "TEMPEST HOLD",
      industry: "průmysl, stavební průmysl",
      category: "Stavebnictví",
    },
    {
      company: "CZECHOSLOVAK GROUP a.s.",
      industry: "vojenský průmysl",
      category: "Obrana",
    },
  ];

  const categoryIcons: { [key: string]: JSX.Element } = {
    Petrochemie: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    Energetika: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    Chemie: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    Automotive: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    "Průmyslové plyny": (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 15a2 2 0 01-2 2h-4a2 2 0 01-2-2V7a4 4 0 014-4h2a2 2 0 012 2v12z"
        />
      </svg>
    ),
    Potravinářství: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
        />
      </svg>
    ),
    Těžba: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    Průmysl: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    Stavebnictví: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    Obrana: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Header Section */}
        <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mt-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                Naše reference
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Důvěřují nám přední světové společnosti napříč různými odvětvími
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* References Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {references.map((ref, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 hover:border-[#0180ae]/30 overflow-visible"
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl"></div>

                {/* Category Badge */}
                <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#0180ae] to-[#00a4d6] shadow-lg">
                  {categoryIcons[ref.category]}
                  <span>{ref.category}</span>
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0180ae] transition-colors duration-200 relative z-10">
                  {ref.company}
                </h3>

                {/* Industry */}
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                  {ref.industry}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white rounded-xl p-8 shadow-xl border border-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-[#0180ae] mb-2">
                  24+
                </div>
                <p className="text-gray-600 font-medium">Spokojených klientů</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#0180ae] mb-2">
                  10+
                </div>
                <p className="text-gray-600 font-medium">Různých odvětví</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#0180ae] mb-2">
                  15+
                </div>
                <p className="text-gray-600 font-medium">Zemí působení</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
