export const en = {
  common: {
    siteTitle: "Slordef - CTO & CISO Freelance",
    readMore: "Read More",
    viewProject: "View Project",
    allRightsReserved: "All rights reserved",
    builtWithPassion: "Built with passion for excellence",
  },
  nav: {
    home: "Home",
    about: "About",
    expertise: "Expertise",
    services: "Services",
    experience: "Experience",
    works: "Works",
    sideProjects: "Side Projects",
    contact: "Contact",
  },
  home: {
    title: "Slordef",
    subtitle: "CTO & CISO Freelance",
    tagline: "Architecture • Security • Technical Leadership",
    experience: "15+ years building scalable, secure systems",
  },
  about: {
    title: "About Me",
    intro:
      "CTO and CISO with 15+ years of experience in fullstack development, security, and technical leadership.",
    description:
      "I help startups and tech-driven SMEs structure their architecture, secure their systems, and manage technical complexity efficiently and sustainably.",
    approach:
      "My approach is pragmatic, measurable, and strategically aligned with business goals. I'm passionate about learning, building robust systems, and mentoring technical teams.",
  },
  expertise: {
    title: "Core Expertise",
    architecture: {
      title: "Architecture & Development",
      items: [
        "Multi-tenant architecture, scalability, performance",
        "TypeScript, Node.js, React, Vue, Python, C++",
        "CI/CD pipelines, containerization, cloud infrastructure",
        "Monitoring and observability",
      ],
    },
    security: {
      title: "Security & Compliance",
      items: [
        "ISO 27001: full implementation and certification",
        "Security audits, risk management, DevSecOps",
        "Policy design, incident response plans",
        "Vulnerability management",
      ],
    },
    leadership: {
      title: "Leadership & Governance",
      items: [
        "Technical roadmap definition and execution",
        "Mentoring developers and leading teams",
        "Crisis management (production, vulnerabilities)",
        "Cross-functional collaboration",
      ],
    },
    impact: {
      title: "Impact & Sustainability",
      items: [
        "Eco-design and green IT practices",
        "Accessibility (WCAG, RGAA)",
        "IT environmental impact assessment",
        "Sustainable architecture decisions",
      ],
    },
  },
  services: {
    title: "Engagement Models",
    subtitle: "Flexible collaboration options tailored to your needs",
    fractional: {
      title: "Fractional CTO/CISO",
      description: "Regular strategic support for startups and growing companies",
      items: [
        "1–2 days per week commitment",
        "Technical roadmap and strategy",
        "Team leadership and mentoring",
        "Architecture and security oversight",
      ],
    },
    audits: {
      title: "Audits & Assessments",
      description: "In-depth analysis of your systems, security, and processes",
      items: [
        "Security and architecture audits",
        "Performance and scalability analysis",
        "ISO 27001 gap assessment",
        "Detailed recommendations and action plans",
      ],
    },
    missions: {
      title: "Short Missions",
      description: "Targeted interventions for specific technical challenges",
      items: [
        "2–5 day focused engagements",
        "CI/CD pipeline setup",
        "Infrastructure hardening",
        "Incident response and crisis management",
      ],
    },
  },
  experience: {
    title: "Professional Experience",
    resilio: {
      period: "2022 – Present",
      position: "CTO & CISO",
      company: "Resilio SA • Lausanne (Remote & Hybrid)",
      items: [
        "Led technical strategy and development of two SaaS products for IT environmental impact analysis",
        "Achieved ISO 27001 certification with full ISMS implementation",
        "Directed development team: process design, mentoring, architecture decisions",
        "Ensured zero critical downtime through robust monitoring and redundancy",
        "Integrated eco-design and accessibility into product lifecycles",
      ],
      techStack: ["TypeScript", "Node.js", "React", "Python", "PostgreSQL", "Docker", "CI/CD"],
    },
    freelance: {
      period: "2009 – Present",
      position: "Freelance – CTO/CISO as a Service | Fullstack Developer",
      company: "Switzerland (Remote)",
      items: [
        "Security and architecture audits, infrastructure hardening",
        "Designed and delivered scalable, high-performance web applications and APIs",
        "Implemented CI/CD pipelines and containerized environments",
        "Advised startup founders and technical leaders on long-term tech strategy",
        "Multiple successful projects spanning web, game development, and system architecture",
      ],
    },
  },
  works: {
    title: "Selected Projects",
    subtitle: "A showcase of technical projects spanning web development, game development, and system architecture. Each project demonstrates practical application of modern technologies and best practices.",
  },
  sideProjects: {
    title: "Side Projects & Passions",
    subtitle: "Beyond professional work, I pursue creative and technical projects that fuel my passion for learning",
    gamedev: {
      title: "Game Development",
      description: "Independent game development using Unreal Engine, combining C++ programming with 3D modeling and animation. Building immersive experiences from concept to execution.",
      technologies: ["Unreal Engine", "C++", "3D Modeling", "Animation"],
    },
    music: {
      title: "Music Creation",
      description: "Composer, lyricist, and performer across multiple musical projects. Exploring creativity through sound and bringing artistic visions to life.",
      technologies: ["Composition", "Lyrics", "Performance", "Production"],
    },
  },
  lastWords: {
    title: "Let's Build Something Great Together",
    description:
      "Whether you need strategic technical leadership, security expertise, or help scaling your architecture, I'm here to help your team succeed.",
    getInTouch: "Get In Touch",
    connectLinkedIn: "Connect on LinkedIn",
  },
  contact: {
    title: "Get In Touch",
    intro:
      "Ready to discuss your project or need technical expertise? I'm available for consultations and new opportunities.",
    email: "Email",
    location: "Location",
    locationValue: "Switzerland (Remote & Hybrid)",
    availability: "Availability",
    availabilityValue: "Flexible engagement models",
    connectWithMe: "Connect With Me",
  },
};

export type Translations = typeof en;
