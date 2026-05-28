import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <Image
              src="/KC-Logo-nw2.png"
              alt="D.K. Chetty Physiotherapy"
              width={420}
              height={168}
              className="h-36 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-charcoal-400 max-w-md leading-relaxed">
            Specialist PPCHC physiotherapy — manual therapy, dry needling and
            advanced strapping. Elevating movement through clinical excellence.
          </p>
          <p className="mt-3 text-xs text-charcoal-300">
            ✓ Registered with all major medical aids
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold">
            Practice
          </p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-500">
            <li>27 St Andrew's Avenue</li>
            <li>Impilo Building, Wits Education Campus</li>
            <li>Parktown, Johannesburg, 2531</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-500">
            <li>060 503 5728</li>
            <li>info@dkchettyphysiotherapy.co.za</li>
            <li>
              <a href="#contact" className="text-clinical-600 hover:underline">
                Book a consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal-100">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-400">
          <p>© {new Date().getFullYear()} D.K. Chetty Physiotherapy. All rights reserved.</p>
          <p>HPCSA registered · POPIA compliant</p>
        </div>
      </div>
    </footer>
  );
}
