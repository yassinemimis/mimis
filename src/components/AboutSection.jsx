"use client";

import { Code, Palette, Zap, User } from "lucide-react";

export default function AboutSection({ dark }) {
    const features = [
        {
            icon: <Code size={32} />,
            title: "Clean Code",
            desc: "I write maintainable and scalable code following best practices",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Palette size={32} />,
            title: "Attractive Design",
            desc: "Modern and user-friendly interfaces with an excellent user experience",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Zap size={32} />,
            title: "High Performance",
            desc: "Fast and optimized applications for the best user experience",
            color: "from-orange-500 to-red-500"
        }
    ];

    const bgGradient = dark ? "bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" : "bg-gradient-to-b from-transparent via-blue-50/30 to-transparent";
    const badgeBg = dark ? "bg-purple-900/30" : "bg-purple-100";
    const badgeText = dark ? "text-purple-400" : "text-purple-600";
    const textColor = dark ? "text-gray-400" : "text-gray-600";
    const cardBg = dark ? "bg-gray-900" : "bg-white";
    const cardBorder = dark ? "border-gray-700" : "border-gray-200";
    const cardGradientBg = dark ? "from-gray-800 to-gray-900" : "from-blue-50 to-purple-50";

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-full ${bgGradient}`}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold`}>
                            <User size={16} />
                            About Me
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            About
                        </span>
                    </h2>
                    <p className={`text-center ${textColor} mb-8 max-w-3xl mx-auto text-lg leading-relaxed`}>
                        A passionate software developer focused on creating efficient and user-friendly applications. I love learning new technologies and applying them in real-world projects. I always strive to improve my skills and deliver innovative solutions to complex problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group relative p-8 rounded-3xl ${cardBg} border ${cardBorder} hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3`}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                                {feature.title}
                            </h3>
                            <p className={`${textColor} leading-relaxed`}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "10+", label: "Projects" },
                        { number: "5+", label: "Technologies" },
                        { number: "90%", label: "Client Satisfaction" },
                        { number: "2+", label: "Years of Experience" }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`text-center p-6 rounded-2xl bg-gradient-to-br ${cardGradientBg} border ${cardBorder} hover:shadow-lg transition-all hover:scale-105`}
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className={`${textColor} font-medium`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}