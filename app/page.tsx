import Hero from "@/components/sections/hero";
import TechStack from "@/components/sections/tech-stack";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
