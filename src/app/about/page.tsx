import { Navbar } from "@/components/sections/Navbar";
import { AboutSection } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "About | Franz Abadia",
  description: "Learn more about Franz Abadia and the journey from heartbreaks to headlines.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
