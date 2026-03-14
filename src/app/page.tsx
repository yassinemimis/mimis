"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="port-main" style={{
        maxWidth: "1200px", margin: "0 auto",
        borderLeft: "0.5px solid var(--border)",
        borderRight: "0.5px solid var(--border)",
        minHeight: "100vh",
      }}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
