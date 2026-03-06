// src/data/works.ts
import type { ImageMetadata } from "astro";

import pedido01 from "../assets/images/works/pedido/pedido-01-piezas-ii.png";
import pedido02 from "../assets/images/works/pedido/pedido-02-coincidir.png";
import pedido03 from "../assets/images/works/pedido/pedido-03-venado.png";

import venta01 from "../assets/images/works/venta/venta-01-sin-nombre-1.png";
import venta02 from "../assets/images/works/venta/venta-02-nos-tenemos.png";
import venta03 from "../assets/images/works/venta/venta-03-sin-nombre-2.png";
import venta04 from "../assets/images/works/venta/venta-04-alma-fuerte.png";
import venta05 from "../assets/images/works/venta/venta-05-tauro.png";
import venta06 from "../assets/images/works/venta/venta-06-eternity.png";
import venta07 from "../assets/images/works/venta/venta-07.png";
import venta08 from "../assets/images/works/venta/venta-08.png";
import venta09 from "../assets/images/works/venta/venta-09.png";

export type CollectionId = "venta" | "pedido";

export type WorkItem = {
  title: string;
  slug: string;
  image: ImageMetadata;
};

export const worksByCollection: Record<
  CollectionId,
  { heading: string; subheading: string; items: WorkItem[] }
> = {
  pedido: {
    heading: "TRABAJOS",
    subheading: "Esculturas bajo pedido",
    items: [
      { title: "Piezas II", slug: "piezas-ii", image: pedido01 },
      { title: "Coincidir", slug: "coincidir", image: pedido02 },
      { title: "Venado", slug: "venado", image: pedido03 },
    ],
  },

  venta: {
    heading: "TRABAJOS",
    subheading: "Esculturas en venta",
    items: [
      { title: "Sin nombre", slug: "sin-nombre-1", image: venta01 },
      { title: "Nos tenemos", slug: "nos-tenemos", image: venta02 },
      { title: "Sin nombre", slug: "sin-nombre-2", image: venta03 },
      { title: "Alma Fuerte", slug: "alma-fuerte", image: venta04 },
      { title: "Tauro", slug: "tauro", image: venta05 },
      { title: "Eternity", slug: "eternity", image: venta06 },
      { title: "Pieza 7", slug: "pieza-7", image: venta07 },
      { title: "Pieza 8", slug: "pieza-8", image: venta08 },
      { title: "Pieza 9", slug: "pieza-9", image: venta09 },
    ],
  },
};