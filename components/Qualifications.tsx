"use client";

import { motion } from "framer-motion";
import { Syringe, Dumbbell, Stethoscope, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Syringe,
    title: "Dry Needling",
    detail: "Practical & Theory — Levels 1 & 2"
  },
  {
    icon: Dumbbell,
    title: "Advanced Strapping",
    detail: "Dynamic, Rigid, Kinesiology & Athletic — Theory & Practical"
  },
  {
    icon: Stethoscope,
    title: "PPCHC Specialization",
    detail: "Primary Patient-Centred Health Care"
  },
  {
    icon: GraduationCap,
    title: "Continuing Education",
    detail: "Ongoing CPD-accredited clinical training"
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="section bg-charcoal-50/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Credentials</span>
          <h2 className="h2 mt-4">Qualifications & Certifications</h2>
          <p className="lead mt-4">
            A foundation of rigorous training and evidence-based specialisation
            — built to deliver measurable clinical outcomes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-charcoal-100 hover:border-clinical-200 hover:shadow-card transition"
            >
              <div className="w-11 h-11 rounded-xl bg-clinical-50 grid place-items-center text-clinical-600 group-hover:bg-clinical group-hover:text-white transition">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-charcoal mt-5">
                {it.title}
              </h3>
              <p className="text-sm text-charcoal-400 mt-2 leading-relaxed">
                {it.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
