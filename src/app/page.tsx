import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Impact />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
