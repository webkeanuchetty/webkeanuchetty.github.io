import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Qualifications /> */}
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
