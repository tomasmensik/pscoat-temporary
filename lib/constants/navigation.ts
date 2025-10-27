import { TopItem } from "../types/navigation";

export const topNav: TopItem[] = [
  {
    label: "Co je PSCoat?",
    groups: [
      {
        title: "Informace o produktu",
        items: [
          {
            label: "Specifické vlastnosti",
            href: "/co-je-pscoat/vlastnosti",
            desc: "Klíčové vlastnosti PScoat",
          },
          {
            label: "Porovnání izolací",
            href: "/co-je-pscoat/porovnani",
            desc: "PScoat vs klasická izolace",
          },
        ],
      },
      {
        title: "Použití a aplikace",
        items: [
          {
            label: "Aplikace",
            href: "/co-je-pscoat/aplikace",
            desc: "Způsoby aplikace PScoat",
          },
          {
            label: "Použití",
            href: "/co-je-pscoat/pouziti",
            desc: "Možnosti využití PScoat",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Produkty",
    href: "/produkty",
    dropdown: false,
  },
  {
    label: "Reference",
    href: "/reference",
    dropdown: false,
  },
  {
    label: "O nás",
    groups: [
      {
        title: "Společnost",
        items: [
          {
            label: "Náš cíl",
            href: "/o-nas/cil",
            desc: "Naše poslání a vize",
          },
          {
            label: "Černá listina",
            href: "/o-nas/cerna-listina",
            desc: "Nevhodné aplikace",
          },
          {
            label: "Ocenění",
            href: "/o-nas/oceneni",
            desc: "Certifikace a uznání",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    dropdown: false,
  },
  {
    label: "Vypočítat úspory",
    href: "/vypocitat-uspory",
    dropdown: false,
  },
];
