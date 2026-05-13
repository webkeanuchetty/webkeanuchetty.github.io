"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Get in touch</span>
          <h2 className="h2 mt-4">Book a consultation.</h2>
          <p className="lead mt-4">
            Share a few details and we&apos;ll be in touch to confirm your
            appointment. For urgent enquiries, please call directly.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "+27 (0) 00 000 0000"
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@keanuchetty.co.za"
              },
              {
                icon: MapPin,
                title: "Practice",
                value: "Durban, KwaZulu-Natal, South Africa"
              }
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-clinical-50 text-clinical-600 grid place-items-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold">
                    {c.title}
                  </p>
                  <p className="text-charcoal mt-1">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-white rounded-3xl border border-charcoal-100 p-6 md:p-10 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" placeholder="Jane Doe" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+27 ..."
            />
            <Field label="Reason" name="reason" placeholder="e.g. Lower back pain" />
          </div>
          <div className="mt-5">
            <label className="block text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us a little about your goals or symptoms…"
              className="w-full rounded-2xl border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-clinical-300 focus:border-clinical-400 transition"
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-charcoal-400">
              By submitting you agree to be contacted about your enquiry.
            </p>
            <button type="submit" className="btn-primary">
              {sent ? (
                <>
                  Message sent <CheckCircle2 className="w-4 h-4" />
                </>
              ) : (
                <>
                  Send enquiry <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-clinical-300 focus:border-clinical-400 transition"
      />
    </div>
  );
}
