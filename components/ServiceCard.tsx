"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col bg-white rounded-2xl p-7 border border-charcoal-100 hover:border-charcoal hover:shadow-soft transition"
    >
      <div className="w-12 h-12 rounded-xl bg-charcoal-50 grid place-items-center text-charcoal group-hover:bg-charcoal group-hover:text-white transition">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-lg font-semibold text-charcoal mt-5">
        {title}
      </h3>
      <p className="mt-3 text-sm text-charcoal-400 leading-relaxed flex-1">
        {description}
      </p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:opacity-70 transition"
      >
        Book Now
        <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.article>
  );
}
