export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architectureDetails: string[];
  achievement?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  visualTheme: "simulation" | "intelligence" | "disinformation" | "volatility" | "rag";
}

export const PROJECTS: Project[] = [
  {
    id: "equinox-flow",
    title: "Equinox Flow",
    subtitle: "Financial Digital Twin & Relocation Advisor",
    category: "AI Simulation & FinTech",
    description:
      "A financial digital-twin application that uses Monte Carlo simulation for interactive scenario analysis. Connects a high-performance Next.js frontend with a FastAPI backend for financial data processing, probabilistic modeling, and agentic multi-scenario evaluation.",
    architectureDetails: [
      "Engineered Monte Carlo simulation pipeline for multi-decade net-worth forecasting under varying volatility regimes.",
      "Integrated agentic decision framework with LangGraph and Groq for cross-border cost-of-living comparison.",
      "Built clean decoupled architecture separating computational Python microservices from reactive Next.js client.",
    ],
    achievement: "1st Place · Calculo Innovation Hackathon",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "Monte Carlo Simulation",
      "Tailwind CSS",
    ],
    liveUrl: "https://equinox-flow.vercel.app/",
    githubUrl: "https://github.com/pranay-spec/EQUINOX-FLOW",
    featured: true,
    visualTheme: "simulation",
  },
  {
    id: "parallax-edge",
    title: "Parallax Edge",
    subtitle: "Hyperlocal Price Intelligence",
    category: "Data Aggregation & Quick-Commerce",
    description:
      "A hyperlocal price-intelligence platform for comparing products across Indian delivery platforms (Amazon, Flipkart, Blinkit, Zepto) and identifying potential pricing anomalies through real-time fee-inclusive landed cost computation.",
    architectureDetails: [
      "Aggregates multi-source product catalog data to extract true landed costs including dynamic platform and surge fees.",
      "Surfaces spatial price variances and anomalies across rapid-delivery services versus traditional e-commerce.",
      "Designed responsive comparison dashboard with real-time availability tracking and smart basket breakdown.",
    ],
    achievement: "Top 3 · Frostbyte Hackathon",
    technologies: [
      "AI/ML",
      "Data Analysis",
      "Python",
      "TypeScript",
      "Web Technologies",
      "REST APIs",
    ],
    liveUrl: "https://parallax-edge.vercel.app/",
    githubUrl: "https://github.com/pranay-spec/Parallax-Edge",
    featured: false,
    visualTheme: "intelligence",
  },
  {
    id: "sentinel-x",
    title: "Sentinel-X",
    subtitle: "Disinformation Detection Dashboard",
    category: "Applied NLP & Intelligence Analysis",
    description:
      "An ML/NLP dashboard for analyzing and visualizing potentially misleading content, coordinated narrative patterns, and high-risk social media trends using structured intelligence pipelines.",
    architectureDetails: [
      "Implemented text classification and sentiment-discrepancy pipelines using Python NLP packages.",
      "Rendered interactive verification workflows and narrative spread visualizers via Streamlit.",
      "Structured output for analyst review without hyperbolic alerts or sensationalized metrics.",
    ],
    achievement: "Top 5 · Missing Amps Winter Classic",
    technologies: [
      "Python",
      "Natural Language Processing",
      "Machine Learning",
      "Streamlit",
      "scikit-learn",
    ],
    liveUrl: "https://sentinel-x-dtmas4qkb5rv9untpuvn2b.streamlit.app/",
    githubUrl: "https://github.com/pranay-spec/SENTINEL-X",
    featured: false,
    visualTheme: "disinformation",
  },
  {
    id: "flash-crash-sentinel",
    title: "Flash Crash Sentinel",
    subtitle: "Financial Risk & Anomaly Analysis",
    category: "Deep Learning & Time-Series",
    description:
      "Financial-risk analysis exploring LSTM and Transformer approaches for market-volatility analysis, high-frequency anomaly detection, and potential crash prediction regimes on financial time-series data.",
    architectureDetails: [
      "Evaluated sequence models (LSTM and Transformer encoders) on high-volatility financial tick and minute datasets.",
      "Formulated synthetic anomaly injection tests to measure model sensitivity to sudden liquidity evaporation.",
      "Authored clean modular experimentation code in Python with reproducible evaluation benchmarks.",
    ],
    achievement: "National Finalist · Arbitrage Arena at IISc Bangalore",
    technologies: [
      "PyTorch",
      "LSTM",
      "Transformers",
      "Time-Series Analysis",
      "Pandas",
      "NumPy",
    ],
    githubUrl: "https://github.com/shiro1307/Arbitrage-Arena-Flash-Crash-Hackathon",
    featured: false,
    visualTheme: "volatility",
  },
  {
    id: "rag-video-chatbot",
    title: "RAG Video Intelligence",
    subtitle: "Semantic Transcript Retrieval System",
    category: "Generative AI & Retrieval",
    description:
      "A video question-answering and comparative analysis application using automated transcript extraction, semantic chunking, vector indexing in ChromaDB, and context-grounded response generation via the Gemini API.",
    architectureDetails: [
      "Built automated ingestion and timestamp-aligned transcription pipeline for long-form video content.",
      "Employed LangChain retrieval chains with dense embeddings stored in local ChromaDB collections.",
      "Served semantic queries through a FastAPI backend ensuring citations point to precise video moments.",
    ],
    technologies: [
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Gemini API",
      "Python",
      "Vector Search",
    ],
    githubUrl: "https://github.com/pranay-spec/rag-video-chatbot",
    featured: false,
    visualTheme: "rag",
  },
];
