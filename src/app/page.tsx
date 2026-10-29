"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Factory,
  Globe2,
  Layers3,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  X,
  Award,
  Recycle,
  Leaf,
  SlidersHorizontal,
  Send,
  Phone,
  Mail,
  MapPin,
  Eye,
  Check,
  Box,
  Cpu,
  ChevronRight,
  MessageSquare,
  ArrowUp,
} from "lucide-react";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// Showcase products created from the user's uploaded images
const heroMarqueeItems = [
  {
    src: "/pouch-almonds-shrinath-luxury.png",
    title: "Shrinath Premium Almonds Pouch",
    subtitle: "Soft-Touch Matte • Zipper • Oval Window",
    badge: "Shrinath Signature",
  },
  {
    src: "/pouch-moong.jpg",
    title: "PureHarvest Moong Whole Pouch",
    subtitle: "Wave Optical Window • 9-Color Gravure",
    badge: "High Barrier",
  },
  {
    src: "/pouch-rice.jpg",
    title: "Harvest Organics Rice Gusset Pouch",
    subtitle: "Flat Bottom Quad Seal • Heavy Duty",
    badge: "Staples & Grain",
  },
  {
    src: "/pouch-nuts-kraft.jpg",
    title: "Eco-Branding Mixed Nuts Kraft Pouch",
    subtitle: "100% Recyclable • Laser Leaf Window",
    badge: "Eco-Friendly",
  },
  {
    src: "/pouch-almonds-shrinath.png",
    title: "Shrinath Reserve Almonds Stand-Up",
    subtitle: "Hermetic Seal • Oxygen Scavenger Core",
    badge: "Dry Fruits",
  },
];

// Verified corporate scale metrics for Shrinath Rotopack (SLPL)
const statistics = [
  { value: "46+", label: "Years of Heritage (Est. 1978)", icon: Factory },
  {
    value: "60,000",
    label: "Metric Tons / Annum Capacity",
    icon: Layers3,
  },
  { value: "₹1,000+ Cr", label: "Group Annual Turnover", icon: ShieldCheck },
  { value: "25+", label: "Global Export Destinations", icon: Globe2 },
  { value: "1,000+", label: "Packaging Specialists", icon: CheckCircle2 },
];

// Detailed products catalog utilizing the user's packaging assets
const catalogProducts = [
  {
    id: "almonds-shrinath",
    number: "01",
    name: "Shrinath Premium Dry Fruit Stand-Up Pouch",
    category: "Signature Stand-Up Pouches",
    tag: "Luxury Soft-Touch",
    badge: "Shrinath Branded",
    image: "/pouch-almonds-shrinath-luxury.png",
    description:
      "Engineered with a premium velvety soft-touch matte exterior, hermetic press-to-close zipper, and an optical oval display window that elevates shelf presence.",
    substrate: "Matte BOPP / Metalized PET / High-Tack PE",
    thickness: "110 - 130 Microns",
    barrierLevel: "Ultra-High (WVTR < 0.5, OTR < 0.5)",
    shelfLife: "Up to 24 Months",
    closure: "Resealable Grip-Lock Zipper + Tear Notches",
    applications: "Almonds, Cashews, Pistachios, Gourmet Chocolates, Superfoods",
    highlights: [
      "Custom 3D Shrinath foil & rotogravure micro-register printing",
      "Anti-fog crystal clear oval product viewing window",
      "Reinforced K-seal bottom gusset for stable vertical display",
      "Oxygen and moisture barrier keeps nuts crisp and fresh",
    ],
  },
  {
    id: "moong-whole",
    number: "02",
    name: "PureHarvest Whole Moong Contour Pouch",
    category: "Grains, Pulses & Superfoods",
    tag: "Contour Wave Window",
    badge: "High Barrier",
    image: "/pouch-moong.jpg",
    description:
      "A sophisticated dual-tone stand-up pouch featuring a graceful organic wave transparent window, showcasing vibrant green whole moong pulses with clarity.",
    substrate: "PET / ALOx Barrier / Linear Low-Density PE",
    thickness: "95 - 115 Microns",
    barrierLevel: "High Moisture & Aroma Barrier",
    shelfLife: "Up to 18 Months",
    closure: "Heat-Sealed Top + Pre-formed Tear Notch",
    applications: "Pulses, Lentils, Quinoa, Millets, Whole Spices",
    highlights: [
      "9-Color high-definition rotogravure surface & reverse printing",
      "Custom die-cut wave window with optical anti-glare finish",
      "Puncture-resistant laminate withstands hard grain edges",
      "Food-grade US FDA and BRCGS compliant inner contact layer",
    ],
  },
  {
    id: "organic-rice",
    number: "03",
    name: "Harvest Organics Rice Flat-Bottom Gusset Pouch",
    category: "Bulk Staples & Agricultural Packaging",
    tag: "Flat-Bottom Quad Seal",
    badge: "High Strength",
    image: "/pouch-rice.jpg",
    description:
      "Heavy-duty 4-corner sealed flat-bottom gusset pouch designed for premium grains. Maximizes shelf space with 5 printable panels and high drop impact resistance.",
    substrate: "Matte BOPA (Nylon) / Met-PET / Heavy-Duty Co-Ex PE",
    thickness: "120 - 150 Microns",
    barrierLevel: "Puncture & Drop Proof High Barrier",
    shelfLife: "Up to 24 Months",
    closure: "Side-Gusset Fold / Easy-Pour / Top Seal",
    applications: "Basmati Rice, Organic Grains, Flour, Specialty Pet Nutrition",
    highlights: [
      "Flat rectangular base provides 100% standing stability",
      "Reinforced multi-layer nylon core absorbs drop shock",
      "Center transparent portal displays rice purity and grain length",
      "Premium tactile paper-touch exterior coating option",
    ],
  },
  {
    id: "nuts-kraft",
    number: "04",
    name: "Eco-Branding Natural Nuts Kraft Pouch",
    category: "Eco-Friendly & Sustainable Packaging",
    tag: "100% Biodegradable & Recyclable",
    badge: "Eco-Conscious",
    image: "/pouch-nuts-kraft.jpg",
    description:
      "Manufactured from natural unbleached FSC-certified kraft paper with a distinctive precision laser-cut leaf window and bio-polymer barrier lining.",
    substrate: "Natural Kraft Paper / Bio-Barrier PLA / Compostable Sealant",
    thickness: "120 - 140 Microns",
    barrierLevel: "Eco-Shield Moisture & Light Barrier",
    shelfLife: "12 to 18 Months",
    closure: "Bio-Based Zipper + Euro Slot Hang Hole",
    applications: "Organic Mixed Nuts, Trail Mixes, Dried Berries, Artisanal Granola",
    highlights: [
      "FSC-certified renewable natural kraft outer layer",
      "Laser die-cut botanical leaf window reveals mixed nuts inside",
      "Printed with low-VOC water-based environmentally friendly inks",
      "Certified industrially compostable / circular economy ready",
    ],
  },
];

