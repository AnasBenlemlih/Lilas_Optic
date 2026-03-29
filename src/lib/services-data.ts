import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Ear,
  Gem,
  Glasses,
  Package,
  Sparkles,
  Sun,
  Tag,
  Eye,
  Droplets,
  Wrench,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageFocus?: "center" | "top" | "bottom";
};

export const services: ServiceItem[] = [
  {
    title: "Lunettes de vue",
    description:
      "Montures tendance et verres adaptés à votre prescription pour une correction nette au quotidien.",
    icon: Glasses,
    image: "/images/4.jpeg",
  },
  {
    title: "Lunettes de soleil",
    description:
      "Protection UV, style affirmé et verres solaires de qualité pour profiter du soleil en toute sérénité.",
    icon: Sun,
    imageFocus: "top",
    image: "/images/5.jpeg",
  },
  {
    title: "Lentilles de contact",
    description:
      "Essai, adaptation et suivi : lentilles souples, rigides ou journalières selon votre mode de vie.",
    icon: Eye,
    image: "/images/6.jpeg",
    imageFocus: "top",
  },
  {
    title: "Produits lentilles",
    description:
      "Solutions d’entretien, étuis et accessoires pour préserver confort et hygiène au quotidien.",
    icon: Droplets,
    image: "/images/1.jpeg",
  },
  {
    title: "Accessoires",
    description:
      "Chaînettes, étuis premium et petits indispensables qui complètent votre tenue avec finesse.",
    icon: Package,
    imageFocus: "top",
    image: "/images/10.jpeg",
  },
  {
    title: "Marques",
    description:
      "Une sélection pointue de maisons reconnues pour allier signature design et fiabilité technique.",
    icon: Gem,
    image: "/images/3.jpeg",
  },
  {
    title: "Offres & services",
    description:
      "Packages et accompagnements pensés pour vous offrir le meilleur rapport qualité-conseil.",
    icon: Tag,
    image: "/images/2.jpeg",
  },
  {
    title: "Kids+",
    description:
      "Accueil des plus petits, montures adaptées et explications claires pour rassurer toute la famille.",
    icon: Baby,
    image: "/images/7.jpeg",
  },
  {
    title: "Expertises",
    description:
      "Conseil en visagisme, choix de verres complexes et suivi personnalisé par des professionnels passionnés.",
    icon: Sparkles,
    image: "/images/8.jpeg",
  },
  {
    title: "Audition",
    description:
      "Orientation et solutions complémentaires pour votre confort sensoriel — demandez-nous conseil en boutique.",
    icon: Ear,
    image: "/images/9.jpeg",
  },
];
