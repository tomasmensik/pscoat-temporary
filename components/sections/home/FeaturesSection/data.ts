import { useI18n } from "@/lib/contexts/I18nContext";

export const useFeaturesData = () => {
  const { t } = useI18n();
  
  return {
    koroze: {
      icon: "/home/ikony-vlastnosti/koroze.png",
      label: t("features.koroze"),
      borderColor: "from-orange-500 to-orange-700",
    },
    tepelneZtraty: {
      icon: "/home/ikony-vlastnosti/tepelne-ztraty.png",
      label: t("features.tepelneZtraty"),
      borderColor: "from-blue-400 to-red-500",
    },
    kondenzace: {
      icon: "/home/ikony-vlastnosti/kondenzace.png",
      label: t("features.kondenzace"),
      borderColor: "from-blue-500 to-blue-700",
    },
    pozar: {
      icon: "/home/ikony-vlastnosti/pozar.png",
      label: t("features.pozar"),
      borderColor: "from-red-500 to-red-600",
    },
    plisne: {
      icon: "/home/ikony-vlastnosti/plisne.png",
      label: t("features.plisne"),
      borderColor: "from-green-400 to-green-600",
    },
  };
};