// Interactive hotspot definitions for the Shrinath Almond Pouch
const pouchHotspots = [
  {
    id: "notch",
    step: "01",
    shortName: "Tear Notch",
    title: "Laser-Scored Tear Notch",
    subtitle: "Clean Effortless Opening",
    description:
      "Precision laser micro-scoring ensures a crisp, straight tear without tearing across the pouch face or damaging the resealable zipper below.",
    top: "14%",
    left: "18%",
  },
  {
    id: "zipper",
    step: "02",
    shortName: "Grip Zipper",
    title: "Hermetic Press-to-Close Zipper",
    subtitle: "Preserves Crunch & Aroma",
    description:
      "Ultra-reliable acoustic lock zipper provides tactile and audible feedback when closing, sealing out ambient moisture and oxygen after repeated openings.",
    top: "22%",
    left: "50%",
  },
  {
    id: "brand",
    step: "03",
    shortName: "3D Shree Seal",
    title: "Shrinath 3D Rotogravure Seal",
    subtitle: "Micro-Register Print Precision",
    description:
      "Rendered via high-speed electronic cylinder engraving with micro-meter register control, producing vibrant metallic sapphire and golden accents.",
    top: "37%",
    left: "50%",
  },
  {
    id: "window",
    step: "04",
    shortName: "Clear Window",
    title: "Crystal-Clear Anti-Fog Window",
    subtitle: "Showcases Product Quality",
    description:
      "Specially formulated optical barrier polymer keeps the window mist-free under temperature fluctuations, giving buyers an unobstructed view of the whole almonds.",
    top: "60%",
    left: "50%",
  },
  {
    id: "matte",
    step: "05",
    shortName: "Velvet Matte",
    title: "Soft-Touch Matte Finish",
    subtitle: "Velvety In-Hand Luxury",
    description:
      "Premium tactile coating eliminates harsh reflections while delivering a soft, velvet-smooth tactile texture that signals ultra-premium brand quality.",
    top: "76%",
    left: "22%",
  },
  {
    id: "gusset",
    step: "06",
    shortName: "K-Seal Base",
    title: "Reinforced K-Seal Base",
    subtitle: "Rock-Solid Shelf Presentation",
    description:
      "Doyen and K-seal engineered bottom geometry creates a wide, self-supporting platform that keeps the pouch upright on retail supermarket shelves under full load.",
    top: "88%",
    left: "50%",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={
        isInView || reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d97706] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
      <span className="h-2 w-2 rounded-full bg-[#d97706] shadow-sm shadow-[#d97706]/40" />
      {children}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<(typeof catalogProducts)[0] | null>(null);
  const [activeHotspot, setActiveHotspot] = useState(pouchHotspots[2]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Configurator state
  const [configFormat, setConfigFormat] = useState("standup");
  const [configFill, setConfigFill] = useState("nuts");
  const [configBarrier, setConfigBarrier] = useState("ultra");
  const [configFinish, setConfigFinish] = useState("softtouch");
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About SLPL", href: "#about" },
    { label: "Packaging Showcase", href: "#products" },
    { label: "Pouch Anatomy", href: "#anatomy" },
    { label: "Configurator", href: "#customizer" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact & RFQ", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Filtered products
  const filteredProducts =
    activeCategory === "all"
      ? catalogProducts
      : catalogProducts.filter((p) => {
          if (activeCategory === "standup") return p.id.includes("almonds") || p.id.includes("moong");
          if (activeCategory === "gusset") return p.id.includes("rice");
          if (activeCategory === "eco") return p.id.includes("kraft");
          return true;
        });

  return (
    <main
      id="home"
      className="min-h-screen bg-[#fcfbf9] text-[#0e2233] selection:bg-[#0b3b7b] selection:text-white"
    >
      {/* Top Banner Notice: Shrinath Rotopack Global Standards - mobile optimized */}
      <div className="bg-[#0c1e2e] py-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white/80 sm:py-2.5 sm:px-6 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden items-center gap-2 md:flex">
            <Award size={13} className="text-[#d97706]" />
            <span>BRCGS Packaging Materials Grade AA Certified Plant</span>
          </div>

          <div className="mx-auto flex items-center justify-center gap-2 text-center text-[10px] sm:text-xs md:mx-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate">Hyderabad, India • Shipping Worldwide to 25+ Nations</span>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+914027260471"
              className="transition-colors hover:text-[#d97706]"
            >
              +91 40 2726 0471
            </a>
            <span className="text-white/30">|</span>
            <a
              href="mailto:globalsales@slplindia.com"
              className="text-[#d97706] hover:underline"
            >
              globalsales@slplindia.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-[#0e2233]/10 bg-[#fcfbf9]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[70px] max-w-[1440px] items-center justify-between gap-3 px-3.5 sm:min-h-[82px] sm:px-8 lg:px-12">
          {/* Top-Left Most Corner: Official Shrinath Rotopack Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Shrinath Rotopack Home"
            className="group flex shrink-0 items-center transition-transform active:scale-95 hover:scale-[1.01]"
          >
            <div className="relative flex items-center overflow-hidden rounded-xl border border-white/90 bg-white/95 px-2 py-1 shadow-sm backdrop-blur-md sm:px-3 sm:py-1.5 sm:shadow-md sm:shadow-[#0b3b7b]/10">
              <img
                src="/shrinath-logo-nav.png"
                alt="Shrinath Rotopack - Adding value to your Creation"
                className="h-8 w-auto object-contain transition-all sm:h-11 md:h-12"
              />
            </div>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors hover:text-[#0b3b7b] ${
                  index === 0
                    ? "font-bold text-[#0b3b7b]"
                    : "font-medium text-[#4c5f6c]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="#customizer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#0b3b7b]/20 bg-white px-3.5 py-2 text-xs font-bold text-[#0b3b7b] shadow-sm transition hover:border-[#d97706] hover:text-[#d97706]"
            >
              <SlidersHorizontal size={13} />
              Configurator
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0b3b7b] to-[#144a94] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#0b3b7b]/25 transition hover:shadow-lg hover:shadow-[#0b3b7b]/35 hover:-translate-y-0.5"
            >
              Request Sample Kit
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Right Controls: Quick Call + Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+914027260471"
              aria-label="Call Shrinath Rotopack"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b3b7b]/10 text-[#0b3b7b] active:scale-95"
            >
              <Phone size={18} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0e2233]/15 bg-white text-[#0e2233] shadow-sm active:scale-95"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Frosted Glass & Quick Actions */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-b border-[#0e2233]/10 bg-[#fcfbf9]/98 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col divide-y divide-[#0e2233]/5">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-3 text-sm font-semibold text-[#0e2233] active:text-[#0b3b7b]"
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} className="text-[#d97706]" />
                  </a>
                ))}
              </div>

              {/* Mobile Drawer Action Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a
                  href="#customizer"
                  onClick={closeMenu}
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-2xl border border-[#0b3b7b]/25 bg-white py-2.5 text-xs font-bold text-[#0b3b7b] shadow-sm"
                >
                  <SlidersHorizontal size={14} />
                  Configurator
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-[#0b3b7b] to-[#124d9c] py-2.5 text-xs font-bold text-white shadow-md shadow-[#0b3b7b]/20"
                >
                  Sample Kit <ArrowRight size={14} />
                </a>
              </div>

              {/* Direct WhatsApp / Phone Contact */}
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#0c1e2e] p-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60">Packaging Support</p>
                    <p className="text-xs font-bold text-white">+91 40 2726 0471</p>
                  </div>
                </div>
                <a
                  href="tel:+914027260471"
                  className="rounded-xl bg-[#d97706] px-3 py-1.5 text-[10px] font-bold text-white active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section with Live Marquee of Uploaded Pouch Products */}
      <div id="hero">
        <AnimatedMarqueeHero
          tagline="Global Flexible Packaging Manufacturer"
          title={
            <>
              Packaging that <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#0b3b7b] via-[#1554a7] to-[#d97706] bg-clip-text text-transparent">
                protects value & elevates brands.
              </span>
            </>
          }
          description="Shrinath Rotopack (SLPL) partners with leading FMCG, food, and agricultural brands worldwide to engineer bespoke stand-up pouches, high-barrier laminates, and sustainable rotogravure packaging that commands attention."
          ctaText="Explore Packaging Solutions"
          items={heroMarqueeItems}
          className="pb-8 pt-8 sm:pb-12 sm:pt-16 lg:pt-20"
        />
      </div>

      {/* Corporate Scale & Certified Capabilities Strip - 100% Balanced on Phones */}
      <section
        aria-label="Company statistics"
        className="relative z-10 border-y border-[#0e2233]/10 bg-white shadow-sm"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-3 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-12">
          {statistics.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobile = index === 4;

            return (
              <Reveal
                key={item.label}
                delay={index * 0.04}
                className={isLastOnMobile ? "col-span-2 sm:col-span-1" : ""}
              >
                <div
                  className={`group flex h-full flex-col items-center justify-center px-2 py-6 text-center transition-colors hover:bg-[#fbfaf6] sm:px-6 sm:py-9 ${
                    index < 4
                      ? "border-b border-[#0e2233]/10 lg:border-b-0"
                      : ""
                  } ${
                    index % 2 === 0 ? "border-r border-[#0e2233]/10 lg:border-r" : "lg:border-r"
                  } ${isLastOnMobile ? "border-r-0" : ""}`}
                >
                  <div className="mb-2.5 rounded-xl bg-[#0b3b7b]/10 p-2.5 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0b3b7b] sm:mb-3 sm:p-3">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#0b3b7b] transition-colors group-hover:text-white"
                    />
                  </div>
                  <p className="text-xl font-extrabold tracking-tight text-[#0e2233] sm:text-2xl md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 max-w-44 text-[11px] font-semibold leading-relaxed text-[#5e707d] sm:text-xs md:text-sm">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured Innovation: The Anatomy of a High-Performance Shrinath Pouch (Mobile-Optimized) */}
      <section
        id="anatomy"
        className="scroll-mt-20 bg-gradient-to-b from-white via-[#fbf9f4] to-[#f4f1e8] px-3.5 py-14 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Precision Engineering</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                The Anatomy of a{" "}
                <span className="bg-gradient-to-r from-[#0b3b7b] to-[#d97706] bg-clip-text text-transparent">
                  World-Class Pouch
                </span>
              </h2>
              <p className="mt-2.5 px-2 text-xs leading-relaxed text-[#51636f] sm:mt-4 sm:px-0 sm:text-base">
                Discover the architectural layers, barrier science, and bespoke finishing that make Shrinath Rotopack pouches the first choice for premium international brands.
              </p>
            </div>
          </Reveal>

          {/* Quick-Tap Feature Pills for Phone Users */}
          <div className="mt-6 flex w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:hidden">
            {pouchHotspots.map((h) => {
              const isActive = activeHotspot.id === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHotspot(h)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#0b3b7b] text-white shadow-md shadow-[#0b3b7b]/20"
                      : "bg-white text-[#4f606e] border border-[#0e2233]/15"
                  }`}
                >
                  {h.step}. {h.shortName}
                </button>
              );
            })}
          </div>

          {/* Interactive Inspector Grid */}
          <div className="mt-6 grid items-center gap-8 sm:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Center Product Stage with Interactive Hotspots */}
            <Reveal className="relative mx-auto flex w-full max-w-md flex-col items-center">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0b3b7b]/15 via-amber-300/10 to-transparent blur-2xl sm:-inset-4" />

              <div className="relative w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-b from-[#f8f6f0] to-[#ece7dc] p-5 shadow-xl shadow-[#0e2233]/10 sm:p-8 sm:shadow-2xl">
                {/* Brand Seal Pill on Stage */}
                <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#0b3b7b] shadow-sm backdrop-blur sm:left-6 sm:top-6 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                  Shrinath Signature Stand-Up Pouch
                </div>

                {/* Vertical Pouch Image - phone friendly height */}
                <div className="relative mx-auto flex h-[380px] w-full items-center justify-center sm:h-[480px] lg:h-[520px]">
                  <img
                    src="/pouch-almonds-shrinath-luxury.png"
                    alt="Shrinath Premium Almonds Stand-Up Pouch with 3D Logo"
                    className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Pulsing Interactive Hotspot Pins - touch friendly */}
                  {pouchHotspots.map((hotspot) => {
                    const isActive = activeHotspot.id === hotspot.id;
                    return (
                      <button
                        key={hotspot.id}
                        type="button"
                        aria-label={hotspot.title}
                        onClick={() => setActiveHotspot(hotspot)}
                        style={{ top: hotspot.top, left: hotspot.left }}
                        className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2 focus:outline-none"
                      >
                        <span className="relative flex h-8 w-8 items-center justify-center">
                          <span
                            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                              isActive ? "bg-[#d97706]" : "bg-[#0b3b7b]"
                            }`}
                          />
                          <span
                            className={`relative inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black text-white shadow-lg transition-transform group-hover:scale-125 ${
                              isActive
                                ? "bg-[#d97706] ring-4 ring-amber-200"
                                : "bg-[#0b3b7b] ring-2 ring-white"
                            }`}
                          >
                            +
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Sub-label under pouch */}
                <div className="mt-3 flex items-center justify-between border-t border-[#0e2233]/10 pt-2.5 text-[10px] font-semibold text-[#6e7f8b] sm:text-[11px]">
                  <span>Matte BOPP / Met-PET / PE</span>
                  <span className="text-[#d97706]">Tap pins or pills above</span>
                </div>
              </div>
            </Reveal>

            {/* Hotspot Detailed Inspector Card */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white bg-white/95 p-6 shadow-xl shadow-[#0e2233]/5 backdrop-blur-sm sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b3b7b]/10 px-2.5 py-1 text-[11px] font-bold text-[#0b3b7b] sm:px-3 sm:text-xs">
                    <Sparkles size={13} className="text-[#d97706]" />
                    Interactive Feature
                  </span>
                  <span className="text-[11px] font-bold text-[#d97706] sm:text-xs">
                    {activeHotspot.step} of 06
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0e2233] sm:mt-6 sm:text-3xl">
                  {activeHotspot.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#d97706] sm:text-sm">
                  {activeHotspot.subtitle}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#51636f] sm:mt-5 sm:text-base">
                  {activeHotspot.description}
                </p>

                {/* Hotspot Selector Quick Pills (Desktop) */}
                <div className="mt-6 border-t border-[#0e2233]/10 pt-5 hidden sm:block">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-[#6b7c88]">
                    Explore all architectural features:
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {pouchHotspots.map((h) => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => setActiveHotspot(h)}
                        className={`rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                          activeHotspot.id === h.id
                            ? "bg-[#0b3b7b] text-white shadow-md shadow-[#0b3b7b]/20"
                            : "bg-[#f5f3ec] text-[#4d5f6c] hover:bg-[#eae6dc]"
                        }`}
                      >
                        {h.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
                  <a
                    href="#contact"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#d97706] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#d97706]/20 transition hover:bg-[#b86303] active:scale-95"
                  >
                    Request Sample of this Pouch <ArrowRight size={14} />
                  </a>
                  <a
                    href="#customizer"
                    className="inline-flex min-h-[40px] items-center justify-center gap-1.5 text-xs font-bold text-[#0b3b7b] hover:underline"
                  >
                    Configure pouch barrier <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions & Catalog Showcase Section (Featuring all 4 Uploaded Products) */}
      <section
        id="products"
        className="scroll-mt-20 px-3.5 py-14 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <Eyebrow>Portfolio of Excellence</Eyebrow>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Engineered Formats for{" "}
                  <span className="bg-gradient-to-r from-[#0b3b7b] to-[#d97706] bg-clip-text text-transparent">
                    Every Market Segment
                  </span>
                </h2>
              </div>

              {/* Category Filter Pills - Horizontally scrollable on mobile */}
              <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 scrollbar-none md:w-auto">
                {[
                  { id: "all", label: "All Formats" },
                  { id: "standup", label: "Stand-Up Pouches" },
                  { id: "gusset", label: "Gusset & Bulk" },
                  { id: "eco", label: "Eco-Friendly Kraft" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 ${
                      activeCategory === tab.id
                        ? "bg-[#0b3b7b] text-white shadow-md shadow-[#0b3b7b]/20"
                        : "bg-white text-[#52636f] border border-[#0e2233]/15 hover:border-[#0b3b7b] hover:text-[#0b3b7b]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Product Cards Grid */}
          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.06}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#0e2233]/10 bg-white shadow-md shadow-[#0e2233]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0b3b7b]/30 hover:shadow-xl">
                  {/* Image Container with Studio Background */}
                  <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f6f0] via-[#f3efe4] to-[#ece7dc] p-4 sm:h-80 sm:p-6">
                    <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-[#0b3b7b] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm sm:px-3 sm:py-1 sm:text-[10px]">
                      {product.badge}
                    </span>

                    <span className="absolute right-3.5 top-3.5 text-xs font-black text-[#0e2233]/30">
                      {product.number}
                    </span>

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Quick view button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b3b7b] shadow-md transition-all active:scale-90 hover:bg-[#d97706] hover:text-white sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
                      title="View Technical Specifications"
                    >
                      <Eye size={17} />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#d97706] sm:text-[10px]">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold leading-snug text-[#0e2233] group-hover:text-[#0b3b7b] sm:text-lg">
                      {product.name}
                    </h3>

                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[#5a6b77]">
                      {product.description}
                    </p>

                    {/* Specs highlight pills */}
                    <div className="mt-3.5 flex flex-col gap-1 border-t border-[#0e2233]/10 pt-3 text-[11px] text-[#4d5f6c] sm:mt-4 sm:pt-4">
                      <div className="flex justify-between">
                        <span className="text-[#84939d]">Substrate:</span>
                        <span className="font-semibold truncate max-w-[150px] text-right">{product.substrate.split("/")[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#84939d]">Barrier:</span>
                        <span className="font-semibold text-emerald-600">{product.barrierLevel.split("(")[0]}</span>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#0e2233]/10 pt-3 sm:mt-5 sm:pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="text-xs font-bold text-[#0b3b7b] hover:underline"
                      >
                        Technical Specs
                      </button>
                      <a
                        href="#contact"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f2ea] text-[#0e2233] transition-colors group-hover:bg-[#d97706] group-hover:text-white"
                      >
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Technical Modal - Mobile Bottom-Sheet Behavior */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 shadow-2xl sm:p-10"
            >
              {/* Mobile grab handle */}
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[#0e2233]/20 sm:hidden" />

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f2ea] text-[#0e2233] hover:bg-[#e4e0d4] sm:right-6 sm:top-6 sm:h-10 sm:w-10"
              >
                <X size={18} />
              </button>

              <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f8f6f0] to-[#ece7dc] p-4 sm:h-auto sm:p-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-48 sm:max-h-72 w-auto object-contain drop-shadow-xl"
                  />
                </div>

                <div>
                  <span className="rounded-full bg-[#0b3b7b]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#0b3b7b] sm:px-3 sm:py-1 sm:text-[10px]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#0e2233] sm:mt-3 sm:text-2xl">
                    {selectedProduct.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#51636f]">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-5 space-y-2 rounded-2xl bg-[#fbf9f4] p-3.5 text-xs sm:mt-6 sm:space-y-2.5 sm:p-4">
                    <div className="flex justify-between border-b border-[#0e2233]/10 pb-1.5">
                      <span className="font-semibold text-[#80919d]">Laminate Structure:</span>
                      <span className="font-bold text-[#0e2233] text-right">{selectedProduct.substrate}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0e2233]/10 pb-1.5">
                      <span className="font-semibold text-[#80919d]">Caliper:</span>
                      <span className="font-bold text-[#0e2233]">{selectedProduct.thickness}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0e2233]/10 pb-1.5">
                      <span className="font-semibold text-[#80919d]">Barrier Rating:</span>
                      <span className="font-bold text-emerald-600">{selectedProduct.barrierLevel}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0e2233]/10 pb-1.5">
                      <span className="font-semibold text-[#80919d]">Closure:</span>
                      <span className="font-bold text-[#0e2233]">{selectedProduct.closure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#80919d]">Applications:</span>
                      <span className="font-bold text-[#0e2233] text-right">{selectedProduct.applications}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3 sm:mt-6">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-[#0b3b7b] py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#124d9c] active:scale-98"
                    >
                      Enquire for this Pouch <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Pouch Configurator & Barrier Estimator Tool (Mobile Optimized) */}
      <section
        id="customizer"
        className="scroll-mt-20 bg-[#0c1e2e] px-3.5 py-14 text-white sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#d97706] backdrop-blur sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[10px]">
                <SlidersHorizontal size={13} />
                Interactive Engineering Tool
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Configure Your Custom{" "}
                <span className="text-[#d97706]">Barrier Packaging</span>
              </h2>
              <p className="mt-3 px-2 text-xs leading-relaxed text-white/70 sm:mt-4 sm:px-0 sm:text-base">
                Select your product parameters, required shelf-life barrier, and tactile aesthetics to generate instant laminate recommendations from Shrinath Rotopack.
              </p>
            </div>
          </Reveal>

          {/* Configurator 2-Column Interface */}
          <div className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
            {/* Left: Interactive Selectors */}
            <Reveal className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4.5 backdrop-blur-md sm:space-y-8 sm:p-10">
              {/* Step 1: Package Format */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] sm:text-xs">
                  Step 1: Choose Pouch Style
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {[
                    { id: "standup", label: "Doyen Stand-Up", desc: "Zipper + Gusset" },
                    { id: "gusset", label: "Flat-Bottom Quad", desc: "Bulk & Grain" },
                    { id: "kraft", label: "Kraft Bio-Pouch", desc: "100% Recyclable" },
                    { id: "threeside", label: "3-Side Sachet", desc: "Portion Packs" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConfigFormat(item.id)}
                      className={`flex flex-col rounded-2xl border p-3 text-left transition-all active:scale-98 sm:p-4 ${
                        configFormat === item.id
                          ? "border-[#d97706] bg-[#d97706]/15 text-white ring-1 ring-[#d97706]"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Product Fill Type */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] sm:text-xs">
                  Step 2: Product Contents & Sensitivity
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {[
                    { id: "nuts", label: "Nuts & Dry Fruits", desc: "Oxygen Block" },
                    { id: "rice", label: "Rice & Grains", desc: "Puncture Proof" },
                    { id: "spices", label: "Spices & Powders", desc: "Aroma Shield" },
                    { id: "liquids", label: "Sauces & Pastes", desc: "Seal Strength" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConfigFill(item.id)}
                      className={`flex flex-col rounded-2xl border p-3 text-left transition-all active:scale-98 sm:p-4 ${
                        configFill === item.id
                          ? "border-[#d97706] bg-[#d97706]/15 text-white ring-1 ring-[#d97706]"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Barrier Level */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] sm:text-xs">
                  Step 3: Barrier Performance
                </label>
                <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                  {[
                    {
                      id: "ultra",
                      label: "Ultra-High Gas Shield",
                      spec: "WVTR < 0.5 | OTR < 0.5",
                      benefit: "24-Month Shelf Life",
                    },
                    {
                      id: "eco",
                      label: "Mono-PE Recyclable",
                      spec: "100% Recycle Stream",
                      benefit: "Circular Economy",
                    },
                    {
                      id: "metallized",
                      label: "High-Opacity Foil/Met-PET",
                      spec: "UV + Light Block",
                      benefit: "Preserves Oils & Color",
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConfigBarrier(item.id)}
                      className={`flex flex-col rounded-2xl border p-3 text-left transition-all active:scale-98 sm:p-4 ${
                        configBarrier === item.id
                          ? "border-[#d97706] bg-[#d97706]/15 text-white ring-1 ring-[#d97706]"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="mt-0.5 font-mono text-[9px] text-[#d97706] sm:text-[10px]">{item.spec}</span>
                      <span className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">{item.benefit}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Tactile Exterior Finish */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] sm:text-xs">
                  Step 4: Tactile Finish & Window
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {[
                    { id: "softtouch", label: "Soft-Touch Velvet", desc: "Silky Matte" },
                    { id: "window", label: "Optical Window", desc: "Transparent" },
                    { id: "kraft", label: "Natural Kraft", desc: "Organic Texture" },
                    { id: "spotuv", label: "Matte + Spot Gloss", desc: "Dual Finish" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConfigFinish(item.id)}
                      className={`flex flex-col rounded-2xl border p-3 text-left transition-all active:scale-98 sm:p-4 ${
                        configFinish === item.id
                          ? "border-[#d97706] bg-[#d97706]/15 text-white ring-1 ring-[#d97706]"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: Dynamic Specification Blueprint */}
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-[#d97706]/30 bg-gradient-to-b from-[#102a42] to-[#0a1826] p-5 shadow-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu size={15} className="text-[#d97706]" />
                    <span className="text-xs font-bold tracking-wider text-white uppercase">
                      Engineering Spec Sheet
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
                    SLPL Verified
                  </span>
                </div>

                {/* Spec Summary Card */}
                <div className="mt-4 space-y-3 text-xs sm:mt-6 sm:space-y-4">
                  <div>
                    <span className="text-[11px] text-white/50">Recommended Structure:</span>
                    <p className="mt-0.5 font-mono text-xs font-bold text-white sm:text-sm">
                      {configBarrier === "ultra"
                        ? "Matte BOPP // ALOx PET // High-Tack Sealant PE"
                        : configBarrier === "eco"
                        ? "All-PE Mono-Material Barrier // EVOH // PE"
                        : "Matte PET // Met-PET 12μm // Food Grade LLDPE"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-3 sm:gap-4 sm:py-4">
                    <div>
                      <span className="text-[11px] text-white/50">Thickness:</span>
                      <p className="mt-0.5 font-bold text-[#d97706]">
                        {configFormat === "gusset" ? "130 - 150 μm" : "105 - 120 μm"}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] text-white/50">Shelf-Life:</span>
                      <p className="mt-0.5 font-bold text-emerald-400">
                        {configBarrier === "ultra" ? "24+ Months" : "18 Months"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-white/50">Print Method:</span>
                    <p className="mt-0.5 text-[11px] font-medium text-white/90 sm:text-xs">
                      10-Color Electronic Gravure with Low-VOC Inks
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] text-white/50">Production Minimum (MOQ):</span>
                    <p className="mt-0.5 text-[11px] font-medium text-white/90 sm:text-xs">
                      Pilot: 20,000 units • Production: 50,000+ units
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-6 border-t border-white/10 pt-4 sm:mt-8 sm:pt-6">
                  <a
                    href="#contact"
                    className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d97706] to-[#b86303] py-3 text-xs font-bold text-white shadow-lg shadow-[#d97706]/30 active:scale-98"
                  >
                    Request Sample Kit for this Spec
                    <ArrowRight size={15} />
                  </a>
                  <p className="mt-2.5 text-center text-[10px] text-white/40">
                    Free worldwide dispatch of sample pouches for brand owners.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industrial Infrastructure & Manufacturing Supremacy */}
      <section
        id="capabilities"
        className="scroll-mt-20 px-3.5 py-14 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>State-of-the-Art Plant</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                European Rotogravure Machinery &{" "}
                <span className="bg-gradient-to-r from-[#0b3b7b] to-[#d97706] bg-clip-text text-transparent">
                  Cleanroom Converting
                </span>
              </h2>
              <p className="mt-3 px-2 text-xs leading-relaxed text-[#51636f] sm:mt-4 sm:px-0 sm:text-base">
                Operating high-speed European printing and lamination technology under certified cleanroom conditions in Hyderabad, India.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "10-Color Electronic Rotogravure",
                desc: "Equipped with automatic computerized register controls and 100% video inspection systems to ensure flawless color consistency and microscopic detail.",
              },
              {
                icon: Layers3,
                title: "Solventless & Tandem Lamination",
                desc: "Advanced Nordmeccanica solventless lamination eliminates solvent retention, delivering 100% odorless, food-safe laminates for delicate foods.",
              },
              {
                icon: Cpu,
                title: "In-House Co-Extrusion Blown Film",
                desc: "Proprietary multi-layer barrier film extrusion lines allow custom resin blending (EVOH, Nylon, mLLDPE) for pinpoint moisture and gas control.",
              },
              {
                icon: Box,
                title: "Automated Pouch Converting Lines",
                desc: "High-speed servo-driven pouch machinery supporting stand-up doyen, quad-seal gusset, center seal, spout insertion, and degassing valves.",
              },
              {
                icon: ShieldCheck,
                title: "NABL & BRCGS Certified QA Lab",
                desc: "Comprehensive testing with MOCON OTR/WVTR analyzers, gas chromatography, tensile peel strength testers, and burst pressure monitors.",
              },
              {
                icon: Recycle,
                title: "Sustainable Mono-Material R&D",
                desc: "Pioneering fully recyclable All-PE and All-PP structures that match the barrier properties of traditional non-recyclable multi-material pouches.",
              },
            ].map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <Reveal key={cap.title} delay={i * 0.05}>
                  <div className="group flex h-full flex-col rounded-3xl border border-[#0e2233]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#0b3b7b]/30 hover:shadow-lg sm:p-8">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b3b7b]/10 text-[#0b3b7b] transition-all group-hover:bg-[#0b3b7b] group-hover:text-white sm:h-12 sm:w-12">
                      <CapIcon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-[#0e2233] sm:text-xl">{cap.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#51636f] sm:mt-3 sm:text-sm">
                      {cap.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability & Circular Economy Commitment */}
      <section
        id="sustainability"
        className="scroll-mt-20 bg-[#f4f7f4] px-3.5 py-14 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-[#0d2a1b] p-6 text-white shadow-xl sm:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-300">
                  <Leaf size={13} />
                  Eco-Conscious Packaging
                </span>
                <h3 className="mt-4 text-2xl font-extrabold sm:mt-6 sm:text-4xl">
                  Pioneering Circularity Without Sacrificing Shelf Life
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/80 sm:mt-4 sm:text-base">
                  Shrinath Rotopack is at the forefront of green packaging. From our unbleached kraft paper pouches with laser leaf windows to 100% recyclable mono-PE barrier laminates, we protect your products and the planet.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/15 pt-5 text-xs sm:mt-8 sm:space-y-3 sm:pt-6 sm:text-sm">
                  {[
                    "Mono-Material PE/PE and PP/PP packaging for standard recycling streams",
                    "FSC-certified natural kraft paper sourcing from sustainable forests",
                    "Solvent-free water-based gravure printing reducing carbon emissions",
                    "Advanced down-gauging technology delivering superior strength with less plastic",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-emerald-400 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Environmental Leadership</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Sustainable Solutions for the{" "}
                <span className="text-emerald-700">Modern Eco-Brand</span>
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#51636f] sm:mt-5 sm:text-base">
                Retail consumers increasingly vote with their wallets for environmentally responsible packaging. Shrinath Rotopack helps brand owners meet ESG targets and EPR (Extended Producer Responsibility) regulations seamlessly.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                <div className="rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-2xl font-extrabold text-emerald-700 sm:text-3xl">100%</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#51636f] sm:text-xs">
                    Recyclable Mono-Material Formats
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-2xl font-extrabold text-[#d97706] sm:text-3xl">FSC</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#51636f] sm:text-xs">
                    Certified Sustainable Kraft Paper
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-900 active:scale-95"
                >
                  Explore Recyclable Formats <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global Certifications Grid */}
      <section className="border-y border-[#0e2233]/10 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-[1360px] px-3.5 sm:px-8 lg:px-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#80919d] sm:text-xs">
            Audited & Certified by Worldwide Quality Standards
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 items-center">
            {[
              { code: "BRCGS", title: "Packaging Materials", grade: "Grade AA" },
              { code: "ISO 9001", title: "Quality Management", grade: "2015 Certified" },
              { code: "ISO 22000", title: "Food Safety Management", grade: "Global Standard" },
              { code: "US FDA", title: "Drug & Food Export", grade: "Registered Plant" },
              { code: "SEDEX SMETA", title: "Ethical Supply Chain", grade: "4-Pillar Audited" },
              { code: "FSC", title: "Sustainable Forest Paper", grade: "Chain of Custody" },
            ].map((cert) => (
              <div
                key={cert.code}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#0e2233]/10 bg-[#fbfaf6] p-3 text-center sm:p-4"
              >
                <Award size={18} className="text-[#d97706] mb-1" />
                <span className="text-xs sm:text-sm font-extrabold text-[#0e2233]">{cert.code}</span>
                <span className="text-[9px] sm:text-[10px] text-[#697985] truncate max-w-full">{cert.title}</span>
                <span className="mt-1 rounded-full bg-[#0b3b7b]/10 px-2 py-0.5 text-[8px] sm:text-[9px] font-bold text-[#0b3b7b]">
                  {cert.grade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request For Quote (RFQ) & Free Sample Kit Section */}
      <section
        id="contact"
        className="scroll-mt-20 px-3.5 py-14 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1360px]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1e2e] via-[#0b2844] to-[#081827] p-6 text-white shadow-2xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Left Column: Direct Info */}
              <div>
                <Eyebrow>Direct Manufacturer Connection</Eyebrow>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Have a Packaging Project?{" "}
                  <span className="text-[#d97706]">Let&apos;s Build It.</span>
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-white/70 sm:mt-5 sm:text-base">
                  Connect directly with Shrinath Rotopack&apos;s engineering and sales specialists. We supply free sample kits containing physical stand-up pouches, gusset bags, and barrier films tailored to your industry.
                </p>

                {/* Direct Contact Cards */}
                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur sm:p-4">
                    <MapPin className="text-[#d97706] shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                        Headquarters & Plant Location
                      </h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                        Shrinath Rotopack Pvt. Ltd., Plot No. 18, Phase-I, IDA, Cherlapally, Hyderabad - 500051, Telangana, India.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur sm:p-4">
                    <Mail className="text-[#d97706] shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                        Global Sales Desk
                      </h4>
                      <p className="mt-0.5 text-xs text-white/70">
                        <a
                          href="mailto:globalsales@slplindia.com"
                          className="font-semibold text-[#d97706] hover:underline"
                        >
                          globalsales@slplindia.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur sm:p-4">
                    <Phone className="text-[#d97706] shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                        Direct Inquiries Hotline
                      </h4>
                      <p className="mt-0.5 text-xs text-white/70">
                        <a href="tel:+914027260471" className="hover:underline font-semibold text-white">
                          +91 40 2726 0471 / 72
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: RFQ Form (Inputs styled to prevent iOS Safari auto-zoom) */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
                {rfqSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center sm:py-12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 sm:h-16 sm:w-16">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                      Inquiry Received!
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/70">
                      Thank you for contacting Shrinath Rotopack. A dedicated packaging technical specialist will review your requirements and reach out within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setRfqSubmitted(false)}
                      className="mt-5 rounded-full bg-white/20 px-5 py-2 text-xs font-bold text-white hover:bg-white/30"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRfqSubmitted(true);
                    }}
                    className="space-y-3.5 sm:space-y-4"
                  >
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      Request a Quote / Sample Kit
                    </h3>
                    <p className="text-[11px] text-white/60 sm:text-xs">
                      Tell us about your product and packaging dimensions.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-white/40 focus:border-[#d97706] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pure Harvest Organics"
                          className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-white/40 focus:border-[#d97706] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-white/40 focus:border-[#d97706] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 / International"
                          className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-white/40 focus:border-[#d97706] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Preferred Pouch Type
                        </label>
                        <select className="mt-1 w-full rounded-xl border border-white/20 bg-[#0c1e2e] px-3 py-2.5 text-sm sm:text-xs text-white focus:border-[#d97706] focus:outline-none">
                          <option value="standup">Stand-Up Pouch with Zipper</option>
                          <option value="gusset">Quad-Seal Flat-Bottom Pouch</option>
                          <option value="kraft">Eco Kraft Paper Pouch</option>
                          <option value="window">Optical Window Pouch</option>
                          <option value="rollstock">Printed Barrier Roll Stock</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-white/70">
                          Estimated Volume
                        </label>
                        <select className="mt-1 w-full rounded-xl border border-white/20 bg-[#0c1e2e] px-3 py-2.5 text-sm sm:text-xs text-white focus:border-[#d97706] focus:outline-none">
                          <option value="sample">Physical Sample Kit Only</option>
                          <option value="pilot">20,000 - 50,000 Pouches</option>
                          <option value="mid">50,000 - 200,000 Pouches</option>
                          <option value="large">200,000+ Units (Bulk Contract)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-white/70">
                        Product Details & Barrier Needs
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention filling product (almonds, pulses, rice), target dimensions, or sample kit delivery address..."
                        className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-sm sm:text-xs text-white placeholder-white/40 focus:border-[#d97706] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-1 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d97706] to-[#b86303] py-3 text-xs font-bold text-white shadow-xl shadow-[#d97706]/30 transition hover:brightness-110 active:scale-98"
                    >
                      <Send size={14} />
                      Send Packaging RFQ & Sample Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Luxury Footer */}
      <footer className="border-t border-[#0e2233]/10 bg-white px-3.5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            {/* Col 1: Brand & Logo */}
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <img
                  src="/shrinath-logo-nav.png"
                  alt="Shrinath Rotopack - Adding value to your Creation"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
              <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-[#596a75]">
                Shrinath Rotopack Pvt. Ltd. (SLPL) is a pioneer in high-performance flexible barrier packaging, high-speed rotogravure printing, and sustainable packaging converting, serving blue-chip FMCG brands worldwide.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                <span>Tagline:</span>
                <span className="italic font-serif text-xs text-[#0b3b7b]">
                  &ldquo;Adding value to your Creation&rdquo;
                </span>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0e2233]">
                Packaging Solutions
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-[#596a75]">
                <li>
                  <a href="#products" className="hover:text-[#0b3b7b]">
                    Stand-Up Zipper Pouches
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#0b3b7b]">
                    Quad-Seal Flat-Bottom Bags
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#0b3b7b]">
                    Optical Wave Window Pouches
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#0b3b7b]">
                    100% Recyclable Mono-PE Laminates
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#0b3b7b]">
                    Sustainable Kraft Paper Pouches
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0e2233]">
                Company & Technical
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-[#596a75]">
                <li>
                  <a href="#anatomy" className="hover:text-[#0b3b7b]">
                    Pouch Architecture
                  </a>
                </li>
                <li>
                  <a href="#customizer" className="hover:text-[#0b3b7b]">
                    Barrier Configurator
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#0b3b7b]">
                    Rotogravure Technology
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:text-[#0b3b7b]">
                    Sustainability & ESG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.slplindia.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#0b3b7b]"
                  >
                    Original Portal <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Corporate Contact */}
            <div className="rounded-2xl bg-[#fbf9f4] p-4.5 border border-[#0e2233]/10 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e2233]">
                Registered Plant
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[#596a75]">
                Plot No. 18, Phase-I, IDA, Cherlapally, Hyderabad - 500051, Telangana, India.
              </p>
              <p className="mt-2.5 text-xs font-semibold text-[#0b3b7b]">
                Tel: +91 40 2726 0471 / 72
              </p>
              <p className="mt-0.5 text-xs text-[#d97706] font-semibold">
                Email: globalsales@slplindia.com
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#0e2233]/10 pt-5 text-[10px] text-[#84949f] sm:mt-12 sm:flex-row sm:text-[11px]">
            <p className="text-center sm:text-left">
              © 2026 Shrinath Rotopack Private Limited (SLPL). All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-[#0b3b7b] font-semibold">Adding value to your Creation</span>
              <a href="#home" className="inline-flex items-center gap-1 hover:text-[#0b3b7b]">
                Back to Top <ArrowUp size={12} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Mobile Quick Action Bar (Luxury Touch on Phones) */}
      <div className="fixed bottom-3 inset-x-3 z-40 flex items-center justify-between gap-2 rounded-2xl border border-white/80 bg-[#0c1e2e]/95 p-2 shadow-2xl backdrop-blur-xl sm:hidden">
        <a
          href="tel:+914027260471"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2.5 text-xs font-bold text-white active:scale-95"
        >
          <Phone size={14} className="text-[#d97706]" />
          <span>Call Plant</span>
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b86303] py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
        >
          <PackageCheck size={14} />
          <span>Sample Kit</span>
        </a>
      </div>
    </main>
  );
}
