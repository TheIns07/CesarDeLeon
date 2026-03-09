import type { ImageMetadata } from "astro";

// Placeholders actuales de César
import pecesCover from "../assets/images/works/1Peces/PECES1.webp";
import coincidirCover from "../assets/images/works/2ParejaAbraza/COINCIDIR1.webp";
import venadoCover from "../assets/images/works/3Venado/VENADO1.webp";

// Rondó / en venta
import almaFuerteCover from "../assets/images/works/4PersonaPunto/ALMAF1.webp";
import reflexionCover from "../assets/images/works/5Chiquita/REFLEXION1.webp";
import eternityCover from "../assets/images/works/6Pareja2/ETERNITY1.webp";
import fasesCover from "../assets/images/works/7CarasByn/FASES1.webp";
import cenitCover from "../assets/images/works/8Oreja/cenit.webp";
import tauroCover from "../assets/images/works/9toro/TAURO1.webp";

export type CollectionId = "venta" | "pedido";

export type WorkItem = {
  title: string;
  slug: string;
  image: ImageMetadata;
};

export const worksByCollection: Record<
  CollectionId,
  {
    heading: string;
    subheading: string;
    items: WorkItem[];
  }
> = {
  pedido: {
    heading: "TRABAJOS",
    subheading: "Esculturas en venta",
    items: [
      {
        title: "Peces",
        slug: "peces",
        image: pecesCover,
      },
      {
        title: "Coincidir",
        slug: "coincidir",
        image: coincidirCover,
      },
      {
        title: "Venado",
        slug: "venado",
        image: venadoCover,
      },
    ],
  },

  venta: {
    heading: "TRABAJOS",
    subheading: "Esculturas bajo pedido",
    items: [
      {
        title: "Alma Fuerte",
        slug: "alma-fuerte",
        image: almaFuerteCover,
      },
      {
        title: "Reflexión",
        slug: "reflexion",
        image: reflexionCover,
      },
      {
        title: "Eternity",
        slug: "eternity",
        image: eternityCover,
      },
      {
        title: "Fases",
        slug: "fases",
        image: fasesCover,
      },
      {
        title: "Cenit",
        slug: "cenit",
        image: cenitCover,
      },
      {
        title: "Tauro",
        slug: "tauro",
        image: tauroCover,
      },
      {
        title: "Peces",
        slug: "peces",
        image: pecesCover,
      },
      {
        title: "Coincidir",
        slug: "coincidir",
        image: coincidirCover,
      },
      {
        title: "Venado",
        slug: "venado",
        image: venadoCover,
      },
    ],
  },
};