import FeatureCard from "../shared/FeatureCard";
import { GRADIENTS, TYPOGRAPHY } from "../../lib/constants/design";

const sustainabilityBenefits = [
  {
    gradient: GRADIENTS.brand,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Ekologie a udržitelnost",
    text: "PScoat je ekologický produkt s nízkou uhlíkovou stopou a šetrností k životnímu prostředí.",
  },
  {
    gradient: GRADIENTS.brandReverse,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Zdraví a bezpečí",
    text: "Jeho složení přispívá k ochraně zdraví a zvyšuje bezpečnost při používání.",
  },
  {
    gradient: GRADIENTS.brand,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Výkon a úspora",
    text: "PScoat prodlužuje životnost zařízení a zajišťuje výraznou úsporu energií.",
  },
];

export default function SustainabilityBenefits() {
  return (
    <div className="mb-24">
      <h3 className={`${TYPOGRAPHY.heading.h3} text-gray-900 mb-8 text-center`}>
        Ekologie a udržitelnost
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {sustainabilityBenefits.map((benefit, idx) => (
          <FeatureCard
            key={idx}
            title={benefit.title}
            description={benefit.text}
            icon={benefit.icon}
            gradient={benefit.gradient}
          />
        ))}
      </div>
    </div>
  );
}
