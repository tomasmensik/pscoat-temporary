import FeatureCard from "../shared/FeatureCard";
import { SPACING, TYPOGRAPHY } from "../../lib/constants/design";

const protectionFeatures = [
  {
    icon: "/home/tepelne-ztraty.png",
    title: "Tepelným ztrátám",
    desc: "Maximální izolace",
  },
  {
    icon: "/home/koroze.png",
    title: "Korozi",
    desc: "Dlouhá ochrana",
  },
  {
    icon: "/home/kondenzace.png",
    title: "Kondenzaci",
    desc: "Vlhkost mimo",
  },
  {
    icon: "/home/plisne.png",
    title: "Plísním",
    desc: "Zdravé prostředí",
  },
  {
    icon: "/home/pozary.png",
    title: "Požáru",
    desc: "Bezpečnost",
  },
];

export default function ProtectionFeatures() {
  return (
    <div className="mb-16">
      <h3 className={`${TYPOGRAPHY.heading.h3} text-gray-900 mb-8 text-center`}>
        Ochrana proti
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {protectionFeatures.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.desc}
            icon={feature.icon}
            variant="image"
            className="rounded-t-3xl"
          />
        ))}
      </div>
    </div>
  );
}
