# 🪐 Devi Sri Charan — 3D Developer Portfolio & Technical Case Studies

[![Live Portfolio](https://img.shields.io/badge/Live_Demo-vdevisricharan.netlify.app-915eff?style=for-the-badge&logo=netlify&logoColor=white)](https://vdevisricharan.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r155-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, immersive, interactive 3D developer portfolio and technical case study hub built with **React**, **Three.js**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**. 

Designed to present production engineering depth across **Applied AI Systems**, **LLM / RAG Architectures**, **Distributed Backend Pipelines**, and **Modern Full-Stack Applications**.

🔗 **Live Deployment:** [https://vdevisricharan.netlify.app/](https://vdevisricharan.netlify.app/)  
📄 **Interactive ATS-Friendly Resume:** Accessible via the in-app modal or directly at [`/Devi_Sri_Charan_SWE_2026.html`](https://vdevisricharan.netlify.app/Devi_Sri_Charan_SWE_2026.html)

---

## 📸 Key Sections & Architecture

### 1. 🌌 Immersive 3D Hero & Space Canvas
- **Dynamic 3D Desktop Canvas:** Interactive 3D computer workstation powered by `@react-three/fiber` and `@react-three/drei` with orbit controls and responsive scaling.
- **Particle Stars Canvas:** Procedurally generated starry backdrop utilizing `maath/random` running across the viewport.
- **High-Impact Conversion Actions:** Immediate above-the-fold access to **Interactive Resume Modal**, **GitHub**, **LinkedIn**, **Email**, and a smooth scroll **"View Projects &rarr;"** link.

### 2. 🔬 Dedicated Case Study Engine (`/project/:projectId`)
Each of the 6 featured projects links to an in-depth, dedicated case study page with full architectural transparency:
- **Sticky Glassmorphic Header:** Breadcrumbs, instant navigation back to the portfolio, GitHub repository link, and live demo link.
- **Key Metrics Grid:** Prominent callout cards displaying verified empirical metrics (e.g. *99.9% Cost Reduction*, *Cohen's &kappa; = 0.84*, *LangGraph State Machine*).
- **Mermaid-Style Architecture Flowcharts:** Clean terminal/IDE-styled visual flowcharts illustrating data ingestion, agent loops, and confidence-based handoffs.
- **Architectural Decisions & Trade-Offs:** "Decision vs. Alternative" cards explaining engineering rationale (e.g., LangGraph vs linear chains, Docling vs standard text extractors, embedded vector stores vs managed cloud pods).
- **Step-by-Step Implementation Methodology:** Granular breakdown of ingestion, processing, inference, and guardrail pipelines.
- **Empirical Evaluation Tables:** Ground-truth benchmarking tables detailing latency, recall, and classification results.
- **Production Challenges & Mitigations:** Real-world engineering obstacles and technical resolutions.
- **Sequential Case Study Navigation:** Previous and Next controls allowing seamless browsing across all projects.

### 3. 💼 Quantified Professional Experience
- **Vertical Timeline:** Interactive company timeline detailing production impact at **Skizen** (Oct 2025 – Present) and **Lumiq** (Jun 2024 – Aug 2025).
- **Concrete Technical Bullets:** Highlights CapCut Desktop video prep automation, multi-platform Google Drive social media posting automation, real-time Socket.IO messaging, Celery/Redis asynchronous workers, GeoJSON 2dsphere indexing, LangGraph virtual sales agents, and automated data deduplication eliminating 350,000+ duplicate financial records.
- **External Archival Link:** Sleek callout directing recruiters to LinkedIn for earlier academic and research lab roles.

### 4. 🧠 Technologies & Interactive 3D Spheres
- **Interactive 3D Ball Showcase:** Floating icosahedron decals rendered in WebGL with rotation and orbit controls, equipped with technology labels for clarity.
- **Specialized 5-Domain Skills Matrix:**
  1. **AI, Machine Learning & RAG:** *LangChain, LangGraph, PyTorch, TensorFlow, Hugging Face, Transformers, Qdrant, LanceDB, ChromaDB, Docling, OpenCV, SentenceTransformers, Multimodal CV, NLP*
  2. **Backend & Distributed Systems:** *FastAPI, Django, Django REST Framework, Express.js, NestJS, Node.js, Celery, Redis, Socket.IO, RESTful APIs, Microservices*
  3. **Frontend & Mobile:** *React, React Native (Expo), Next.js (SSR/SSG), TypeScript, Redux, Zustand, Tailwind CSS, Three.js, HTML5 / CSS3*
  4. **Cloud, Data & DevOps:** *AWS (EC2, S3, Lambda, Athena, Glue), PostgreSQL, MongoDB, MySQL, Docker, GitHub Actions (CI/CD), Firebase / FCM, Cloudinary, Linux / Bash*
  5. **Languages & Foundations:** *Python, TypeScript, JavaScript, SQL, Java, C++, Bash, System Design, Data Structures & Algorithms*

### 5. 🏆 Honors, Certifications & Academic Credentials
- **Micron SMAI Hackathon 2022:** 1st Place Winner nationwide across collegiate engineering teams.
- **AWS Certified Data Engineer – Associate:** Validated production competence across AWS Glue, Athena, Redshift, S3, and data lake architecture.
- **JEE Mains 2020:** 99.23 Percentile (AIR 8,694) among 1.1M+ candidates.
- **IIIT Delhi (2020 – 2024):** Bachelor of Technology in Computer Science and Design.

### 6. 📄 Interactive Single-Page Resume Modal
- Embedded responsive viewer rendering the semantic, print-ready, ATS-friendly resume (`Devi_Sri_Charan_SWE_2026.html`).
- One-click actions to view full screen, download/print, or open in a new browser tab.

### 7. 📬 Real-Time Contact Form & 3D Earth
- Interactive floating **3D Earth Canvas** with auto-rotation.
- Direct message dispatch powered by **EmailJS** with live submission status indicators.

---

## 📂 Featured Case Studies Overview

| Project | Domain | Key Architecture & Stack | Links |
|:---|:---|:---|:---|
| **Multi-Agent Medical Assistant** *(Flagship)* | Agentic AI & Computer Vision | LangGraph State Machine, Docling Multimodal Parser, Qdrant Hybrid Search (BM25 + Dense), PyTorch Chest X-ray & Lesion CNNs, Docker | [Case Study](https://vdevisricharan.netlify.app/project/medical-assistant) &bull; [GitHub](https://github.com/vdevisricharan/Multi-Agent-Medical-Assistant) |
| **Cost-Efficient RAG Application** | Information Retrieval & RAG | LanceDB (Apache Arrow columnar disk format) & ChromaDB vs Managed Cloud Pods, Gemini 2.5 Flash, SHA-256 chunk hashing, sub-30ms p50 latency | [Case Study](https://vdevisricharan.netlify.app/project/cost-efficient-rag) &bull; [GitHub](https://github.com/vdevisricharan/cost-efficient-rag-application) |
| **LLM-as-Judge Evaluation Pipeline** | LLM Evaluation & Alignment | Pairwise evaluation, Dual-pass positional swap, 5-bias mitigation matrix (Position, Verbosity, Self-enhancement, Compassion, Egocentric), Cohen's &kappa; = 0.84 | [Case Study](https://vdevisricharan.netlify.app/project/llm-as-judge) &bull; [GitHub](https://github.com/vdevisricharan/llm-as-judge) |
| **LLM Recipe Generation System** | Fine-Tuning & Quantization | Comparative QLoRA 4-bit fine-tuning across Llama 3 (8B), Gemma (7B), and Mistral (7B) vs. T5/GPT-2/LSTM baselines on 2.2M RecipeNLG dataset | [Case Study](https://vdevisricharan.netlify.app/project/recipe-generation) &bull; [GitHub](https://github.com/vdevisricharan/llm-recipe-generation) |
| **ArtiSight — AI Photo Critique** | Multimodal Vision & Photography | Dual-engine architecture combining Google Gemini Vision & Hugging Face BLIP-2 with OpenCV rule-of-thirds composition overlays & EXIF extraction | [Case Study](https://vdevisricharan.netlify.app/project/artisight) &bull; [GitHub](https://github.com/vdevisricharan/ArtiSight) &bull; [Demo](https://artisight.netlify.app/) |
| **Wasto — Smart Waste Sorter** | Edge CV & Embedded Hardware | MobileNetV3 transfer learning for real-time organic/recyclable/non-biodegradable segregation paired with Arduino Uno physical servo actuation | [Case Study](https://vdevisricharan.netlify.app/project/wasto) &bull; [GitHub](https://github.com/vdevisricharan/wasto) &bull; [Demo](https://wasto.netlify.app/) |

---

## 🛠️ Tech Stack & Libraries

- **Core Framework:** [React 18.2](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **3D Graphics & WebGL:** [Three.js (r155)](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [maath](https://github.com/pmndrs/maath)
- **Routing:** [React Router DOM v6](https://reactrouter.com/) (with instant scroll restoration & Netlify SPA `_redirects`)
- **Animation & Transitions:** [Framer Motion 10](https://www.framer.com/motion/), [react-tilt](https://www.npmjs.com/package/react-tilt), [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component)
- **Styling & UI:** [Tailwind CSS 3.3](https://tailwindcss.com/) with JIT compiler, PostCSS, Autoprefixer
- **Forms & Services:** [@emailjs/browser](https://www.emailjs.com/)
- **Containerization & Web Server:** Docker multi-stage build + Nginx Alpine

---

## 📁 Repository Structure

```plaintext
3D-Portfolio/
├── public/
│   ├── _redirects                     # Netlify SPA rewrite rule (/* /index.html 200)
│   ├── Devi_Sri_Charan_SWE_2026.html  # Standalone ATS-friendly interactive resume
│   └── vite.svg                       # Favicon
├── src/
│   ├── assets/                        # Optimized SVGs, PNGs, logos & project banners
│   │   ├── company/                   # Skizen, Lumiq, MIDAS logos
│   │   ├── education/                 # IIIT Delhi logo
│   │   ├── icons/                     # GitHub, Web, Close, Menu icons
│   │   ├── projects/                  # High-res dark architecture diagrams & banners
│   │   ├── tech/                      # Tech stack logos (PyTorch, FastAPI, AWS, etc.)
│   │   └── testimonials/              # Professional recommendation portraits
│   ├── components/
│   │   ├── canvas/                    # 3D R3F canvases (Ball, Computers, Earth, Stars)
│   │   ├── About.jsx                  # Profile summary & 4 engineering service cards
│   │   ├── Achievements.jsx           # Honors, hackathons & AWS certifications
│   │   ├── Contact.jsx                # EmailJS contact form + 3D Earth
│   │   ├── Education.jsx              # IIIT Delhi degree & coursework
│   │   ├── Experience.jsx             # Vertical timeline with Skizen & Lumiq
│   │   ├── Footer.jsx                 # Footer with socials, links & modal triggers
│   │   ├── Hero.jsx                   # 3D interactive hero with action buttons
│   │   ├── Navbar.jsx                 # Glassmorphic header & slide-out mobile drawer
│   │   ├── ProjectCaseStudy.jsx       # Dedicated technical deep-dive page component
│   │   ├── Projects.jsx               # Featured 6 project cards with case study links
│   │   ├── ResumeModal.jsx            # Iframe modal embedding verified 2026 resume
│   │   ├── ScrollToTop.jsx            # Scroll position reset on route transitions
│   │   ├── Technologies.jsx           # 3D floating spheres + 5-domain skills matrix
│   │   ├── Testimonials.jsx           # Client and colleague endorsements
│   │   └── index.js                   # Component export hub
│   ├── constants/
│   │   ├── index.js                   # Navigation, skills, experiences, projects data
│   │   └── caseStudies.js             # Detailed case studies data, Mermaid flows & tables
│   ├── hoc/
│   │   ├── SectionWrapper.jsx         # Higher-order component for section alignment
│   │   └── index.js
│   ├── styles.js                      # Centralized Tailwind spacing & typography tokens
│   ├── utils/
│   │   └── motion.js                  # Framer Motion spring and fade variants
│   ├── App.jsx                        # Root router with SPA routes
│   ├── index.css                      # Tailwind directives & global utility classes
│   └── main.jsx                       # React DOM entry point
├── Dockerfile                         # Multi-stage production build (Node -> Nginx)
├── nginx.conf                         # Nginx SPA fallback configuration
├── package.json                       # Dependencies & scripts
├── tailwind.config.js                 # Theme colors, shadows, and screen breakpoints
├── vite.config.js                     # Vite build configuration
└── README.md                          # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vdevisricharan/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for Contact Form):**
   Create a `.env` file in the root directory if configuring your personal EmailJS service:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` directory.

6. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🐳 Docker Deployment

The repository includes a multi-stage `Dockerfile` and `nginx.conf` ready for containerized deployment (e.g. AWS ECS, Google Cloud Run, DigitalOcean App Platform):

1. **Build the Docker container:**
   ```bash
   docker build -t 3d-portfolio .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name portfolio-app 3d-portfolio
   ```

3. Access the running application at `http://localhost:8080`.

---

## 🌐 Netlify Deployment Notes

This portfolio is configured for **Single Page Application (SPA)** client-side routing on Netlify.
The file `public/_redirects` contains:
```text
/*    /index.html   200
```
This ensures that deep links (e.g., `/project/medical-assistant`, `/project/cost-efficient-rag`) and hard page refreshes resolve cleanly without `404 Not Found` errors.

---

## 📜 Zero Hallucination Standard

All metrics, architectures, benchmarks, credentials, and achievements documented in this portfolio and its case studies are strictly grounded in verifiable, open-source codebases ([github.com/vdevisricharan](https://github.com/vdevisricharan)) and professional experience.

---

## 📬 Contact & Connect

**Devi Sri Charan Valupadasu**  
*Software Engineer &bull; Applied AI &bull; Scalable Backend Systems*

- **Website:** [https://vdevisricharan.netlify.app/](https://vdevisricharan.netlify.app/)
- **GitHub:** [@vdevisricharan](https://github.com/vdevisricharan)
- **LinkedIn:** [linkedin.com/in/vdevisricharan](https://linkedin.com/in/vdevisricharan)
- **Email:** [vdevisricharan@gmail.com](mailto:vdevisricharan@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
