"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const featured = {
  name: "Shannon M.",
  type: "Chronic illness & back pain patient",
  body: `I can honestly say that my physiotherapist changed my life. After months of severe pain and extreme muscle spasms, he was the only person willing to work on my back when others were too afraid to.

While many professionals hesitated, he approached my condition with confidence, professionalism, and a clear treatment plan that finally gave me hope.

Thanks to his dedication, knowledge, and consistent support, I have gone from living in constant pain to simply needing maintenance sessions every now and then. Together with the support of my neurologist, he helped me regain my health in ways I never thought possible. I am now off all my chronic Schedule 5 medication, back in the gym, and even able to run again.

What stood out most was not only his skill as a physiotherapist, but also his positivity and the way he mentally prepared and encouraged me to believe that life could become better than it was before being diagnosed with a chronic illness.

Thank you for your professionalism, compassion, encouragement, and unwavering belief in my recovery. I will always be grateful for the impact you've had on my life.`
};

const marqueeItems = [
  {
    name: "Mbeki M.",
    type: "Stroke patient",
    body: "Following a stroke I was wheelchair bound, believing I wasn't going to walk again. The team at D.K. Chetty Physiotherapy designed a rehab program that got me back to my feet, and gave me my independence back."
  },
  {
    name: "Elektra T.",
    type: "Lower limb fracture patient",
    body: "I saw Mr. Chetty just after my fibula fracture and was pleased with the professional program made perfectly suited for me. After a journey of rehabilitation I can now return to what I love most, which is running."
  },
  {
    name: "Pamila N.",
    type: "Back pain patient",
    body: "Mr. Chetty came through to see me at home regarding my chronic back pain, and I had nothing but positive experiences. The pain is much more manageable now after suffering with severe pain for 4+ years."
  },
  {
    name: "Simphiwe P.",
    type: "Lower limb fracture patient",
    body: "I broke my femur in a car accident, and started seeing Mr. Chetty after my surgery. I was very pleased with the plan set in place, and everything went smoothly. I am now back to walking limp free, without any crutches needed. Thank you Mr. Chetty."
  },
  {
    name: "Kavisha N.",
    type: "Lower limb fracture patient",
    body: "I suffered a severe break in my shin while playing netball. I reached out to D.K. Chetty Physiotherapy and a plan was set in motion which was executed to my liking. Fast forward a few months, and I'm back to playing netball."
  }
];

const doubled = [...marqueeItems, ...marqueeItems];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-charcoal-50/40 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Patient Stories</span>
          <h2 className="h2 mt-4">What our patients say.</h2>
        </motion.div>

        {/* Shannon — featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-charcoal text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <Quote className="w-10 h-10 text-white/20 mb-6" />
          <blockquote className="text-base md:text-lg leading-relaxed text-white/90 whitespace-pre-line">
            {featured.body}
          </blockquote>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-display font-semibold text-white">{featured.name}</p>
            <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">{featured.type}</p>
          </div>
        </motion.div>
      </div>

      {/* Continuous marquee */}
      <div className="mt-12 relative">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 shrink-0 bg-white rounded-2xl p-6 border border-charcoal-100 flex flex-col"
            >
              <Quote className="w-6 h-6 text-charcoal-200 mb-4" />
              <p className="text-sm text-charcoal-400 leading-relaxed flex-1">{t.body}</p>
              <div className="mt-5 pt-4 border-t border-charcoal-100">
                <p className="font-display font-semibold text-charcoal text-sm">{t.name}</p>
                <p className="text-xs text-charcoal-300 mt-0.5 uppercase tracking-wider">{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
