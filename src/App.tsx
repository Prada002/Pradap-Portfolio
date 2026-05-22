import React, { useState, useEffect } from "react";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Send,
  Sparkles,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Calendar,
  Download,
} from "lucide-react";
import pradap from "../src/assets/pradap.jpg";
const GithubIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Resume data structures
const SKILLS_DATA = [
  { name: "React.js", category: "react", level: 95 },
  { name: "TypeScript", category: "react", level: 90 },
  { name: "Redux", category: "react", level: 85 },
  { name: "Zustand", category: "react", level: 90 },
  { name: "TanStack Query", category: "react", level: 95 },
  { name: "React Router", category: "react", level: 90 },
  { name: "Custom Hooks", category: "react", level: 95 },
  { name: "Component Architecture", category: "react", level: 90 },

  { name: "JavaScript (ES6+)", category: "frontend", level: 95 },
  { name: "HTML5 / CSS3", category: "frontend", level: 90 },
  { name: "Tailwind CSS", category: "frontend", level: 95 },
  { name: "SCSS", category: "frontend", level: 80 },
  { name: "Bootstrap", category: "frontend", level: 85 },
  { name: "Responsive Design", category: "frontend", level: 95 },
  { name: "Performance Optimisation", category: "frontend", level: 90 },

  { name: "Node.js (Basic)", category: "backend", level: 75 },
  { name: "Express.js", category: "backend", level: 70 },
  { name: "REST API", category: "backend", level: 95 },
  { name: "MongoDB", category: "backend", level: 70 },

  { name: "Git & GitHub", category: "tools", level: 90 },
  { name: "Postman", category: "tools", level: 85 },
  { name: "VS Code", category: "tools", level: 95 },
  { name: "GitHub Actions", category: "tools", level: 80 },
  { name: "Vite", category: "tools", level: 90 },
  { name: "WebSockets", category: "tools", level: 75 },
  { name: "WebRTC", category: "tools", level: 70 },
  { name: "Unit Testing", category: "tools", level: 80 },
];

const EXPERIENCE_DATA = [
  {
    company: "Codoid Innovations Pvt Ltd",
    role: "Software Developer",
    location: "Chennai, India",
    period: "Dec 2023 - Present",
    highlights: [
      "Developed most of all the core client-facing projects in React, taking full ownership of development and directly managing client requirements and communication.",
      "Owned the full frontend lifecycle from initial requirements gathering and client alignment to UI/UX component design and production deployment.",
      "Focused extensively on JavaScript (JSX) applications for highly interactive modules while utilizing TypeScript (TSX) for specialized multi-portal interfaces.",
      "Implemented TanStack Query for server-state management and caching, reducing redundant API calls by an estimated 30% and improving UI responsiveness.",
      "Managed complex client-side state using Redux and Zustand across large multi-portal applications with distinct user role permissions.",
      "Collaborated closely with backend engineers and QA to deliver pixel-perfect, accessible, and high-performance responsive web layouts.",
    ],
  },
];

