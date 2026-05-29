import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "D.K. Chetty Physiotherapy | Expert Physiotherapist in Parktown, Johannesburg",
  description:
    "Award-winning physiotherapist in Parktown, Johannesburg. Specializing in manual therapy, dry needling, sports rehabilitation, and chronic pain management. HPCSA registered. Book your consultation today.",
  icons: {
    icon: "/KC-Logo-no-bg-updated.png",
    apple: "/KC-Logo-no-bg-updated.png"
  },
  keywords: [
    "Physiotherapist Johannesburg",
    "Physiotherapy Parktown",
    "Dry Needling Johannesburg",
    "Sports Rehabilitation",
    "Manual Therapy",
    "Chronic Pain Management",
    "Physiotherapist near me",
    "D.K. Chetty",
    "HPCSA Registered Physiotherapist",
    "Post-operative Rehabilitation",
    "Home Visits Physiotherapy"
  ],
  metadataBase: new URL("https://dkchettyphysiotherapy.co.za"),
  alternates: {
    canonical: "https://dkchettyphysiotherapy.co.za"
  },
  openGraph: {
    title: "D.K. Chetty Physiotherapy | Expert Care in Johannesburg",
    description:
      "Expert physiotherapy and advanced recovery. Restoring movement through clinical excellence. HPCSA registered.",
    type: "website",
    locale: "en_ZA",
    url: "https://dkchettyphysiotherapy.co.za",
    siteName: "D.K. Chetty Physiotherapy"
  },
  twitter: {
    card: "summary_large_image",
    title: "D.K. Chetty Physiotherapy",
    description: "Expert physiotherapy in Parktown, Johannesburg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dkchettyphysiotherapy.co.za",
  name: "D.K. Chetty Physiotherapy",
  image: "https://dkchettyphysiotherapy.co.za/logo.png",
  description: "Expert physiotherapy services in Parktown, Johannesburg. Specializing in manual therapy, dry needling, and sports rehabilitation.",
  url: "https://dkchettyphysiotherapy.co.za",
  telephone: "+27605035728",
  email: "info@dkchettyphysiotherapy.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "27 St Andrew's Avenue, Impilo Building, Wits Education Campus",
    addressLocality: "Parktown",
    addressRegion: "Gauteng",
    postalCode: "2531",
    addressCountry: "ZA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-26.1919",
    longitude: "28.0305"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "13:00"
    }
  ],
  priceRange: "ZAR",
  sameAs: [
    "https://www.facebook.com/dkchettyphysiotherapy",
    "https://www.instagram.com/dkchettyphysiotherapy"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "50"
  },
  medicalSpecialty: [
    "Physical Medicine and Rehabilitation",
    "Sports Medicine",
    "Manual Therapy"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-white text-charcoal">
        <Loader />
        {children}
      </body>
    </html>
  );
}
