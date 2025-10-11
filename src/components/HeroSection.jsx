"use client";
import { useState, useEffect } from "react";
import { Menu, X, Mail, Github, Linkedin, Download, Hand } from "lucide-react";

export default function HeroSection({ dark }) {
  const bgColor = dark ? "bg-gray-950" : "bg-white";
  const textColor = dark ? "text-gray-100" : "text-gray-900";
  const subtextColor = dark ? "text-gray-400" : "text-gray-600";
  const badgeBg = dark ? "bg-blue-900/30" : "bg-blue-100";
  const badgeText = dark ? "text-blue-400" : "text-blue-600";
  const cardBg = dark ? "bg-gray-800" : "bg-white";
  const cardBorder = dark ? "border-gray-700" : "border-gray-200";
  const buttonBg = dark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200";
  const buttonText = dark ? "text-gray-300" : "text-gray-700";
  const avatarBorder = dark ? "border-gray-900" : "border-white";

  return (
    <section className={`min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* المحتوى على اليسار */}
          <div className="text-left lg:text-left text-center">
            <div className="mb-4">
              <span className={`px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold inline-flex items-center gap-2`}>
                Hello, I'm <Hand size={16} className={badgeText} />
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
               KHERBOUCHE Mohammed Yacine
              </span>
            </h1>

            <div className="mb-6">
              <p className="text-2xl md:text-3xl font-bold mb-2">
                Full Stack Developer
              </p>
              <p className={`text-lg ${subtextColor}`}>
                Mobile & Web Applications
              </p>
            </div>

            <p className={`text-lg md:text-xl mb-10 ${subtextColor} leading-relaxed`}>
              I build professional web and mobile applications using the latest technologies such as{" "}
              <span className="font-semibold text-blue-500">React</span>,{" "}
              <span className="font-semibold text-blue-500">Flutter</span>, and{" "}
              <span className="font-semibold text-blue-500">Node.js</span>. I turn ideas into innovative digital realities 
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>

              <a
                href="#contact"
                className={`px-8 py-4 border-2 ${dark ? "border-blue-400 text-blue-400" : "border-blue-500 text-blue-500"} rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                Contact Me
              </a>

              <a
                href="/CV_Mohammed_Yacine_Kherbouche_ATS_EN.pdf"
                download="MohammedYacineKherboucheCV.pdf"
                className={`px-8 py-4 ${buttonBg} ${buttonText} rounded-2xl font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2`}
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { icon: <Github size={24} />, href: "https://github.com/yassinemimis", label: "GitHub" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/mohammed-yacine-kherbouche-110509263/", label: "LinkedIn" },
                { icon: <Mail size={24} />, href: "mailto:yassinekherbouche88@gmail.com", label: "Email" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-2xl ${cardBg} border ${cardBorder} hover:border-blue-500 transition-all hover:scale-110 hover:shadow-xl`}
                  title={social.label}
                >
                  <div className="group-hover:text-blue-500 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* الصورة على اليمين - مخفية على الموبايل */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="images/2.png"
                alt="Mohammed Yacine Kherbouche"
            
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}