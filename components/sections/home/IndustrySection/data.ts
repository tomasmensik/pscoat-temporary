import { useI18n } from "@/lib/contexts/I18nContext";

export const useIconContent = () => {
  const { t } = useI18n();
  
  return [
    {
      title: t("industry.doprava"),
      bullets: [
        t("industry.dopravaBullet1"),
        t("industry.dopravaBullet2"),
        t("industry.dopravaBullet3"),
      ],
      images: [
        "/home/slider-odvetvi/vlak1.jpg",
        "/home/slider-odvetvi/vlak2.jpg",
      ],
    },
    {
      title: t("industry.stavby"),
      bullets: [
        t("industry.stavbyBullet1"),
        t("industry.stavbyBullet2"),
        t("industry.stavbyBullet3"),
      ],
      images: [
        "/home/slider-odvetvi/kostel1.jpg",
        "/home/slider-odvetvi/kostel2.jpg",
      ],
    },
    {
      title: t("industry.termalniStopa"),
      bullets: [t("industry.termalniStopaBullet1")],
      images: [
        "/home/slider-odvetvi/thermovize1.jpg",
        "/home/slider-odvetvi/thermovize2.jpg",
      ],
    },
    {
      title: t("industry.preprava"),
      bullets: [t("industry.prepravaBullet1"), t("industry.prepravaBullet2")],
      images: [
        "/home/slider-odvetvi/lod1.jpg",
        "/home/slider-odvetvi/lod2.jpg",
      ],
    },
    {
      title: t("industry.potrubniSystemy"),
      bullets: [
        t("industry.potrubniSystemyBullet1"),
        t("industry.potrubniSystemyBullet2"),
      ],
      images: [
        "/home/slider-odvetvi/trubky1.jpg",
        "/home/slider-odvetvi/trubky2.jpg",
      ],
    },
    {
      title: t("industry.bioplyn"),
      bullets: [t("industry.bioplynBullet1")],
      images: [
        "/home/slider-odvetvi/biopklynka1.jpg",
        "/home/slider-odvetvi/bioplynka2.jpg",
      ],
    },
  ];
};

