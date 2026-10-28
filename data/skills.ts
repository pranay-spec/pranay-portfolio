export interface SkillCategory {
  title: string;
  shortLabel: string;
  description: string;
  items: string[];
  keyStrengths?: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI, Machine Learning & Data",
    shortLabel: "AI / ML",
    description:
      "Applied model development, deep learning architectures, time-series forecasting, and probabilistic simulations.",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Natural Language Processing (NLP)",
      "LSTM Networks",
      "Transformers",
      "Monte Carlo Simulation",
      "LangGraph / LangChain",
      "ChromaDB",
    ],
    keyStrengths: ["Simulation Engines", "Time-Series Modeling", "Agentic Pipelines"],
  },
  {
    title: "Web & Backend Systems",
    shortLabel: "Full-Stack",
    description:
      "Modern full-stack web applications, microservices, and high-throughput REST APIs.",
    items: [
      "Next.js",
      "React.js",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Flask",
      "Streamlit",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    keyStrengths: ["Next.js App Router", "FastAPI Python Services", "API Decoupling"],
  },
  {
    title: "Programming Languages",
    shortLabel: "Languages",
    description:
      "Core systems and application development across compiled and typed languages.",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "C",
      "Dart",
      "SQL",
    ],
    keyStrengths: ["Type-Safe Architectures", "Numerical Scripting", "Data Structures"],
  },
  {
    title: "Mobile Engineering",
    shortLabel: "Mobile",
    description:
      "Cross-platform client applications with reactive state management and native integrations.",
    items: [
      "Flutter",
      "Android SDK",
      "Riverpod",
    ],
    keyStrengths: ["Reactive UI", "State Architecture", "Android Workshop Leadership"],
  },
  {
    title: "Databases, Cloud & Dev Tools",
    shortLabel: "Infrastructure",
    description:
      "Data persistence layers, vector indexing, authentication, and continuous deployment workflows.",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
      "Firebase Auth",
      "Supabase",
      "Git & GitHub",
      "Postman",
      "Vercel",
      "Render",
    ],
    keyStrengths: ["Vector Storage", "CI/CD & Cloud Hosting", "Document & Relational Stores"],
  },
];
