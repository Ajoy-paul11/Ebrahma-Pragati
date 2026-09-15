import { IconLeaf, IconLock, IconSparkles } from "@tabler/icons-react";
import React, { useState, useEffect, useCallback, useRef } from "react";
import ContactModal from "./ui/ContactModal";
import { getIcon } from "./ui/ProjectIcons";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StatItem {
  value: string;
  unit: string;
  label: string;
}

export interface ConfigRow {
  configuration: string;
  area: string;
  price?: string;
}

export interface HighlightItem {
  iconKey: string;
  label: string;
}

export interface HomeTypeSpec {
  text: string;
}

export interface HomeType {
  number: string; // "01", "02", etc.
  name: string;
  description: string;
  specs: HomeTypeSpec[];
  images: string[];
  reversed?: boolean;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
}

export interface ProjectPageProps {
  // Hero
  heroImage: string;
  projectName: string;
  heroSubtext: string;

  // Intro band
  introBandTitle: string;
  introBandText: string;
  introFeatures: string[];

  // Land Details
  landDetailsTitle?: string;
  landDetailsDescription?: string;
  landStats?: StatItem[];
  landImages?: string[];

  // Configuration
  configurations: ConfigRow[];

  // Project Highlights
  highlights: HighlightItem[];

  // Home Types (optional — pass [] to hide)
  homeTypes?: HomeType[];

  // Glimpses
  glimpsesImages: string[];

  // Nearby
  nearbyAttractions: NearbyAttraction[];

  // Route Map
  routeMapImage: string;
  // routeMapAddress: string;
}

// ─── SVG Icon Library (thin-stroke, minimal) ─────────────────────────────────


// Fallback icon if key not found
const FallbackIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const HighlightIcon: React.FC<{ iconKey: string }> = ({ iconKey }) => (
  <div className="pp-highlight-icon">{getIcon(iconKey) ?? <FallbackIcon />}</div>
);

// ─── SVG Background Patterns ─────────────────────────────────────────────────

