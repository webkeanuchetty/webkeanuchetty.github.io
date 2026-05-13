"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_70%)]"
      />
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <span className="eyebrow">
            <ShieldCheck className="w-3.5 h-3.5" /> PPCHC Specialist
          </span>
          <h1 className="h1 mt-5">
            Expert Physiotherapy
            <span className="block text-clinical">& Advanced Recovery.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            Specialist PPCHC Physiotherapist Keanu Chetty. Restoring movement
            through clinical excellence — combining manual therapy, dry
            needling and advanced strapping for measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "5+", v: "Certifications" },
              { k: "100%", v: "Evidence Based" },
              { k: "1:1", v: "Patient Focus" }
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold text-charcoal">
                  {s.k}
                </dt>
                <dd className="text-xs text-charcoal-400 mt-1 uppercase tracking-wider">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
              alt="Physiotherapy clinical session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-card border border-charcoal-100 max-w-xs"
          >
            <p className="text-xs uppercase tracking-wider text-clinical-600 font-semibold">
              Clinical Pillar
            </p>
            <p className="mt-2 text-sm text-charcoal-500">
              Integrated manual therapy and dry needling protocols designed
              around your recovery goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
