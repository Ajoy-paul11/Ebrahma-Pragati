import React from "react";
import { ProjectPage } from "../components/ProjectPage";
import type { ProjectPageProps } from "../components/ProjectPage";

import vruksha1 from "../../public/vruksha/Vruksha-Image-1.webp";

import vruksha2 from "../../public/vruksha/Vruksha-Image-2.webp";
import vruksha3 from "../../public/vruksha/Vruksha-Image-3.webp";
import vruksha4 from "../../public/vruksha/Vruksha-Image-4.webp";
import vruksha5 from "../../public/vruksha/Vruksha-Image-5.webp";
import vruksha6 from "../../public/vruksha/Vruksha-Image-6.webp";
import vruksha7 from "../../public/vruksha/Vruksha-Image-7.webp";
import vruksha8 from "../../public/vruksha/Vruksha-Image-8.webp";
import vruksha9 from "../../public/vruksha/Vruksha-Image-9.webp";

import routeMap from "../../public/vruksha/Vruksha-Route-Map.webp";

const vrukshaData: ProjectPageProps = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  heroImage:
    "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/Vruksha-Desktop-Banner.webp",

  projectName: "Vruksha",

  heroSubtext:
    "A home that grows. A life that slows down on purpose. Slow living is not a retreat from life. It is a return to the parts of life that move at a pace worth noticing.Hasiru’s first Managed Farm Villa. Greater Bangalore – Kanakpura.",

  // ── Intro Band ───────────────────────────────────────────────────────────────
  introBandTitle: "A life that slows down, on purpose.",
  introBandText:
    "Vruksha takes its name from the Sanskrit word for tree – not for its symbolism, but for what a tree actually does. It grows without hurry. It gives without asking. It holds, quietly, for generations. Vruksha is not built around a feature. It is built around a pace. The pace of a tree that takes a season to fruit. Every part of it – the home, the land, the community – was designed to bring you back to that pace.",
  introFeatures: [
    "A Home That Belongs Here",
    "Land That Works While You Rest",
    "A Community of Eight",
    "A Life at a Different Pace"
  ],

  // ── Land Details ─────────────────────────────────────────────────────────────
//   landDetailsTitle: "A Healing Sanctuary",
//   landDetailsDescription:
//     "Raaga is an Ayurvedic-themed farmland, blending nature’s rhythm with modern comfort. Each plot is designed with bio-fencing, healing gardens, and spiritual landscaping.",
//   landStats: [
//     { value: "17", unit: "Acres", label: "Total Land Area" },
//     { value: "8000", unit: "sq.ft", label: "Plot Size" },
//     { value: "20", unit: "Guntas", label: "Club House" },
//     { value: "40%", unit: "", label: "Ayurvedic Trees" },
//   ],
//   landImages: [
//     raaga1,
//     raaga2,
//     raaga3,
//   ],

  // ── Configurations ───────────────────────────────────────────────────────────
  configurations: [
    { configuration: "10 Gunthas", area: "10,890 Sq.Ft", price: "₹ 99 Lakhs" },
    { configuration: "20 Gunthas", area: "21,780 Sq.Ft", price: "₹ 1.6 CR" },
  ],

  // ── Highlights ───────────────────────────────────────────────────────────────
  highlights: [
    { iconKey: "clubhouse",      label: "The Club House— The Community Core" },
    { iconKey: "shared_kitchen",       label: "The Kitchen — Shared Kitchen & Dining" },
    { iconKey: "play_grove",      label: "Play Grove — Children's Play Zones" },
    { iconKey: "earthen_trails",      label: "Earthen Trails — Walking Paths Through the Plantation" },
    { iconKey: "retreat_wellness",      label: "The Retreat — Wellness & Stillness" },
    { iconKey: "bonfire_circle",      label: "The Circle — Bonfire & Conversation Deck" },
    { iconKey: "gated_entry",      label: "Gated Entry & Perimeter Security" },
    { iconKey: "paved_roads",     label: "Internally Paved Roads & Pathways" },
    { iconKey: "managed_plantation",     label: "Managed Plantation — Integrated & Residual free farming" },
    { iconKey: "drip_irrigation",     label: "Year-Round — Bore Wells & Drip Irrigation System" },
  ],

  // ── Home Types (optional — remove array entries or pass [] to hide) ──────────
  homeTypes: [
    {
      number: "01",
      name: "Introducing - The Clubhouse",
      description:
        "The Clubhouse is the soul of the project – a warm, earthen space crafted for slow dinners, long conversations, and nights around a crackling bonfire.",
      specs: [
        { text: "2 Rooms" },
        { text: "25 Members Dormitory" },
        { text: "Open Kitchen" },
        { text: "Dedicated Event Area" }
      ],
      images: [
        vruksha1
      ],
    },
  ],

  // ── Glimpses (add/remove freely — grid auto-adapts) ─────────────────────────
  glimpsesImages: [
    vruksha2,
    vruksha3,
    vruksha4,
    vruksha5,
    vruksha6,
    vruksha7,
    vruksha8,
    vruksha9
  ],

  // ── Nearby Attractions ───────────────────────────────────────────────────────
  nearbyAttractions: [
    { name: "Pyramid Valley", distance: "" },
    { name: "Chunchi Falls", distance: "" },
    { name: "Muthathi Temple", distance: "" },
    { name: "Bheemeshwari Wildlife Sanctuary", distance: "" },
    { name: "Mekedatu Sangama", distance: "" },
    // { name: "Hogenakkal Falls", distance: "" },
    // { name: "Bilikal Rangaswamy Betta", distance: "" },
    { name: "90 Mins from Jayanagar, Bangalore", distance: "" },
    { name: "60 Mins from Nice Road Junction", distance: "" },
  ],

  // ── Route Map ────────────────────────────────────────────────────────────────
  routeMapImage:
    routeMap,
  // routeMapAddress:
  //   "Via NH 275, Kollegal–Mysore Road · Near Malavalli, Karnataka 571430",
};

const VrukshaPage: React.FC = () => {
  

  return <ProjectPage {...vrukshaData} />;
};

export default VrukshaPage;