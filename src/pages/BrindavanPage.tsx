/**
 * BrindavanPage.tsx
 *
 * Example of how to use the reusable <ProjectPage> component.
 * Swap in your own images, text, and config for each new project.
 */

import React from "react";
import { ProjectPage } from "../components/ProjectPage";
import type { ProjectPageProps } from "../components/ProjectPage";

import brindavan1 from "../../public/brindavan/Brindavan-Property-Images-1.webp";
import brindavan2 from "../../public/brindavan/Brindavan-Property-Images-2.webp";
import brindavan3 from "../../public/brindavan/Brindavan-Property-Images-3.webp";
import brindavan4 from "../../public/brindavan/Brindavan-Property-Images-4.webp";
import brindavan5 from "../../public/brindavan/Brindavan-Property-Images-6.webp";

import gokul1 from "../../public/brindavan/gokul/Gokul-Brindavan-01.webp";
import gokul2 from "../../public/brindavan/gokul/Gokul-Brindavan-02.webp";
import gokul3 from "../../public/brindavan/gokul/Gokul-Brindavan-03.webp";
import gokul4 from "../../public/brindavan/gokul/Gokul-Brindavan-04.webp";
import gokul5 from "../../public/brindavan/gokul/Gokul-Brindavan-05.webp";

import barsana1 from "../../public/brindavan/barsana/Barsana-Brindavan-01.webp";
import barsana2 from "../../public/brindavan/barsana/Barsana-Brindavan-02.webp";
import barsana3 from "../../public/brindavan/barsana/Barsana-Brindavan-03.webp";
import barsana4 from "../../public/brindavan/barsana/Barsana-Brindavan-04.webp";
import barsana5 from "../../public/brindavan/barsana/Barsana-Brindavan-05.webp";

import radhakund1 from "../../public/brindavan/radha-kund/Radha-Kund-Brindavan-01.webp";
import radhakund2 from "../../public/brindavan/radha-kund/Radha-Kund-Brindavan-02.webp";
import radhakund3 from "../../public/brindavan/radha-kund/Radha-Kund-Brindavan-03.webp";
import radhakund4 from "../../public/brindavan/radha-kund/Radha-Kund-Brindavan-04.webp";

import brindavan6 from "../../public/brindavan/Brindavan-Property-Images-7.webp";
import brindavan7 from "../../public/brindavan/Brindavan-Property-Images-8.webp";
import brindavan8 from "../../public/brindavan/Brindavan-Property-Images-9.webp";
import brindavan9 from "../../public/brindavan/Brindavan-Property-Images-10.webp";
import brindavan10 from "../../public/brindavan/Brindavan-Property-Images-11.webp";
import brindavan11 from "../../public/brindavan/Brindavan-Property-Images-12.webp";
import brindavan12 from "../../public/brindavan/Brindavan-Property-Images-13.webp";
import brindavan13 from "../../public/brindavan/Brindavan-Property-Images-14.webp";
import brindavan14 from "../../public/brindavan/Brindavan-Property-Images-15.webp";
import brindavan15 from "../../public/brindavan/Brindavan-Property-Images-16.webp";
import brindavan16 from "../../public/brindavan/Brindavan-Property-Images-17.webp";

import routeMap from "../../public/brindavan/Brindavan-Root-Map.webp";

