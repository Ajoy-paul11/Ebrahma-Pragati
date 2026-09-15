import React from "react";
import { ProjectPage } from "../components/ProjectPage";
import type { ProjectPageProps } from "../components/ProjectPage";

import prakruthi1 from "../../public/prakruthi/Prakrithi-Property-Images-1.webp";
import prakruthi2 from "../../public/prakruthi/Prakrithi-Property-Images-2.webp";
import prakruthi3 from "../../public/prakruthi/Prakrithi-Property-Images-3.webp";

import prakruthi4 from "../../public/prakruthi/Prakrithi-Property-Images-4.webp";
import prakruthi5 from "../../public/prakruthi/Prakrithi-Property-Images-5.webp";
import prakruthi6 from "../../public/prakruthi/Prakrithi-Property-Images-6.webp";
import prakruthi7 from "../../public/prakruthi/Prakrithi-Property-Images-7.webp";
import prakruthi8 from "../../public/prakruthi/Prakrithi-Property-Images-8.webp";
import prakruthi9 from "../../public/prakruthi/Prakrithi-Property-Images-9.webp";
import prakruthi10 from "../../public/prakruthi/Prakrithi-Property-Images-10.webp";
import prakruthi11 from "../../public/prakruthi/Prakrithi-Property-Images-11.webp";
import prakruthi12 from "../../public/prakruthi/Prakrithi-Property-Images-12.webp";
import prakruthi13 from "../../public/prakruthi/Prakrithi-Property-Images-13.webp"

import routeMap from "../../public/prakruthi/Prakruthi-Route-Map.webp";

const prakruthiData: ProjectPageProps = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  heroImage:
    "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/Prakruthi-Desktop-Banner.webp",

  projectName: "Prakruthi",

  heroSubtext:
    "Prakruthi is a managed farmland where village life and nature unite, offering sustainability, serenity, and secure investment – professionally nurtured land that connects you to simplicity, prosperity, and a lasting bond with the earth.",

  // ── Intro Band ───────────────────────────────────────────────────────────────
  introBandTitle: "Your Village, Your Roots, Your soil.",
  introBandText:
    "Prakruthi is where village life and nature unite in harmony. Breathe fresh air, feel the earth beneath your feet, and watch your land flourish under expert care. More than farmland, it’s a return to simplicity, sustainability, and serenity – offering mindful investors and nature lovers fertile soil to plant a lasting future.",
  introFeatures: [
    "It’s the village you’ve been missing",
    "A Place Where the Land Calls the Viliage",
    "Where the Earth Remembers Your Name",
  ],

  // ── Land Details ─────────────────────────────────────────────────────────────
  landDetailsTitle: "Farmland Rooted in Village Traditions",
  landDetailsDescription:
    "Prakruthi is a managed farmland project where sustainability meets value in a serene, village-inspired setting. Surrounded by greenery, your land is professionally nurtured, offering both secure investment and deep connection to nature. More than ownership, it’s mindful living – where soil yields peace, prosperity, and a lasting bond with the earth.",
  landStats: [
    { value: "33", unit: "Acres", label: "Total Land Area" },
    { value: "6000", unit: "sq.ft", label: "Plot Sizes" },
    { value: "5.5", unit: "Guntas", label: "Size" },
    { value: "5", unit: "", label: "Borewells" },
  ],
  landImages: [
    prakruthi1,
    prakruthi2,
    prakruthi3
  ],

  // ── Configurations ───────────────────────────────────────────────────────────
  configurations: [
    { configuration: "10 Gunthas", area: "10,890 Sq.Ft" },
    { configuration: "20 Gunthas", area: "21,780 Sq.Ft" },
  ],

  // ── Highlights ───────────────────────────────────────────────────────────────
  highlights: [
    { iconKey: "nature_amenities",      label: "Nature-Inspired Amenities" },
    { iconKey: "lush_bloom",       label: "Enjoy lush green landscapes" },
    { iconKey: "walking_trail",      label: "walking trails" },
    { iconKey: "farming_zone",      label: "organic farming zones" },
    { iconKey: "rainwater_leaf",      label: "rainwater harvesting systems" },
    { iconKey: "eco_living",      label: "eco-friendly living spaces" },
    { iconKey: "nurture_shield",      label: "all crafted to nurture" },
    { iconKey: "serene_rupee",     label: "sustainable and serene lifestyle" },
  ],

  

  // ── Glimpses (add/remove freely — grid auto-adapts) ─────────────────────────
  glimpsesImages: [
    prakruthi4,
    prakruthi5,
    prakruthi6,
    prakruthi7,
    prakruthi8,
    prakruthi9,
    prakruthi10,
    prakruthi11,
    prakruthi12,
    prakruthi13
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
  
};

const PrakrithiPage: React.FC = () => {
  

  return <ProjectPage {...prakruthiData} />;
};

export default PrakrithiPage;