
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { ModelViewer } from "@/components/landing/ModelViewer";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <Hero />
        <Features />
        <ModelViewer />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
