import React from "react";
import { ProjectPage } from "../components/ProjectPage";
import type { ProjectPageProps } from "../components/ProjectPage";

import raaga1 from "../../public/raaga/Raaga-Property-Images-1.webp";
import raaga2 from "../../public/raaga/Raaga-Property-Images-2.webp";
import raaga3 from "../../public/raaga/Raaga-Property-Images-3.webp";


import ayur1 from "../../public/raaga/ayur/Ayur-Kuteera-Raaga-1.webp";
import ayur2 from "../../public/raaga/ayur/Ayur-Kuteera-Raaga-2.webp";
import ayur3 from "../../public/raaga/ayur/Ayur-Kuteera-Raaga-3.webp";
import ayur4 from "../../public/raaga/ayur/Ayur-Kuteera-Raaga-4.webp";



import raaga4 from "../../public/raaga/Raaga-Property-Images-4.webp";
import raaga5 from "../../public/raaga/Raaga-Property-Images-5.webp";
import raaga6 from "../../public/raaga/Raaga-Property-Images-6.webp";

import routeMap from "../../public/raaga/Raaga-Route-Map.webp";

const raagaData: ProjectPageProps = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  heroImage:
    "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/Raaga-Desktop_banner.webp",

  projectName: "Raaga",

  heroSubtext:
    "Raaga is a premium wellness-themed farmland community by Hasiru Farms, offering land that breathes life and heals.",

  // ── Intro Band ───────────────────────────────────────────────────────────────
  introBandTitle: "Your Private Retreat Enriched with Nature",
  introBandText:
    "Raaga is born from the need to pause, breathe, and reconnect in a world rushing forward. It is not just land, but an invitation to embrace mindful living, inspired by Ayurveda and the Vedic way of life, where nature restores balance.",
  introFeatures: [
    "A sanctuary for your body, mind, and soul",
    "A curated space where land heals as it grows",
    "A regenerative asset that nurtures more than wealth",
  ],

  // ── Land Details ─────────────────────────────────────────────────────────────
  landDetailsTitle: "A Healing Sanctuary",
  landDetailsDescription:
    "Raaga is an Ayurvedic-themed farmland, blending nature’s rhythm with modern comfort. Each plot is designed with bio-fencing, healing gardens, and spiritual landscaping.",
  landStats: [
    { value: "17", unit: "Acres", label: "Total Land Area" },
    { value: "8000", unit: "sq.ft", label: "Plot Size" },
    { value: "20", unit: "Guntas", label: "Club House" },
    { value: "40%", unit: "", label: "Ayurvedic Trees" },
  ],
  landImages: [
    raaga1,
    raaga2,
    raaga3,
  ],

  // ── Configurations ───────────────────────────────────────────────────────────
  configurations: [
    { configuration: "10 Gunthas", area: "10,890 Sq.Ft" },
    { configuration: "20 Gunthas", area: "21,780 Sq.Ft" },
  ],

  // ── Highlights ───────────────────────────────────────────────────────────────
  highlights: [
    { iconKey: "pond",      label: "Healing Pond with lotus blossoms and fish" },
    { iconKey: "trail",       label: "Zen Trail for barefoot forest walks across 1 acre" },
    { iconKey: "herb_bowl",      label: "Ayurvedic Herb & Healing Gardens for daily wellness" },
    { iconKey: "meditation",      label: "Shanthi Stala aligned with natural energies" },
    { iconKey: "kutira",      label: "Ayur Kutira - Design inspired by ancient Vedic architecture" },
    { iconKey: "clover",      label: "40% Ayurvedic Healing Garden with medicinal bio-fencing" },
    { iconKey: "stream",      label: "Natural seasonal stream flowing through the project" },
    { iconKey: "zen_path",     label: "Eco-retreat with passive income and long-term appreciation" },
  ],

  // ── Home Types (optional — remove array entries or pass [] to hide) ──────────
  homeTypes: [
    {
      number: "01",
      name: " Ayur Kutira",
      description:
        "A thoughtfully crafted Ayurvedic farmhouse built on the principles of natural living, traditional healing and sustainable boundaries. A 2BHK wellness farmhouse set on 8000+ sqft of curated land with a purpose.",
      specs: [
        { text: "Timber plantations for long-term value" },
        { text: "Bio-fencing & healing garden with Ayurvedic benefits" },
        { text: "Commercial Plantations for Daily Wellness – with Passive Income That Grows Naturally" },
      ],
      images: [
        ayur1,
        ayur2,
        ayur3,
        ayur4
      ],
    },
  ],

  // ── Glimpses (add/remove freely — grid auto-adapts) ─────────────────────────
  glimpsesImages: [
    raaga1,
    raaga2,
    raaga3,
    raaga4,
    raaga5,
    raaga6
  ],

  // ── Nearby Attractions ───────────────────────────────────────────────────────
  nearbyAttractions: [
    { name: "Pyramid Valley", distance: "" },
    { name: "Chunchi Falls", distance: "" },
    { name: "Muthathi Temple", distance: "" },
    { name: "Bheemeshwari Wildlife Sanctuary", distance: "" },
    { name: "Mekedatu Sangama", distance: "" },
    { name: "Hogenakkal Falls", distance: "" },
    { name: "Bilikal Rangaswamy Betta", distance: "" },
    { name: "90 Mins from Jayanagar, Bangalore", distance: "" },
    { name: "60 Mins from Nice Road Junction", distance: "" },
  ],

  // ── Route Map ────────────────────────────────────────────────────────────────
  routeMapImage:
    routeMap,
  // routeMapAddress:
  //   "Via NH 275, Kollegal–Mysore Road · Near Malavalli, Karnataka 571430",
};

const RaagaPage: React.FC = () => {
  

  return <ProjectPage {...raagaData} />;
};

export default RaagaPage;