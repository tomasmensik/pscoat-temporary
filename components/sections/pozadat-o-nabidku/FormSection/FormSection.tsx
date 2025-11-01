"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { Input, Textarea, Button, Checkbox } from "@/components/ui";
import { useVariantOptions, useProblemOptions } from "./data";

interface FormData {
  form_name: string;
  form_company: string;
  form_email: string;
  form_objekt: string;
  form_varianta: string[];
  form_problem: string[];
  form_message: string;
}

interface FormSectionProps {
  formData: FormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function FormSection({
  formData,
  onInputChange,
  onCheckboxChange,
  onSubmit,
}: FormSectionProps) {
  const { t } = useI18n();
  const variantOptions = useVariantOptions();
  const problemOptions = useProblemOptions();

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
            {t("requestOffer.contactDetails")}
          </h2>

          <div className="space-y-6">
            <Input
              type="text"
              name="form_name"
              value={formData.form_name}
              onChange={onInputChange}
              required
              label={t("requestOffer.fullName")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="form_company"
                value={formData.form_company}
                onChange={onInputChange}
                required
                label={t("requestOffer.company")}
              />
              <Input
                type="email"
                name="form_email"
                value={formData.form_email}
                onChange={onInputChange}
                required
                label={t("requestOffer.email")}
              />
            </div>

            <Input
              type="text"
              name="form_objekt"
              value={formData.form_objekt}
              onChange={onInputChange}
              required
              label={t("requestOffer.object")}
            />
          </div>
        </div>

        {/* Varianta a Problém */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t("requestOffer.selectVariants")}
              <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-3">
              {variantOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  name="form_varianta"
                  value={option.value}
                  checked={formData.form_varianta.includes(option.value)}
                  onChange={onCheckboxChange}
                  label={option.label}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t("requestOffer.whatProblems")}
              <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-3">
              {problemOptions.map((option) => (
                <Checkbox
                  key={option.value}
                  name="form_problem"
                  value={option.value}
                  checked={formData.form_problem.includes(option.value)}
                  onChange={onCheckboxChange}
                  label={option.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
            {t("requestOffer.message")}
          </h2>

          <Textarea
            name="form_message"
            value={formData.form_message}
            onChange={onInputChange}
            required
            rows={8}
            placeholder={t("requestOffer.placeholders.object")}
            label={t("requestOffer.yourMessage")}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" variant="secondary" size="lg">
            {t("requestOffer.send")}
          </Button>
        </div>
      </form>
    </section>
  );
}
