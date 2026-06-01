"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Set muted as a DOM attribute — required for iOS Safari autoplay
    vid.setAttribute("muted", "");
    vid.muted = true;

    const tryPlay = () => { vid.play().catch(() => {}); };

    // Try immediately
    tryPlay();

    // Retry once media is ready (handles slow/mobile networks)
    vid.addEventListener("canplay", tryPlay, { once: true });

    // Last resort: play on first user touch (iOS Low Power Mode)
    const onTouch = () => { tryPlay(); document.removeEventListener("touchstart", onTouch); };
    document.addEventListener("touchstart", onTouch);

    return () => {
      vid.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", onTouch);
    };
  }, []);
  return (
    <section className="relative min-h-screen md:min-h-auto pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex flex-col md:block justify-center">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/KC-Hero5-updated1.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div aria-hidden className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-[2] container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
            <ShieldCheck className="w-3.5 h-3.5" /> D.K. Chetty Physiotherapy
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tightish text-white leading-[1.05] mt-5">
            Elevate your
            <span className="block">Movement.</span>
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mt-6 max-w-xl">
            Experienced Physiotherapist D.K. Chetty. Elevating movement
            through clinical excellence — combining manual therapy, dry
            needling and tailored programmes for measurable outcomes.
          </p>
          <p className="mt-3 text-xs text-white/50 tracking-wide">
            ✓ Registered with all major medical aids
          </p>
          <div className="mt-8 flex gap-2 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">
              Book Consultation <ArrowRight className="w-3 h-3" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-white transition hover:bg-white/20">
              View Services
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
