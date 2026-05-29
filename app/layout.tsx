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
  title: "D.K. Chetty Physiotherapy — Expert Physiotherapy & Recovery",
  description:
    "Specialist Physiotherapist D.K. Chetty. Manual therapy, dry needling and advanced strapping for clinical recovery and sports performance.",
  keywords: [
    "Physiotherapist",
    "Dry Needling",
    "Kinesiology Tape",
    "Sports Rehabilitation",
    "D.K. Chetty"
  ],
  openGraph: {
    title: "D.K. Chetty Physiotherapy",
    description:
      "Expert physiotherapy and advanced recovery. Restoring movement through clinical excellence.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white text-charcoal">
        <Loader />
        {children}
      </body>
    </html>
  );
}
