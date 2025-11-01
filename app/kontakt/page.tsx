"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import HeaderSection from "@/components/sections/shared/HeaderSection";
import ContactFormSection from "@/components/sections/kontakt/ContactFormSection/ContactFormSection";
import ContactInfoSection from "@/components/sections/kontakt/ContactInfoSection/ContactInfoSection";
import WorldMapSection from "@/components/sections/kontakt/WorldMapSection/WorldMapSection";
import OfficesGridSection from "@/components/sections/kontakt/OfficesGridSection/OfficesGridSection";

export default function Kontakt() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1.5);
  const [mapCenter, setMapCenter] = useState<[number, number]>([0, 75]);
  const [mapZoom, setMapZoom] = useState(1.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMapMove = (zoom: number, center: [number, number]) => {
    setZoomLevel(zoom);
    setMapZoom(zoom);
    setMapCenter(center);
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      <HeaderSection titleKey="contact.title" subtitleKey="contact.subtitle" />

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <ContactFormSection
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <ContactInfoSection />
        </div>
      </section>

      {/* World Map Section */}
      <section className="bg-gradient-to-b from-white to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("contact.branchesTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("contact.branchesSubtitle")}
            </p>
          </div>

          <WorldMapSection
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
            zoomLevel={zoomLevel}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            onMapMove={handleMapMove}
          />

          <OfficesGridSection />
        </div>
      </section>
    </main>
  );
}
