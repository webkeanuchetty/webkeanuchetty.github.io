"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 5000;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/KC-Hero5-opt.mp4" type="video/mp4" />
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
            Specialist Physiotherapist D.K. Chetty. Elevating movement
            through clinical excellence — combining manual therapy, dry
            needling and advanced strapping for measurable outcomes.
          </p>
          <p className="mt-3 text-xs text-white/50 tracking-wide">
            ✓ Registered with all major medical aids
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20">
              View Services
            </a>
          </div>

          <dl className="mt-12 flex flex-col items-center lg:items-start">
            <div>
              <dt className="font-display text-4xl font-semibold text-white">
                {count >= 5000 ? "5000+" : count.toLocaleString()}
              </dt>
              <dd className="text-xs text-white/60 mt-1 uppercase tracking-wider">
                Patients Treated
              </dd>
            </div>
          </dl>
        </motion.div>

      </div>
    </section>
  );
}