const brindavanData: ProjectPageProps = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  heroImage:
    "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/Brindavan-Desktop-Banner.webp?updatedAt=1780473590848",

  projectName: "Brindavan",

  heroSubtext:
    "Brindavan is a theme-based managed farmland inspired by Vrindavan, blending rural charm with modern comforts, rooted in Krishna’s spirit, where simplicity, sustainability, culture, and devotion create harmony with nature and life.",

  // ── Intro Band ───────────────────────────────────────────────────────────────
  introBandTitle: "Echoes of Krishna, Embrace of Nature",
  introBandText:
    "Brindavan, inspired by Vrindavan, is a theme-based managed farmland blending rural charm with modern comforts. Rooted in Krishna’s spirit, it celebrates simplicity, sustainability, and culture while nurturing memories in harmony with nature.",
  introFeatures: [
    "Inspired by Devotion, Designed for Life",
    "A Divine Blend of Nature and Peace",
    "Where Every Step is a Prayer",
  ],

  // ── Land Details ─────────────────────────────────────────────────────────────
  landDetailsTitle: "Where Every Breeze Carries the Song of the Flute",
  landDetailsDescription:
    "Brindavan, inspired by Vrindavan, is a theme-based managed farmland blending rural charm with modern comforts. Rooted in Krishna’s spirit, it celebrates simplicity, sustainability, and culture while nurturing memories in harmony with nature.",
  landStats: [
    { value: "30", unit: "Acres", label: "Total Land Area" },
    { value: "6000", unit: "sq.ft", label: "Plot Size" },
    { value: "A", unit: "-Shaped", label: "Cottage and Villa" },
    { value: "2.5", unit: "Acre", label: "Natural Pond" },
  ],
  landImages: [
    brindavan1,
    brindavan2,
    brindavan3,
    brindavan4,
    brindavan5
  ],

  // ── Configurations ───────────────────────────────────────────────────────────
  configurations: [
    { configuration: "10 Gunthas", area: "10,890 Sq.Ft" },
    { configuration: "20 Gunthas", area: "21,780 Sq.Ft" },
  ],

  // ── Highlights ───────────────────────────────────────────────────────────────
  highlights: [
    { iconKey: "home",      label: "Themed Living Spaces" },
    { iconKey: "cow",       label: "Gokulam – Gaushala Sanctuary" },
    { iconKey: "yoga",      label: "Meditation & Yoga Retreats" },
    { iconKey: "tent",      label: "Samaha Clubhouse" },
    { iconKey: "tree",      label: "30 Acres of Fruit Orchards" },
    { iconKey: "pool",      label: "Natural Water Pond" },
    { iconKey: "leaf",      label: "Eco-Friendly Infrastructure" },
    { iconKey: "rupee",     label: "Managed Farmland Legacy" },
  ],

  // ── Home Types (optional — remove array entries or pass [] to hide) ──────────
  homeTypes: [
    {
      number: "01",
      name: "Gokul",
      description:
        "Inspired by rural India’s compact homes, Gokul is a vernacular prefab model that’s light on land yet rich in warmth. Perfect for solo living, weekend retreats, writers, artists, and spiritual seekers seeking simplicity, comfort, and a deep connection with nature.",
      specs: [
        { text: "Rural-inspired traditional home" },
        { text: "6,000 sq.ft Land Area" },
        { text: "650 sq.ft Built Up Area" },
      ],
      images: [
        gokul1,
        gokul2,
        gokul3,
        gokul4,
        gokul5
      ],
    },
    {
      number: "02",
      name: "Barsana",
      description:
        "Barsana, a 2 BHK heritage home, is inspired by Karnataka’s Totti Mane courtyard style. It blends humility, rootedness, and climate wisdom with modern comfort, fostering community, culture, and sustainable living for those seeking tradition, connection, and timeless simplicity.",
      specs: [
        { text: "Totti-style traditional home" },
        { text: "6,000 sq.ft Land Area" },
        { text: "1,100 sq.ft Built Up Area" },
      ],
      images: [
        barsana1,
        barsana2,
        barsana3,
        barsana4,
        barsana5
      ],
      // reversed: true  ← optional; alternating is auto-applied by index
    },
    {
      number: "03",
      name: "Radha Kund",
      description:
        "Radha Kund, a 3 BHK villa-style farmhouse, blends traditional aesthetics with premium comfort. Designed for hosting, relaxation, and reconnecting with nature, it offers expansive living, elevated simplicity, and a private water feature for those seeking space, serenity, and timeless elegance.",
      specs: [
        { text: "Modern Courtyard Home" },
        { text: "10,890 sq.ft Land Area" },
        { text: "1,600 sq.ft Built Up Area" },
      ],
      images: [
        radhakund1,
        radhakund2,
        radhakund3,
        radhakund4
      ],
    },
  ],

  // ── Glimpses (add/remove freely — grid auto-adapts) ─────────────────────────
  glimpsesImages: [
    brindavan5,
    brindavan6,
    brindavan7,
    brindavan8,
    brindavan9,
    brindavan10,
    brindavan11,
    brindavan12,
    brindavan13,
    brindavan14,
    brindavan15,
    brindavan16,
  ],

  // ── Nearby Attractions ───────────────────────────────────────────────────────
  nearbyAttractions: [
    { name: "Pyramid Valley", distance: "43 km" },
    { name: "Kaveri River", distance: "30 km" },
    { name: "Chunchi Falls", distance: "27 km" },
    { name: "Mekedatu", distance: "15 km" },
    { name: "Bilikal Rangaswamy Betta", distance: "17 km" },
    { name: "Savandurga Hill", distance: "40 km" },
    { name: "Banerghatta National Park", distance: "45 km" },
    { name: "Art of Living", distance: "38 km" },
    { name: "Golibore Nature Camp", distance: "38 km" },
  ],

  // ── Route Map ────────────────────────────────────────────────────────────────
  routeMapImage:
    routeMap,
  // routeMapAddress:
  //   "Via NH 275, Kollegal–Mysore Road · Near Malavalli, Karnataka 571430",
};

const BrindavanPage: React.FC = () => {
  

  return <ProjectPage {...brindavanData} />;
};

export default BrindavanPage;

// ─── NEW PROJECT EXAMPLE ──────────────────────────────────────────────────────
//
// Creating a second project page is as simple as making a new file:
//
// import { ProjectPage } from "./ProjectPage";
//
// const anotherProjectData = {
//   heroImage: "...",
//   projectName: "Vrindavan Gardens",
//   homeTypes: [],            // ← no home types for this project
//   configurations: [...],
//   ...
// };
//
// export default () => <ProjectPage {...anotherProjectData} />;