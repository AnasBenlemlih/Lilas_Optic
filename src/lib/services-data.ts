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
};

export const services: ServiceItem[] = [
  {
    title: "Lunettes de vue",
    description:
      "Montures tendance et verres adaptés à votre prescription pour une correction nette au quotidien.",
    icon: Glasses,
  },
  {
    title: "Lunettes de soleil",
    description:
      "Protection UV, style affirmé et verres solaires de qualité pour profiter du soleil en toute sérénité.",
    icon: Sun,
  },
  {
    title: "Lentilles de contact",
    description:
      "Essai, adaptation et suivi : lentilles souples, rigides ou journalières selon votre mode de vie.",
    icon: Eye,
  },
  {
    title: "Produits lentilles",
    description:
      "Solutions d’entretien, étuis et accessoires pour préserver confort et hygiène au quotidien.",
    icon: Droplets,
  },
  {
    title: "Accessoires",
    description:
      "Chaînettes, étuis premium et petits indispensables qui complètent votre tenue avec finesse.",
    icon: Package,
  },
  {
    title: "Marques",
    description:
      "Une sélection pointue de maisons reconnues pour allier signature design et fiabilité technique.",
    icon: Gem,
  },
  {
    title: "Le sur-mesure",
    description:
      "Ajustements précis, montage sur mesure et finitions soignées pour un porté parfaitement à votre mesure.",
    icon: Wrench,
  },
  {
    title: "Offres & services",
    description:
      "Packages et accompagnements pensés pour vous offrir le meilleur rapport qualité-conseil.",
    icon: Tag,
  },
  {
    title: "Kids+",
    description:
      "Accueil des plus petits, montures adaptées et explications claires pour rassurer toute la famille.",
    icon: Baby,
  },
  {
    title: "Expertises",
    description:
      "Conseil en visagisme, choix de verres complexes et suivi personnalisé par des professionnels passionnés.",
    icon: Sparkles,
  },
  {
    title: "Audition",
    description:
      "Orientation et solutions complémentaires pour votre confort sensoriel — demandez-nous conseil en boutique.",
    icon: Ear,
  },
];
