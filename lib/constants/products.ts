export interface Product {
  id: string;
  name: string;
  image: string;
  category: "stavebnictvi" | "prumysl" | "verejny-sektor";
  hasColorVariant?: boolean;
}

export const products: Product[] = [
  // Stavebnictví
  {
    id: "psc-250t-ecb-basic-b",
    name: "PSC 250T ECB BASIC B",
    image: "/product/psc-250t-ecb-basic-b.jpg",
    category: "stavebnictvi",
  },
  {
    id: "psc-250t-eci-interior",
    name: "PSC 250T ECI INTERIOR",
    image: "/product/psc-250t-eci-interior.jpg",
    category: "stavebnictvi",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-build",
    name: "PSC 250T BUILD",
    image: "/product/36-psc-250t-build.jpg",
    category: "stavebnictvi",
  },
  {
    id: "psc-250t-eco-outside",
    name: "PSC 250T ECO OUTSIDE",
    image: "/product/38-psc-250t-eco-outside.jpg",
    category: "stavebnictvi",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ecf-floor",
    name: "PSC 250T ECF FLOOR",
    image: "/product/39-psc-250t-ecf-floor.jpg",
    category: "stavebnictvi",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ece-elastic",
    name: "PSC 250T ECE ELASTIC",
    image: "/product/46-psc-250t-ece-elastic.jpg",
    category: "stavebnictvi",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ecr-roof",
    name: "PSC 250T ECR ROOF",
    image: "/product/41-psc-250t-ecr-roof.jpg",
    category: "stavebnictvi",
    hasColorVariant: true,
  },

  // Průmysl
  {
    id: "psc-250t-ecb-basic-a",
    name: "PSC 250T ECB BASIC A",
    image: "/product/22-psc-250t-ecb-basic-a.jpg",
    category: "prumysl",
  },
  {
    id: "psc-250t-hp",
    name: "PSC 250T HP",
    image: "/product/42-psc-250t-hp.jpg",
    category: "prumysl",
  },
  {
    id: "psc-250t-hp-plus",
    name: "PSC 250T HP +",
    image: "/product/43-psc-250t-hp.jpg",
    category: "prumysl",
  },
  {
    id: "psc-250t-ec",
    name: "PSC 250T EC",
    image: "/product/44-psc-250t-ec.jpg",
    category: "prumysl",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ec-plus",
    name: "PSC 250T EC +",
    image: "/product/44-psc-250t-ec.jpg",
    category: "prumysl",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ece-elastic-prumysl",
    name: "PSC 250T ECE ELASTIC",
    image: "/product/46-psc-250t-ece-elastic.jpg",
    category: "prumysl",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-ecr-roof-prumysl",
    name: "PSC 250T ECR ROOF",
    image: "/product/41-psc-250t-ecr-roof.jpg",
    category: "prumysl",
    hasColorVariant: true,
  },

  // Veřejný sektor
  {
    id: "psc-250t-bs-floor",
    name: "PSC 250T BS FLOOR",
    image: "/product/21-psc-250t-bs-floor.jpg",
    category: "verejny-sektor",
    hasColorVariant: true,
  },
  {
    id: "psc-250t-bs-inside",
    name: "PSC 250T BS INSIDE",
    image: "/product/48-psc-250t-bs-inside.jpg",
    category: "verejny-sektor",
    hasColorVariant: true,
  },
];

export const categories = {
  stavebnictvi: {
    name: "Stavebnictví",
    description: "Izolace pro stavební průmysl",
  },
  prumysl: {
    name: "Průmysl",
    description: "Průmyslové aplikace",
  },
  "verejny-sektor": {
    name: "Veřejný sektor a zdravotnictví",
    description: "Zdravotnictví a veřejné budovy",
  },
};
