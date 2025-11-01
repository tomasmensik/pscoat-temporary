import { useMemo } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { SquareItem } from "./types";

const TYRE_BIG1 = "/home/square-sekce/tyre-velky-ctverec-1.png";
const TYRE_BIG2 = "/home/square-sekce/tyre-velky-ctverec-2.png";
const ELEC_1 = "/home/square-sekce/elektrarna-velky-ctverec-1.png";
const ELEC_2 = "/home/square-sekce/elektrarna-velky-ctverec-2.png";
const KOSTEL_1 = "/home/square-sekce/kostel-velky-ctverec-1.png";
const SILO_1 = "/home/square-sekce/silo-velky-ctverec-1.png";

export const useSquareItems = (): SquareItem[] => {
  const { t } = useI18n();
  
  return useMemo(
    () => [
      {
        id: "tyre",
        label: t("squareDynamic.tyreLabel"),
        sublabel: t("squareDynamic.tyreSublabel"),
        images: [TYRE_BIG1, TYRE_BIG2],
        contentTitle: t("squareDynamic.tyreTitle"),
        contentText: t("squareDynamic.tyreText"),
        imageLayout: "leftRight",
      },
      {
        id: "silo",
        label: t("squareDynamic.siloLabel"),
        sublabel: t("squareDynamic.siloSublabel"),
        images: [ELEC_1, ELEC_2],
        contentTitle: t("squareDynamic.siloTitle"),
        contentText: t("squareDynamic.siloText"),
        imageLayout: "twoStack",
      },
      {
        id: "facade",
        label: t("squareDynamic.facadeLabel"),
        sublabel: t("squareDynamic.facadeSublabel"),
        images: [KOSTEL_1, KOSTEL_1],
        contentTitle: t("squareDynamic.facadeTitle"),
        contentText: t("squareDynamic.facadeText"),
        imageLayout: "imageLeftTextRight",
      },
      {
        id: "biogas",
        label: t("squareDynamic.biogasLabel"),
        sublabel: t("squareDynamic.biogasSublabel"),
        images: [SILO_1, SILO_1],
        contentTitle: t("squareDynamic.biogasTitle"),
        contentText: t("squareDynamic.biogasText"),
        imageLayout: "imageTopLeft",
      },
    ],
    [t]
  );
};

export const thumbs: string[] = [
  "/home/square-sekce/tyre-maly-ctverec.png",
  "/home/square-sekce/elektrarna-maly-ctverec.png",
  "/home/square-sekce/kostel-maly-ctverec.png",
  "/home/square-sekce/silo-maly-ctverec.png",
];

