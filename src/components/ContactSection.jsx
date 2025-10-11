"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection({ dark }) {
    const contactMethods = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            value: "yassinekherbouche88@gmail.com",
            href: "mailto:yassinekherbouche88@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Github size={24} />,
            title: "GitHub",
            value: "@yassinemimis",
            href: "https://github.com/yassinemimis",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Linkedin size={24} />,
            title: "LinkedIn",
            value: "Mohammed Yacine",
            href: "https://www.linkedin.com/in/mohammed-yacine-kherbouche-110509263/",
            color: "from-orange-500 to-red-500"
        }
    ];

    // Dynamic colors
    const badgeBg = dark ? "bg-pink-900/30" : "bg-pink-100";
    const badgeText = dark ? "text-pink-400" : "text-pink-600";
    const textColor = dark ? "text-gray-400" : "text-gray-600";
    const cardBg = dark ? "bg-gray-900" : "bg-white";
    const cardBorder = dark ? "border-gray-700" : "border-gray-200";
    const buttonBorder = dark ? "border-blue-400 text-blue-400" : "border-blue-500 text-blue-500";

    return (
        <section id="contact" className="py-24 px-6 items-center justify-center relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-block mb-4">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold`}>
                        <Mail size={16} />
                        Contact
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Do you have a project?
                    </span>
                </h2>

                <p className={`text-xl md:text-2xl ${textColor} mb-12 max-w-2xl mx-auto`}>
                    Let's work together to turn your idea into an innovative digital reality
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((method, i) => (
                        <a
                            key={i}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group p-8 rounded-3xl ${cardBg} border ${cardBorder} hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2`}
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                {method.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                                {method.title}
                            </h3>
                            <p className={`text-sm ${textColor} break-all`}>
                                {method.value}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <a
                        href="mailto:yassinekherbouche88@gmail.com"
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
                    >
                        <Mail size={24} />
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>

                    <a
                        href="https://github.com/yassinemimis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-3 px-10 py-5 border-2 ${buttonBorder} rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all hover:scale-105 hover:shadow-xl`}
                    >
                        <Github size={24} />
                        Follow me on GitHub
                    </a>
                </div>

                <p className={textColor}>
                    Available for freelance work and exciting projects 
                </p>
            </div>
        </section>
    );
}