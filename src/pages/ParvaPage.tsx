import React from "react";
import { ProjectPage } from "../components/ProjectPage";
import type { ProjectPageProps } from "../components/ProjectPage";

import parva1 from "../../public/parva/Parva-Property-Images-1.webp";
import parva2 from "../../public/parva/Parva-Property-Images-2.webp";
import parva3 from "../../public/parva/Parva-Property-Images-3.webp";

import parva4 from "../../public/parva/Parva-Property-Images-4.webp";
import parva5 from "../../public/parva/Parva-Property-Images-5.webp";


import parva6 from "../../public/parva/Parva-Property-Images-6.webp";
import parva7 from "../../public/parva/Parva-Property-Images-7.webp";
import parva8 from "../../public/parva/Parva-Property-Images-8.webp";
import parva9 from "../../public/parva/Parva-Property-Images-9.webp";


import routeMap from "../../public/parva/Parva-Route-Map.webp";

const parvaData: ProjectPageProps = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  heroImage:
    "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/Parva-Desktop-Banner.webp",

  projectName: "Parva",

  heroSubtext:
    "Parva is where luxury, land, and legacy converge, offering curated sandalwood plantation plots near Kanakapura, blending sustainably rare and naturally rich living with a bold vision and premium lifestyle rooted in nature.",

  // ── Intro Band ───────────────────────────────────────────────────────────────
  introBandTitle: "Where Land Grows Legacy",
  introBandText:
    "At Hasiru Farms, we redefine land ownership by offering theme-based managed farmlands that combine sustainability, tradition, culture, and modern living.Our projects are more than investments — they are sanctuaries that allow you to connect deeply with nature, history, and your heritage.",
  introFeatures: [
    "The Art of Living, in the Heart of Nature",
    "Eco-Living with a Scent of Sandalwood",
    "Villas in the Woods, Returns in Your Hands",
  ],

  // ── Land Details ─────────────────────────────────────────────────────────────
  landDetailsTitle: "Nature’s Touch, Life’s Treasure.",
  landDetailsDescription:
    "Parva is an exclusive 17-acre Farm Plot Project near Kanakapura, crafted for those who seek nature, peace, and purpose. From perennial streams to 50+ curated plants per plot, Parva is where eco-living meets timeless investment.",
  landStats: [
    { value: "17", unit: "Acres", label: "Total Land Area" },
    { value: "50+", unit: "", label: "Plantations Per Plot" },
    { value: "20+", unit: "", label: "Total Plots" },
    { value: "6000", unit: "sq.ft", label: "Plot Size" },
  ],
  landImages: [
    parva1,
    parva2,
    parva3,
  ],

  // ── Configurations ───────────────────────────────────────────────────────────
  configurations: [
    { configuration: "10 Gunthas", area: "10,890 Sq.Ft" },
    { configuration: "20 Gunthas", area: "21,780 Sq.Ft" },
  ],

  // ── Highlights ───────────────────────────────────────────────────────────────
  highlights: [
    { iconKey: "parva_dual_tree",      label: "Sandalwood & Fruit Trees by Kavitha Mishra" },
    { iconKey: "parva_seedling_tray",  label: "50+ curated native & fruit-bearing plantations" },
    { iconKey: "parva_stream",         label: "Natural seasonal stream through the project" },
    { iconKey: "parva_biopool",        label: "Upcoming Bio-pool & eco-recreation zone" },
    { iconKey: "parva_camping",        label: "Camping zones & stargazing spots" },
    { iconKey: "parva_security",       label: "Gated community with 24x7 security & CCTV" },
    { iconKey: "parva_organic_farm",   label: "Organic farming & community spaces" },
    { iconKey: "parva_appreciation",   label: "Eco-retreat, passive income & long-term appreciation" },
  ],

  // ── Home Types (optional — remove array entries or pass [] to hide) ──────────
  homeTypes: [
    {
      number: "01",
      name: "A Frame Villas",
      description:
        "A thoughtfully crafted Ayurvedic farmhouse built on the principles of natural living, traditional healing and sustainable boundaries. A 2BHK wellness farmhouse set on 8000+ sqft of curated land with a purpose.",
      specs: [
        { text: "Timber plantations for long-term value" },
        { text: "Bio-fencing & healing garden with Ayurvedic benefits" },
        { text: "Commercial Plantations for Daily Wellness – with Passive Income That Grows Naturally" },
      ],
      images: [
        parva4,
        parva5,
      ],
    },
  ],

  // ── Glimpses (add/remove freely — grid auto-adapts) ─────────────────────────
  glimpsesImages: [
    parva6,
    parva7,
    parva8,
    parva9,
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
    { name: "60 Mins from Nice Road Junction and kabbalamma temple sangam", distance: "" },
  ],

  // ── Route Map ────────────────────────────────────────────────────────────────
  routeMapImage:
    routeMap,
};

const ParvaPage: React.FC = () => {
  

  return <ProjectPage {...parvaData} />;
};

export default ParvaPage;