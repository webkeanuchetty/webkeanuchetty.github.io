"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section bg-charcoal-50/40">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-soft">
            <Image
              src="/KC-potrait.png"
              alt="D.K. Chetty — Physiotherapist"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">About the Practice</span>
          <h2 className="h2 mt-4">Every patient deserves exceptional care.</h2>
          <p className="lead mt-5">
            D.K. Chetty Physiotherapy prioritises tailored care according to
            each patient, while working with a simple belief: Every patient
            deserves care that is rooted in the latest clinical evidence and
            delivered with genuine compassion.
          </p>
          <p className="lead mt-4">
            Whether you are recovering from injury, managing a chronic
            condition, or seeking to optimise your movement, your treatment
            plan is built around your goals, your timeline, and your
            body&apos;s unique response.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
