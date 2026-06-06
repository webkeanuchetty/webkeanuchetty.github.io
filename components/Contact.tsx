"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
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
          <h2 className="h2 mt-4">Get in touch.</h2>
          <p className="lead mt-4">
            Share a few details and we&apos;ll be in touch to confirm your
            appointment. For urgent enquiries, please call directly.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "060 503 5728"
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@dkchettyphysiotherapy.co.za"
              },
              {
                icon: MapPin,
                title: "Practice",
                value: "27 St Andrew's Avenue, Impilo Building, Wits Education Campus, Parktown, Johannesburg, 2531"
              }
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-charcoal-50 text-charcoal grid place-items-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold">
                    {c.title}
                  </p>
                  <p className="text-charcoal mt-1 text-sm">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-charcoal-50 text-charcoal grid place-items-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold">Hours</p>
                <p className="text-charcoal mt-1 text-sm">Mon – Fri: 07:00 – 17:00</p>
                <p className="text-charcoal text-sm">Sat – Sun: 08:00 – 13:00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-white rounded-3xl border border-charcoal-100 p-6 md:p-10 shadow-soft"
        >
          <input type="hidden" name="access_key" value="8168dbc2-8a94-4d20-9530-5369628e52f7" />
          <input type="hidden" name="subject" value="New Physiotherapy Enquiry from D.K. Chetty Website" />
          <input type="hidden" name="from_name" value="D.K. Chetty Physiotherapy" />
          <input type="hidden" name="redirect" value="https://dkchettyphysiotherapy.co.za#contact" />

          {error && (
            <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

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
            <button type="submit" disabled={loading || sent} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
              {sent ? (
                <>
                  Message sent <CheckCircle2 className="w-4 h-4" />
                </>
              ) : loading ? (
                <>
                  Sending... <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
