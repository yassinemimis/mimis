"use client";

import { useState } from "react";
import { ExternalLink, Github, Globe, Droplet, Smartphone, Monitor, Target, Briefcase, Ticket, Shield, ShoppingCart, Home, CheckCircle, Star, Dumbbell, Cloud } from "lucide-react";

export default function ProjectsSection({ dark }) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            name: "BloodLink",
            tech: [
                "React + Vite",
                "TypeScript",
                "Tailwind CSS",
                "NestJS",
                "Socket.IO",
                "Prisma",
                "PostgreSQL",
                "nginx",
                "Vercel"
            ],
            desc: "BloodLink is a full‑stack web platform that connects blood requesters with compatible donors. It features geolocation-based matching, real‑time chat, push/email notifications, and an admin panel for configuration and SMTP settings. Built for emergency responsiveness and a smooth user experience.",
            color: "from-red-500 to-pink-500",
            category: "web",
            icon: <Droplet className="w-6 h-6" />,
            features: [
                "Create and manage blood requests with blood group, urgency level and units needed",
                "Geolocation-based donor matching with configurable search radius",
                "Realtime room-based chat between requester and donors using Socket.IO (WSS)",
                "Push and email notifications for critical events and new messages",
                "Admin settings panel to manage SMTP and environment config securely",
                "Responsive, accessible UI with Tailwind CSS and form validation (react-hook-form + zod)",
                "Production-ready deployment: HTTPS, nginx reverse-proxy, Let's Encrypt TLS",
                "Robust backend with NestJS, Prisma ORM and PostgreSQL"
            ],
            link: "https://blood-link-5zjg.vercel.app/",
        },
        {
            name: "MyTicketsApp",
            tech: ["Flutter", "Node.js + Express.js", "MySQL", "Provider / Riverpod"],
            desc: "MyTicketsApp is a Flutter-based application that allows users to store, manage, and display their digital tickets easily. It supports QR code scanning, ticket expiration alerts, and seamless ticket sharing",
            color: "from-blue-500 to-cyan-500",
            category: "mobile",
            icon: <Ticket className="w-6 h-6" />,
            features: [
                "Add tickets manually or scan a QR code",
                "View active tickets and hide expired ones",
                "Receive expiration alerts via notifications",
                "Generate and share ticket QR codes",
                "Simple and modern UI with Flutter",
            ],
            link: "https://my-tickets-app-website-8rr9.vercel.app/",
        },

        {
            name: "Gestion Stock",
            tech: ["Electron", "React", "SQLite"],
            desc: "A powerful desktop application for inventory and product management, designed to efficiently track products and generate reports.",
            color: "from-purple-500 to-pink-500",
            category: "desktop",
            icon: <Monitor className="w-6 h-6" />,
            features: [
                "Inventory Management",
                "Product Tracking",
                "Detailed Reports",
                "User-friendly Interface",
                "Efficient Performance",
            ],
            link: "https://gestion-stock-website.vercel.app/",
        },
        {
            name: "Cyber Defense Challenge",
            tech: ["Next.js", "Tailwind", "Supabase"],
            desc: "A web application focused on cybersecurity challenges with user authentication and real-time database integration using Supabase",
            color: "from-green-500 to-teal-500",
            category: "web",
            icon: <Shield className="w-6 h-6" />,
            features: [
                "User Authentication",
                "Real-time Database",
                "Responsive Design",
                "Dark Mode",
            ],
            link: "https://cyber-defense-challenge.vercel.app/",
        },
        {
            name: "Gym Management",
            tech: ["Flutter", "Firebase", "Stripe"],
            desc: "A desktop application built with Electron for managing gym members, subscriptions, and performance analytics.",
            color: "from-orange-500 to-red-500",
            category: "desktop",
            icon: <Dumbbell className="w-6 h-6" />,
            features: ["Member Management", "Subscription Tracking", "Analytics Dashboard"],
            link: "https://gym-management-website-seven.vercel.app/",
        },
        {
            name: "Weather Forecast App",
            tech: ["React Native", "wheather API", "Bloc"],
            desc: "A beautiful weather application that provides real-time weather forecasts and alerts",
            color: "from-cyan-500 to-blue-500",
            category: "mobile",
            icon: <Cloud className="w-6 h-6" />,
            features: [
                "Real-time Weather Data",
                "5-Day Forecast",
                "Location-based Updates",
                "Weather Alerts",
                "Beautiful Animations",
            ],
            link: "https://weather-website-ten-blond.vercel.app/",
        },

        {
            name: "TaskBoost",
            tech: ["React", "Bootstrap", "Node.js+Express", "MongoDB"],
            desc: "A modern To-Do List web application for efficient task management",
            color: "from-pink-500 to-rose-500",
            category: "web",
            icon: <CheckCircle className="w-6 h-6" />,
            features: [
                "Task Management",
                "Responsive UI",
                "Full-stack Functionality",
                "MongoDB Database",
            ],
            link: "https://task-manager-react-theta.vercel.app/login",
        },
        {
            name: "GestionEcole",
            tech: ["Java", "JavaFX", "MongoDB", "MySQL"],
            desc: "A complete desktop application for managing school operations — built with Java, JavaFX, and MySQL for a robust, intuitive, and professional experience.",
            color: "from-yellow-500 to-orange-500",
            category: "desktop",
            icon: <ShoppingCart className="w-6 h-6" />,
            features: [
                "Student Management",
                "Teacher Management",
                "Courses & Classes",
                "Exams & Grades",
                "Attendance Tracking",
                "Database Integration",
                "Modern UI",
                "Stable MVP",
            ],
        },
        {
            name: "Modern Kitchen",
            tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
            desc: "A modern and elegant website for home kitchen solutions with a simple & clean design",
            color: "from-indigo-500 to-purple-500",
            category: "web",
            icon: <Home className="w-6 h-6" />,
            features: [
                "Responsive Design",
                "Elegant UI",
                "Full-stack Functionality",
                "MongoDB Database",
            ],
        },
        {
            name: "Scorpio Club IT",
            tech: ["HTML", "CSS", "JavaScript"],
            desc: "A modern and elegant presentation website for the Scorpio Club IT — showcasing projects, members, and activities with a responsive and dynamic UI.",
            color: "from-blue-900 to-blue-500",
            category: "web",
            icon: <Globe className="w-6 h-6" />,
            features: [
                "Modern Responsive Design",
                "Club Presentation Section",
                "Projects & Events Showcase",
                "Team Members Page",
                "Smooth Animations",
                "Deployed on GitHub Pages",
                "Clean Code Structure",
                "Optimized for Performance",
            ],
            link: "https://yassinemimis.github.io/scorpioclub/",
        }

    ];

    const filters = [
        { id: "all", label: "All", icon: <Target size={20} /> },
        { id: "web", label: "Web", icon: <Globe size={20} /> },
        { id: "mobile", label: "Mobile", icon: <Smartphone size={20} /> },
        { id: "desktop", label: "Desktop", icon: <Monitor size={20} /> }
    ];

    const filteredProjects = activeFilter === "all"
        ? (showAll ? projects : projects.slice(0, 6))
        : (showAll ? projects.filter(p => p.category === activeFilter) : projects.filter(p => p.category === activeFilter).slice(0, 6));

    const hasMoreProjects = activeFilter === "all"
        ? projects.length > 6
        : projects.filter(p => p.category === activeFilter).length > 6;

    // Dynamic colors
    const badgeBg = dark ? "bg-blue-900/30" : "bg-blue-100";
    const badgeText = dark ? "text-blue-400" : "text-blue-600";
    const textColor = dark ? "text-gray-400" : "text-gray-600";
    const cardBg = dark ? "bg-gray-900" : "bg-white";
    const cardBorder = dark ? "border-gray-700" : "border-gray-200";
    const filterBg = dark ? "bg-gray-800" : "bg-white";
    const filterText = dark ? "text-gray-300" : "text-gray-700";
    const techBg = dark ? "bg-gray-800" : "bg-gray-100";
    const techText = dark ? "text-gray-300" : "text-gray-700";
    const techBorder = dark ? "border-gray-700" : "border-gray-200";
    const descText = dark ? "text-gray-300" : "text-gray-600";
    const featureText = dark ? "text-gray-400" : "text-gray-600";
    const githubBorder = dark ? "border-gray-600" : "border-gray-300";
    const githubHover = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";

    return (
        <section id="projects" className="flex items-center justify-center relative overflow-hidden ">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 ${badgeBg} ${badgeText} rounded-full text-sm font-semibold`}>
                            <Briefcase size={16} />
                            My Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className={`text-center ${textColor} mb-12 text-lg max-w-2xl mx-auto`}>
                        A collection of projects I designed and developed using the latest technologies
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => {
                                setActiveFilter(filter.id);
                                setShowAll(false);
                            }}
                            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                                : `${filterBg} ${filterText} hover:shadow-md hover:scale-105 border ${cardBorder}`
                                }`}
                        >
                            <span>{filter.icon}</span>
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredProject(i)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className={`group relative ${cardBg} rounded-3xl overflow-hidden border ${cardBorder} hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3`}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                            }}
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-500 ${hoveredProject === i ? "scale-x-100" : "scale-x-0"
                                }`}></div>

                            <div className="relative p-6 pb-0">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-4xl mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                                    {project.icon}
                                </div>

                                <div className="absolute top-6 right-6">
                                    <span
                                        className={`flex items-center gap-1 px-3 py-1 ${badgeBg} ${badgeText} rounded-full text-xs font-bold`}
                                    >
                                        Featured <Star size={14} />
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 pt-2">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                                    {project.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, j) => (
                                        <span
                                            key={j}
                                            className={`px-3 py-1 ${techBg} ${techText} rounded-lg text-xs font-medium border ${techBorder}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className={`${descText} mb-6 leading-relaxed`}>
                                    {project.desc}
                                </p>

                                <div className="mb-6 space-y-2">
                                    {project.features.map((feature, j) => (
                                        <div key={j} className={`flex items-center gap-2 text-sm ${featureText}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.link}
                                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-105`}
                                    >
                                        <ExternalLink size={18} />
                                        View Project
                                    </a>
                                    <a
                                        href="#"
                                        className={`px-4 py-3 border-2 ${githubBorder} rounded-xl ${githubHover} transition-all hover:scale-105`}
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="flex flex-wrap justify-center items-center gap-4">

                        <a
                            href="https://github.com/yassinemimis?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-105"
                        >
                            <Github size={20} />
                            View More on GitHub
                            <ExternalLink size={18} />
                        </a>
                        {hasMoreProjects && (
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-105 hover:bg-blue-500 hover:text-white"
                            >
                                {showAll ? "Show Less" : "View More Projects"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}