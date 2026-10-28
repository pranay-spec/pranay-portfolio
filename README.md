# Pranay Gujar — Developer Portfolio & Technical Showcase

An editorial, high-performance developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to present real-world engineering projects across applied artificial intelligence, financial digital-twin simulations, and full-stack software development.

---

## 1. Architectural Overview

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 with bespoke editorial tokens
- **Icons**: Lucide React & custom optimized brand SVGs
- **Structured Data**: JSON-LD Schema.org graph (`Person`, `WebSite`, `ItemList`)
- **Metadata**: Next.js Metadata API with dynamic OpenGraph images (`next/og`)
- **Accessibility**: Semantic HTML5, visible focus indicators, skip-to-content anchor, and `prefers-reduced-motion` compliance

---

## 2. Design System & Palette

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#090B10` | Base page layer |
| **Elevated Surface** | `#11151D` | Primary card background |
| **Border Subtle** | `#1E2633` | Card & container boundaries |
| **Accent Electric Lime** | `#C5F36B` | Primary highlights & CTAs |
| **Text Primary** | `#F3F4F6` | Headings & primary body copy |
| **Text Secondary** | `#94A3B8` | Subheadings & supporting text |
| **Text Muted** | `#64748B` | Monospace tags & metadata |

---

## 3. Verified Projects

1. **Equinox Flow — Financial Digital Twin** *(Featured)*
   - **Achievement**: 1st Place · Calculo Innovation Hackathon
   - **Stack**: Next.js, TypeScript, FastAPI, LangGraph, Monte Carlo Simulation
   - **Links**: [Live Application](https://equinox-flow.vercel.app/) · [Source Code](https://github.com/pranay-spec/EQUINOX-FLOW)
2. **Parallax Edge — Hyperlocal Price Intelligence**
   - **Achievement**: Top 3 Finish · Frostbyte Hackathon
   - **Stack**: AI/ML, Data Analysis, Python, TypeScript, REST APIs
   - **Links**: [Live Application](https://parallax-edge.vercel.app/) · [Source Code](https://github.com/pranay-spec/Parallax-Edge)
3. **Sentinel-X — Disinformation Detection Dashboard**
   - **Achievement**: Top 5 Finalist · Missing Amps Winter Classic
   - **Stack**: Python, NLP, Machine Learning, Streamlit
   - **Links**: [Live Application](https://sentinel-x-dtmas4qkb5rv9untpuvn2b.streamlit.app/) · [Source Code](https://github.com/pranay-spec/SENTINEL-X)
4. **Flash Crash Sentinel — Financial Risk Analysis**
   - **Achievement**: National Finalist · Arbitrage Arena (IISc Bangalore)
   - **Stack**: PyTorch, LSTM, Transformers, Time-Series Modeling
   - **Links**: [Source Code](https://github.com/shiro1307/Arbitrage-Arena-Flash-Crash-Hackathon)
5. **RAG Video Intelligence**
   - **Focus**: Semantic transcript retrieval and video question-answering
   - **Stack**: FastAPI, LangChain, ChromaDB, Gemini API
   - **Links**: [Source Code](https://github.com/pranay-spec/rag-video-chatbot)

---

## 4. Technical SEO & Schema.org Implementation

The portfolio implements full Schema.org structured data directly via JSON-LD (`components/json-ld.tsx`), escaped against script injections and verified for syntax.

### Entity Graph Structure:
- **`Person`**: Identifies Pranay Gujar, education at VIT Pune, role, substantiated technical competencies (`knowsAbout`), and verified social links (`sameAs`).
- **`WebSite`**: Identifies the portfolio application and associates authorship with the `Person` entity.
- **`ItemList`**: Organizes the verified engineering portfolio projects with positional sequencing and canonical project endpoints.

### Crawlability:
- `app/robots.ts`: Serves dynamic `robots.txt` referencing the production sitemap.
- `app/sitemap.ts`: Serves dynamic `sitemap.xml` for canonical indexing.

---

## 5. Local Development & Verification

### Install Dependencies:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```

### Run Static Analysis / Lint:
```bash
npm run lint
```

### Run Production Build:
```bash
npm run build
```

---

## 6. Vercel Deployment Instructions

1. Push this repository to GitHub under `pranay-spec/portfolio` (or preferred repository name).
2. Open the [Vercel Dashboard](https://vercel.com/new).
3. Import the GitHub repository.
4. Set the Environment Variable:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-portfolio-domain.vercel.app` (e.g. `https://pranaygujar.vercel.app`)
5. Deploy. Vercel automatically detects Next.js and builds using Turbopack.
