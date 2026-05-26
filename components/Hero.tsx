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
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundImage: "url('/KC-Hero1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div aria-hidden className="absolute inset-0 bg-black/30" />
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-charcoal">
            <ShieldCheck className="w-3.5 h-3.5" /> PPCHC Specialist
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tightish text-charcoal leading-[1.05] mt-5">
            Expert Physiotherapy
            <span className="block text-charcoal">& Advanced Recovery.</span>
          </h1>
          <p className="text-base md:text-lg text-charcoal leading-relaxed mt-6 max-w-xl">
            Specialist PPCHC Physiotherapist Keanu Chetty. Restoring movement
            through clinical excellence — combining manual therapy, dry
            needling and advanced strapping for measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-6 py-3 text-sm font-medium text-charcoal transition hover:border-charcoal hover:bg-charcoal-50">
              View Services
            </a>
          </div>

          <dl className="mt-12">
            <div>
              <dt className="font-display text-4xl font-semibold text-charcoal">
                {count >= 5000 ? "5000+" : count.toLocaleString()}
              </dt>
              <dd className="text-xs text-charcoal mt-1 uppercase tracking-wider">
                Patients Treated
              </dd>
            </div>
          </dl>
        </motion.div>

      </div>
    </section>
  );
}
