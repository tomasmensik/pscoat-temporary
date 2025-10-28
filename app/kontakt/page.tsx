"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1.5);

  // Timeout for smooth tooltip transitions
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Function to get all offices for a specific country
  const getOfficesForCountry = (countryCode: string) => {
    return offices.filter((office) =>
      office.coordinates.some((coord) => coord.country === countryCode)
    );
  };

  // Smooth tooltip handlers
  const handleTooltipMouseEnter = (countryCode: string) => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
      setTooltipTimeout(null);
    }
    setHoveredCountry(countryCode);
  };

  const handleTooltipMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredCountry(null);
    }, 200); // 200ms delay before hiding
    setTooltipTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }
    };
  }, [tooltipTimeout]);

  // Function to get flag URL from Wikimedia Commons
  const getFlagUrl = (countryCode: string) => {
    const flagUrls: { [key: string]: string } = {
      CH: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/32px-Flag_of_Switzerland.svg.png",
      US: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_the_United_States.svg.png",
      CA: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/32px-Flag_of_Canada_%28Pantone%29.svg.png",
      AU: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/32px-Flag_of_Australia_%28converted%29.svg.png",
      INT: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/32px-Flag_of_the_United_Nations.svg.png",
      AE: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/32px-Flag_of_the_United_Arab_Emirates.svg.png",
      EU: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/32px-Flag_of_Europe.svg.png",
      CZ: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/32px-Flag_of_the_Czech_Republic.svg.png",
      PL: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/32px-Flag_of_Poland.svg.png",
      IT: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/32px-Flag_of_Italy.svg.png",
      SK: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/32px-Flag_of_Slovakia.svg.png",
      DE: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/32px-Flag_of_Germany.svg.png",
      MX: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/32px-Flag_of_Mexico.svg.png",
      BR: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/32px-Flag_of_Brazil.svg.png",
      TH: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/32px-Flag_of_Thailand.svg.png",
      VN: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/32px-Flag_of_Vietnam.svg.png",
      MM: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/32px-Flag_of_Myanmar.svg.png",
      PH: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/32px-Flag_of_the_Philippines.svg.png",
      IN: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/32px-Flag_of_India.svg.png",
      JE: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/32px-Flag_of_Jersey.svg.png",
      GG: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/32px-Flag_of_Guernsey.svg.png",
      GB: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/32px-Flag_of_the_United_Kingdom.svg.png",
      GR: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/32px-Flag_of_Greece.svg.png",
      EE: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/32px-Flag_of_Estonia.svg.png",
      LV: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/32px-Flag_of_Latvia.svg.png",
      LT: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/32px-Flag_of_Lithuania.svg.png",
      RO: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/32px-Flag_of_Romania.svg.png",
    };

    return (
      flagUrls[countryCode] ||
      `https://via.placeholder.com/32x20?text=${countryCode}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Country capitals coordinates
  const countryCapitals: { [key: string]: [number, number] } = {
    CH: [7.4474, 46.9481], // Bern, Švýcarsko
    US: [-77.0369, 38.9072], // Washington D.C., USA
    CA: [-75.6972, 45.4215], // Ottawa, Kanada
    AU: [149.13, -35.2809], // Canberra, Austrálie
    AE: [54.3773, 24.4539], // Abu Dhabi, UAE
    CZ: [14.4378, 50.0755], // Praha, Česká republika
    PL: [21.0122, 52.2297], // Varšava, Polsko
    IT: [12.4964, 41.9028], // Řím, Itálie
    SK: [17.1077, 48.1486], // Bratislava, Slovensko
    DE: [13.405, 52.52], // Berlín, Německo
    MX: [-99.1332, 19.4326], // Mexico City, Mexiko
    BR: [-47.8825, -15.7942], // Brasília, Brazílie
    TH: [100.5018, 13.7563], // Bangkok, Thajsko
    VN: [105.8542, 21.0285], // Hanoj, Vietnam
    MM: [96.1561, 16.8409], // Naypyidaw, Myanmar
    PH: [121.0244, 14.5995], // Manila, Filipíny
    IN: [77.1025, 28.7041], // Nové Dillí, Indie
    JE: [-2.1358, 49.1919], // Jersey
    GG: [-2.5358, 49.4484], // Guernsey
    GB: [-0.1276, 51.5074], // Londýn, Velká Británie
    GR: [23.7348, 37.9838], // Atény, Řecko
    EE: [24.7536, 59.437], // Tallinn, Estonsko
    LV: [24.1052, 56.9496], // Riga, Lotyšsko
    LT: [25.2797, 54.6872], // Vilnius, Litva
    RO: [26.1025, 44.4268], // Bukurešť, Rumunsko
  };

  // Office locations data
  const offices = [
    {
      name: "Švýcarsko, USA, Kanada a Austrálie",
      company: "ALPHA Construction SE",
      coordinates: [
        { coords: countryCapitals.CH, country: "CH" },
        { coords: countryCapitals.US, country: "US" },
        { coords: countryCapitals.CA, country: "CA" },
        { coords: countryCapitals.AU, country: "AU" },
      ],
      phone: "+420 730 811 611",
      email: "info@alphacag.ch",
      flags: [
        { code: "CH", name: "Švýcarsko" },
        { code: "US", name: "USA" },
        { code: "CA", name: "Kanada" },
        { code: "AU", name: "Austrálie" },
        { code: "INT", name: "Mezinárodní" },
      ],
    },
    {
      name: "UAE a EU",
      company: "PSCoat, s.r.o.",
      coordinates: [
        { coords: countryCapitals.AE, country: "AE" },
        { coords: countryCapitals.CZ, country: "CZ" }, // EU represented by Czech Republic
      ],
      address: "Hlubinská 1378/36, 702 00 Ostrava, Czech Republic",
      contacts: [
        {
          name: "Ing. Edita Körner, MBA",
          phone: "+420 777 633 665, +971 58 978 4198",
        },
        { name: "Pavel Horáček", phone: "+420 775 020 442, +971 52 239 7539" },
        {
          name: "Ing. Michal Olešovský",
          phone: "+420 774 334 308",
          email: "michal.olesovsky@pscoat.com",
        },
      ],
      flags: [
        { code: "AE", name: "UAE" },
        { code: "EU", name: "EU" },
      ],
    },
    {
      name: "Česká republika a EU",
      company: "RIVER POWER s.r.o.",
      coordinates: [{ coords: countryCapitals.CZ, country: "CZ" }],
      address: "Hlubinská 1378/36, 702 00 Ostrava, Česká Republika",
      phone: "+420 605 205 896, +48 459 569 002",
      email: "info@pscoat.com",
      flags: [
        { code: "CZ", name: "Česká republika" },
        { code: "EU", name: "EU" },
      ],
      note: "Výrobce",
    },
    {
      name: "Polsko",
      company: "PScoat Polska PSA",
      coordinates: [{ coords: countryCapitals.PL, country: "PL" }],
      address: "ul. Józefa Marcika, nr 6, 30-443 Krakov, Polsko",
      phone: "+48 571 352 064, +48 459 569 002",
      email: "krzysztof.kolaniak@pscoat.com, info@pscoat.com",
      flags: [
        { code: "PL", name: "Polsko" },
        { code: "EU", name: "EU" },
      ],
    },
    {
      name: "Itálie",
      company: "DomUnica SRL",
      coordinates: [{ coords: countryCapitals.IT, country: "IT" }],
      address: "Largo Ludovico Quaroni 35, 00163 Roma, Itálie",
      phone: "+39 3273019773",
      email: "info@domunica.it",
      flags: [{ code: "IT", name: "Itálie" }],
    },
    {
      name: "Česká republika, Slovensko a EU",
      company: "PSCTherm, s.r.o.",
      coordinates: [
        { coords: countryCapitals.CZ, country: "CZ" },
        { coords: countryCapitals.SK, country: "SK" },
      ],
      address: "ul. Březník 218, 675 74 Březník, Česká Republika",
      phone: "+420 602 690 695",
      email: "info@psctherm.cz",
      flags: [
        { code: "CZ", name: "Česká republika" },
        { code: "SK", name: "Slovensko" },
        { code: "EU", name: "EU" },
      ],
    },
    {
      name: "Slovensko",
      company: "Winfair, Ltd.",
      coordinates: [{ coords: countryCapitals.SK, country: "SK" }],
      address: "Cernysevskeho 12, 851 01 Bratislava, Slovensko",
      contact: "Karol Klaurinec",
      phone: "+421 911 741 911, +66 6 1221 0885",
      email: "klaurinec@winfair.eu",
      flags: [{ code: "SK", name: "Slovensko" }],
    },
    {
      name: "Německo, Švýcarsko a EU",
      company: "AZ Hochbau GmbH",
      coordinates: [
        { coords: countryCapitals.DE, country: "DE" },
        { coords: countryCapitals.CH, country: "CH" },
      ],
      address: "D-42389 Wuppertal, Německo",
      phone: "+49 1577 878 0 878",
      email: "kontakt@azrealestate.de",
      flags: [
        { code: "DE", name: "Německo" },
        { code: "CH", name: "Švýcarsko" },
        { code: "EU", name: "EU" },
      ],
    },
    {
      name: "Mexico, Brazílie a Jižní Amerika",
      company: "BORTOLUSSI SECURITY PRIVATE, S. A. DE. C. V.",
      coordinates: [
        { coords: countryCapitals.MX, country: "MX" },
        { coords: countryCapitals.BR, country: "BR" },
      ],
      address:
        "Hacienda de Xalpa No. 35, Colonia Bosques de Echegaray, Naucalpan de Juárez, 53310, Estado de México",
      phone: "(+52) 55 21666696, (+52) 55 21666675, 551-850-0505",
      email: "enver@bortolussi.org",
      flags: [
        { code: "MX", name: "Mexiko" },
        { code: "BR", name: "Brazílie" },
      ],
      note: "Fundada en 1985",
    },
    {
      name: "Thajsko, Vietnam, Myanmar, Filipíny",
      company: "Winfair Asia Co.,Ltd",
      coordinates: [
        { coords: countryCapitals.TH, country: "TH" },
        { coords: countryCapitals.VN, country: "VN" },
        { coords: countryCapitals.MM, country: "MM" },
        { coords: countryCapitals.PH, country: "PH" },
      ],
      address: "46/352 Soi Pracha Uthit, Don mueng, Bangkok 10210, Thajsko",
      phone: "+66 61 221 0885",
      email: "phanida@winfairasia.com, klaurinec@winfair.eu",
      flags: [
        { code: "TH", name: "Thajsko" },
        { code: "VN", name: "Vietnam" },
        { code: "MM", name: "Myanmar" },
        { code: "PH", name: "Filipíny" },
      ],
      note: "Line ID: @winfairasia",
    },
    {
      name: "Indie",
      company: "Macropact Exim Pvt Ltd",
      coordinates: [{ coords: countryCapitals.IN, country: "IN" }],
      address:
        "7/b Pendson Bunglow, B/h Alpana Cinema Pratapnagar Road, Vadodara, 390004 Gujarat, Indie",
      contact: "Mohit Shrivastav",
      phone: "+919824042167",
      email: "macropactexim@gmail.com",
      flags: [{ code: "IN", name: "Indie" }],
    },
    {
      name: "Jersey / Guernsey / United Kingdom",
      company: "Prestige Therm Solutions LTD",
      coordinates: [
        { coords: countryCapitals.JE, country: "JE" },
        { coords: countryCapitals.GG, country: "GG" },
        { coords: countryCapitals.GB, country: "GB" },
      ],
      address: "St. Helier, Jersey",
      contact: "Krzysztof (Chris) Kolaniak",
      phone: "+44 7700 870696, +48 571 352 064",
      email: "chris@prestigets.co.uk",
      flags: [
        { code: "JE", name: "Jersey" },
        { code: "GG", name: "Guernsey" },
        { code: "GB", name: "Velká Británie" },
      ],
    },
    {
      name: "Polsko a Řecko",
      company: "4 ECO Sp. z o.o.",
      coordinates: [
        { coords: countryCapitals.PL, country: "PL" },
        { coords: countryCapitals.GR, country: "GR" },
      ],
      address: "25-506 Kielce, pl. Niepodległości 1, Polsko",
      phone: "+48 533 012 231 (klapka 6)",
      email: "seweryn.kolodziej@4-eco.pl",
      flags: [
        { code: "PL", name: "Polsko" },
        { code: "GR", name: "Řecko" },
      ],
    },
    {
      name: "Polsko",
      company: "ATM Mirosław Adamek",
      coordinates: [{ coords: countryCapitals.PL, country: "PL" }],
      address: "ul. Łyżwiarzy 23, 86-032 Niemcz, Polsko",
      contact: "Mirosław Adamek",
      phone: "+48 693 346 030",
      email: "mirek.adamek@pscoat.com",
      flags: [{ code: "PL", name: "Polsko" }],
    },
    {
      name: "Německo",
      company: "PRIMAPOL GmbH",
      coordinates: [{ coords: countryCapitals.DE, country: "DE" }],
      address: "Haynauer Str. 65-67, 12249 Berlin",
      contact: "Maciej Pyć",
      phone: "+49 (0) 15204646853",
      email: "primapol@gmx.de",
      flags: [{ code: "DE", name: "Německo" }],
    },
    {
      name: "Polsko a EU",
      company: 'FHU "MN" MAREK NIEMCZYK',
      coordinates: [{ coords: countryCapitals.PL, country: "PL" }],
      address: "ul. Jakuba Glasnera 28, 43-300 Bielsko-Biała, Polsko",
      phone: "+48 501 628 935",
      email: "marek.niemczyk@pscoat.com",
      flags: [
        { code: "PL", name: "Polsko" },
        { code: "EU", name: "EU" },
      ],
    },
    {
      name: "Pobaltské státy",
      company: "PScoat Baltic",
      coordinates: [
        { coords: countryCapitals.EE, country: "EE" },
        { coords: countryCapitals.LV, country: "LV" },
        { coords: countryCapitals.LT, country: "LT" },
      ],
      address: "LV-1010 Riga, Lotyšsko",
      phone: "+48 693 346 030",
      email: "a.stelbe69@gmail.com, info@alphacag.ch",
      flags: [
        { code: "EE", name: "Estonsko" },
        { code: "LV", name: "Lotyšsko" },
        { code: "LT", name: "Litva" },
      ],
    },
    {
      name: "Rumunsko",
      company: "Ioanas Vasile",
      coordinates: [{ coords: countryCapitals.RO, country: "RO" }],
      address: "Str. Pelicanului, nr.5, 500461-Brasov, Rumunsko",
      phone: "+40 755 394 046",
      email: "vasile.ioanas@pscoat.com",
      flags: [{ code: "RO", name: "Rumunsko" }],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mt-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed">
              <strong>Spojte se s námi</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Máte dotaz nebo zájem o naše produkty? Rádi vám zodpovíme všechny
              otázky a pomůžeme najít nejvhodnější řešení pro váš projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Napište nám
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 flex-1 flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Jméno <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Příjmení <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Zpráva <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Vaše zpráva..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 outline-none transition-all duration-300 resize-none"
                />
              </div>

              <div className="pt-4 mt-auto">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col h-full gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktní informace
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600">info@pscoat.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+420 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adresa</h3>
                    <p className="text-gray-600">Praha, Česká republika</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Potřebujete rychlou nabídku?
              </h2>
              <p className="text-gray-600 mb-6">
                Využijte náš specializovaný formulář pro žádost o nabídku a
                získejte individuální cenovou kalkulaci.
              </p>
              <a
                href="/pozadat-o-nabidku"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Požádat o nabídku
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="bg-gradient-to-b from-white to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše pobočky po celém světě
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PScoat má zastoupení na všech kontinentech. Najděte svou nejbližší
              pobočku.
            </p>
          </div>

          {/* World Map */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16 relative">
            <div className="w-full h-96">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 180,
                  center: [0, 75],
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <ZoomableGroup
                  zoom={1.5}
                  onMoveEnd={({ zoom }) => setZoomLevel(zoom)}
                >
                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#f3f4f6"
                          stroke="#e5e7eb"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: "#d1d5db" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {offices.flatMap((office, officeIndex) =>
                    office.coordinates.map((coord, coordIndex) => {
                      const isCountryHovered = hoveredCountry === coord.country;
                      const baseRadius = isCountryHovered ? 10 : 6;
                      const adjustedRadius = Math.max(
                        2,
                        baseRadius / Math.sqrt(zoomLevel)
                      );

                      return (
                        <Marker
                          key={`${officeIndex}-${coordIndex}`}
                          coordinates={coord.coords}
                        >
                          <circle
                            r={adjustedRadius}
                            fill={isCountryHovered ? "#00a4d6" : "#0180ae"}
                            stroke="#fff"
                            strokeWidth={Math.max(1, 2 / Math.sqrt(zoomLevel))}
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() =>
                              handleTooltipMouseEnter(coord.country)
                            }
                            onMouseLeave={handleTooltipMouseLeave}
                          />
                        </Marker>
                      );
                    })
                  )}
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* Hover Tooltip */}
            {hoveredCountry !== null && (
              <div
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200 max-w-lg z-10 animate-in fade-in duration-200"
                onMouseEnter={() => handleTooltipMouseEnter(hoveredCountry)}
                onMouseLeave={handleTooltipMouseLeave}
              >
                {(() => {
                  const countryOffices = getOfficesForCountry(hoveredCountry);
                  const countryName =
                    countryOffices[0]?.flags.find(
                      (f) => f.code === hoveredCountry
                    )?.name || hoveredCountry;

                  return (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={getFlagUrl(hoveredCountry)}
                          alt={countryName}
                          className="w-8 h-5 object-cover rounded-sm border border-gray-200"
                        />
                        <h3 className="font-bold text-gray-900 text-base">
                          {countryName}
                        </h3>
                        <span className="text-gray-500 text-sm">
                          ({countryOffices.length}{" "}
                          {countryOffices.length === 1 ? "pobočka" : "pobočky"})
                        </span>
                      </div>

                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {countryOffices.map((office, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                          >
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">
                              {office.company}
                            </h4>

                            <p className="text-[#0180ae] text-xs mb-2">
                              {office.name}
                            </p>

                            {office.address && (
                              <p className="text-gray-600 text-xs mb-1 leading-relaxed">
                                📍 {office.address}
                              </p>
                            )}

                            {office.phone && (
                              <p className="text-gray-600 text-xs mb-1">
                                📞 {office.phone}
                              </p>
                            )}

                            {office.email && (
                              <p className="text-gray-600 text-xs mb-1">
                                ✉️ {office.email}
                              </p>
                            )}

                            {office.contact && (
                              <p className="text-gray-600 text-xs">
                                👤 {office.contact}
                              </p>
                            )}

                            {office.contacts && office.contacts.length > 0 && (
                              <div className="mt-1">
                                {office.contacts
                                  .slice(0, 2)
                                  .map((contact, contactIndex) => (
                                    <p
                                      key={contactIndex}
                                      className="text-gray-600 text-xs"
                                    >
                                      👤 {contact.name} - {contact.phone}
                                    </p>
                                  ))}
                              </div>
                            )}

                            {office.note && (
                              <p className="text-gray-500 text-xs italic mt-1">
                                {office.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Flags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {office.flags.map((flag, flagIndex) => (
                    <img
                      key={flagIndex}
                      src={getFlagUrl(flag.code)}
                      alt={flag.name}
                      title={flag.name}
                      className="w-8 h-6 object-cover rounded border border-gray-200"
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {office.name}
                </h3>

                {/* Company */}
                <p className="text-[#0180ae] font-semibold mb-3">
                  {office.company}
                </p>

                {/* Address */}
                {office.address && (
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {office.address}
                  </p>
                )}

                {/* Note */}
                {office.note && (
                  <p className="text-gray-500 text-sm italic mb-3">
                    {office.note}
                  </p>
                )}

                {/* Contacts */}
                {office.contacts ? (
                  <div className="space-y-3">
                    {office.contacts.map((contact, contactIndex) => (
                      <div
                        key={contactIndex}
                        className="border-l-2 border-[#0180ae] pl-3"
                      >
                        <p className="font-medium text-gray-900 text-sm">
                          {contact.name}
                        </p>
                        <p className="text-gray-600 text-sm">{contact.phone}</p>
                        {contact.email && (
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-[#0180ae] hover:underline text-sm"
                          >
                            {contact.email}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {/* Contact Person */}
                    {office.contact && (
                      <p className="font-medium text-gray-900 text-sm">
                        {office.contact}
                      </p>
                    )}

                    {/* Phone */}
                    {office.phone && (
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    )}

                    {/* Email */}
                    {office.email && (
                      <div className="space-y-1">
                        {office.email.split(", ").map((email, emailIndex) => (
                          <a
                            key={emailIndex}
                            href={`mailto:${email.trim()}`}
                            className="block text-[#0180ae] hover:underline text-sm"
                          >
                            {email.trim()}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
