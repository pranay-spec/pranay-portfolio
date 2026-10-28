import { SITE_CONFIG } from "@/lib/site-config";
import { PROJECTS } from "@/data/projects";

function escapeJsonLd(jsonString: string): string {
  // Prevent XSS / HTML parsing quirks by escaping '<', '>', and '&'
  return jsonString
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd() {
  const baseUrl = SITE_CONFIG.url.replace(/\/+$/, "");

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: SITE_CONFIG.name,
        jobTitle: "AI Engineer & Full-Stack Developer",
        description: SITE_CONFIG.description,
        url: baseUrl,
        email: `mailto:${SITE_CONFIG.email}`,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: SITE_CONFIG.education.institution,
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Deep Learning",
          "Full-Stack Web Development",
          "Monte Carlo Simulation",
          "FastAPI",
          "Next.js",
          "TypeScript",
          "Python",
          "Natural Language Processing",
          "Time-Series Analysis",
        ],
        sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        name: `${SITE_CONFIG.name} - AI Engineer & Full-Stack Developer Portfolio`,
        url: baseUrl,
        inLanguage: "en-US",
        description: SITE_CONFIG.description,
        author: {
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${baseUrl}/#projects`,
        name: "Featured Engineering Projects by Pranay Gujar",
        description:
          "Verified software engineering, machine learning, and financial simulation projects built by Pranay Gujar.",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((project, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${project.title} - ${project.subtitle}`,
          description: project.description,
          url: project.liveUrl || project.githubUrl,
        })),
      },
    ],
  };

  const safeJsonString = escapeJsonLd(JSON.stringify(schemaGraph));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonString }}
    />
  );
}
