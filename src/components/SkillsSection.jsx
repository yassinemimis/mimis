"use client";
import { Code, Globe, Smartphone, Database, Settings, Lightbulb, Target } from "lucide-react";

export default function SkillsSection({ dark }) {
  const skills = [
    {
      icon: <Code size={28} color="white" />,
      title: "Programming Languages",
      items: ["C / C++ / Java", "JavaScript / TypeScript", "Dart", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe size={28} color="white" />,
      title: "Web Development",
      items: ["React / Next.js", "Node.js / Express", "HTML / CSS", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone size={28} color="white" />,
      title: "Mobile Development",
      items: ["Flutter", "React Native", "Firebase", "Android SDK"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database size={28} color="white" />,
      title: "Databases",
      items: ["MySQL / SQLite", "MongoDB", "Firebase Firestore", "PostgreSQL"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Settings size={28} color="white" />,
      title: "Tools",
      items: ["Git / GitHub", "VS Code", "Postman", "Figma"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Lightbulb size={28} color="white" />,
      title: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Continuous Learning", "Time Management"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Dynamic colors
  const bgGradient = dark ? "bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" : "bg-gradient-to-b from-transparent via-purple-50/30 to-transparent";
  const badgeBg = dark ? "bg-green-900/30" : "bg-green-100";
  const badgeText = dark ? "text-green-400" : "text-green-600";
  const textColor = dark ? "text-gray-400" : "text-gray-600";
  const cardBg = dark ? "bg-gray-900" : "bg-white";
  const cardBorder = dark ? "border-gray-700" : "border-gray-200";
  const itemHoverText = dark ? "group-hover:text-gray-300" : "group-hover:text-gray-700";

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className={`absolute inset-0 ${bgGradient}`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold`}>
              <Target size={16} />
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Technical Skills
            </span>
          </h2>
          <p className={`text-center ${textColor} mb-12 text-lg max-w-2xl mx-auto`}>
            The technologies and tools I master and use in my daily projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl ${cardBg} border ${cardBorder} hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                {skill.title}
              </h3>

              <ul className="space-y-3">
                {skill.items.map((item, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-3 ${textColor} ${itemHoverText} transition-colors`}
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:scale-125 transition-transform`}></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}