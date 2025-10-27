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
];

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails.find((p) => p.id === id);
}
