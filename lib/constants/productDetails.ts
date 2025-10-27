export interface ProductDetail {
  id: string;
  produkt: string;
  typ_produktu: string;
  description: string;
  vlastnosti: string[];
  pouziti: string;
  category: "stavebnictvi" | "prumysl" | "verejny-sektor";
  paperImage?: string;
  images?: string[];
}

export const productDetails: ProductDetail[] = [
  {
    id: "psc-250t-ecb-basic-b",
    produkt: "ECB BASIC B",
    typ_produktu: "Základní nátěr",
    description:
      "ECB BASIC B je vysoce penetračně adhezní, energeticky úsporný a flexibilní základní nátěr. Je netoxický, přátelský pro životní prostředí a vytváří membránu. Po nanesení vytvoří příjemný matný sádrový povrch.",
    vlastnosti: [
      "Vysoce penetračně adhezní",
      "Energeticky úsporný",
      "Flexibilní",
      "Netoxický",
      "Přátelský pro životní prostředí",
      "Vytváří membránu",
      "Po nanesení vytvoří příjemný matný sádrový povrch",
    ],
    pouziti:
      "Jako základní penetračně adhezní nátěr pro nanášení hlavní vrstvy BUILD, ECI INTERIOR, BS INSIDE, ECO OUTSIDE, ECF FLOOR, BS FLOOR, ECE ELASTIC",
    category: "stavebnictvi",
    paperImage: "/product/psc-250t-ecb-basic-b-paper.jpg",
    images: [
      "/product/psc-250t-ecb-basic-b.jpg",
      "/product/psc-250t-ecb-basic-b-paper.jpg",
    ],
  },
  {
    id: "psc-250t-eci-interior",
    produkt: "ECI INTERIOR",
    typ_produktu: "Dekorativní ochranný nátěr",
    description:
      "ECI INTERIOR je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na vnitřní stěny obytných a kancelářských budov. Je odolný vůči nečistotám a odolává plísním. Je navržený jako vnitřní izolace pro zvýšení efektu odrazivosti energie od izolovaného povrchu směrem zpět do místnosti.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Odolný vůči nečistotám",
      "Odolává plísním",
      "Navržený jako vnitřní izolace",
      "Vodou ředitelná barva na bázi akrylátové pryskyřice",
      "Vynikající izolační vlastnosti",
      "Netoxický a šetrný k životnímu prostředí",
      "Vytváří membránu, která pokrývá mikrotrhliny",
      "Vhodný pro klimatické podmínky s vysokými energetickými náklady",
      "Vynikající odolnost proti kondenzaci",
      "Možnost barevných variant RAL",
    ],
    pouziti: "Vnitřní stěny obytných a kancelářských budov",
    category: "stavebnictvi",
    paperImage: "/product/psc-250t-eci-interior-paper.jpg",
    images: [
      "/product/psc-250t-eci-interior.jpg",
      "/product/psc-250t-eci-interior-paper.jpg",
    ],
  },
  {
    id: "psc-250t-build",
    produkt: "PSC 250T BUILD",
    typ_produktu: "Nátěr na izolaci venkovních stavebních konstrukcí",
    description:
      "PSC 250T BUILD je vysoce výkonný, energeticky úsporný a flexibilní nátěr na izolaci venkovních stavebních konstrukcí. Je netoxický, přátelský pro životní prostředí a vyplňující mikrotrhliny. Jedná se o paropropustný izolační nátěr, který zabraňuje vzniku plísní.",
    vlastnosti: [
      "Vysoce výkonný",
      "Energeticky úsporný",
      "Flexibilní",
      "Netoxický",
      "Přátelský pro životní prostředí",
      "Vyplňující mikrotrhliny",
      "Paropropustný izolační nátěr",
      "Zabraňuje vzniku plísní",
      "Funguje jako konduktivní izolačně reflexní vrstva",
      "Účinná ochrana proti pronikání mrazu nebo tepla",
      "Vysoká přilnavost pro všechny známé stavební materiály",
      "Ekologický a zdravotně nezávadný",
    ],
    pouziti: "Vnější stěny průmyslových a obytných budov",
    category: "stavebnictvi",
    paperImage: "/product/36-psc-250t-build-paper.jpg",
    images: [
      "/product/36-psc-250t-build.jpg",
      "/product/36-psc-250t-build-paper.jpg",
    ],
  },
  {
    id: "psc-250t-eco-outside",
    produkt: "ECO OUTSIDE",
    typ_produktu: "Dekorativní ochranný nátěr",
    description:
      "ECO OUTSIDE je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na fasádách obytných, průmyslových budov a jako nátěr střešních krytin z betonu, keramických materiálů nebo eternitu. Odolává atmosférickým vlivům, kyselým dešťům a ostatním standardním povětrnostním podmínkám.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Odolává atmosférickým vlivům",
      "Otěruvzdorný",
      "Paropropustný",
      "Zvýšená odolnost proti mechanickému poškození",
      "Možnost barevných variant RAL",
    ],
    pouziti:
      "Fasády obytných a průmyslových budov, nátěr střešních krytin z betonu, keramických materiálů nebo eternitu",
    category: "stavebnictvi",
    paperImage: "/product/38-psc-250t-eco-outside-paper.jpg",
    images: [
      "/product/38-psc-250t-eco-outside.jpg",
      "/product/38-psc-250t-eco-outside-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ecf-floor",
    produkt: "ECF FLOOR",
    typ_produktu: "Dekorativní ochranný nátěr pro podlahy",
    description:
      "ECF FLOOR je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na podlahy administrativních, průmyslových (lehký průmysl) a obytných podlah. Je plně omyvatelný a odolný vůči nečistotám a chemikáliím, odolává běžnému zatížení a provozu.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní nátěr",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Odolává běžnému zatížení",
      "Účinná ochrana proti pronikání mrazu nebo tepla",
      "Ekologický a zdravotně nezávadný",
      "Vynikající izolační vlastnosti",
      "Vhodný pro klimatické podmínky s vysokými energetickými náklady",
      "Vynikající odolnost proti kondenzaci",
      "Možnost barevných variant RAL",
    ],
    pouziti:
      "Podlahy administrativních, průmyslových (lehký průmysl) a obytných podlah",
    category: "stavebnictvi",
    paperImage: "/product/39-psc-250t-ecf-floor-paper.jpg",
    images: [
      "/product/39-psc-250t-ecf-floor.jpg",
      "/product/39-psc-250t-ecf-floor-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ece-elastic",
    produkt: "ECE ELASTIC",
    typ_produktu: "Dekorativní ochranný nátěr",
    description:
      "ECE ELASTIC je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na střešní krytiny nebo jiné stavební a konstrukční prvky z PVC, PC, PS, asfaltových pásů (IPA), plastických hmot, polykarbonátu, tvrzené PVC. Odolává atmosférickým vlivům a kyselým dešťům.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Odolává atmosférickým vlivům",
      "Elastomerické vlastnosti",
      "Otěruvzdorný",
      "Paropropustný",
      "Zvýšená odolnost proti mechanickému poškození",
      "Možnost barevných variant RAL",
    ],
    pouziti:
      "Střešní krytiny nebo jiné stavební a konstrukční prvky z PVC, PC, PS, asfaltových pásů",
    category: "stavebnictvi",
    paperImage: "/product/46-psc-250t-ece-elastic-paper.jpg",
    images: [
      "/product/46-psc-250t-ece-elastic.jpg",
      "/product/46-psc-250t-ece-elastic-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ecr-roof",
    produkt: "ECR ROOF",
    typ_produktu: "Vrchní reflexní nátěr",
    description:
      "ECR ROOF je flexibilní vrchní reflexní nátěr střešní ocelové krytiny a prvků střešní konstrukce se sklonem více jak 3% a jako krycí vrchní nátěr pro HP, HP+. Je netoxický a šetrný k životnímu prostředí.",
    vlastnosti: [
      "Flexibilní vrchní reflexní nátěr",
      "Netoxický",
      "Šetrný k životnímu prostředí",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Výborná ochranná a vizuální funkce",
      "Vysoce odolný proti atmosférickým vlivům",
      "Vynikající odolnost proti kondenzaci",
      "Vynikající odolnost proti chemickému prostředí",
      "Možnost barevných variant RAL",
    ],
    pouziti:
      "Střešní ocelové krytiny a prvky střešní konstrukce se sklonem více jak 3%",
    category: "stavebnictvi",
    paperImage: "/product/41-psc-250t-ecr-roof-paper.jpg",
    images: [
      "/product/41-psc-250t-ecr-roof.jpg",
      "/product/41-psc-250t-ecr-roof-paper.jpg",
    ],
  },

  // Průmysl
  {
    id: "psc-250t-ecb-basic-a",
    produkt: "ECB BASIC A",
    typ_produktu: "Základní nátěr",
    description:
      "ECB BASIC A je základní nátěr, který má vynikající odolnost proti korozi a kondenzaci vody. Aplikace je vhodná pro všechny povrchy z oceli, hliníku, nerezu, mědi, atd. Lze použít i přímo na zkorodovaný, ale stabilní povrch.",
    vlastnosti: [
      "Vynikající odolnost proti korozi",
      "Vynikající odolnost proti kondenzaci vody",
      "Vhodný pro ocel, hliník, nerez, měď",
      "Lze použít přímo na zkorodovaný (stabilní) povrch",
    ],
    pouziti:
      "Jako základní nátěr pro nanášení hlavní vrstvy PSC HP, HP+, EC, EC+, ECR ROOF, HP 600.",
    category: "prumysl",
    paperImage: "/product/22-psc-250t-ecb-basic-a-paper.jpg",
    images: [
      "/product/22-psc-250t-ecb-basic-a.jpg",
      "/product/22-psc-250t-ecb-basic-a-paper.jpg",
    ],
  },
  {
    id: "psc-250t-hp",
    produkt: "PSC 250T HP",
    typ_produktu: "Izolační a těsnící nátěr",
    description:
      "HP je vysoce účinný, energeticky úsporný a flexibilní nátěr pro izolaci a těsnění. Jedná se o nátěr s nejvyšším obsahem mikrosfér. Je netoxický, šetrný k životnímu prostředí a tvoří jednotnou membránu, která pokrývá mikrotrhliny. Má vynikající odolnost proti vzniku kondenzátu, chemickému prostředí (C4 a C5) a povětrnostním vlivům.",
    vlastnosti: [
      "Vysoce účinný",
      "Energeticky úsporný",
      "Flexibilní",
      "Nejvyšší obsah mikrosfér",
      "Netoxický, šetrný k životnímu prostředí",
      "Tvoří jednotnou membránu, pokrývá mikrotrhliny",
      "Vynikající odolnost proti kondenzátu",
      "Odolnost proti chemickému prostředí (C4 a C5)",
      "Vysoká přilnavost ke kovům",
      "Ekologický a zdravotně nezávadný",
    ],
    pouziti:
      "Všechny ocelové konstrukce. Izolace potrubí teplé a studené vody, klimatizačních systémů, střech, opláštění budov a hal, ploch, kde je třeba snížit povrchovou teplotu (kotle, parovody, aj.), zásobníky chemických produktů, nádrže na kapalný dusík, průmyslové mrazící přístroje, kontejnery, výměníky tepla, bojlery, rozvody klimatizace.",
    category: "prumysl",
    paperImage: "/product/42-psc-250t-hp-paper.jpg",
    images: [
      "/product/42-psc-250t-hp.jpg",
      "/product/42-psc-250t-hp-paper.jpg",
    ],
  },
  {
    id: "psc-250t-hp-plus",
    produkt: "PSC 250T HP+",
    typ_produktu: "Izolační a těsnící nátěr s antikorozními složkami",
    description:
      "HP+ je vysoce účinný, energeticky úsporný a flexibilní nátěr pro izolaci a těsnění s nejvyšším obsahem mikrosfér. Je netoxický, šetrný k životnímu prostředí a tvoří jednotnou membránu, která pokrývá mikrotrhliny. Obsahuje antikorozní složky, a proto může být použit i bez základního nátěru ECB BASIC A. Má vynikající odolnost proti vzniku kondenzátu, chemickému prostředí C4 a C5 a povětrnostním vlivům.",
    vlastnosti: [
      "Vysoce účinný",
      "Energeticky úsporný",
      "Flexibilní",
      "Nejvyšší obsah mikrosfér",
      "Netoxický, šetrný k životnímu prostředí",
      "Tvoří jednotnou membránu, pokrývá mikrotrhliny",
      "Obsahuje antikorozní složky (lze bez základu)",
      "Vynikající odolnost proti kondenzátu",
      "Odolnost proti chemickému prostředí (C4 a C5)",
      "Vysoká přilnavost ke kovům",
      "Ekologický a zdravotně nezávadný",
    ],
    pouziti:
      "Všechny ocelové konstrukce. Izolace potrubí teplé a studené vody, klimatizačních systémů, střech, opláštění budov a hal, ploch, kde je třeba snížit povrchovou teplotu (kotle, parovody, aj.), zásobníky chemických produktů, nádrže na kapalný dusík, průmyslové mrazící přístroje, kontejnery, výměníky tepla, bojlery, rozvody klimatizace.",
    category: "prumysl",
    paperImage: "/product/43-psc-250t-hp-paper.jpg",
    images: [
      "/product/43-psc-250t-hp.jpg",
      "/product/43-psc-250t-hp-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ec",
    produkt: "PSC 250T EC",
    typ_produktu: "Vrchní krycí nátěr",
    description:
      "PSC 250T EC je vrchní krycí nátěr pro PSC 250T HP ve venkovním nebo vnitřním prostředí. Je netoxický, šetrný k životnímu prostředí. Je plně omyvatelný a odolný vůči nečistotám a chemikáliím. Nátěr s výbornou ochrannou, reflexní a vizuální funkcí. Je vysoce odolný proti všem atmosférickým vlivům.",
    vlastnosti: [
      "Vrchní krycí nátěr pro PSC 250T HP",
      "Netoxický, šetrný k životnímu prostředí",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Výborná ochranná, reflexní a vizuální funkce",
      "Vysoce odolný proti atmosférickým vlivům",
      "Vynikající odolnost proti kondenzaci",
      "Vynikající odolnost proti chemickému prostředí (C4 a C5)",
      "Vysoká přilnavost ke kovům",
      "Ekologický a zdravotně nezávadný",
      "Možnost barevných variant RAL (verze COLOR)",
    ],
    pouziti:
      "Venkovní nebo vnitřní stěny konstrukcí jako vrchní nátěr pro PSC 250T HP.",
    category: "prumysl",
    paperImage: "/product/44-psc-250t-ec-paper.jpg",
    images: [
      "/product/44-psc-250t-ec.jpg",
      "/product/44-psc-250t-ec-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ec-plus",
    produkt: "PSC 250T EC+",
    typ_produktu: "Vrchní krycí reflexní nátěr s antikorozními složkami",
    description:
      "PSC 250T EC+ je vrchní krycí nátěr pro PSC 250T HP pro venkovním prostředí a zároveň může být použit jako vrchní krycí reflexní nátěr. Je netoxický, šetrný k životnímu prostředí. Nátěr je plně omyvatelný, odolný vůči nečistotám a chemikáliím. Má výbornou ochrannou, reflexní a vizuální funkcí. Obsahuje antikorozní složky a může být použit i bez základního nátěru ECB BASIC A.",
    vlastnosti: [
      "Vrchní krycí reflexní nátěr pro venkovní prostředí",
      "Netoxický, šetrný k životnímu prostředí",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Výborná ochranná, reflexní a vizuální funkce",
      "Vysoce odolný proti atmosférickým vlivům",
      "Obsahuje antikorozní složky (lze bez základu)",
      "Vynikající odolnost proti chemickému prostředí (C4 a C5)",
      "Vysoká přilnavost ke kovům",
      "Ekologický a zdravotně nezávadný",
      "Možnost barevných variant RAL (verze COLOR)",
    ],
    pouziti:
      "Vnější stěny konstrukcí jako vrchní nátěr pro PSC 250T HP. Lze použít jako samostatný vrchní krycí reflexní nátěr.",
    category: "prumysl",
    paperImage: "/product/44-psc-250t-ec-paper.jpg",
    images: [
      "/product/44-psc-250t-ec.jpg",
      "/product/44-psc-250t-ec-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ece-elastic-prumysl",
    produkt: "ECE ELASTIC",
    typ_produktu: "Dekorativní ochranný nátěr (Elastomer)",
    description:
      "ECE ELASTIC je vysoce účinný izolačně reflexní dekorativní ochranný nátěr. Díky svým elastomerním vlastnostem poskytuje vynikající ochranné a estetické vlastnosti. Odolává atmosférickým vlivům, kyselým dešťům a ostatním standardním povětrnostním podmínkám. Materiál neumožní prostup atmosférických vlivů.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Odolává atmosférickým vlivům a kyselým dešťům",
      "Elastomerní vlastnosti",
      "Zvýšená odolnost proti mechanickému poškození",
      "Otěruvzdorný a paropropustný",
      "Poskytuje vynikající ochranné a estetické vlastnosti",
      "Možnost barevných variant RAL (verze COLOR)",
    ],
    pouziti:
      "Střešní krytiny nebo jiné stavební a konstrukční prvky z PVC, PC, PS, asfaltových pásů (IPA), plastických hmot, polykarbonátu, tvrzené PVC, apod.",
    category: "prumysl",
    paperImage: "/product/46-psc-250t-ece-elastic-paper.jpg",
    images: [
      "/product/46-psc-250t-ece-elastic.jpg",
      "/product/46-psc-250t-ece-elastic-paper.jpg",
    ],
  },
  {
    id: "psc-250t-ecr-roof-prumysl",
    produkt: "ECR ROOF",
    typ_produktu: "Vrchní reflexní nátěr pro střechy",
    description:
      "ECR ROOF je flexibilní vrchní reflexní nátěr střešní ocelové krytiny a prvků střešní konstrukce se sklonem více jak 3%. Používá se i jako krycí vrchní nátěr pro HP, HP+. Je netoxický, šetrný k životnímu prostředí. Nátěr je plně omyvatelný a odolný vůči nečistotám a chemikáliím.",
    vlastnosti: [
      "Flexibilní vrchní reflexní nátěr",
      "Netoxický, šetrný k životnímu prostředí",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Výborná ochranná a vizuální funkce",
      "Vysoce odolný proti atmosférickým vlivům",
      "Vynikající odolnost proti kondenzaci",
      "Vynikající odolnost proti chemickému prostředí (C4 a C5)",
      "Možnost barevných variant RAL (verze COLOR)",
    ],
    pouziti:
      "Střešní ocelové krytiny a prvky střešní konstrukce se sklonem více jak 3%. Jako krycí vrchní nátěr pro HP, HP+.",
    category: "prumysl",
    paperImage: "/product/41-psc-250t-ecr-roof-paper.jpg",
    images: [
      "/product/41-psc-250t-ecr-roof.jpg",
      "/product/41-psc-250t-ecr-roof-paper.jpg",
    ],
  },

  // Veřejný sektor a zdravotnictví
  {
    id: "psc-250t-bs-floor",
    produkt: "BS FLOOR",
    typ_produktu: "Dekorativní ochranný nátěr pro podlahy",
    description:
      "BS FLOOR je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na podlahy veřejných budov, nemocnic, domovů pro seniory, školních zařízení. Je plně omyvatelný, odolný vůči nečistotám, chemikáliím a je bakteriostatický. Odolává běžnému zatížení v provozu. Je velmi účinný při izolaci podlah a poskytuje účinnou ochranu proti pronikání mrazu nebo tepla. Je ekologický a zdravotně nezávadný.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Plně omyvatelný",
      "Odolný vůči nečistotám a chemikáliím",
      "Bakteriostatický",
      "Odolává běžnému zatížení v provozu",
      "Účinná ochrana proti pronikání mrazu nebo tepla",
      "Ekologický a zdravotně nezávadný",
      "Vodou ředitelná barva na bázi akrylátové pryskyřice",
      "Vynikající izolační vlastnosti",
      "Netoxický, šetrný k životnímu prostředí",
      "Vytváří membránu, která pokrývá mikrotrhliny",
      "Vhodný pro použití v klimatických podmínkách s vysokými energetickými náklady",
      "Vynikající odolnost proti kondenzaci",
      "Možnost aplikace v barevných odstínech RAL",
    ],
    pouziti:
      "Podlahy veřejných budov, nemocnic, domovů pro seniory, školních zařízení",
    category: "verejny-sektor",
    paperImage: "/product/21-psc-250t-bs-floor-paper.jpg",
    images: [
      "/product/21-psc-250t-bs-floor.jpg",
      "/product/21-psc-250t-bs-floor-paper.jpg",
    ],
  },
  {
    id: "psc-250t-bs-inside",
    produkt: "BS INSIDE",
    typ_produktu: "Dekorativní ochranný nátěr pro vnitřní stěny",
    description:
      "BS INSIDE je vysoce účinný izolačně reflexní dekorativní ochranný nátěr pro použití na vnitřní stěny veřejných budov, nemocnic, domovů pro seniory, školních zařízení. Je odolný vůči nečistotám, plísním a je rovněž bakteriostatický. Je navržen jako vnitřní izolace pro zvýšení efektu odrazivosti energie od izolovaného povrchu zpět do místnosti.",
    vlastnosti: [
      "Vysoce účinný izolačně reflexní dekorativní ochranný nátěr",
      "Odolný vůči nečistotám",
      "Odolný vůči plísním",
      "Bakteriostatický",
      "Navržen jako vnitřní izolace pro odrazivost energie",
      "Vodou ředitelná barva na bázi akrylátové pryskyřice",
      "Vynikající izolační vlastnosti",
      "Netoxický, šetrný k životnímu prostředí",
      "Vytváří membránu, která pokrývá mikrotrhliny",
      "Vhodný pro použití v klimatických podmínkách s vysokými energetickými náklady",
      "Vynikající odolnost proti kondenzaci",
      "Možnost aplikace v barevných odstínech RAL",
    ],
    pouziti:
      "Vnitřní stěny veřejných budov, nemocnic, domovů pro seniory, školních zařízení",
    category: "verejny-sektor",
    paperImage: "/product/48-psc-250t-bs-inside-paper.jpg",
    images: [
      "/product/48-psc-250t-bs-inside.jpg",
      "/product/48-psc-250t-bs-inside-paper.jpg",
    ],
  },
];

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails.find((p) => p.id === id);
}
