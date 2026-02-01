import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Projects } from "@/components/Projects";
import { Flyers } from "@/components/Flyers";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <Projects />
      <Flyers />
      <About />
      <Contact />
    </main>
  );
}