const PROJECTS_DATA = [
  {
    title: "Workflow Management System",
    year: "2024",
    description:
      "A dynamic, high-performance web solution built to orchestrate enterprise-level workflow automations without code changes.",
    features: [
      "Built a JSON-driven dynamic form builder in React.js (JSX), allowing non-developers to configure custom form fields and logical rules dynamically.",
      "Engineered highly reusable, modular React components for form rendering, field validation, and multi-step transitions using JavaScript ES6+.",
      "Managed complex multi-step user-state flows using Zustand, ensuring extremely predictable UI behavior, lightweight bundles, and simple debugging.",
    ],
    tech: [
      "React.js (JSX)",
      "JavaScript",
      "Zustand",
      "Tailwind CSS",
      "JSON Schema",
      "Vite",
    ],
  },
  {
    title: "Property Management Platform",
    year: "2024",
    description:
      "An exhaustive, role-specific multi-portal real estate system serving distinct dashboards for four major user personas.",
    features: [
      "Designed and coded four role-specific portals (Admin, Client, Landlord, Tenant) incorporating protected routing and permission-based UI rendering.",
      "Built fully typed, highly structured component architectures in React + TypeScript (TSX) to represent user states and dashboard layouts.",
      "Styled unified layouts using Tailwind CSS, ensuring pixel-perfect consistency across interfaces while supporting a dynamic admin-configurable theming system.",
    ],
    tech: [
      "React.js (TSX)",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "REST APIs",
    ],
  },
  {
    title: "People Manpower Onboarding Platform",
    year: "2023 - 2024",
    description:
      "An enterprise employee lifecycle system designed for seamless verification, automated payroll, and regional manager control.",
    features: [
      "Engineered an interactive multi-step KYC validation process that streamlines employee verification, visual approvals, and data security.",
      "Developed dedicated operational dashboards and workflows for Regional Managers, facilitating quick staff allocation and localized control.",
      "Integrated automated payroll frameworks and comp tracking using React.js (JSX) and Redux to secure regional salary computations.",
    ],
    tech: [
      "React.js (JSX)",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
      "KYC Integration",
    ],
  },
  {
    title: "WebRTC Drone Live Monitoring & AI Platform",
    year: "2024",
    description:
      "A high-end telemetries app providing real-time WebRTC video streams, WebSocket coordinates, and intelligent AI drone reports.",
    features: [
      "Implemented WebRTC live data transfer and WebSockets connection to stream real-time drone coordinates and camera footage with minimal latency.",
      "Integrated AI generation models to analyze flown areas, producing comprehensive inspections reports and flight summaries.",
      "Coded responsive interactive map visualizations using Leaflet/Mapbox and Tailwind CSS to overlay live telemetry vectors and flight paths.",
    ],
    tech: [
      "React.js (JSX)",
      "JavaScript",
      "WebRTC",
      "WebSockets",
      "AI Reporting",
      "Tailwind CSS",
    ],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [skillCategory, setSkillCategory] = useState("all");
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Typing typewriter effect strings
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "TypeScript Architect",
    "State Management Expert",
  ];

  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Intersection Observer for scroll-reveal and navbar active state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Setup observer for scroll reveals
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Update active navigation link
          const id = entry.target.getAttribute("id");
          if (id) setActiveSection(id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(
      "section[id], .reveal-on-scroll",
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer: number;
    const currentWord = roles[typingIndex % roles.length];

    if (isDeleting) {
      // Deleting speed
      timer = window.setTimeout(() => {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      }, 50);
    } else {
      // Typing speed
      timer = window.setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 100);
    }

    // Handling transitions
    if (!isDeleting && typedText === currentWord) {
      // Hold word before deleting
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingIndex]);

  const filteredSkills =
    skillCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === skillCategory);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.email || !messageForm.message) return;

    setFormStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xqejppvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: messageForm.name,
          email: messageForm.email,
          message: messageForm.message,
          subject: `New Portfolio Message from ${messageForm.name}`,
        }),
      });

      const result = await response.json();
      console.log(result, "daskldklas");
      if (result.ok) {
        setFormStatus("success");
        setMessageForm({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Background Ambient Glows */}
      <div className="bg-glow-wrapper">
        <div className="bg-glow-blob bg-glow-1"></div>
        <div className="bg-glow-blob bg-glow-2"></div>
        <div className="bg-glow-blob bg-glow-3"></div>
      </div>

      {/* Modern Fixed Navbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transition: "all var(--transition-fast)",
        }}
        className={navbarScrolled ? "navbar-scrolled" : ""}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "4.5rem",
          }}
        >
          {/* Logo brand */}
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "white",
              fontWeight: 800,
              fontSize: "1.25rem",
              fontFamily: "var(--font-heading)",
            }}
          >
            <Code2 style={{ color: "var(--color-secondary)" }} size={24} />
            <span>
              PRADAP<span style={{ color: "var(--color-primary)" }}>.M</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: "none" }} className="md-flex-nav">
            <ul
              style={{
                display: "flex",
                gap: "2rem",
                listStyle: "none",
              }}
            >
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      transition: "color var(--transition-fast)",
                      color:
                        activeSection === sec
                          ? "var(--color-secondary)"
                          : "var(--text-muted)",
                    }}
                    className="nav-link-hover"
                  >
                    {sec}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect Action Button (Desktop) */}
          <div style={{ display: "none" }} className="md-flex-action">
            <a
              href="#contact"
              className="btn btn-secondary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "block",
            }}
            className="md-hide-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Fullscreen Navigation overlay */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "4.5rem",
              left: 0,
              width: "100%",
              height: "calc(100vh - 4.5rem)",
              background: "var(--bg-primary)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
              zIndex: 49,
              animation: "fadeInUp 0.3s forwards",
            }}
          >
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  textTransform: "capitalize",
                  color:
                    activeSection === sec
                      ? "var(--color-secondary)"
                      : "var(--text-main)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {sec}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
            >
              <span>Connect Now</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginTop: "4.5rem" }}>
        {/* HERO SECTION */}
        <section
          id="home"
          style={{
            minHeight: "calc(100vh - 4.5rem)",
            display: "flex",
            alignItems: "center",
            padding: "4rem 0",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div
            className="container hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left intro details */}
            <div style={{ textAlign: "left" }} className="animate-fade-in-up">
              {/* Premium tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Sparkles size={14} />
                <span>Available for New Roles</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "white",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm <br />
                <span className="gradient-text">Pradap M</span>
              </h1>

              {/* Typewriter text for roles */}
              <div
                style={{
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  fontWeight: 600,
                  color: "var(--text-main)",
                  minHeight: "2.5rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span style={{ color: "var(--color-secondary)" }}>&gt;_</span>
                <span>{typedText}</span>
                <span
                  className="cursor-blink"
                  style={{ color: "var(--color-secondary)" }}
                >
                  |
                </span>
              </div>

              <p
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "2.5rem",
                  maxWidth: "560px",
                  lineHeight: 1.6,
                }}
              >
                A high-performing **Frontend Developer with 2+ years of
                experience** specializing in building highly responsive React
                (JSX/TSX) web applications. I take complete ownership of the
                frontend lifecycle—from direct client management and
                requirements gathering to deploying high-performance caching and
                state systems.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <a href="#projects" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1UtwYNb_TfWT_E6biLXOvvNDv2dWIOF7h/view?usp=sharing"
                  download
                  target="_blank"
                  className="btn btn-secondary"
                >
                  <span>Download Resume</span>
                  <Download size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Right Portrait Column */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Visual Container */}
              <div
                style={{
                  position: "relative",
                  width: "320px",
                  height: "420px",
                  borderRadius: "24px",
                  padding: "8px",
                }}
                className="pulse-border-glow"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    position: "relative",
                    background: "var(--bg-secondary)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <img
                    src={pradap}
                    alt="Pradap M Portrait"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 15%",
                      transition: "transform 0.5s ease",
                    }}
                    className="portrait-hover-zoom"
                  />
                  {/* Glass Card Info Overlay */}
                  <div
                    className="glass-card"
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      right: "1rem",
                      padding: "1rem",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: "white",
                        fontSize: "1rem",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Pradap M
                    </div>
                    <div
                      style={{
                        color: "var(--color-secondary)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      Software Developer
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        color: "var(--text-muted)",
                        fontSize: "0.75rem",
                        marginTop: "0.25rem",
                      }}
                    >
                      <MapPin size={12} />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          style={{
            padding: "6rem 0",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                }}
              >
                About <span className="gradient-text">Me</span>
              </h2>
              <div
                style={{
                  height: "4px",
                  width: "60px",
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  margin: "1rem auto 0",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Layout Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
              }}
              className="about-grid"
            >
              {/* Profile Card / Philosophy */}
              <div
                className="glass-card"
                style={{ padding: "2.5rem", textAlign: "left" }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    color: "white",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <Terminal
                    style={{ color: "var(--color-secondary)" }}
                    size={24}
                  />
                  <span>My Professional Bio</span>
                </h3>
                <p
                  style={{
                    marginBottom: "1.5rem",
                    fontSize: "1.05rem",
                    lineHeight: "1.7",
                  }}
                >
                  I am a passionate developer who thrives at the intersection of
                  robust programming and rich, smooth, and clean user
                  experience. Over the last **2+ years**, I have designed
                  interactive web frontends, developed custom rendering systems
                  in React (primarily in JSX, with specialized TSX platforms),
                  and engineered solutions that boost performance and improve
                  application responsiveness.
                </p>
                <p
                  style={{
                    marginBottom: "1.5rem",
                    fontSize: "1.05rem",
                    lineHeight: "1.7",
                  }}
                >
                  At **Codoid Innovations**, I take charge of full frontend
                  lifecycles and **directly manage client relationships**:
                  translating direct client requirements into robust component
                  code, setting up query-caching strategies with TanStack Query,
                  and optimizing shared states across multi-role administrative
                  platforms.
                </p>

                {/* Info Pills */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(6, 182, 212, 0.1)",
                        color: "var(--color-secondary)",
                        padding: "0.5rem",
                        borderRadius: "8px",
                      }}
                    >
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Experience
                      </div>
                      <div style={{ fontWeight: 700, color: "white" }}>
                        2+ Years Active
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(139, 92, 246, 0.1)",
                        color: "var(--color-primary)",
                        padding: "0.5rem",
                        borderRadius: "8px",
                      }}
                    >
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Current Role
                      </div>
                      <div style={{ fontWeight: 700, color: "white" }}>
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div
                className="glass-card"
                style={{
                  padding: "2.5rem",
                  textAlign: "left",
                  borderLeft: "4px solid var(--color-primary)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    color: "white",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <GraduationCap
                    style={{ color: "var(--color-primary)" }}
                    size={26}
                  />
                  <span>Education</span>
                </h3>

                <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
                  {/* Decorative education indicator */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "6px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--color-secondary)",
                    }}
                  ></div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        color: "white",
                        fontWeight: 700,
                      }}
                    >
                      Hindusthan Institute of Technology
                    </h4>
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "0.2rem 0.75rem",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        color: "var(--color-secondary)",
                        fontWeight: 600,
                      }}
                    >
                      Jun 2019 – May 2023
                    </span>
                  </div>

                  <p
                    style={{
                      color: "var(--text-main)",
                      fontWeight: 600,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Bachelor of Engineering in Electronics and Communication
                    Engineering
                  </p>

                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    <MapPin size={12} />
                    <span>Coimbatore, Tamil Nadu, India</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          style={{
            padding: "6rem 0",
            background: "var(--bg-secondary)",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                }}
              >
                My <span className="gradient-text">Skills</span>
              </h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  maxWidth: "600px",
                  margin: "0.5rem auto 0",
                }}
              >
                A showcase of technical proficiencies across core frontend
                layers, advanced state managers, build frameworks, and backend
                integrations.
              </p>
              <div
                style={{
                  height: "4px",
                  width: "60px",
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  margin: "1rem auto 0",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Category Filters */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "3rem",
              }}
            >
              {[
                { id: "all", label: "All Skills" },
                { id: "react", label: "React Ecosystem" },
                { id: "frontend", label: "Frontend Core" },
                { id: "backend", label: "Backend & DB" },
                { id: "tools", label: "Tools & Other" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSkillCategory(cat.id)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    border: "1px solid",
                    borderColor:
                      skillCategory === cat.id
                        ? "var(--color-secondary)"
                        : "rgba(255, 255, 255, 0.1)",
                    background:
                      skillCategory === cat.id
                        ? "rgba(6, 182, 212, 0.15)"
                        : "rgba(255, 255, 255, 0.02)",
                    color:
                      skillCategory === cat.id ? "white" : "var(--text-muted)",
                    cursor: "pointer",
                    fontWeight: 600,
                    transition: "all var(--transition-fast)",
                  }}
                  className="skill-filter-btn"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card glow-card"
                  style={{
                    padding: "1.25rem",
                    textAlign: "left",
                    transition: "all var(--transition-normal)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "white" }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        color: "var(--color-secondary)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill level indicator */}
                  <div
                    style={{
                      height: "6px",
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background:
                          "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                        borderRadius: "3px",
                        transition: "width 1s ease-out",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section
          id="experience"
          style={{
            padding: "6rem 0",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                }}
              >
                Work <span className="gradient-text">Experience</span>
              </h2>
              <div
                style={{
                  height: "4px",
                  width: "60px",
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  margin: "1rem auto 0",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Timeline */}
            <div className="timeline">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={exp.company}
                  className={`timeline-item ${idx % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}
                >
                  <div
                    className="glass-card"
                    style={{ padding: "2rem", textAlign: "left" }}
                  >
                    {/* Period Badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(6, 182, 212, 0.1)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "9999px",
                        color: "var(--color-secondary)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        marginBottom: "1rem",
                      }}
                    >
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        marginBottom: "0.25rem",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {exp.role}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        paddingBottom: "1rem",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "white" }}>
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        paddingLeft: "1.25rem",
                      }}
                    >
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.95rem",
                            lineHeight: "1.6",
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          style={{
            padding: "6rem 0",
            background: "var(--bg-secondary)",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                }}
              >
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  maxWidth: "600px",
                  margin: "0.5rem auto 0",
                }}
              >
                A demonstration of software systems built with high typing
                safety, modular components, and predictable state.
              </p>
              <div
                style={{
                  height: "4px",
                  width: "60px",
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  margin: "1rem auto 0",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {PROJECTS_DATA.map((proj) => (
                <article
                  key={proj.title}
                  className="glass-card glow-card"
                  style={{
                    padding: "2.5rem",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    {/* Header info */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "var(--color-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {proj.year} Product
                      </span>
                      <span
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Production Case Study
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.75rem",
                        color: "white",
                        marginBottom: "1rem",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {proj.title}
                    </h3>

                    <p
                      style={{
                        marginBottom: "1.5rem",
                        fontSize: "0.975rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {proj.description}
                    </p>

                    {/* Features list */}
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingLeft: "1.25rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {proj.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                          }}
                        >
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                        paddingTop: "1.25rem",
                      }}
                    >
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: "rgba(139, 92, 246, 0.08)",
                            color: "var(--color-primary)",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          style={{
            padding: "6rem 0",
            position: "relative",
          }}
          className="reveal-on-scroll"
        >
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                }}
              >
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  maxWidth: "600px",
                  margin: "0.5rem auto 0",
                }}
              >
                Have a role, project idea, or just want to chat? Reach out
                directly, and let's build something awesome together!
              </p>
              <div
                style={{
                  height: "4px",
                  width: "60px",
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  margin: "1rem auto 0",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Layout Split */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "start",
              }}
              className="contact-grid"
            >
              {/* Left Info Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  textAlign: "left",
                }}
              >
                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      marginBottom: "1.5rem",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Contact Information
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    <a
                      href="mailto:pradapm612@gmail.com"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                        color: "var(--text-main)",
                        transition: "color 0.2s",
                      }}
                      className="contact-link"
                    >
                      <div
                        style={{
                          background: "rgba(6, 182, 212, 0.1)",
                          color: "var(--color-secondary)",
                          padding: "0.6rem",
                          borderRadius: "8px",
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          Email
                        </div>
                        <div style={{ fontWeight: 600 }}>
                          pradapm612@gmail.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+917598551381"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                        color: "var(--text-main)",
                        transition: "color 0.2s",
                      }}
                      className="contact-link"
                    >
                      <div
                        style={{
                          background: "rgba(139, 92, 246, 0.1)",
                          color: "var(--color-primary)",
                          padding: "0.6rem",
                          borderRadius: "8px",
                        }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          Phone
                        </div>
                        <div style={{ fontWeight: 600 }}>+91 75985 51381</div>
                      </div>
                    </a>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(59, 130, 246, 0.1)",
                          color: "var(--color-accent)",
                          padding: "0.6rem",
                          borderRadius: "8px",
                        }}
                      >
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          Location
                        </div>
                        <div style={{ fontWeight: 600 }}>
                          Chennai, Tamil Nadu, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Connect Card */}
                <div className="glass-card" style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "white",
                      marginBottom: "1.25rem",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Profiles & Networks
                  </h3>

                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a
                      href="https://linkedin.com/in/pradap-m-61282a2a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: "0.6rem 1rem",
                      }}
                    >
                      <LinkedinIcon size={16} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Prada002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: "0.6rem 1rem",
                      }}
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    marginBottom: "1.5rem",
                    textAlign: "left",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Send a Message
                </h3>

                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={messageForm.name}
                      onChange={(e) =>
                        setMessageForm({ ...messageForm, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={messageForm.email}
                      onChange={(e) =>
                        setMessageForm({
                          ...messageForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-message">
                      Message Details
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      className="form-input"
                      placeholder="Describe your role opportunity or project needs..."
                      value={messageForm.message}
                      onChange={(e) =>
                        setMessageForm({
                          ...messageForm,
                          message: e.target.value,
                        })
                      }
                      style={{ resize: "vertical" }}
                      required
                    ></textarea>
                  </div>

                  {formStatus === "success" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        color: "#10b981",
                        marginBottom: "1.5rem",
                        fontSize: "0.9rem",
                        textAlign: "left",
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>
                        Thanks! Your message has been sent successfully. I'll
                        get back to you shortly.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    disabled={formStatus === "submitting"}
                  >
                    <span>
                      {formStatus === "submitting"
                        ? "Sending Message..."
                        : "Send Message"}
                    </span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "2.5rem 0",
          background: "var(--bg-primary)",
          zIndex: 10,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "white",
              fontSize: "1.1rem",
              fontFamily: "var(--font-heading)",
            }}
          >
            PRADAP<span style={{ color: "var(--color-secondary)" }}>.M</span>
          </div>
          <p style={{ fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Pradap M. Built with React, TypeScript,
            and extreme care. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Inline styles for responsive media queries and custom classes */}
      <style>{`
        /* Responsive Grid Adjustments */
        @media (min-width: 768px) {
          .md-flex-nav { display: flex !important; }
          .md-flex-action { display: flex !important; }
          .md-hide-menu { display: none !important; }
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          .about-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }

        /* Hover interactions */
        .nav-link-hover:hover {
          color: white !important;
        }

        .portrait-hover-zoom:hover {
          transform: scale(1.03);
        }

        .skill-filter-btn:hover {
          border-color: var(--color-primary) !important;
          color: white !important;
        }

        .contact-link:hover {
          color: var(--color-secondary) !important;
        }
      `}</style>
    </div>
  );
}

export default App;
