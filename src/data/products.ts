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
   Reflección
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
        title: "Peces III",
        slug: "peces",
        collection: "pedido",
        cover: peces1,
        images: [peces1, peces2, peces3, peces4, peces5],
        subtitle: "Evocación de la sincronía en el nado de los peces, donde la forma se integra como parte esencial de la obra.",
        price: "9,600.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "64cm x 30cm x 12cm" },
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
        subtitle: "Expresa la fusión de lo masculino y lo femenino en un abrazo eterno que simboliza unión y equilibrio.",
        price: "8,600.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "50cm x 10cm x 6cm" },
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
        subtitle: "Representación de un venado construida a partir de formas simples y suaves, donde los vacíos se integran como parte esencial del conjunto.",
        price: "8,600.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "67cm x 30cm x 4cm" },
            { label: "Base", value: "24 x 12 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Alma Fuerte",
        slug: "alma-fuerte",
        collection: "venta",
        cover: almaF1,
        images: [almaF1, almaF4, almaF5],
        subtitle: "Inspirada en la poesía “Piu Avanti” de Pedro Bonifaz, que evoca la perseverancia y la fortaleza interior frente a la adversidad.",
        price: "8,400.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "80cm x 12cm x 15cm" },
            { label: "Base", value: "20 x 10 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Reflección",
        slug: "reflexion",
        collection: "venta",
        cover: reflexion1,
        images: [reflexion1, reflexion2, reflexion3],
        subtitle: "Inspirada en la portada de la revista Time, que representa a un joven sentado sobre un risco contemplando la deforestación del Amazonas, evocando una reflexión sobre la fragilidad del entorno natural y el impacto humano.",
        price: "3,400.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "18cm x 12cm x 12cm" },
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
        subtitle: "Representación de una pareja unida para siempre, evocando compromiso, conexión y permanencia.",
        price: "7,300.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "65cm x 17cm x 3cm" },
            { label: "Base", value: "22 x 10 x 4 cm" },
        ],
        interestHref: "/contacto",
    },
    {
        title: "Faces",
        slug: "fases",
        collection: "venta",
        cover: fases1,
        images: [fases1, fases2, fases3],
        subtitle: "Representa la dualidad del ser, explorando el equilibrio entre opuestos a través de su forma.",
        price: "7,400.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "50cm x 25cm x 5cm" },
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
        subtitle: "La pieza se define por una forma que permite el paso de una luz cenital, la cual envuelve sutilmente y resalta lo más preciado.",
        price: "8,600.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "44cm x 25cm x 5cm" },
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
        subtitle: "Representación de un toro construida a partir de formas simples y suaves, donde los vacíos se integran como parte esencial de la composición.",
        price: "8,600.00",
        currency: "MXN",
        specs: [
            { label: "Materiales", value: "Polvo de mármol y Resina de poliéster" },
            { label: "Dimensiones", value: "43cm x 32cm x 8cm" },
            { label: "Base", value: "20 x 12 x 5 cm" },
        ],
        interestHref: "/contacto",
    },
];

export const productsBySlug = Object.fromEntries(
    products.map((product) => [product.slug, product]),
) as Record<string, Product>;