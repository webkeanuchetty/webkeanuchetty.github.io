"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [hasStarted]);
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

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onViewportEnter={() => setHasStarted(true)}
            className="mt-10 flex flex-col items-center"
          >
            <div className="text-center">
              <dt className="font-display text-4xl font-semibold text-charcoal">
                {count >= 5000 ? "5000+" : count.toLocaleString()}
              </dt>
              <dd className="text-xs text-charcoal-400 mt-2 uppercase tracking-wider font-semibold">
                Patients Treated
              </dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
