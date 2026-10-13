import {
  mobile,
  backend,
  creator,
  web,
  // Technology icons
  python,
  nodejs,
  reactjs,
  next,
  postgresql,
  tailwind,
  nestjs,
  typescript,
  aws,
  docker,
  pytorch,
  fastapi,
  langchain,
  redis,
  // Company logos
  lumiq,
  skizen,
  // Education images
  iiitd,
  // Project images
  medical_assistant,
  cost_efficient_rag,
  llm_as_judge,
  recipe_generation,
  wasto,
  artisight,
  // Testimonials
  binu,
  tarini,
  ganesh,
} from "../assets";

export const navLinks = [
  {
    id: "#hero",
    title: "Home",
  },
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#experience",
    title: "Experience",
  },
  {
    id: "#skills",
    title: "Skills",
  },
  {
    id: "#achievements",
    title: "Achievements",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Applied AI & LLM Workflows",
    subtitle: "LangGraph • Multimodal RAG • Vision Agents",
    description: "Orchestrating stateful multi-agent workflows, hybrid vector search, and bias-mitigated LLM evaluation pipelines.",
    icon: backend,
  },
  {
    title: "Backend & Distributed Systems",
    subtitle: "FastAPI • Django • Celery • Redis",
    description: "Designing spatial discovery APIs, asynchronous worker pipelines, and high-throughput enterprise data engines.",
    icon: creator,
  },
  {
    title: "Cross-Platform & Web Products",
    subtitle: "React Native (Expo) • Next.js • React",
    description: "Building responsive mobile-first experiences, hardware-accelerated media feeds, and real-time messaging interfaces.",
    icon: web,
  },
  {
    title: "Cloud Data & Automation",
    subtitle: "AWS • PostgreSQL • Docker • FFmpeg",
    description: "Automating large-scale ETL deduplication on AWS S3/Glue/Athena and end-to-end media publishing workflows.",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "PyTorch", icon: pytorch },
  { name: "LangChain", icon: langchain },
  { name: "FastAPI", icon: fastapi },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Redis", icon: redis },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: next },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "Node JS", icon: nodejs },
  { name: "Nest JS", icon: nestjs },
  { name: "Tailwind CSS", icon: tailwind },
];

const skillCategories = [
  {
    id: "ai-ml-rag",
    code: "DOM-01",
    title: "AI, Machine Learning, and RAG",
    shortTitle: "AI / ML / RAG",
    badge: "Core Focus",
    description:
      "Multi-agent orchestration, hybrid vector retrieval, multimodal document intelligence, and rigorous LLM evaluation harnesses.",
    skills: [
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Transformers",
      "Qdrant",
      "LanceDB",
      "ChromaDB",
      "Docling",
      "OpenCV",
      "SentenceTransformers",
      "RAG",
      "NLP",
    ],
    relatedProjects: [
      { name: "Multi-Agent Medical Assistant", id: "medical-assistant" },
      { name: "Cost-Efficient RAG Application", id: "cost-efficient-rag" },
      { name: "LLM-as-Judge Evaluation Pipeline", id: "llm-as-judge" },
      { name: "LLM Recipe Generation System", id: "recipe-generation" },
    ],
  },
  {
    id: "backend-distributed",
    code: "DOM-02",
    title: "Backend and Distributed Systems",
    shortTitle: "Backend & Distributed",
    badge: "Production",
    description:
      "Resilient RESTful microservices, asynchronous task queues, spatial query engines, and bidirectional real-time messaging.",
    skills: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "NestJS",
      "Celery",
      "Redis",
      "Socket.IO",
      "REST APIs",
    ],
    relatedProjects: [
      { name: "Multi-Agent Medical Assistant", id: "medical-assistant" },
      { name: "Cost-Efficient RAG Application", id: "cost-efficient-rag" },
      { name: "ArtiSight — AI Photo Critique", id: "artisight" },
    ],
  },
  {
    id: "frontend-mobile",
    code: "DOM-03",
    title: "Frontend and Mobile Engineering",
    shortTitle: "Frontend & Mobile",
    badge: "Cross-Platform",
    description:
      "Design-conscious web and mobile interfaces featuring SSR/SSG architectures, 3D WebGL experiences, and hardware-accelerated video feeds.",
    skills: [
      "React",
      "React Native (Expo)",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Three.js",
      "HTML5",
      "CSS3",
    ],
    relatedProjects: [
      { name: "ArtiSight — AI Photo Critique", id: "artisight" },
      { name: "Wasto — Smart Waste Sorter", id: "wasto" },
    ],
  },
  {
    id: "cloud-data-devops",
    code: "DOM-04",
    title: "Cloud, Data, and DevOps",
    shortTitle: "Cloud, Data & DevOps",
    badge: "Data & Infra",
    description:
      "Relational and NoSQL data modeling, AWS serverless & lakehouse ETL pipelines, containerized services, and CI/CD automation.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS (EC2, S3, Lambda, Athena, Glue)",
      "Docker",
      "Git",
      "GitHub Actions",
      "Firebase / FCM",
      "Cloudinary",
    ],
    relatedProjects: [
      { name: "Cost-Efficient RAG Application", id: "cost-efficient-rag" },
      { name: "Multi-Agent Medical Assistant", id: "medical-assistant" },
    ],
  },
  {
    id: "languages-foundations",
    code: "DOM-05",
    title: "Programming Languages and Foundations",
    shortTitle: "Languages & Foundations",
    badge: "Foundations",
    description:
      "Polyglot engineering grounded in algorithms, system design, database internals, and hardware-software integration.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Java",
      "Bash",
      "C++",
      "Data Structures & Algorithms",
      "System Design",
    ],
    relatedProjects: [
      { name: "LLM-as-Judge Evaluation Pipeline", id: "llm-as-judge" },
      { name: "Wasto — Smart Waste Sorter", id: "wasto" },
    ],
  },
];

