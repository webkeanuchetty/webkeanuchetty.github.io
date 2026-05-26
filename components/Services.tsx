"use client";

import { HandHeart, Dumbbell, HeartPulse } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const services = [
  {
    icon: HandHeart,
    title: "Manual Therapy & Dry Needling",
    description:
      "An integrated approach combining hands-on manual therapy with certified dry needling (Theory & Practical, Levels 1 & 2) to release trigger points, restore mobility and accelerate pain relief.",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: Dumbbell,
    title: "Specialized Strapping",
    description:
      "Advanced strapping protocols across Kinesiology, Rigid, Dynamic and Athletic techniques — engineered to stabilise joints, offload tissue and support return-to-sport rehabilitation.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: HeartPulse,
    title: "PPCHC Clinical Care",
    description:
      "Primary Patient-Centred Health Care: a specialised, holistic framework for assessing, treating and progressing patients across rehabilitation, performance and long-term wellness.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Clinical Pillars</span>
            <h2 className="h2 mt-4">Core Services</h2>
            <p className="lead mt-4">
              Three clinical pillars, one outcome: restored movement, reduced
              pain and confidence in your body again.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
