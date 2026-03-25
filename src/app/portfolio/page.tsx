import { Navbar } from "@/components/sections/Navbar";
import { Showroom } from "@/components/sections/Showroom";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Portfolio — Franz Abadia",
  description:
    "Browse Franz Abadia's copywriting portfolio. Real projects, real results — landing pages, email sequences, ad copy, and brand voice.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Showroom />
      </main>
      <Footer />
    </>
  );
}