const WheatPattern = () => (
  <svg
    className="pp-leaf-pattern"
    viewBox="0 0 600 400"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    {[
      { x: 40, y: 50, r: -25, s: 0.7 },
      { x: 90, y: 120, r: 15, s: 0.8 },
      { x: 150, y: 70, r: -10, s: 0.6 },
      { x: 220, y: 40, r: 20, s: 0.75 },
      { x: 300, y: 60, r: -15, s: 0.9 },
      { x: 380, y: 90, r: 25, s: 0.7 },
      { x: 460, y: 50, r: -20, s: 0.85 },
      { x: 540, y: 100, r: 30, s: 0.75 },

      { x: 70, y: 220, r: -30, s: 0.8 },
      { x: 140, y: 180, r: 10, s: 0.65 },
      { x: 230, y: 210, r: -15, s: 0.75 },
      { x: 320, y: 170, r: 20, s: 0.85 },
      { x: 410, y: 220, r: -10, s: 0.7 },
      { x: 500, y: 190, r: 25, s: 0.8 },

      { x: 50, y: 350, r: -20, s: 0.75 },
      { x: 170, y: 320, r: 15, s: 0.9 },
      { x: 280, y: 360, r: -10, s: 0.65 },
      { x: 390, y: 330, r: 20, s: 0.8 },
      { x: 500, y: 340, r: -25, s: 0.7 },
      { x: 570, y: 300, r: 15, s: 0.75 },
    ].map((w, i) => (
      <g
        key={i}
        transform={`translate(${w.x},${w.y}) rotate(${w.r}) scale(${w.s})`}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-70"
          stroke="rgba(247,195,95,0.10)"
          strokeWidth="1.5"
        />

        {[-60, -50, -40, -30, -20].map((y, idx) => (
          <g key={idx}>
            <path
              d={`M0 ${y} Q 12 ${y - 6} 16 ${y - 16}`}
              fill="none"
              stroke="rgba(247,195,95,0.10)"
              strokeWidth="1.5"
            />
            <path
              d={`M0 ${y} Q -12 ${y - 6} -16 ${y - 16}`}
              fill="none"
              stroke="rgba(247,195,95,0.10)"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </g>
    ))}
  </svg>
);

const CropRowsPattern = () => (
  <svg
    className="pp-leaf-pattern"
    viewBox="0 0 600 400"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    {[...Array(12)].map((_, i) => (
      <path
        key={i}
        d={`M${-100 + i * 60} 0 Q ${50 + i * 60} 200 ${-100 + i * 60} 400`}
        fill="none"
        stroke="rgba(247,195,95,0.08)"
        strokeWidth="2"
      />
    ))}
  </svg>
);

const SubtleGridPattern = () => (
  <svg className="pp-grid-pattern" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern
        id="pp-grid"
        width="48"
        height="48"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 48 0 L 0 0 0 48"
          fill="none"
          stroke="rgba(38,60,40,0.06)"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pp-grid)" />
  </svg>
);

// const DiamondPattern = () => (
//   <svg className="pp-diamond-pattern" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <pattern
//         id="pp-diamond"
//         width="40"
//         height="40"
//         patternUnits="userSpaceOnUse"
//         patternTransform="rotate(45)"
//       >
//         <rect width="1" height="40" fill="rgba(247,195,95,0.06)" />
//         <rect width="40" height="1" fill="rgba(247,195,95,0.06)" />
//       </pattern>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#pp-diamond)" />
//   </svg>
// );

// ─── Slider ───────────────────────────────────────────────────────────────────

interface SliderProps {
  images: string[];
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
}

// ─── Auto-advancing image slider ─────────────────────────────────────────────

interface SliderProps {
  images: string[];
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
}

export const ImageSlider: React.FC<SliderProps> = ({
  images,
  autoPlay = true,
  intervalMs = 4000,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  // const prev = useCallback(
  //   () => setCurrent((c) => (c - 1 + count) % count),
  //   [count]
  // );
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, next, count]);

  return (
    <div className={`pp-slider ${className}`}>
      <div
        className="pp-slider-inner"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} loading="lazy" />
        ))}
      </div>
      {count > 1 && (
        <>
          {/* <button className="pp-slider-nav prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="pp-slider-nav next" onClick={next} aria-label="Next">
            ›
          </button> */}
          <div className="pp-slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`pp-slider-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose }) => {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    setCurrent(index);
  }, [index]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="pp-lightbox" onClick={onClose}>
      <div className="pp-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="pp-lb-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <button className="pp-lb-nav prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <img src={images[current]} alt={`Glimpse ${current + 1}`} />
        <button className="pp-lb-nav next" onClick={next} aria-label="Next">
          ›
        </button>
        <div className="pp-lb-counter">
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

// ─── Reveal on scroll ────────────────────────────────────────────────────────

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
};

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`pp-reveal${visible ? " visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Section Tag ─────────────────────────────────────────────────────────────

// const SectionTag: React.FC<{ label: string; light?: boolean }> = ({
//   label,
//   light,
// }) => (
//   <div className={`pp-section-tag${light ? " pp-section-tag-light" : ""}`}>
//     <span>{label}</span>
//   </div>
// );

// ─── Main Component ──────────────────────────────────────────────────────────

export const ProjectPage: React.FC<ProjectPageProps> = ({
  heroImage,
  projectName,
  heroSubtext,
  introBandTitle,
  introBandText,
  introFeatures,
  landDetailsTitle,
  landDetailsDescription,
  landStats,
  landImages,
  configurations,
  highlights,
  homeTypes = [],
  glimpsesImages,
  nearbyAttractions,
  routeMapImage,
  // routeMapAddress,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);

  return (
    <div className="pp-root">
      {/* ── HERO ── */}
      <section className="pp-hero">
        <img src={heroImage} alt={projectName} className="pp-hero-img" />
        <div className="pp-hero-overlay" />
        <div className="pp-hero-content">
          <div className="pp-hero-subtext-wrap">
            <p className="pp-hero-subtext">{heroSubtext}</p>
          </div>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <div className="pp-intro-band">
        <WheatPattern />
        <div className="pp-intro-band-inner">
          <h2>"{introBandTitle}"</h2>
          <p>{introBandText}</p>
          <div className="pp-intro-features">
            {introFeatures.map((f, i) => (
              <span key={i} className="pp-intro-feat">
                <IconSparkles className=" inline-flex " /> {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── LAND DETAILS ── */}
      { landImages && <section className="pp-section pp-details-section" id="land-details">
        <SubtleGridPattern />
        <div className="pp-details-grid">
          <Reveal>
            {/* <SectionTag label="Land Details" /> */}
            <h2 className="pp-section-title">{landDetailsTitle}</h2>
            <p className="pp-section-subtitle">{landDetailsDescription}</p>
            <div className="pp-stat-grid">
              {landStats?.map((s, i) => (
                <div key={i} className="pp-stat-card">
                  <div className="pp-stat-val">
                    {s.value} {s.unit}
                  </div>
                  {/* <div className="pp-stat-unit"></div> */}
                  <div className="pp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <ImageSlider images={landImages ?? []} className="pp-land-slider" />
          </Reveal>
        </div>
      </section>}

      {/* <div className="pp-divider" /> */}

      {/* ── CONFIGURATION TABLE ── */}
      <section className="pp-config-section">
        <SubtleGridPattern />
        <Reveal>
          {/* <SectionTag label="Plot Configurations" light /> */}
          <h2 className="pp-section-title text-center">Configurations</h2>
        </Reveal>
        <Reveal delay={150}>
          <table className="pp-config-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Area (Sq.Ft)</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((row, i) => (
                <tr key={i}>
                  <td>{row.configuration}</td>
                  <td>{row.area}</td>
                  <td className=" cursor-pointer">
                    <span className="pp-config-badge" onClick={openModal}>
                      <IconLock /> {row.price ?? "Contact Sales"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* ── PROJECT HIGHLIGHTS ── */}
      <section className="pp-highlights-section">
        <CropRowsPattern />
        <Reveal className="pp-highlights-header">
          {/* <SectionTag label="Why This Project" light /> */}
          <h2 className="pp-section-title pp-title-light pp-center">
            <span className="pp-title-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C8 6 4 9 4 13a8 8 0 0 0 16 0C20 9 16 6 12 2z" />
                <path d="M12 22V13" />
              </svg>
            </span>
            Project Highlights
          </h2>
        </Reveal>
        <div className="pp-highlights-grid">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <div className="pp-highlight-card">
                <HighlightIcon iconKey={h.iconKey} />
                <div className="pp-highlight-name">{h.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pp-divider pp-divider-light" />

      {/* ── HOME TYPES (optional) ── */}
      {homeTypes.length > 0 && (
        <section className="pp-hometypes-section">
          {/* <Reveal className="pp-hometypes-header">
            <SectionTag label="Residence Types" />
            <h2 className="pp-section-title pp-center">Your Sacred Abode</h2>
            <p className="pp-section-subtitle pp-center pp-subtitle-narrow">
              {homeTypes.length === 1
                ? "A thoughtfully designed residence in harmony with nature."
                : `${homeTypes.length} distinct residences, each an ode to craftsmanship and nature.`}
            </p>
          </Reveal> */}
          {homeTypes.map((ht, i) => (
            <div
              key={i}
              className={`pp-hometype${
                ht.reversed || i % 2 === 1 ? " pp-hometype-reverse" : ""
              }`}
            >
              <Reveal className="pp-hometype-info" delay={100}>
                {/* <SectionTag label={`Residence ${ht.number}`} /> */}
                <h3 className="pp-hometype-name">Introducing — {ht.name}</h3>
                <p className="pp-hometype-desc">{ht.description}</p>
                <ul className="pp-hometype-specs">
                  {ht.specs.map((spec, j) => (
                    <li key={j}>
                      <IconLeaf />
                      {spec.text}
                    </li>
                  ))}
                </ul>
                <button className="pp-btn-primary" onClick={openModal}>
                  Know More →
                </button>
              </Reveal>
              <Reveal delay={200}>
                <ImageSlider images={ht.images} />
              </Reveal>
            </div>
          ))}
        </section>
      )}

      {/* ── GLIMPSES ── */}
      <section className="pp-glimpses-section">
        <Reveal className="pp-glimpses-header">
          {/* <SectionTag label="Gallery" light /> */}
          <h2 className="pp-section-title pp-title-light pp-center">
            Glimpses of {projectName}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="pp-glimpses-grid">
            {glimpsesImages.map((src, i) => (
              <div
                key={i}
                className="pp-glimpse-item"
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`View glimpse ${i + 1}`}
                onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(i)}
              >
                <img src={src} alt={`Glimpse ${i + 1}`} loading="lazy" />
                <div className="pp-glimpse-overlay">
                  <div className="pp-glimpse-expand">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── NEARBY & ROUTE ── */}
      <section className="pp-nearby-section">
        <SubtleGridPattern />
        <div className="pp-nearby-inner">
          <Reveal>
            {/* <SectionTag label="Surroundings" /> */}
            <h2 className="pp-section-title">Nearby Attractions</h2>
            <ul className="pp-nearby-list">
              {nearbyAttractions.map((a, i) => (
                <li key={i} className="pp-nearby-item">
                  {/* <span className="pp-nearby-dot" /> */}
                  <IconLeaf />
                  {a.name}
                  <span className="pp-nearby-dist">{a.distance}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            {/* <SectionTag label="Navigation" /> */}
            <h2 className="pp-section-title">Route Map</h2>
            <div className="pp-route-wrap">
              <img
                src={routeMapImage}
                alt="Route map"
                className=" cursor-pointer"
              />
              {/* <div className="pp-route-label">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="pp-route-pin"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>
                  <strong>{projectName}</strong> · {routeMapAddress}
                </span>
              </div> */}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={glimpsesImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Lead form */}
      <ContactModal isOpen={isModelOpen} onClose={closeModal} />
    </div>
  );
};

export default ProjectPage;
