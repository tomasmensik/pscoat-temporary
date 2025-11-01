"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { EmailIcon, PhoneIcon, LocationIcon, ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui";

export default function ContactInfoSection() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t("contact.contactInfo")}
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
              <EmailIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{t("contact.email")}</h3>
              <p className="text-gray-600">info@pscoat.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{t("contact.phone")}</h3>
              <p className="text-gray-600">+420 123 456 789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
              <LocationIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Adresa</h3>
              <p className="text-gray-600">{t("contact.addressValue")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t("contact.quickOfferTitle")}
        </h2>
        <p className="text-gray-600 mb-6">{t("contact.quickOfferText")}</p>
        <Button
          href="/pozadat-o-nabidku"
          variant="secondary"
          size="md"
          icon={<ArrowRightIcon className="w-5 h-5" />}
          iconPosition="right"
        >
          {t("contact.requestOffer")}
        </Button>
      </div>
    </div>
  );
}

