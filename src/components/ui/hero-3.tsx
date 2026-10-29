"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MarqueeItem {
  src: string;
  title: string;
  subtitle: string;
  badge?: string;
}

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  items: MarqueeItem[];
  className?: string;
}

export function AnimatedMarqueeHero({
  tagline,
  title,
  description,
  ctaText,
  items,
  className,
}: AnimatedMarqueeHeroProps) {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section
      id="home"
      className={cn(
        "relative isolate flex min-h-[640px] flex-col items-center overflow-hidden bg-gradient-to-b from-[#fbfaf6] via-[#f5f2e9] to-[#ece8dc] px-3.5 pb-8 pt-12 text-center text-[#0e2233] sm:min-h-[740px] sm:px-6 sm:pb-12 sm:pt-20 lg:min-h-[800px] lg:pt-24",
        className
      )}
    >
      {/* Background subtle elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/warehouse-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-15 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/95 via-[#f7f4eb]/90 to-[#ece8dc]" />
        
        {/* Decorative subtle ambient lights */}
        <div className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl sm:-left-48 sm:top-12 sm:h-96 sm:w-96" />
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl sm:-right-48 sm:top-20 sm:h-96 sm:w-96" />
      </div>

      {/* Side labels on desktop only */}
      <div className="pointer-events-none absolute left-8 top-36 hidden max-w-36 border-l-2 border-[#d97706] pl-4 text-left text-[11px] uppercase leading-5 tracking-[0.2em] text-[#697a85] xl:block">
        <span className="font-semibold text-[#0e2233]">Global Standards</span>
        <br />
        Rotogravure
        <br />
        Excellence
      </div>

      <div className="pointer-events-none absolute right-8 top-36 hidden border-r-2 border-[#0b3b7b] pr-4 text-right text-[11px] uppercase leading-5 tracking-[0.2em] text-[#697a85] xl:block">
        <span className="font-semibold text-[#0b3b7b]">46+ Years</span>
        <br />
        25+ Countries
        <br />
        60,000 MT/Year
      </div>

      {/* Hero content */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        {/* Tagline badge with gold shimmer - mobile friendly */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#0b3b7b]/15 bg-white/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b3b7b] shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
          <span className="h-2 w-2 rounded-full bg-[#d97706] animate-pulse" />
          <span className="truncate">{tagline}</span>
          <span className="hidden sm:inline-block rounded-full bg-[#0b3b7b]/10 px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-[#0b3b7b]">
            ISO & BRCGS AA
          </span>
        </div>

        {/* Hero Title */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-5 max-w-5xl text-balance text-3xl font-extrabold leading-[1.12] tracking-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-[76px]"
        >
          {title}
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl px-2 text-pretty text-xs leading-relaxed text-[#51636f] sm:mt-6 sm:px-0 sm:text-base md:text-lg"
        >
          {description}
        </motion.p>

        {/* Action Buttons - touch-first full width on mobile */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex w-full flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5"
        >
          <motion.a
            href="#products"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0b3b7b] to-[#124d9c] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#0b3b7b]/25 transition-all hover:shadow-[#0b3b7b]/40 sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
          >
            {ctaText}
            <ArrowRight size={16} />
          </motion.a>

          <a
            href="#customizer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#0e2233]/20 bg-white/90 px-6 py-3 text-xs font-bold text-[#0e2233] shadow-sm backdrop-blur transition-all hover:border-[#d97706] hover:bg-white hover:text-[#d97706] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Pouch Configurator
            <Sparkles size={15} className="text-[#d97706]" />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-[#51636f] transition-colors hover:text-[#0b3b7b] sm:w-auto sm:text-sm"
          >
            Request Free Sample Kit
            <ArrowDownRight size={15} />
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee Carousel of Vertical Pouches with Mobile Touch Optimization */}
      <div
        className="relative mt-8 w-full overflow-hidden pb-2 pt-1 sm:mt-12 lg:mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#fbfaf6] via-[#fbfaf6]/80 to-transparent sm:w-28 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#fbfaf6] via-[#fbfaf6]/80 to-transparent sm:w-28 lg:w-40" />

        <motion.div
          className="flex w-max items-center gap-3 px-2 sm:gap-6 sm:px-3"
          animate={
            reduceMotion || isPaused
              ? undefined
              : { x: ["0%", "-33.333%"] }
          }
          transition={{
            duration: reduceMotion ? 0 : 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={`${item.src}-${index}`}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative flex h-[290px] w-[175px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/90 bg-white p-2.5 shadow-md shadow-[#0e2233]/10 transition-shadow hover:border-[#d97706]/40 hover:shadow-xl sm:h-[390px] sm:w-[240px] sm:p-3.5 lg:h-[430px] lg:w-[260px]"
            >
              {/* Image Container with Studio Pedestal background */}
              <div className="relative flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#f8f6f0] to-[#ece7dc] p-1.5 sm:p-2">
                {item.badge && (
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-[#0b3b7b] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-sm sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:py-1 sm:text-[9px]">
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.src}
                  alt={item.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              {/* Card Meta */}
              <div className="mt-2.5 flex flex-col text-left sm:mt-3">
                <span className="truncate text-[9px] font-bold uppercase tracking-widest text-[#d97706] sm:text-[10px]">
                  {item.subtitle.split("•")[0]}
                </span>
                <span className="mt-0.5 truncate text-xs font-bold text-[#0e2233] group-hover:text-[#0b3b7b] sm:text-sm">
                  {item.title}
                </span>
              </div>

              {/* Bottom Gold Accent Bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0b3b7b] via-[#d97706] to-[#0b3b7b] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Sub-tag - optimized for mobile wrap */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 px-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#637480] sm:mt-4 sm:gap-3 sm:text-[11px] sm:tracking-[0.2em]">
        <span className="hidden sm:inline-block h-px w-6 bg-[#d97706]" />
        <span>Shrinath Rotopack Pvt. Ltd.</span>
        <span className="inline-block h-1 w-1 rounded-full bg-[#0b3b7b]" />
        <span>Adding Value To Your Creation</span>
        <span className="hidden sm:inline-block h-px w-6 bg-[#d97706]" />
      </div>
    </section>
  );
}
