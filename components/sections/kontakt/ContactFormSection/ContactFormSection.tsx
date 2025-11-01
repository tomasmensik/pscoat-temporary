"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { Button, Input, Textarea } from "@/components/ui";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormSectionProps {
  formData: ContactFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactFormSection({
  formData,
  onChange,
  onSubmit,
}: ContactFormSectionProps) {
  const { t } = useI18n();

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
        {t("contact.writeUs")}
      </h2>

      <form onSubmit={onSubmit} className="space-y-6 flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            required
            label={t("contact.firstName")}
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            required
            label={t("contact.lastName")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            label={t("contact.email")}
          />
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            label={t("contact.phone")}
          />
        </div>

        <Textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          required
          rows={6}
          placeholder={t("contact.placeholders.message")}
          label={t("contact.message")}
        />

        <div className="pt-4 mt-auto">
          <Button type="submit" variant="secondary" size="lg" fullWidth>
            {t("contact.sendMessage")}
          </Button>
        </div>
      </form>
    </div>
  );
}

