"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import HeaderSection from "@/components/sections/shared/HeaderSection";
import FormSection from "@/components/sections/pozadat-o-nabidku/FormSection/FormSection";

export default function PozadatONabidku() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    form_name: "",
    form_company: "",
    form_email: "",
    form_objekt: "",
    form_varianta: [] as string[],
    form_problem: [] as string[],
    form_message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.form_varianta.length === 0) {
      alert(t("requestOffer.validationVariants"));
      return;
    }

    if (formData.form_problem.length === 0) {
      alert(t("requestOffer.validationProblems"));
      return;
    }

    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [name]: [...currentArray, value] };
      } else {
        return {
          ...prev,
          [name]: currentArray.filter((item) => item !== value),
        };
      }
    });
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      <HeaderSection
        titleKey="requestOffer.title"
        subtitleKey="requestOffer.subtitle1"
      />
      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-lg md:text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed">
        <strong>{t("requestOffer.subtitle1")}</strong>
      </p>
      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        {t("requestOffer.subtitle2")}
      </p>

      <FormSection
        formData={formData}
        onInputChange={handleInputChange}
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
