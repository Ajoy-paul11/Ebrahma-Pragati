import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ProjectIcons.tsx
//
// Single source of truth for all project-highlight SVG icons.
//
// USAGE
//   import { getIcon, HighlightIcon } from "./ProjectIcons";
//
//   // Render directly
//   <HighlightIcon iconKey="clubhouse" />
//
//   // Or get the raw ReactNode
//   const node = getIcon("lotus");
//
// ADDING NEW ICONS
//   1. Pick a section below (or create a new one for a new project).
//   2. Add your key + SVG.  Key naming convention: snake_case, descriptive.
//   3. Register the key in the iconKey union at the bottom (optional but helps
//      catch typos at compile time via the HighlightIcon prop type).
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared thin-stroke SVG defaults ──────────────────────────────────────────
// All icons use these attributes so you only need to override what differs.
const D: React.SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// ─────────────────────────────────────────────────────────────────────────────
// BASE LIBRARY — generic, reusable across all projects
// ─────────────────────────────────────────────────────────────────────────────
const BASE_ICONS: Record<string, React.ReactNode> = {

  // Simple gabled house
  home: (
    <svg {...D}>
      <path d="M3 10.5L12 3l9 7.5V21H3V10.5z" />
      <path d="M9 21v-7h6v7" />
    </svg>
  ),

  // Layered pine / conifer
  tree: (
    <svg {...D}>
      <path d="M12 21v-8" />
      <path d="M5 21h14" />
      <path d="M8 13l4-5 4 5H8z" />
      <path d="M10 8l2-4 2 4h-4z" />
    </svg>
  ),

  // Seated lotus meditation pose
  yoga: (
    <svg {...D}>
      <circle cx="12" cy="4.5" r="1.75" />
      <path d="M12 6.5v4" />
      <path d="M12 8.5l-4 2.5M12 8.5l4 2.5" />
      <path d="M8 11l-2 3.5h12l-2-3.5" />
      <path d="M6 14.5c0 1.5 1 2 2 1.5M18 14.5c0 1.5-1 2-2 1.5" />
    </svg>
  ),

  // Single clean teardrop
  droplet: (
    <svg {...D}>
      <path d="M12 3C12 3 5.5 11 5.5 16a6.5 6.5 0 0 0 13 0C18.5 11 12 3 12 3z" />
    </svg>
  ),

  // Classic sun: circle + 8 rays
  sun: (
    <svg {...D}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),

  // Symmetrical butterfly
  butterfly: (
    <svg {...D}>
      <path d="M12 8C12 5 9.5 2 6 2S2 5 2 8c0 2 1.5 4 4 5l6-5z" />
      <path d="M12 8C12 5 14.5 2 18 2s4 3 4 6c0 2-1.5 4-4 5l-6-5z" />
      <path d="M12 8c0 3-2.5 6-6 6S2 11 2 8" />
      <path d="M12 8c0 3 2.5 6 6 6s4-3 4-6" />
      <path d="M12 8v8" />
    </svg>
  ),

  // Swimming pool: diving board + waves
  pool: (
    <svg {...D}>
      <path d="M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M8 8V5M16 8V5" />
      <path d="M6 5h4M14 5h4" />
    </svg>
  ),

  // Flame with inner teardrop
  fire: (
    <svg {...D}>
      <path d="M12 22c4.5 0 8-3.5 8-8 0-3-2-6-4-8-1 2-2 3-2 3S12 7 10 4C10 4 4 9 4 14c0 4.5 3.5 8 8 8z" />
      <path d="M12 22c2 0 4-1.5 4-4 0-1.5-1-3-2-4-.5 1-1 1.5-1 1.5S11.5 14.5 11 12c0 0-3 2.5-3 5 0 2.5 1.8 5 4 5z" />
    </svg>
  ),

  // Triangular tent with arch entrance
  tent: (
    <svg {...D}>
      <path d="M3.5 21L12 4l8.5 17H3.5z" />
      <path d="M9.5 21c0-1.4.6-2.5 2.5-2.5s2.5 1.1 2.5 2.5" />
      <path d="M12 4v6" strokeDasharray="1 2" />
    </svg>
  ),

  // Stylised cow head
  cow: (
    <svg {...D}>
      <path d="M8 5c-1-2-3-3-4-2.5M16 5c1-2 3-3 4-2.5" />
      <path d="M6 6a6 6 0 0 0 12 0" />
      <path d="M6 6c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M6 7L4.5 9M18 7l1.5 2" />
      <ellipse cx="12" cy="10" rx="3" ry="1.8" />
      <circle cx="10.5" cy="10" r="0.4" fill="currentColor" />
      <circle cx="13.5" cy="10" r="0.4" fill="currentColor" />
      <circle cx="9" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="15" cy="7.5" r="0.5" fill="currentColor" />
    </svg>
  ),

  // Indian Rupee ₹
  rupee: (
    <svg {...D}>
      <path d="M6 4h12" />
      <path d="M6 8h12" />
      <path d="M12 8l-6 12" />
      <path d="M9 12h4a3 3 0 0 0 0-6H6" />
    </svg>
  ),

  // Organic leaf with central vein
  leaf: (
    <svg {...D}>
      <path d="M12 22C6 22 3 17 3 12c0-7 9-10 9-10s9 3 9 10c0 5-3 10-9 10z" />
      <path d="M12 22V12" />
    </svg>
  ),

  // Two mountain peaks
  mountain: (
    <svg {...D}>
      <path d="M2 21L9 8l4 6 3-4 6 11H2z" />
    </svg>
  ),

  // Six-petal flower
  flower: (
    <svg {...D}>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="6.5" rx="1.8" ry="3" />
      <ellipse cx="12" cy="17.5" rx="1.8" ry="3" />
      <ellipse cx="6.5" cy="12" rx="3" ry="1.8" />
      <ellipse cx="17.5" cy="12" rx="3" ry="1.8" />
      <ellipse cx="8" cy="8" rx="1.8" ry="3" transform="rotate(-45 8 8)" />
      <ellipse cx="16" cy="16" rx="1.8" ry="3" transform="rotate(-45 16 16)" />
    </svg>
  ),

  // Five-pointed star
  star: (
    <svg {...D}>
      <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5 2 9.5l7-1z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// RAAGA / BRINDAVAN — Ayurvedic farmland icons
// ─────────────────────────────────────────────────────────────────────────────
const RAAGA_ICONS: Record<string, React.ReactNode> = {

  // Teardrop healing pond with inner ripple
  pond: (
    <svg {...D}>
      <path d="M12 2.5C12 2.5 5 10.5 5 16a7 7 0 0 0 14 0C19 10.5 12 2.5 12 2.5z" />
      <path d="M12 19.5a3.5 3.5 0 0 1-3.5-3" />
    </svg>
  ),

  // S-curve Zen trail with footprint dot
  trail: (
    <svg {...D}>
      <path d="M6 5c2 0 4 1.5 4 3.5S8 12 10 14s6 3 6 5" />
      <circle cx="6" cy="5" r="1" fill="currentColor" strokeWidth="0" />
      <path d="M14 18.5l2 1.5 2-1.5" />
    </svg>
  ),

  // Bowl with rising sprout — Ayurvedic herb bowl
  herb_bowl: (
    <svg {...D}>
      <path d="M5 10h14a7 7 0 0 1-14 0z" />
      <path d="M9 17h6" />
      <path d="M12 17v2" />
      <path d="M12 10V5" />
      <path d="M12 8c0 0-1.5-2-3-1.5" />
      <path d="M12 6.5c0 0 1.5-2 3-1.5" />
    </svg>
  ),

  // Seated meditation figure
  meditation: (
    <svg {...D}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <path d="M12 9l-4 3M12 9l4 3" />
      <path d="M6 16c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M6 16l-1 1M18 16l1 1" />
      <path d="M4 18h16" />
    </svg>
  ),

  // Vedic hut — gabled roof, arched door
  kutira: (
    <svg {...D}>
      <path d="M3 11L12 3l9 8" />
      <rect x="5" y="11" width="14" height="10" rx="0.5" />
      <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    </svg>
  ),

  // Three-petal clover with stem
  clover: (
    <svg {...D}>
      <path d="M12 11c0 0-1-5 3-5.5S19 9 12 11z" />
      <path d="M12 11c0 0-4.5-2-5-5.5s3.5-5 5 .5z" />
      <path d="M12 11c0 0 4.5-2 5-5.5S13.5 0 12 5.5z" />
      <path d="M12 11v8" />
      <path d="M9 19c1-.5 2-.7 3-.7s2 .2 3 .7" />
    </svg>
  ),

  // Three horizontal waves
  stream: (
    <svg {...D}>
      <path d="M3 8c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0S19.5 10 21 8" />
      <path d="M3 13c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0S19.5 15 21 13" />
      <path d="M3 18c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0S19.5 20 21 18" />
    </svg>
  ),

  // Winding road / footpath
  path: (
    <svg {...D}>
      <path d="M5 20c2-3 4-4 4-7s-2-4-2-7" />
      <path d="M19 20c-2-3-4-4-4-7s2-4 2-7" />
    </svg>
  ),

  // Five-petal lotus with water line
  lotus: (
    <svg {...D}>
      <path d="M12 16C12 16 9 12 9 9s3-5 3-5 3 2 3 5-3 7-3 7z" />
      <path d="M12 16C12 16 7.5 15 6 12s0-6 0-6 4 1 5.5 4 .5 6 .5 6z" />
      <path d="M12 16C12 16 16.5 15 18 12s0-6 0-6-4 1-5.5 4-.5 6-.5 6z" />
      <path d="M9 16C9 16 4 16 2.5 13s1-6 1-6 3.5 2 4.5 5-.5 4-.5 4z" />
      <path d="M15 16C15 16 20 16 21.5 13s-1-6-1-6-3.5 2-4.5 5 .5 4 .5 4z" />
      <path d="M2 18h20" />
      <path d="M12 16v2" />
    </svg>
  ),

  // Wavy water with fish
  pond_fish: (
    <svg {...D}>
      <path d="M3 9c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0S19.5 11 21 9" />
      <path d="M7 14c1-1.5 2.5-2 4-2s3 .5 4 2-1 3-4 3-5-1.5-4-3z" />
      <path d="M7 14l-2-1.5M7 17l-2 1.5" />
      <circle cx="14.5" cy="14.5" r="0.4" fill="currentColor" strokeWidth="0" />
    </svg>
  ),

  // Mortar & pestle
  mortar: (
    <svg {...D}>
      <path d="M15 6l3-3" />
      <path d="M13 8c1.5-1.5 3.5-2 5-1.5" />
      <path d="M6 12h12" />
      <path d="M6 12a6 6 0 0 0 12 0" />
      <path d="M8 18h8" />
    </svg>
  ),

  // Winding dotted zen path
  zen_path: (
    <svg {...D}>
      <circle cx="7" cy="5.5" r="1.5" />
      <path d="M7 7c0 3 4 3 4 6s-4 3-4 6" />
      <circle cx="7" cy="19" r="1.5" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PRAKRUTHI — Eco farmland icons
// ─────────────────────────────────────────────────────────────────────────────
const PRAKRUTHI_ICONS: Record<string, React.ReactNode> = {

  // Asymmetric branching canopy tree
  nature_amenities: (
    <svg {...D}>
      <path d="M12 21v-6" />
      <path d="M12 15C7 15 4 12 4 8.5a8 8 0 0 1 16 0C20 12 17 15 12 15z" />
      <path d="M12 15v-4M9.5 12l2.5-1M14.5 11L12 12" />
    </svg>
  ),

  // Four-petal open bloom, petals with visible gaps
  lush_bloom: (
    <svg {...D}>
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 10.5C12 10.5 10 7 12 4s2 6.5 0 6.5z" />
      <path d="M12 13.5C12 13.5 14 17 12 20s-2-6.5 0-6.5z" />
      <path d="M10.5 12C10.5 12 7 14 4 12s6.5-2 6.5 0z" />
      <path d="M13.5 12C13.5 12 17 10 20 12s-6.5 2-6.5 0z" />
    </svg>
  ),

  // Elongated teardrop with soft inner arc
  walking_trail: (
    <svg {...D}>
      <path d="M12 2.5C12 2.5 6 10 6 15.5a6 6 0 0 0 12 0C18 10 12 2.5 12 2.5z" />
      <path d="M9.5 17.5a4 4 0 0 0 5 0" />
    </svg>
  ),

  // A-frame with crossbar + ground stakes
  farming_zone: (
    <svg {...D}>
      <path d="M4 20L12 4l8 16" />
      <path d="M7.5 14h9" />
      <path d="M9 20v2M15 20v2" />
    </svg>
  ),

  // Broad leaf with side vein — rainwater harvesting
  rainwater_leaf: (
    <svg {...D}>
      <path d="M12 21C12 21 4 17 4 10c0-5 4-8 8-8s8 3 8 8c0 7-8 11-8 11z" />
      <path d="M12 21V10" />
      <path d="M12 14c-2-1-4-1.5-5-1" />
    </svg>
  ),

  // Swimmer with two wave lines — eco living
  eco_living: (
    <svg {...D}>
      <circle cx="18" cy="7" r="1.5" />
      <path d="M16.5 8.5L8 11l-4 1" />
      <path d="M12 10l2 3" />
      <path d="M3 15c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M3 19c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </svg>
  ),

  // Rounded shield with clean tick
  nurture_shield: (
    <svg {...D}>
      <path d="M12 22C12 22 4 18 4 11V6l8-3 8 3v5c0 7-8 11-8 11z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </svg>
  ),

  // Refined ₹ with diagonal clearly separated
  serene_rupee: (
    <svg {...D}>
      <path d="M7 5h10" />
      <path d="M7 9h10" />
      <path d="M7 5h4a3.5 3.5 0 0 1 0 7H7" />
      <path d="M11 12l5 7" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// VRUKSHA — Managed farm villa icons
// ─────────────────────────────────────────────────────────────────────────────
const VRUKSHA_ICONS: Record<string, React.ReactNode> = {

  // Roof arc sheltering three head circles
  clubhouse: (
    <svg {...D}>
      <path d="M2 11c2.5-4 5-6 10-6s7.5 2 10 6" />
      <circle cx="8" cy="15" r="1.5" />
      <circle cx="12" cy="14" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
      <path d="M8 16.5v3M12 15.5v3M16 16.5v3" />
      <path d="M4 21h16" />
    </svg>
  ),

  // Two bowls + utensils + rising steam
  shared_kitchen: (
    <svg {...D}>
      <path d="M5 13h6a3 3 0 0 1-6 0z" />
      <path d="M13 13h6a3 3 0 0 1-6 0z" />
      <path d="M4 8v4M4 8c-.5 0-1 .5-1 1.5S3.5 11 4 11" />
      <path d="M20 8v4" />
      <circle cx="20" cy="7" r="1" />
      <path d="M11.5 10c0-1 1-2 1-3M12.5 10c0-1 1-2 1-3" />
    </svg>
  ),

  // Skipping child + star burst
  play_grove: (
    <svg {...D}>
      <circle cx="10" cy="5" r="1.75" />
      <path d="M10 7v4" />
      <path d="M10 9l-3-2M10 9l3-1.5" />
      <path d="M10 11l-2 4M10 11l3 3.5" />
      <path d="M18 5l.5 1.5L20 7l-1.5.5L18 9l-.5-1.5L16 7l1.5-.5z" />
    </svg>
  ),

  // Two offset footprint ovals — walking stride
  earthen_trails: (
    <svg {...D}>
      <ellipse cx="9" cy="8" rx="2.5" ry="3.5" transform="rotate(-10 9 8)" />
      <path d="M7 5.5c-.5-.8-.3-1.5.3-1.5s.8.7.3 1.5" />
      <path d="M8.5 4.8c-.3-.9 0-1.6.6-1.5s.8.8.3 1.6" />
      <ellipse cx="15" cy="16" rx="2.5" ry="3.5" transform="rotate(10 15 16)" />
      <path d="M14 13.5c.5-.8 1.1-.8 1.3-.1s-.2 1.3-.8 1.2" />
      <path d="M15.5 13c.5-.9 1.1-.8 1.3 0s-.2 1.4-.9 1.2" />
    </svg>
  ),

  // Crescent moon cradling a teardrop — stillness
  retreat_wellness: (
    <svg {...D}>
      <path d="M17 12A7 7 0 1 1 9 5a5 5 0 0 0 8 7z" />
      <path d="M12 9c0 0-2 2.5-2 4a2 2 0 0 0 4 0c0-1.5-2-4-2-4z" />
    </svg>
  ),

  // Flame rising from an ellipse ring — conversation deck
  bonfire_circle: (
    <svg {...D}>
      <ellipse cx="12" cy="18" rx="7" ry="2.5" />
      <path d="M12 17c0 0-4-4-4-8 0-2 1.5-5 4-7 2.5 2 4 5 4 7 0 4-4 8-4 8z" />
      <path d="M12 17c0 0-1.5-2.5-1.5-5 0-1.5 1-3 1.5-4" />
    </svg>
  ),

  // Gate arch with padlock at crown
  gated_entry: (
    <svg {...D}>
      <path d="M4 21V9" />
      <path d="M20 21V9" />
      <path d="M4 9a8 8 0 0 1 16 0" />
      <path d="M4 21h6V13H4" />
      <path d="M20 21h-6V13h6" />
      <rect x="10.5" y="5" width="3" height="2.5" rx="0.5" />
      <path d="M11 5a1 1 0 0 1 2 0" />
    </svg>
  ),

  // Perspective road converging to a vanishing point
  paved_roads: (
    <svg {...D}>
      <path d="M3 21L12 8M21 21L12 8" />
      <path d="M12 21v-3M12 15v-3M12 9v-1" strokeDasharray="2 2" />
      <path d="M8 8h8" />
    </svg>
  ),

  // Three trees of graduating height on shared ground
  managed_plantation: (
    <svg {...D}>
      <path d="M5 18v-3" />
      <path d="M3 15c0-2.5 1-4 2-4s2 1.5 2 4H3z" />
      <path d="M12 18V9" />
      <path d="M9 13c0-3.5 1.5-5.5 3-5.5s3 2 3 5.5H9z" />
      <path d="M19 18v-4" />
      <path d="M17 14c0-2 1-3.5 2-3.5s2 1.5 2 3.5h-4z" />
      <path d="M2 18h20" />
    </svg>
  ),

  // Pipe elbow + drip dots + well circle
  drip_irrigation: (
    <svg {...D}>
      <path d="M5 9h8" />
      <path d="M13 9a2 2 0 0 1 2 2v2" />
      <path d="M15 13v3" />
      <path d="M13.5 16h3" />
      <path d="M12 19.5c0 0-.5-1-.5-1.5a.5.5 0 0 1 1 0c0 .5-.5 1.5-.5 1.5z" fill="currentColor" strokeWidth="0" />
      <path d="M15 20.5c0 0-.5-1-.5-1.5a.5.5 0 0 1 1 0c0 .5-.5 1.5-.5 1.5z" fill="currentColor" strokeWidth="0" />
      <path d="M18 19.5c0 0-.5-1-.5-1.5a.5.5 0 0 1 1 0c0 .5-.5 1.5-.5 1.5z" fill="currentColor" strokeWidth="0" />
      <circle cx="5" cy="9" r="2" />
      <path d="M5 7V5M3.5 5h3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PARVA — Sandalwood & farmland eco-retreat icons
// ─────────────────────────────────────────────────────────────────────────────
const PARVA_ICONS: Record<string, React.ReactNode> = {

    // 1. Sandalwood & Fruit Trees — split trunk, two distinct canopy lobes
    parva_dual_tree: (
      <svg {...D}>
        {/* shared trunk base */}
        <path d="M12 21v-5" />
        {/* trunk splits */}
        <path d="M12 16l-3-3M12 16l3-3" />
        {/* left canopy lobe — rounder, fruit-bearing */}
        <path d="M9 13C9 13 5 12 5 9a4 4 0 0 1 8 0c0 3-4 4-4 4z" />
        {/* right canopy lobe — taller, sandalwood */}
        <path d="M15 13C15 13 19 11.5 19 8.5a4 4 0 0 0-8 0c0 3 4 4.5 4 4.5z" />
        {/* small fruit dot on left lobe */}
        <circle cx="7.5" cy="10" r="0.6" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  
    // 2. 50+ Native & Fruit-bearing Plantations — seedling tray, three shoots
    parva_seedling_tray: (
      <svg {...D}>
        {/* tray / planter base */}
        <path d="M4 15h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z" />
        {/* tray rim */}
        <path d="M4 15l1-4h14l1 4" />
        {/* left shoot */}
        <path d="M8 15V9" />
        <path d="M8 12c0 0-2-1.5-2-3s2-2 2 0z" />
        {/* centre shoot — tallest */}
        <path d="M12 15V7" />
        <path d="M12 10c0 0-2-1.5-2-3s2-2 2 0z" />
        <path d="M12 10c0 0 2-1.5 2-3s-2-2-2 0z" />
        {/* right shoot */}
        <path d="M16 15V9" />
        <path d="M16 12c0 0 2-1.5 2-3s-2-2-2 0z" />
      </svg>
    ),
  
    // 3. Natural Seasonal Stream — wide river meander with a small pebble
    parva_stream: (
      <svg {...D}>
        {/* upper meander bank */}
        <path d="M3 8c3-3 5-2 7 0s4 3 7 0" />
        {/* lower meander bank */}
        <path d="M3 13c3-3 5-2 7 0s4 3 7 0" />
        {/* flowing current line between banks */}
        <path d="M5 10.5c2-1.5 4-1.5 6 0s4 1.5 7 0" strokeDasharray="2 2" />
        {/* pebble/stone in stream */}
        <ellipse cx="12" cy="18" rx="2.5" ry="1.2" />
      </svg>
    ),
  
    // 4. Bio-pool & Eco-recreation — leaf-shaped pool with inner ripple ring
    parva_biopool: (
      <svg {...D}>
        {/* leaf-shaped pool outline */}
        <path d="M12 3C12 3 4 8 4 14a8 8 0 0 0 16 0C20 8 12 3 12 3z" />
        {/* inner ripple — smaller concentric leaf */}
        <path d="M12 8C12 8 8 11.5 8 14a4 4 0 0 0 8 0C16 11.5 12 8 12 8z" />
        {/* centre calm dot */}
        <circle cx="12" cy="15.5" r="0.75" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  
    // 5. Camping Zones & Stargazing — dome tent + star above
    parva_camping: (
      <svg {...D}>
        {/* dome tent — semicircle body */}
        <path d="M4 18a8 8 0 0 1 16 0" />
        {/* tent base ground line */}
        <path d="M3 18h18" />
        {/* tent entrance arch */}
        <path d="M10 18v-3a2 2 0 0 1 4 0v3" />
        {/* tent guy-rope left */}
        <path d="M4 18L2 20" />
        {/* tent guy-rope right */}
        <path d="M20 18l2 2" />
        {/* four-point star above */}
        <path d="M12 4l.6 1.8L14.5 6l-1.9.6L12 8.5l-.6-1.9L9.5 6l1.9-.6z" />
      </svg>
    ),
  
    // 6. Gated Community 24×7 Security & CCTV — camera body + lens + sweep arc
    parva_security: (
      <svg {...D}>
        {/* camera body — trapezoid */}
        <path d="M4 9h10l3-2v8l-3-2H4V9z" />
        {/* lens circle */}
        <circle cx="8.5" cy="11.5" r="1.5" />
        {/* mount arm */}
        <path d="M9 9V7" />
        {/* wall bracket */}
        <path d="M7 7h4" />
        {/* sweep detection arc */}
        <path d="M17 7a6 6 0 0 1 0 9" />
        <path d="M19 8.5a4 4 0 0 1 0 6" />
      </svg>
    ),
  
    // 7. Organic Farming & Community Spaces — trowel turning soil with sprout
    parva_organic_farm: (
      <svg {...D}>
        {/* trowel blade */}
        <path d="M5 19l4-4" />
        <path d="M5 19c0 0-1-3 1-5s5-1 5-1l-6 6z" />
        {/* trowel handle */}
        <path d="M10 14l4-4" />
        <path d="M13 11l1.5-1.5a1 1 0 0 1 1.5 1.5L14.5 12.5" />
        {/* soil mound */}
        <path d="M8 19c2 0 5 .5 7 0" />
        {/* sprout rising from soil */}
        <path d="M12 19v-4" />
        <path d="M12 17c0 0-1.5-1.5-1.5-3s1.5-1.5 1.5 0z" />
        <path d="M12 16c0 0 1.5-1.5 1.5-3S12 11.5 12 13z" />
      </svg>
    ),
  
    // 8. Eco-retreat, Passive Income & Long-term Appreciation — ₹ on upward growth stem
    parva_appreciation: (
      <svg {...D}>
        {/* upward trending stem/arrow */}
        <path d="M6 18l4-5 3 2 5-7" />
        {/* arrowhead */}
        <path d="M15 8h3v3" />
        {/* rupee symbol at base — compact */}
        <path d="M4 4h7" />
        <path d="M4 7h7" />
        <path d="M4 4h3a2.5 2.5 0 0 1 0 5H4" />
        <path d="M7 9l4 6" />
      </svg>
    ),
  };

// ─────────────────────────────────────────────────────────────────────────────
// MASTER REGISTRY — merge all sections
// New project? Create a NEW_PROJECT_ICONS block above, then spread it here.
// ─────────────────────────────────────────────────────────────────────────────
export const ICONS: Record<string, React.ReactNode> = {
  ...BASE_ICONS,
  ...RAAGA_ICONS,
  ...PRAKRUTHI_ICONS,
  ...VRUKSHA_ICONS,
  ...PARVA_ICONS
};

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC API
// ─────────────────────────────────────────────────────────────────────────────

/** Returns the ReactNode for a given icon key, or a fallback clock icon. */
export const getIcon = (key: string): React.ReactNode =>
  ICONS[key] ?? (
    <svg {...D}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 3" />
    </svg>
  );

/** Drop-in wrapper used by ProjectPage highlights grid. */
export const HighlightIcon: React.FC<{ iconKey: string }> = ({ iconKey }) => (
  <div className="pp-highlight-icon">{getIcon(iconKey)}</div>
);

export default ICONS;