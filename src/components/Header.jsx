"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header({ dark, setDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = dark ? "bg-gray-900/90" : "bg-white/90";
  const textColor = dark ? "text-gray-100" : "text-gray-900";
  const hoverBg = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const borderColor = dark ? "border-gray-700" : "border-gray-200";

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? `top-4 w-[90%] max-w-5xl ${bgColor} backdrop-blur-lg shadow-lg rounded-2xl`
          : `w-full max-w-7xl bg-transparent`
      } ${textColor}`}
    >
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
           <a href="#"> MY </a>
            
          </h1>

          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-sm font-medium hover:text-blue-500 transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full ${hoverBg} transition-all text-2xl`}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full ${hoverBg} transition-all text-2xl`}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${hoverBg}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className={`md:hidden mt-4 py-4 space-y-2 border-t ${borderColor}`}>
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg ${hoverBg} transition-colors`}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
