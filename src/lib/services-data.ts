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
  /** Visuel pleine carte (Unsplash — remplaçable par vos photos) */
  image: string;
};

export const services: ServiceItem[] = [
  {
    title: "Lunettes de vue",
    description:
      "Montures tendance et verres adaptés à votre prescription pour une correction nette au quotidien.",
    icon: Glasses,
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lunettes de soleil",
    description:
      "Protection UV, style affirmé et verres solaires de qualité pour profiter du soleil en toute sérénité.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lentilles de contact",
    description:
      "Essai, adaptation et suivi : lentilles souples, rigides ou journalières selon votre mode de vie.",
    icon: Eye,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Produits lentilles",
    description:
      "Solutions d’entretien, étuis et accessoires pour préserver confort et hygiène au quotidien.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Accessoires",
    description:
      "Chaînettes, étuis premium et petits indispensables qui complètent votre tenue avec finesse.",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marques",
    description:
      "Une sélection pointue de maisons reconnues pour allier signature design et fiabilité technique.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Le sur-mesure",
    description:
      "Ajustements précis, montage sur mesure et finitions soignées pour un porté parfaitement à votre mesure.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Offres & services",
    description:
      "Packages et accompagnements pensés pour vous offrir le meilleur rapport qualité-conseil.",
    icon: Tag,
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kids+",
    description:
      "Accueil des plus petits, montures adaptées et explications claires pour rassurer toute la famille.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Expertises",
    description:
      "Conseil en visagisme, choix de verres complexes et suivi personnalisé par des professionnels passionnés.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Audition",
    description:
      "Orientation et solutions complémentaires pour votre confort sensoriel — demandez-nous conseil en boutique.",
    icon: Ear,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
  },
];
