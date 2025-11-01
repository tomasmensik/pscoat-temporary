export interface OfficeCoordinate {
  coords: [number, number];
  country: string;
}

export interface OfficeContact {
  name: string;
  phone: string;
  email?: string;
}

export interface OfficeFlag {
  code: string;
  name: string;
}

export interface Office {
  name: string;
  company: string;
  coordinates: OfficeCoordinate[];
  phone?: string;
  email?: string;
  address?: string;
  contact?: string;
  contacts?: OfficeContact[];
  flags: OfficeFlag[];
  note?: string;
}

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

export const offices: Office[] = [
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
      { coords: countryCapitals.CZ, country: "CZ" },
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

export const getFlagUrl = (countryCode: string): string => {
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

