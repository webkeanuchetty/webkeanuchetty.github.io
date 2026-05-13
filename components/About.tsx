"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "PPCHC-specialised, patient-first methodology",
  "Certified in dry needling and advanced strapping",
  "Evidence-based recovery and return-to-sport care",
  "Tailored treatment plans with measurable progress"
];

export default function About() {
  return (
    <section id="about" className="section bg-charcoal-50/40">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
              alt="Keanu Chetty — PPCHC Physiotherapist"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">About</span>
          <h2 className="h2 mt-4">Clinical excellence, personal care.</h2>
          <p className="lead mt-5">
            Keanu Chetty is a specialised PPCHC Physiotherapist focused on
            restoring movement, function and confidence. Drawing on advanced
            training in dry needling and multi-modal strapping techniques,
            Keanu combines clinical rigour with a calm, considered bedside
            manner — translating evidence into outcomes for every patient.
          </p>
          <p className="lead mt-4">
            Whether you&apos;re recovering from injury, managing chronic pain,
            or returning to sport, your treatment plan is built around your
            goals, your timeline and your body&apos;s response.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-sm text-charcoal-500"
              >
                <CheckCircle2 className="w-5 h-5 text-clinical-600 mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
