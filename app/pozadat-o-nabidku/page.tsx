"use client";

import React, { useState } from "react";

export default function PozadatONabidku() {
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

    // Validate that at least one option is selected for each checkbox group
    if (formData.form_varianta.length === 0) {
      alert("Prosím vyberte alespoň jednu variantu.");
      return;
    }

    if (formData.form_problem.length === 0) {
      alert("Prosím vyberte alespoň jeden problém, který řešíte.");
      return;
    }

    // Handle form submission
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
        // Add value to array if checked
        return { ...prev, [name]: [...currentArray, value] };
      } else {
        // Remove value from array if unchecked
        return {
          ...prev,
          [name]: currentArray.filter((item) => item !== value),
        };
      }
    });
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mt-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Požádat o technickou konzultaci
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed">
              <strong>
                Kontaktujte nás pro individuální nabídku a konzultaci
              </strong>
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Vyplňte formulář a my vám připravíme individuální nabídku na míru
              vašemu projektu. Těšíme se na spolupráci!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Objekt <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="form_objekt"
                  value={formData.form_objekt}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Varianta a Problém */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Vyberte prosím varianty
                <span className="text-red-500">*</span>
              </h3>
              <div className="space-y-3">
                {[
                  { value: "tezky-prumysl", label: "Těžký průmysl" },
                  { value: "prumysl", label: "Průmysl" },
                  { value: "potravinarsky", label: "Potravinářský průmysl" },
                  { value: "vyroba", label: "Výroba" },
                  { value: "komercni-budovy", label: "Komerční budovy" },
                  { value: "stavebnictvi", label: "Stavebnictví" },
                  { value: "klimatizace", label: "Klimatizace" },
                  { value: "jine", label: "Jiné" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[#0180ae]/30 hover:bg-gray-50/50 cursor-pointer transition-all duration-200"
                  >
                    <input
                      type="checkbox"
                      name="form_varianta"
                      value={option.value}
                      checked={formData.form_varianta.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 cursor-pointer rounded"
                    />
                    <span className="text-gray-700 font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Jaké řešíte problémy?
                <span className="text-red-500">*</span>
              </h3>
              <div className="space-y-3">
                {[
                  { value: "kondenzace", label: "Kondenzace" },
                  { value: "koroze", label: "Koroze" },
                  { value: "plisne", label: "Plísně" },
                  {
                    value: "tepelne-ztraty",
                    label: "Tepelné ztráty/nutnost chlazení",
                  },
                  { value: "izolace-domu", label: "Izolace domu" },
                  { value: "bezpecnost", label: "Bezpečnost provozu" },
                  { value: "zefektivneni", label: "Zefektivnění provozu" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[#0180ae]/30 hover:bg-gray-50/50 cursor-pointer transition-all duration-200"
                  >
                    <input
                      type="checkbox"
                      name="form_problem"
                      value={option.value}
                      checked={formData.form_problem.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 cursor-pointer rounded"
                    />
                    <span className="text-gray-700 font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Zpráva
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vaše zpráva <span className="text-red-500">*</span>
              </label>
              <textarea
                name="form_message"
                value={formData.form_message}
                onChange={handleInputChange}
                required
                rows={8}
                placeholder="Popište váš projekt a požadavky..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Odeslat žádost
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
