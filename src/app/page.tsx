"use client";
import { useState } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";

export default function Home() {
  const [dark, setDark] = useState(true);

  const textColor = dark ? "text-gray-100" : "text-gray-900";

  return (
    <div className={`min-h-screen ${textColor} transition-colors duration-300 relative`}>
      {/* Galaxy Background */}
      <GalaxyBackground dark={dark} />

      {/* Content */}
      <div className="relative z-10">
        <Header dark={dark} setDark={setDark} />
        <HeroSection dark={dark} />
        <AboutSection dark={dark} />
        <ProjectsSection dark={dark} />
        <ExperienceSection dark={dark} />
        <SkillsSection dark={dark} />
        <ContactSection dark={dark} />
        <Footer />
      </div>
    </div>
  );
}