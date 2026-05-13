"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  index = 0
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-charcoal-100 hover:border-clinical-200 hover:shadow-soft transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur grid place-items-center text-clinical-600 shadow-sm">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          {title}
        </h3>
        <p className="mt-3 text-sm text-charcoal-400 leading-relaxed flex-1">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-clinical-600 hover:text-clinical-700 transition"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
