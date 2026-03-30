import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Showroom } from "@/components/sections/Showroom";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Showroom />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
