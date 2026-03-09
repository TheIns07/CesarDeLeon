import type { ImageMetadata } from "astro";

/* =========================
   PECES
========================= */
import peces1 from "../assets/images/works/1Peces/PECES1.webp";
import peces2 from "../assets/images/works/1Peces/PECES2.webp";
import peces3 from "../assets/images/works/1Peces/PECES3jpg.webp";
import peces4 from "../assets/images/works/1Peces/PECES4.webp";
import peces5 from "../assets/images/works/1Peces/PECES5.webp";

/* =========================
   COINCIDIR
========================= */
import coincidir1 from "../assets/images/works/2ParejaAbraza/COINCIDIR1.webp";
import coincidir2 from "../assets/images/works/2ParejaAbraza/COINCIDIR2.webp";
import coincidir3 from "../assets/images/works/2ParejaAbraza/COINCIDIR3.webp";
import coincidir4 from "../assets/images/works/2ParejaAbraza/COINCIDIR4.webp";

/* =========================
   VENADO
========================= */
import venado1 from "../assets/images/works/3Venado/VENADO1.webp";
import venado2 from "../assets/images/works/3Venado/VENADO2.webp";
import venado3 from "../assets/images/works/3Venado/VENADO3jpg.webp";
import venado4 from "../assets/images/works/3Venado/VENADO4jpg.webp";

/* =========================
   ALMA FUERTE
========================= */
import almaF1 from "../assets/images/works/4PersonaPunto/ALMAF1.webp";
import almaF4 from "../assets/images/works/4PersonaPunto/ALMAF4.webp";
import almaF5 from "../assets/images/works/4PersonaPunto/ALMAF5.webp";

/* =========================
   REFLEXIÓN
========================= */
import reflexion1 from "../assets/images/works/5Chiquita/REFLEXION1.webp";
import reflexion2 from "../assets/images/works/5Chiquita/REFLEXION2.webp";
import reflexion3 from "../assets/images/works/5Chiquita/REFLEXION3.webp";

/* =========================
   ETERNITY
========================= */
import eternity1 from "../assets/images/works/6Pareja2/ETERNITY1.webp";
import eternity2 from "../assets/images/works/6Pareja2/ETERNITY2.webp";
import eternity3 from "../assets/images/works/6Pareja2/ETERNITY3.webp";

/* =========================
   FASES
========================= */
import fases1 from "../assets/images/works/7CarasByn/FASES1.webp";
import fases2 from "../assets/images/works/7CarasByn/FASES2.webp";
import fases3 from "../assets/images/works/7CarasByn/FASES3.webp";

/* =========================
   CÉNIT
========================= */
import cenit0 from "../assets/images/works/8Oreja/cenit.webp";
import cenit1 from "../assets/images/works/8Oreja/cenit1.webp";
import cenit2 from "../assets/images/works/8Oreja/cenit2.webp";
import cenit3 from "../assets/images/works/8Oreja/cenit3.webp";

/* =========================
   TAURO
========================= */
import tauro1 from "../assets/images/works/9toro/TAURO1.webp";
import tauro2 from "../assets/images/works/9toro/TAURO2.webp";
import tauro3 from "../assets/images/works/9toro/TAURO3.webp";
import tauro4 from "../assets/images/works/9toro/TAURO4.webp";

export type ProductSpec = {
    label: string;
    value: string;
};

export type Product = {
    title: string;
    slug: string;
    collection: "venta" | "pedido";
    cover: ImageMetadata;
    images: ImageMetadata[];
    subtitle?: string;
    price?: string;
    currency?: string;
    specs?: ProductSpec[];
    interestHref?: string;
};

export const products: Product[] = [
    {
        title: "Peces",
        slug: "peces",
        collection: "pedido",
        cover: peces1,
        images: [peces1, peces2, peces3, peces4, peces5],
        subtitle: "Composición orgánica inspirada en el movimiento y la armonía marina.",
        price: "7,800.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "45 x 18 x 10 cm" },
            { label: "Base", value: "20 x 10 x 4 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Coincidir",
        slug: "coincidir",
        collection: "pedido",
        cover: coincidir1,
        images: [coincidir1, coincidir2, coincidir3, coincidir4],
        subtitle: "Fusión de hombre y mujer en un abrazo eterno.",
        price: "8,600.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "50 x 10 x 6 cm" },
            { label: "Base", value: "18 x 10 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Venado",
        slug: "venado",
        collection: "pedido",
        cover: venado1,
        images: [venado1, venado2, venado3, venado4],
        subtitle: "Figura estilizada que evoca fuerza, naturaleza y contemplación.",
        price: "9,200.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "60 x 20 x 12 cm" },
            { label: "Base", value: "22 x 12 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Alma Fuerte",
        slug: "alma-fuerte",
        collection: "venta",
        cover: almaF1,
        images: [almaF1, almaF4, almaF5],
        subtitle: "Presencia vertical y serena que simboliza temple interior.",
        price: "8,900.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "52 x 11 x 8 cm" },
            { label: "Base", value: "18 x 10 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Reflexión",
        slug: "reflexion",
        collection: "venta",
        cover: reflexion1,
        images: [reflexion1, reflexion2, reflexion3],
        subtitle: "Pieza introspectiva que sugiere silencio, pausa y pensamiento.",
        price: "7,500.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "38 x 14 x 10 cm" },
            { label: "Base", value: "16 x 10 x 4 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Eternity",
        slug: "eternity",
        collection: "venta",
        cover: eternity1,
        images: [eternity1, eternity2, eternity3],
        subtitle: "Encuentro de dos formas en una composición de unión permanente.",
        price: "8,400.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "46 x 16 x 9 cm" },
            { label: "Base", value: "18 x 10 x 4 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Fases",
        slug: "fases",
        collection: "venta",
        cover: fases1,
        images: [fases1, fases2, fases3],
        subtitle: "Serie escultórica sobre transformación, identidad y tiempo.",
        price: "8,100.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "44 x 18 x 9 cm" },
            { label: "Base", value: "18 x 10 x 4 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Cénit",
        slug: "cenit",
        collection: "venta",
        cover: cenit0,
        images: [cenit0, cenit1, cenit2, cenit3],
        subtitle: "Pieza de tensión ascendente que sugiere culminación y equilibrio.",
        price: "8,300.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "48 x 15 x 8 cm" },
            { label: "Base", value: "18 x 10 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Tauro",
        slug: "tauro",
        collection: "venta",
        cover: tauro1,
        images: [tauro1, tauro2, tauro3, tauro4],
        subtitle: "Figura de carácter sólido y expresivo inspirada en la fuerza terrenal.",
        price: "9,600.00",
        currency: "MXN",
        specs: [
            { label: "Material", value: "Polvo de mármol y resina de poliéster" },
            { label: "Dimensiones", value: "40 x 24 x 14 cm" },
            { label: "Base", value: "20 x 12 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
];

export const productsBySlug = Object.fromEntries(
    products.map((product) => [product.slug, product]),
) as Record<string, Product>;