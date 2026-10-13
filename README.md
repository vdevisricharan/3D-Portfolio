# 🕸️ BRAND NEW DAY — THE DEVELOPER VERSE
### `YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER` — Devi Sri Charan Valupadasu

[![Live Portfolio](https://img.shields.io/badge/Live_Demo-vdevisricharan.netlify.app-9B4DFF?style=for-the-badge&logo=netlify&logoColor=white)](https://vdevisricharan.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-FF304F.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r155-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A cinematic, neo-noir 3D engineering portfolio and technical case study platform built with **React 18**, **Three.js / React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

Inspired by *Spider-Man: Brand New Day* meets **Neon Cyber-Noir Engineering**, this portfolio combines kinetic comic-editorial framing, interactive 3D architectural skylines, connected system topology graphs, and rigorous software engineering field reports across **Applied AI**, **LLM / RAG Architectures**, **Distributed Backend Pipelines**, and **Full-Stack Systems**.

🔗 **Live Deployment:** [https://vdevisricharan.netlify.app/](https://vdevisricharan.netlify.app/)  
📄 **Interactive ATS-Conscious Resume:** Accessible via the in-app Dossier Modal or directly at [`/Devi_Sri_Charan_SWE_2026.html`](https://vdevisricharan.netlify.app/Devi_Sri_Charan_SWE_2026.html)

---

## 🎨 Creative Direction & Design System

### Color Identity (Purple–Black–Red–White Neon Palette)

| Token | Hex | Role |
|:---|:---|:---|
| **Void Black** | `#08060F` | Primary background foundation |
| **Midnight Purple** | `#171126` | Elevated surfaces, cards, and section containers |
| **Neon Purple** | `#9B4DFF` | Primary brand accent, borders, and focus indicators |
| **Electric Lavender** | `#C4A2FF` | Secondary highlights and subtle gradients |
| **Spider Red** | `#FF304F` | Primary actions, active telemetry moments, and dramatic highlights |
| **Neon White** | `#F7F5FF` | High-contrast display headings and primary copy |
| **Muted Silver** | `#BDB4CC` | Supporting descriptions and technical metadata |

### Three-Level Typography System
- **Display (`Barlow Condensed`):** Uppercase, high-impact cinematic headlines with tight tracking.
- **Body (`Space Grotesk`):** Clean, technical, human-readable prose for engineering case studies and system descriptions.
- **Technical UI (`JetBrains Mono`):** Telemetry badges, mission indices, architecture annotations, and stack tags.

---

## 🏙️ Content Architecture (8-Section Narrative)

### 01. Hero — *The Origin* (`#hero`)
- **Signature Headline:** `YOUR FRIENDLY` / `NEIGHBOURHOOD` / `DEVELOPER` with eyebrow `CHARAN // SOFTWARE ENGINEER`.
- **Interactive 3D Cyber-Noir Skyline (`SkylineCanvas.jsx`):** Procedural Three.js city blocks, illuminated window grids, Spider-Red beacon towers, and neural web-line arcs connecting 4 core architectural pillars (*Applied AI*, *RAG Systems*, *Distributed Backends*, *Full-Stack*). Includes automatic SVG architectural fallback for non-WebGL or reduced-motion devices.
- **Session-Aware Kinetic Intro:** Fast, non-blocking header reveal that respects `prefers-reduced-motion`.

### 02. About — *Behind the Mask* (`#about`)
- **Heading:** `BEHIND THE CODE.` — *Every neighbourhood needs a problem solver.*
- **Interactive System Topology Graph:** 5-node interactive SVG architecture diagram allowing recruiters to inspect *Applied AI & Agents*, *Hybrid RAG Pipelines*, *Distributed Backends*, *Full-Stack & Mobile*, and *IIIT Delhi CS & Design (2020–2024)* foundations.

### 03. Featured Projects — *Active Missions* (`#projects`)
- **Heading:** `EVERY MISSION STARTS WITH A PROBLEM.`
- 6 custom mission dossiers featuring verified metrics, story angles, architectural thumbnails, and direct links to **Case Study**, **GitHub**, and **Live Demo**.

### 04. Experience — *Field Operations* (`#experience`)
- **Heading:** `BUILT IN THE REAL WORLD.`
- Scroll-illuminated vertical web-strand timeline featuring **Skizen** (*Software Engineer — Full Stack & AI*, Oct 2025 – Present) and **Lumiq** (*Software Engineer — Data & GenAI*, Jun 2024 – Aug 2025), with expandable technical deep-dives and impact pills.

### 05. Skills — *The Developer Web* (`#skills`)
- **Heading:** `THE TOOLS BEHIND THE WORK.`
- **Interactive 5-Domain Capability Web:** Connected SVG node network + synchronized Domain Inspector and 5-column matrix mapping every skill directly to production systems and repositories:
  1. **AI / ML & LLM Systems**
  2. **Backend & Distributed Systems**
  3. **Frontend & Mobile**
  4. **Cloud, Data & DevOps**
  5. **Languages & Core CS**

### 06. Achievements & Credentials — *Milestones* (`#achievements`)
- **Heading:** `THE STORY SO FAR.`
- Collectible milestone cards for **Micron SMAI Hackathon — 1st Place Winner** (2022), **AWS Certified Data Engineer – Associate (Partner)** (Lumiq, 2024), **JEE Mains — 99.23 Percentile (AIR 8,694)** (2020), and **AWS Certification** (Scaler, 2024), paired with **IIIT Delhi** academic credentials and verified leadership endorsements.

### 07. Resume — *The Dossier* (`#resume-dossier`)
- **Heading:** `EVERY HERO HAS A BACKSTORY.`
- Dedicated dossier panel + accessible in-app **Resume Modal** (`ResumeModal.jsx`) with **View Resume**, **Open Fullscreen**, and **Print / Save as PDF** actions while keeping `public/Devi_Sri_Charan_SWE_2026.html` clean, semantic, and print/ATS-friendly.

### 08. Contact — *Send a Signal* (`#contact`)
- **Heading:** `GOT A PROBLEM WORTH SOLVING?`
- Signal transmission console with inline validation, honest EmailJS integration (with automatic one-click `mailto:` fallback if EmailJS credentials are not configured), and a lazy-mounted **3D Earth Canvas** (`Earth.jsx`).

---

## 🔬 12-Part Technical Case Study Engine (`/project/:projectId` & `/case-study/:projectId`)

Each featured project opens a dedicated engineering field report (`ProjectCaseStudy.jsx`) structured around 12 sections:
1. **Hero Banner** (Mission code, display label, title, subtitle, category, timeline)
2. **Problem Statement** (Operational bottleneck & context)
3. **Why It Matters** (Story angle & real-world engineering stakes)
4. **Key Technical Metrics** (Verified benchmark cards)
5. **System Architecture** (Interactive node pills + Mermaid-style architecture diagram)
6. **Engineering Decisions & Trade-Offs** (*Decision vs. Alternative Evaluated* cards)
7. **Key Responsibilities & Implementation Methodology** (Ownership checklist + numbered pipeline stages)
8. **Tech Stack** (Categorized capability chips)
9. **Results & Impact** (Empirical evaluation benchmark tables)
10. **Challenges & Lessons Learned** (Production mitigations + core engineering takeaways)
11. **Source & Deployment Links** (Verified GitHub repository & live demo CTAs)
12. **Mission Navigation** (Home, All Projects, Previous Project, Next Project)

| Mission | Display Label | Project | Key Architecture & Verified Metrics | Links |
|:---|:---|:---|:---|:---|
| `MISSION // 01` | `FLAGSHIP AI SYSTEM` | **Multi-Agent Medical Assistant** | LangGraph State Machine, Docling Multimodal Parser, Qdrant Hybrid Search (BM25 + Dense), PyTorch Chest X-ray & Skin Lesion CNNs, Docker | [Case Study](https://vdevisricharan.netlify.app/project/medical-assistant) &bull; [GitHub](https://github.com/vdevisricharan/Multi-Agent-Medical-Assistant) |
| `MISSION // 02` | `RAG ARCHITECTURE` | **Cost-Efficient RAG Application** | LanceDB (Apache Arrow disk format) & ChromaDB vs Cloud Pods ($0/mo vs $70+/mo), Gemini 2.5 Flash, SHA-256 chunk dedup, ~28ms p50 latency | [Case Study](https://vdevisricharan.netlify.app/project/cost-efficient-rag) &bull; [GitHub](https://github.com/vdevisricharan/cost-efficient-rag-application) |
| `MISSION // 03` | `AI EVALUATION SYSTEM` | **LLM-as-Judge Evaluation Pipeline** | Dual-pass position-swapped evaluation, 5-bias mitigation matrix, Cohen's $\kappa = 0.84$, 99.8% JSON schema compliance | [Case Study](https://vdevisricharan.netlify.app/project/llm-as-judge) &bull; [GitHub](https://github.com/vdevisricharan/llm-as-judge-evaluation-pipeline) |
| `MISSION // 04` | `LLM FINE-TUNING` | **LLM Recipe Generation System** | Comparative 4-bit NF4 QLoRA fine-tuning across Llama 3 (8B), Gemma (7B), and Mistral (7B) vs T5/GPT-2/LSTM baselines on 2.2M RecipeNLG recipes | [Case Study](https://vdevisricharan.netlify.app/project/recipe-generation) &bull; [GitHub](https://github.com/vdevisricharan/LLM-Recipe-Generation-System) |
| `MISSION // 05` | `MULTIMODAL PRODUCT` | **ArtiSight — AI Photo Critique** | Dual-engine Google Gemini Vision & Hugging Face BLIP-2 with OpenCV rule-of-thirds composition overlays & EXIF diagnostics | [Case Study](https://vdevisricharan.netlify.app/project/artisight) &bull; [GitHub](https://github.com/vdevisricharan/ArtiSight) &bull; [Demo](https://artisight.netlify.app/) |
| `MISSION // 06` | `EDGE AI + HARDWARE` | **Wasto — Smart Waste Sorter** | MobileNetV3 transfer learning (94.2% test accuracy, <45ms latency) + Web Serial API to Arduino Uno 3-way physical servo actuation | [Case Study](https://vdevisricharan.netlify.app/project/wasto) &bull; [GitHub](https://github.com/vdevisricharan/wasto) &bull; [Demo](https://wasto.netlify.app/) |

---

## 📁 Repository Structure

```plaintext
3D-Portfolio/
├── public/
│   ├── _redirects                     # Netlify SPA rewrite rule (/* /index.html 200)
│   ├── Devi_Sri_Charan_SWE_2026.html  # Standalone ATS-conscious interactive resume
│   ├── og-preview.svg                 # Social preview card (Brand New Day theme)
│   ├── robots.txt                     # Search crawler directives
│   ├── sitemap.xml                    # XML sitemap for landing + 6 case studies
│   └── vite.svg                       # Favicon
├── src/
│   ├── assets/                        # Optimized SVGs, PNGs, company logos & project banners
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── SkylineCanvas.jsx      # Hybrid 3D Cyber-Noir Skyline + SVG fallback
│   │   │   ├── Earth.jsx              # Lazy-mounted 3D Signal Globe + SVG fallback
│   │   │   ├── Stars.jsx              # Optimized atmospheric particle field
│   │   │   └── index.js
│   │   ├── About.jsx                  # Section 02: Bio + Interactive System Topology Graph
│   │   ├── Achievements.jsx           # Section 06: Milestones, IIITD degree & endorsements
│   │   ├── Contact.jsx                # Section 08: Signal console + EmailJS / mailto fallback
│   │   ├── Experience.jsx             # Section 04: Scroll-illuminated web timeline
│   │   ├── Footer.jsx                 # HUD Footer + signature tagline
│   │   ├── Hero.jsx                   # Section 01: Asymmetrical Hero + 3D Skyline
│   │   ├── Navbar.jsx                 # HUD Navbar + Scroll Progress + Night Patrol toggle
│   │   ├── ProjectCaseStudy.jsx       # 12-part Engineering Field Report page
│   │   ├── Projects.jsx               # Section 03: 6 Active Mission cards
│   │   ├── ResumeModal.jsx            # Accessible Dossier modal viewer
│   │   ├── ResumeSection.jsx          # Section 07: Dedicated Resume Dossier section
│   │   ├── ScrollToTop.jsx            # Route & hash scroll manager
│   │   ├── Technologies.jsx           # Section 05: Interactive 5-Domain Developer Web
│   │   └── index.js
│   ├── constants/
│   │   ├── index.js                   # Verified career, skills, projects & achievements data
│   │   └── caseStudies.js             # 12-part technical case studies & empirical benchmarks
│   ├── hoc/
│   │   └── SectionWrapper.jsx         # Semantic section wrapper with Framer Motion triggers
│   ├── utils/
│   │   └── motion.js                  # Choreographed Framer Motion variants
│   ├── App.jsx                        # SPA Router + Night Patrol state + lazy routes
│   ├── index.css                      # Design tokens, comic-panel utilities & reduced-motion rules
│   ├── styles.js                      # 3-level typography utility classes
│   └── main.jsx                       # React 18 entry point
├── Dockerfile                         # Multi-stage production build (Node -> Nginx)
├── nginx.conf                         # Nginx SPA fallback configuration
├── package.json                       # Dependencies & build scripts
├── tailwind.config.js                 # Brand New Day color palette & typography tokens
└── vite.config.js                     # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0+`
- **npm**: `v9.0.0+`

### Local Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure Environment Variables (Optional for live EmailJS dispatch):**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *(If omitted, the contact form automatically provides a clean one-click `mailto:` transmission fallback.)*
3. **Run development server:**
   ```bash
   npm run dev
   ```
4. **Lint and build for production:**
   ```bash
   npm run lint
   npm run build
   ```

---

## 📬 Contact & Connect

**Devi Sri Charan Valupadasu**  
*CHARAN // YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER*

- **Portfolio:** [https://vdevisricharan.netlify.app/](https://vdevisricharan.netlify.app/)
- **GitHub:** [@vdevisricharan](https://github.com/vdevisricharan)
- **LinkedIn:** [linkedin.com/in/vdevisricharan](https://linkedin.com/in/vdevisricharan)
- **Email:** [vdevisricharan@gmail.com](mailto:vdevisricharan@gmail.com)
