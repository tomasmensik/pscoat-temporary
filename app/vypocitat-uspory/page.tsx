"use client";

import React, { useState } from "react";

// Form data type definition
interface FormData {
  // Contact information
  form_name: string;
  form_company: string;
  form_email: string;
  form_phone_code: string;
  form_phone: string;

  // Address
  form_street: string;
  form_city: string;
  form_zip: string;
  form_country: string;
  form_distributor: string;

  // Properties
  form_contstuction: string;
  form_contstuction_thickness: string;
  form_izolation: string;
  form_izolation_thickness: string;
  form_insulation: string;
  form_insulation_thickness: string;
  form_insulation_02: string;
  form_insulation_02_thickness: string;
}

// Custom Select Component
interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  required?: boolean;
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 text-left bg-white border-2 rounded-xl transition-all duration-300 ${
            isOpen
              ? "border-[#0180ae] ring-2 ring-[#0180ae]/20"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`${
                selectedOption ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {selectedOption ? selectedOption.label : "Vybrat"}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                    value === option.value ? "bg-[#0180ae]/5" : ""
                  }`}
                >
                  <span
                    className={
                      value === option.value
                        ? "text-[#0180ae] font-medium"
                        : "text-gray-700"
                    }
                  >
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default function VypocitatUspory() {
  const [formData, setFormData] = useState<FormData>({
    form_name: "",
    form_company: "",
    form_email: "",
    form_phone_code: "",
    form_phone: "",
    form_street: "",
    form_city: "",
    form_zip: "",
    form_country: "",
    form_distributor: "",
    form_contstuction: "",
    form_contstuction_thickness: "",
    form_izolation: "",
    form_izolation_thickness: "",
    form_insulation: "",
    form_insulation_thickness: "",
    form_insulation_02: "",
    form_insulation_02_thickness: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  // Options data
  const constructionOptions = [
    { value: "zelezobetonova-deska", label: "Železobetonová deska" },
    { value: "airbrick-max", label: "Airbrick MAX" },
    { value: "airbrick-u220", label: "Airbrick U220" },
    { value: "ytong", label: "YTONG" },
    { value: "porotherm-25-profi", label: "Porotherm 25 Profi" },
    { value: "porotherm-18-8-profi", label: "Porotherm 18,8 Profi" },
    { value: "plne-cihly", label: "Plné cihly" },
    { value: "cihla-s-otvorem", label: "Cihla s otvorem" },
    { value: "checker-cihla", label: "Checker cihla" },
  ];

  const insulationOptions = [
    { value: "polystyren-lamda-0.045", label: "Polystyren λ 0,045" },
    { value: "polystyren-lamda-0.038", label: "Polystyren λ 0,038" },
    { value: "polystyren-lamda-0.032", label: "Polystyren λ 0,032" },
    { value: "mineralni-vlna-0.04", label: "Minerální vlna λ 0,04" },
    { value: "mineralni-vln-0.036", label: "Minerální vlna λ 0,036" },
    { value: "mineralni-vln-0.032", label: "Minerální vlna λ 0,032" },
  ];

  const coatingOptions = [
    { value: "cementova-omitka", label: "Cementová omítka" },
    {
      value: "cementova-a-vapenna-omitka",
      label: "Cementová a vápenná omítka",
    },
    { value: "Vápencová omítka", label: "Vápencová omítka" },
    { value: "sadrova-omitka", label: "Sádrová omítka" },
    { value: "akrylova-omitka", label: "Akrylová omítka" },
    { value: "mineralni-omitka", label: "Minerální omítka" },
    { value: "sadrokarton", label: "Sádrokarton" },
    { value: "plne-cihly", label: "Plné cihly" },
    { value: "cihla-s-otvorem", label: "Cihla s otvorem" },
    { value: "checker-cihla", label: "Checker cihla" },
    { value: "clinker-cihla", label: "Clinker cihla" },
    { value: "kremicita-cihla", label: "Křemičitá cihla" },
    { value: "kremicita-duta-cihla", label: "Křemičitá dutá cihla" },
    { value: "piskovec", label: "Pískovec" },
    { value: "dekorativni-kamen", label: "Dekorativní kámen" },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mt-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Vypočítat úspory
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Tento formulář umožňuje vypočítat úspory energie po aplikaci
              systému PSCoat na stěnách domů, kanceláří nebo jiných budov.
              Zadejte prosím všechny důležité informace v níže uvedeném
              formuláři a zpětně obdržíte výpočet úspor.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Kontaktní údaje
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Celé jméno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="form_name"
                  value={formData.form_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Společnost <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_company"
                    value={formData.form_company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="form_email"
                    value={formData.form_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Předvolba země <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_phone_code"
                    value={formData.form_phone_code}
                    onChange={handleInputChange}
                    placeholder="+XXX"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefonní číslo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_phone"
                    value={formData.form_phone}
                    onChange={handleInputChange}
                    placeholder="XXX XXX XXX"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Adresa aplikace
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ulice <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_street"
                    value={formData.form_street}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Město <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_city"
                    value={formData.form_city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PSČ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_zip"
                    value={formData.form_zip}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Stát <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="form_country"
                    value={formData.form_country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Distributor
                </label>
                <input
                  type="text"
                  name="form_distributor"
                  value={formData.form_distributor}
                  onChange={handleInputChange}
                  placeholder="Kde jste se dozvěděli o PScoatu?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Properties */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Vlastnosti konstrukce
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CustomSelect
                    label="Typ konstrukce"
                    name="form_contstuction"
                    value={formData.form_contstuction}
                    options={constructionOptions}
                    onChange={(value) =>
                      handleSelectChange("form_contstuction", value)
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tloušťka konstrukce <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="form_contstuction_thickness"
                      value={formData.form_contstuction_thickness}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      mm
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CustomSelect
                    label="Typ izolace"
                    name="form_izolation"
                    value={formData.form_izolation}
                    options={insulationOptions}
                    onChange={(value) =>
                      handleSelectChange("form_izolation", value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tloušťka izolace
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="form_izolation_thickness"
                      value={formData.form_izolation_thickness}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      mm
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CustomSelect
                    label="Typ vnějšího opláštění"
                    name="form_insulation"
                    value={formData.form_insulation}
                    options={coatingOptions}
                    onChange={(value) =>
                      handleSelectChange("form_insulation", value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tloušťka vnějšího opláštění
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="form_insulation_thickness"
                      value={formData.form_insulation_thickness}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      mm
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CustomSelect
                    label="Typ vnitřního opláštění"
                    name="form_insulation_02"
                    value={formData.form_insulation_02}
                    options={coatingOptions}
                    onChange={(value) =>
                      handleSelectChange("form_insulation_02", value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tloušťka vnitřního opláštění
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="form_insulation_02_thickness"
                      value={formData.form_insulation_02_thickness}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      mm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Odeslat formulář
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
