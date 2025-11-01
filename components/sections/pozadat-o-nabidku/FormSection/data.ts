import { useI18n } from "@/lib/contexts/I18nContext";

export interface FormOption {
  value: string;
  label: string;
}

export const useVariantOptions = (): FormOption[] => {
  const { t } = useI18n();
  return [
    { value: "tezky-prumysl", label: t("requestOffer.variants.tezkyPrumysl") },
    { value: "prumysl", label: t("requestOffer.variants.prumysl") },
    { value: "potravinarsky", label: t("requestOffer.variants.potravinarsky") },
    { value: "vyroba", label: t("requestOffer.variants.vyroba") },
    {
      value: "komercni-budovy",
      label: t("requestOffer.variants.komercniBudovy"),
    },
    { value: "stavebnictvi", label: t("requestOffer.variants.stavebnictvi") },
    { value: "klimatizace", label: t("requestOffer.variants.klimatizace") },
    { value: "jine", label: t("requestOffer.variants.jine") },
  ];
};

export const useProblemOptions = (): FormOption[] => {
  const { t } = useI18n();
  return [
    { value: "kondenzace", label: t("requestOffer.problems.kondenzace") },
    { value: "koroze", label: t("requestOffer.problems.koroze") },
    { value: "plisne", label: t("requestOffer.problems.plisne") },
    {
      value: "tepelne-ztraty",
      label: t("requestOffer.problems.tepelneZtraty"),
    },
    { value: "izolace-domu", label: t("requestOffer.problems.izolaceDomu") },
    { value: "bezpecnost", label: t("requestOffer.problems.bezpecnost") },
    { value: "zefektivneni", label: t("requestOffer.problems.zefektivneni") },
  ];
};

