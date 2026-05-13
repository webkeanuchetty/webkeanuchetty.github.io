import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Qualifications />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