const experiences = [
  {
    id: "skizen",
    code: "MISSION LOG // 01",
    title: "Software Engineer",
    company: "Skizen",
    location: "Hyderabad, India",
    company_name: "Skizen | Hyderabad, India",
    icon: skizen,
    iconBg: "#FFFFFF",
    date: "October 2025 – Present",
    status: "ACTIVE DEPLOYMENT",
    summary:
      "Architecting a mobile-first social discovery platform, high-performance video feed orchestration, asynchronous Celery/Redis pipelines, and end-to-end media preparation & social publishing automation.",
    highlights: [
      { label: "Client & Spatial Core", value: "React Native (Expo) + GeoJSON 2dsphere" },
      { label: "Async & Real-Time", value: "Celery / Redis + Socket.IO (2FA)" },
      { label: "Media Automation", value: "OpenCV / FFmpeg -> CapCut & Meta/YouTube APIs" },
    ],
    techTags: [
      "React Native (Expo)",
      "Django",
      "DRF",
      "Express",
      "PostgreSQL",
      "GeoJSON 2dsphere",
      "expo-video",
      "Celery",
      "Redis",
      "Socket.IO",
      "Python",
      "OpenCV",
      "PySceneDetect",
      "FFmpeg",
    ],
    points: [
      "Architected and developed a mobile-first social discovery platform connecting users through location-based demand mapping, engineering the cross-platform client with React Native (Expo) and backend services using Django, DRF, Express, and PostgreSQL with GeoJSON 2dsphere spatial indexing for business discovery, category feeds, and tiered RBAC.",
      "Engineered high-performance video feed orchestration using expo-video and viewport visibility detection (onViewableItemsChanged), guaranteeing single-stream hardware-accelerated playback with preloading, zero black-frame transitions, and non-blocking background media ingestion.",
      "Developed a production-quality local video automation tool (Python, OpenCV, PySceneDetect, FFmpeg) to prepare raw footage for 9:16 Instagram Reel editing; implemented automated scene cut detection, visual quality scoring (sharpness, motion), perceptual duplicate filtering, and programmatic CapCut Desktop draft project generation with non-destructive speed retiming (1.0x, 0.75x, 0.5x slo-mo) and an interactive human-in-the-loop review UI.",
      "Engineered an automated social media posting pipeline that monitors client Google Drive folders for finalized Reels and automatically schedules and publishes content across client social media handles (Meta Graph API / Instagram Reels, YouTube Shorts) with chunked media upload streaming, OAuth token lifecycle management, rate limiting, and resilient retry mechanisms.",
      "Built asynchronous backend pipelines using Celery and Redis to decouple background analytics aggregation and push notifications; implemented bidirectional real-time messaging using Socket.IO with JWT authentication, typing indicators, and TOTP-based two-factor authentication (2FA).",
    ],
    website: "https://skizen.in/",
  },
  {
    id: "lumiq",
    code: "MISSION LOG // 02",
    title: "Software Engineer",
    company: "Lumiq",
    location: "Noida, India",
    company_name: "Lumiq | Noida, India",
    icon: lumiq,
    iconBg: "#FFFFFF",
    date: "June 2024 – August 2025",
    status: "COMPLETED",
    summary:
      "Engineered LangChain/LangGraph virtual sales agents, AWS-powered enterprise insurance data deduplication pipelines, and full-stack resource allocation systems—eliminating over 350,000 duplicate financial exposure records.",
    highlights: [
      { label: "Agentic Workflows", value: "LangChain & LangGraph + Next.js (SSR/SSG)" },
      { label: "Verified Data Impact", value: "350,000+ Duplicate Exposure Records Eliminated" },
      { label: "Cloud Data & Internal Tools", value: "AWS (S3, Glue, Athena) + React / NestJS / PostgreSQL" },
    ],
    techTags: [
      "LangChain",
      "LangGraph",
      "Next.js (SSR/SSG)",
      "Python",
      "Django",
      "AWS S3",
      "AWS Glue",
      "AWS Athena",
      "Bash",
      "SQL",
      "React",
      "NestJS",
      "PostgreSQL",
    ],
    points: [
      "Engineered an AI-powered virtual sales agent utilizing LangChain and LangGraph to orchestrate stateful, multi-step LLM conversational workflows, coupled with a Next.js (SSR/SSG) frontend enabling real-time interactive product demonstrations for enterprise prospects.",
      "Designed and implemented a high-throughput data deduplication engine using Python, Django, and AWS ETL pipelines (S3, Glue, Athena) to identify, merge, and clean duplicate insurance policy records across enterprise data lakes.",
      "Developed and executed an automated Bash and SQL data correction script that successfully eliminated over 350,000 duplicate financial exposure records for a key insurance client, ensuring regulatory data reliability and financial reporting accuracy.",
      "Built a scalable internal project management and resource allocation platform using React, NestJS, and PostgreSQL, streamlining cross-team project tracking and optimizing operational resource utilization.",
    ],
    website: "https://lumiq.ai/",
  },
];

