"use client";

import { Activity, Home, HeartPulse, ShieldCheck, Building2, Syringe } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const services = [
  {
    icon: Activity,
    title: "Post-Operative Care",
    description:
      "Structured rehab protocols following lower limb surgery, ensuring optimal healing, restored mobility and a confident return to daily life."
  },
  {
    icon: Home,
    title: "Home Visits",
    description:
      "We bring expert physiotherapy directly to your doorstep, offering professional, personalised care for comfortable convenient rehabilitation in your own space."
  },
  {
    icon: HeartPulse,
    title: "Chronic Pain Management",
    description:
      "Multi-modal approaches combining manual therapy, exercise, and education to help you manage and overcome persistent pain conditions."
  },
  {
    icon: ShieldCheck,
    title: "Wellness and Prevention",
    description:
      "Proactive movement assessments and corrective exercise programs to prevent injury and optimize your long-term physical well-being."
  },
  {
    icon: Building2,
    title: "Hospital Care",
    description:
      "We provide expert care to ill/critically ill patients by focusing on early mobility and respiratory support."
  },
  {
    icon: Syringe,
    title: "Dry Needling",
    description:
      "Relieve muscle tension and accelerate recovery with our professional dry needling therapy. This targeted treatment pinpoints muscle knots, effectively reducing chronic pain, improving flexibility, and restoring healthy movement."
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What We Offer</span>
          <h2 className="h2 mt-4">Our Services</h2>
          <p className="lead mt-4">
            Comprehensive physiotherapy care tailored to your individual needs
            — from post-operative recovery to chronic pain management.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
