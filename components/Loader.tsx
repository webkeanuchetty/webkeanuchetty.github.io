"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);

    if (document.readyState === "complete") {
      // Already loaded (e.g. fast cache)
      const t = setTimeout(hide, 400);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", hide);
    // Safety fallback — always dismiss after 5 s
    const fallback = setTimeout(hide, 5000);

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1117]"
        >
          <Image
            src="/KC-Logo-nw2.png"
            alt="Keanu Chetty Physiotherapy"
            width={360}
            height={144}
            className="h-[120px] w-auto object-contain brightness-0 invert mb-8"
            priority
          />
          {/* Spinner */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-t-transparent border-white/60"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