const education = [
  {
    title: "B.Tech in Computer Science and Design",
    company_name: "Indraprastha Institute of Information Technology Delhi (IIIT Delhi)",
    icon: iiitd,
    iconBg: "#FFFFFF",
    date: "2020 – 2024",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Advanced Programming",
      "Analysis & Design of Algorithms",
      "Computer Networks",
      "Operating Systems",
      "NLP",
      "Information Retrieval",
      "Machine Learning",
      "Reinforcement Learning in Finance",
      "Affective Computing",
    ],
    points: [
      "Graduated with a Bachelor of Technology in Computer Science and Design (2020–2024).",
      "Coursework: Data Structures & Algorithms, DBMS, Advanced Programming, Analysis & Design of Algorithms, Computer Networks, Operating Systems, NLP, Information Retrieval, Machine Learning, Reinforcement Learning in Finance, Affective Computing.",
      "Won 1st Place in the SMAI Hackathon by Micron Technology India (2022).",
    ],
    website: "https://iiitd.ac.in/",
  },
];

const achievements = [
  {
    code: "MILESTONE // 01",
    title: "IIIT Delhi — B.Tech in Computer Science and Design",
    issuer: "Indraprastha Institute of Information Technology Delhi",
    date: "2020 – 2024",
    description:
      "Completed undergraduate degree bridging rigorous computer science foundations (DSA, OS, DBMS, Networks, ML, NLP, Information Retrieval) with human-centered design and interactive systems.",
    type: "Education",
    badge: "B.Tech CSD ’24",
    link: "https://iiitd.ac.in/",
  },
  {
    code: "MILESTONE // 02",
    title: "Micron SMAI Hackathon 2022 — First Place",
    issuer: "Micron Technology India",
    date: "2022",
    description:
      "Won 1st Place nationwide in the Smart Manufacturing and AI (SMAI) Hackathon organized by Micron Technology India.",
    type: "Hackathon Award",
    badge: "1st Place Winner",
  },
  {
    code: "MILESTONE // 03",
    title: "JEE Main 2020 — 99.23 Percentile",
    issuer: "National Testing Agency (NTA)",
    date: "2020",
    description:
      "Scored 99.23 Percentile (All India Rank: 8,694) in JEE Mains among over 1.1 million engineering entrance candidates nationwide.",
    type: "Academic Honor",
    badge: "AIR 8,694",
  },
  {
    code: "MILESTONE // 04",
    title: "AWS Certified Data Engineer – Associate (Partner)",
    issuer: "Lumiq",
    date: "Credential",
    description:
      "Partner credential completed at Lumiq focused on enterprise data engineering workflows and AWS data lake pipelines.",
    type: "Certification",
    badge: "Lumiq Partner Credential",
  },
  {
    code: "MILESTONE // 05",
    title: "AWS Certification",
    issuer: "Scaler",
    date: "Credential",
    description:
      "Completed AWS cloud architecture and engineering certification program through Scaler.",
    type: "Certification",
    badge: "Scaler Credential",
  },
];

