import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CopySecret } from "@/components/sections/Timeline";
import { Process } from "@/components/sections/Process";
import { Showroom } from "@/components/sections/Showroom";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Video } from "@/components/sections/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CopySecret />
        <Process />
        <Showroom />
        <Video />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
