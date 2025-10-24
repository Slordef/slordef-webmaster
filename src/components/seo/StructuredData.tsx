export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slordef",
    jobTitle: "CTO & CISO Freelance",
    description:
      "CTO and CISO with 15+ years of experience in fullstack development, security, and technical leadership",
    url: "https://slordef-webmaster.ch",
    image: "https://slordef-webmaster.ch/template/logo.png",
    sameAs: [
      "https://github.com/Slordef",
      "https://www.linkedin.com/in/maximilien-v-576625172/",
      "https://www.facebook.com/SlordefWebmaster/",
      "https://discord.gg/xx5kuQj5Qh",
    ],
    knowsAbout: [
      "Software Architecture",
      "Information Security",
      "ISO 27001",
      "TypeScript",
      "Node.js",
      "React",
      "Python",
      "DevSecOps",
      "Technical Leadership",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Resilio SA",
      url: "https://resilio.tech",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Chief Technology Officer & Chief Information Security Officer",
      occupationLocation: {
        "@type": "Country",
        name: "Switzerland",
      },
      skills: [
        "Software Architecture",
        "Security Audits",
        "ISO 27001 Implementation",
        "CI/CD",
        "Cloud Infrastructure",
        "Team Leadership",
      ],
    },
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Fractional CTO/CISO Services",
          description: "1-2 days per week strategic technical leadership",
        },
        {
          "@type": "Service",
          name: "Security & Architecture Audits",
          description: "In-depth analysis and recommendations",
        },
        {
          "@type": "Service",
          name: "Short Technical Missions",
          description: "2-5 day focused technical interventions",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