const testimonials = [
  {
    testimonial:
      "Charan delivered a beautifully designed, user-friendly convocation website with exceptional attention to detail and professionalism. Highly reliable and collaborative throughout.",
    name: "Binu Ann Joseph",
    designation: "Junior Administrative Officer",
    company: "Department of Human Centered Design, IIIT Delhi",
    image: binu,
    linkedin: "https://www.linkedin.com/in/binu-ann-joseph-ba889368/",
  },
  {
    testimonial:
      "Charan demonstrated exceptional full stack skills, delivering a robust, user-friendly platform that significantly improved our lab's data accessibility, visibility, and overall digital presence.",
    name: "Dr. Tarini Shankar Ghosh",
    designation: "Head",
    company: "Microbiome Informatics Lab, IIIT Delhi",
    image: tarini,
    linkedin: "https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868/",
  },
  {
    testimonial:
      "Charan brought exceptional initiative and versatility, driving product development from idea to MVP. A true builder with strong design, research, and engineering instincts. Invaluable early teammate.",
    name: "Ganesh Potala",
    designation: "Founder",
    company: "Streezi",
    image: ganesh,
    linkedin: "https://www.linkedin.com/in/ganesh-potala-144b4a188/",
  },
];

const projects = [
  {
    indexLabel: "MISSION 01",
    name: "Multi-Agent Medical Assistant",
    case_study_id: "medical-assistant",
    category: "AGENTIC AI / MULTIMODAL SYSTEMS",
    storyAngle:
      "Coordinating specialized AI agents to retrieve knowledge, reason over documents, and analyze medical imagery.",
    description:
      "Modular multi-agent clinical decision support system using a LangGraph supervisor, Docling multimodal PDF parsing, Qdrant hybrid search (BM25 + dense + Cross-Encoder), and PyTorch medical imaging agents with human-in-the-loop guardrails.",
    metricHighlight: "LangGraph Supervisor + Qdrant Hybrid Search + PyTorch CV",
    architecturePreview: "Supervisor -> [RAG (Docling+Qdrant) | PyTorch CNNs | Web] -> Guardrails",
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Docling", color: "pink-text-gradient" },
      { name: "Qdrant", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    image: medical_assistant,
    source_code_link: "https://github.com/vdevisricharan/Multi-Agent-Medical-Assistant",
  },
  {
    indexLabel: "MISSION 02",
    name: "Cost-Efficient RAG Application",
    case_study_id: "cost-efficient-rag",
    category: "RAG / SYSTEM EFFICIENCY",
    storyAngle:
      "Rethinking retrieval architecture to reduce infrastructure overhead without sacrificing useful retrieval performance.",
    description:
      "Self-hosted RAG service benchmarking embedded LanceDB (Apache Arrow disk format) and ChromaDB against managed cloud vector pods with Gemini 2.5 Flash, SHA-256 chunk deduplication, and deterministic similarity fallback.",
    metricHighlight: "Up to 99.9% Analytical Cost Reduction • 26.48 ms p50 Latency • 100% Fallback Accuracy",
    architecturePreview: "SHA-256 Ingest -> LanceDB / ChromaDB -> tau=0.35 Cutoff -> Gemini 2.5 Flash",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "LanceDB", color: "pink-text-gradient" },
      { name: "ChromaDB", color: "blue-text-gradient" },
      { name: "Gemini 2.5 Flash", color: "green-text-gradient" },
    ],
    image: cost_efficient_rag,
    source_code_link: "https://github.com/vdevisricharan/cost-efficient-rag-application",
  },
  {
    indexLabel: "MISSION 03",
    name: "LLM-as-Judge Evaluation Pipeline",
    case_study_id: "llm-as-judge",
    category: "LLM EVALUATION / RELIABILITY",
    storyAngle:
      "Building evaluation systems that examine bias, consistency, and model quality.",
    description:
      "Automated LLM evaluation engine featuring code-level mitigations for position, verbosity, self-enhancement, and sycophancy biases, validated via Cohen's Quadratic Weighted Kappa and Pydantic release gating.",
    metricHighlight: "Cohen's Kappa k = 0.84 • 87.5% Human Agreement • 0.0% Post-Mitigation Order Flip",
    architecturePreview: "Dual-Pass Swap -> CoT Rubric Judge -> Pydantic Repair -> Kappa Release Gate",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Gemini API", color: "green-text-gradient" },
      { name: "Pydantic", color: "pink-text-gradient" },
      { name: "Cohen's Kappa", color: "blue-text-gradient" },
      { name: "Pytest", color: "green-text-gradient" },
    ],
    image: llm_as_judge,
    source_code_link: "https://github.com/vdevisricharan/llm-as-judge-evaluation-pipeline",
  },
  {
    indexLabel: "MISSION 04",
    name: "LLM Recipe Generation System",
    case_study_id: "recipe-generation",
    category: "FINE-TUNING / GENERATIVE AI",
    storyAngle:
      "Exploring efficient language-model adaptation and benchmarking across model families.",
    description:
      "Parameter-efficient 4-bit QLoRA fine-tuning of Llama 3 7B, Gemma 7B, and Mistral 7B via Unsloth, systematically benchmarked against T5, GPT-2, Bi-LSTM, and GRU baselines on constrained recipe synthesis.",
    metricHighlight: "75% VRAM Reduction via 4-bit QLoRA • 2.5x Unsloth Speedup • 7 Architectures Compared",
    architecturePreview: "RecipeNLG -> 4-bit NF4 QLoRA (r=16, alpha=32) + Unsloth vs T5/GPT-2/RNN Baselines",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Hugging Face", color: "green-text-gradient" },
      { name: "QLoRA", color: "pink-text-gradient" },
      { name: "Unsloth", color: "blue-text-gradient" },
      { name: "Llama 3 / Gemma / Mistral", color: "green-text-gradient" },
    ],
    image: recipe_generation,
    source_code_link: "https://github.com/vdevisricharan/LLM-Recipe-Generation-System",
  },
  {
    indexLabel: "MISSION 05",
    name: "ArtiSight — AI Photo Critique",
    case_study_id: "artisight",
    category: "COMPUTER VISION / CREATIVE TECHNOLOGY",
    storyAngle:
      "Bringing intelligent photographic feedback and visual understanding into a practical application.",
    description:
      "Full-stack AI photography assistant evaluating composition, lighting, and color harmony through a structured multimodal rubric to deliver actionable technical feedback and personalized learning paths.",
    metricHighlight: "Live Full-Stack Web App • Structured Composition & Lighting Critique",
    architecturePreview: "React Client -> Flask REST Microservice -> Multimodal Vision Rubric -> Learning Path",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Generative AI", color: "blue-text-gradient" },
    ],
    image: artisight,
    source_code_link: "https://github.com/vdevisricharan/ArtiSight",
    live_link: "https://artisight.netlify.app/",
  },
  {
    indexLabel: "MISSION 06",
    name: "Wasto — Smart Waste Sorter",
    case_study_id: "wasto",
    category: "EDGE AI / EMBEDDED SYSTEMS",
    storyAngle:
      "Connecting computer vision to physical-world action.",
    description:
      "End-to-end automated waste segregation system combining MobileNetV3 transfer learning for real-time organic, recyclable, and non-biodegradable classification with Arduino servo actuation.",
    metricHighlight: "Real-Time Edge MobileNetV3 Inference + Physical Arduino Servo Actuation",
    architecturePreview: "Camera Stream -> MobileNetV3 Classifier -> Serial Protocol -> Arduino Servo Flaps",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "MobileNetV3", color: "pink-text-gradient" },
      { name: "Arduino", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
    ],
    image: wasto,
    source_code_link: "https://github.com/vdevisricharan/wasto",
    live_link: "https://wasto.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  achievements,
  skillCategories,
};
