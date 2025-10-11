"use client";
import { useState } from "react";
import { Briefcase, Smartphone, BarChart2, Monitor } from "lucide-react";

export default function ExperienceSection({ dark }) {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Freelance",
      position: "Freelance Developer",
      period: "March 2023 - Present",
      type: "Freelance",
      location: "Remote",
      description: "Developing comprehensive web, mobile, and desktop applications for clients in various domains",
      achievements: [
        "Developing modern web applications using React.js and Node.js",
        "Building cross-platform mobile apps using Flutter",
        "Developing desktop applications using Electron and JavaFX",
        "Managing multiple projects and delivering them on time"
      ],
      technologies: ["React.js", "Node.js", "PHP", "Flutter", "Electron", "JavaFX"],
      color: "from-blue-500 to-cyan-500",
      icon: <Briefcase size={28} color="white" />
    },
    {
      company: "Naltis Business Development, Tlemcen",
      position: "Mobile App Development Intern",
      period: "March 2025",
      type: "Internship",
      location: "Tlemcen, Algeria",
      description: "Developing professional mobile applications using Flutter with a focus on architecture and testing",
      achievements: [
        "Developing professional Flutter apps with strong architecture",
        "Implementing best practices in app engineering",
        "Writing comprehensive tests to ensure code quality",
        "Enhancing app performance and user experience"
      ],
      technologies: ["Flutter", "Dart", "State Management", "Testing", "Architecture"],
      color: "from-purple-500 to-pink-500",
      icon: <Smartphone size={28} color="white" />
    },
    {
      company: "IFRI, Béjaïa",
      position: "Data Analytics Intern",
      period: "December 2023 - January 2024",
      type: "Internship",
      location: "Béjaïa, Algeria",
      description: "Working on data analysis projects and building interactive dashboards",
      achievements: [
        "Developing ETL processes using Talend for data processing",
        "Managing SQL Server databases efficiently",
        "Creating interactive dashboards using Power BI",
        "Analyzing data and extracting valuable business insights"
      ],
      technologies: ["Talend", "SQL Server", "Power BI", "ETL", "Data Analytics"],
      color: "from-orange-500 to-red-500",
      icon: <BarChart2 size={28} color="white" />
    },
    {
      company: "InterEntreprise, Tlemcen",
      position: "Software Development Intern",
      period: "June 2023",
      type: "Internship",
      location: "Tlemcen, Algeria",
      description: "Developing a desktop application for school management using JavaFX",
      achievements: [
        "Designing and developing a comprehensive school management system",
        "Building a modern user interface using JavaFX",
        "Designing and implementing an efficient database",
        "Applying OOP principles and design patterns"
      ],
      technologies: ["JavaFX", "Java", "MySQL", "JDBC", "Scene Builder"],
      color: "from-green-500 to-teal-500",
      icon: <Monitor size={28} color="white" />
    }
  ];

  const certifications = [
    { name: "React Advanced Patterns", issuer: "Frontend Masters", year: "2024", icon: "🏆" },
    { name: "Flutter Development", issuer: "Google", year: "2023", icon: "📱" },
    { name: "Node.js Certification", issuer: "OpenJS Foundation", year: "2023", icon: "🟢" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022", icon: "☁️" }
  ];

  // Dynamic colors
  const badgeBg = dark ? "bg-orange-900/30" : "bg-orange-100";
  const badgeText = dark ? "text-orange-400" : "text-orange-600";
  const textColor = dark ? "text-gray-400" : "text-gray-600";
  const cardBg = dark ? "bg-gray-900" : "bg-white";
  const cardBorder = dark ? "border-gray-700" : "border-gray-200";
  const timelineBorder = dark ? "border-gray-900" : "border-white";
  const titleText = dark ? "text-gray-300" : "text-gray-700";
  const headingText = dark ? "text-gray-200" : "text-gray-800";
  const periodBg = dark ? "bg-blue-900/30" : "bg-blue-100";
  const periodText = dark ? "text-blue-400" : "text-blue-600";
  const typeBg = dark ? "bg-purple-900/30" : "bg-purple-100";
  const typeText = dark ? "text-purple-400" : "text-purple-600";
  const locationBg = dark ? "bg-green-900/30" : "bg-green-100";
  const locationText = dark ? "text-green-400" : "text-green-600";
  const techBg = dark ? "bg-gray-800" : "bg-gray-100";
  const techText = dark ? "text-gray-300" : "text-gray-700";
  const techBorder = dark ? "border-gray-700" : "border-gray-200";
  const certText = dark ? "text-gray-500" : "text-gray-500";

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className={`flex items-center gap-2 px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold`}
            >
              <Briefcase size={16} /> My Career
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className={`text-center ${textColor} mb-12 text-lg max-w-2xl mx-auto`}>
            My journey in programming and development from the beginning until now
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row gap-8 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`
                }}
              >
                {/* Center circle */}
                <div className={`hidden lg:flex absolute right-1/2 transform translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-3xl shadow-2xl border-4 ${timelineBorder} z-10`}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-left lg:pl-12" : "lg:text-right lg:pr-12"}`}>
                  <div className={`group relative p-8 rounded-3xl ${cardBg} border ${cardBorder} hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2`}>
                    <div className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r ${exp.color} rounded-t-3xl`}></div>

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                          {exp.position}
                        </h3>
                        <div className={`flex items-center gap-2 text-lg font-semibold ${titleText} mb-2`}>
                          <span className="text-2xl">{exp.icon}</span>
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className={`px-4 py-2 ${periodBg} ${periodText} rounded-full text-sm font-bold mb-2`}>
                          {exp.period}
                        </div>
                        <div className="flex gap-2">
                          <span className={`px-3 py-1 ${typeBg} ${typeText} rounded-lg text-xs font-semibold`}>
                            {exp.type}
                          </span>
                          <span className={`px-3 py-1 ${locationBg} ${locationText} rounded-lg text-xs font-semibold`}>
                            📍 {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className={`${textColor} mb-6 leading-relaxed`}>
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className={`font-bold mb-3 ${headingText}`}>Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className={`flex items-start gap-3 ${textColor}`}>
                            <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`font-bold mb-3 ${headingText}`}>Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, j) => (
                          <span
                            key={j}
                            className={`px-4 py-2 ${techBg} ${techText} rounded-xl text-sm font-medium border ${techBorder} hover:scale-105 transition-transform`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements 🏆
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl ${cardBg} border ${cardBorder} hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 text-center`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className={`font-bold mb-2 ${headingText} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all`}>
                  {cert.name}
                </h4>
                <p className={`text-sm ${textColor} mb-1`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs ${certText} font-semibold`}>
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}