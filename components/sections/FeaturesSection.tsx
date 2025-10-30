"use client";

export default function FeaturesSection() {
  const features = {
    koroze: {
      icon: "/home/ikony-vlastnosti/koroze.png",
      label: "Korozi",
      borderColor: "from-orange-500 to-orange-700",
    },
    tepelneZtraty: {
      icon: "/home/ikony-vlastnosti/tepelne-ztraty.png",
      label: "Tepelným ztrátám",
      borderColor: "from-blue-400 to-red-500",
    },
    kondenzace: {
      icon: "/home/ikony-vlastnosti/kondenzace.png",
      label: "Kondenzaci",
      borderColor: "from-blue-500 to-blue-700",
    },
    pozar: {
      icon: "/home/ikony-vlastnosti/pozar.png",
      label: "Požáru",
      borderColor: "from-red-500 to-red-600",
    },
    plisne: {
      icon: "/home/ikony-vlastnosti/plisne.png",
      label: "Plísním",
      borderColor: "from-green-400 to-green-600",
    },
  };

  const renderHexagonIcon = (
    feature: { icon: string; label: string; borderColor: string },
    index: number
  ) => {
    return (
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={feature.icon}
            alt={feature.label}
            className="w-28 h-28 object-contain"
          />
        </div>
        <p className="text-lg lg:text-xl text-black font-medium whitespace-nowrap">
          {feature.label}
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-12 gap-24">
          {/* First Row */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-end mr-8">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black mb-4 leading-tight">
                Souhra výkonů,
                <br />
                jeden materiál
              </h2>
              <p className="text-lg sm:text-xl text-black font-normal">
                V jednom kroku chráníte proti
              </p>
            </div>
          </div>

          {/* Tepelne ztraty - col-3 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start">
            {renderHexagonIcon(features.tepelneZtraty, 1)}
          </div>

          {/* Pozar - col-3 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-end">
            {renderHexagonIcon(features.pozar, 3)}
          </div>

          {/* Second Row - Koroze */}
          <div className="col-span-12 lg:col-span-6 flex justify-end">
            {renderHexagonIcon(features.koroze, 0)}
          </div>

          {/* Kondenzace - col-3 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start">
            {renderHexagonIcon(features.kondenzace, 2)}
          </div>

          {/* Plisne - col-3 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-end">
            {renderHexagonIcon(features.plisne, 4)}
          </div>
        </div>
      </div>
    </section>
  );
}
