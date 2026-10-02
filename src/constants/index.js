import {
  mobile,
  backend,
  creator,
  web,
  // Technology icons
  java,
  python,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
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
  midas,
  microbiome,
  lumiq,
  hcd,
  remotasks,
  skizen,
  // Education images
  iiitd,
  sr,
  jsm,
  // Project images
  medical_assistant,
  cost_efficient_rag,
  llm_as_judge,
  recipe_generation,
  wasto,
  artisight,
  securepass,
  phnmn,
  // Testimonials
  binu,
  tarini,
  ganesh,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#experience",
    title: "Experience",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#technologies",
    title: "Technologies",
  },
  {
    id: "#achievements",
    title: "Achievements",
  },
  {
    id: "#education",
    title: "Education",
  },
  {
    id: "#testimonials",
    title: "Testimonials",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "AI Systems Engineer",
    icon: backend,
  },
  {
    title: "Backend Architect",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AWS Data Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const skillCategories = [
  {
    title: "AI, Machine Learning & RAG",
    icon: "🧠",
    badge: "Core",
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
      "Multimodal CV",
      "NLP"
    ]
  },
  {
    title: "Backend & Distributed Systems",
    icon: "⚡",
    badge: "Production",
    skills: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Express.js",
      "NestJS",
      "Node.js",
      "Celery",
      "Redis",
      "Socket.IO",
      "RESTful APIs",
      "Microservices"
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: "💻",
    badge: "Cross-Platform",
    skills: [
      "React",
      "React Native (Expo)",
      "Next.js (SSR/SSG)",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Three.js",
      "HTML5 / CSS3"
    ]
  },
  {
    title: "Cloud, Data & DevOps",
    icon: "☁️",
    badge: "Certified",
    skills: [
      "AWS (EC2, S3, Lambda, Athena, Glue)",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Firebase / FCM",
      "Cloudinary",
      "Linux / Bash"
    ]
  },
  {
    title: "Languages & Foundations",
    icon: "🛠️",
    badge: "Foundational",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C++",
      "Bash",
      "System Design",
      "Data Structures & Algorithms"
    ]
  }
];


const experiences = [
  {
    title: "Software Engineer",
    company_name: "Skizen | Hyderabad, India",
    icon: skizen,
    iconBg: "#ffffff",
    date: "Oct 2025 - Present",
    points: [
      "Architected and developed a mobile-first social discovery platform connecting users through location-based demand mapping, engineering the cross-platform client with React Native (Expo) and backend services using Django, DRF, Express, and PostgreSQL with GeoJSON 2dsphere spatial indexing.",
      "Engineered high-performance video feed orchestration using expo-video and viewport visibility detection (onViewableItemsChanged), guaranteeing single-stream hardware-accelerated playback with preloading, zero black-frame transitions, and non-blocking background media ingestion.",
      "Developed a production-quality local video automation tool (Python, OpenCV, PySceneDetect, FFmpeg) to prepare raw footage for 9:16 Instagram Reel editing; implemented automated scene cut detection, visual quality scoring (sharpness, motion), perceptual duplicate filtering, and programmatic CapCut Desktop draft project generation with non-destructive speed retiming (1.0x, 0.75x, 0.5x slo-mo) and an interactive human-in-the-loop review UI.",
      "Engineered an automated social media posting pipeline that continuously monitors client Google Drive folders for finalized Reels and automatically schedules and publishes content across client social media handles (Meta Graph API / Instagram Reels, YouTube Shorts) with chunked media upload streaming, OAuth token lifecycle management, rate limiting, and resilient retry mechanisms.",
      "Built asynchronous backend pipelines using Celery and Redis to decouple background analytics aggregation and push notifications; implemented bidirectional real-time messaging using Socket.IO with JWT authentication, typing indicators, and TOTP-based two-factor authentication (2FA).",
    ],
    website: "https://skizen.in/"
  },
  {
    title: "Software Engineer",
    company_name: "Lumiq | Noida, India",
    icon: lumiq,
    iconBg: "#ffffff",
    date: "Jun 2024 - Aug 2025",
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
    company_name: "Indraprastha Institute of Information Technology, Delhi (IIIT Delhi)",
    icon: iiitd,
    iconBg: "#ffffff",
    date: "2020 - 2024",
    points: [
      "Graduated with a Bachelor of Technology in Computer Science and Design.",
      "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Natural Language Processing, Database Management Systems, Operating Systems, Computer Networks.",
      "National Hackathon Winner: Secured 1st Place in Micron SMAI Hackathon 2022 among collegiate teams nationwide."
    ],
    website: "https://iiitd.ac.in/",
  },
];

const achievements = [
  {
    title: "1st Place Winner — Micron SMAI Hackathon",
    issuer: "Micron Technology India",
    date: "2022",
    description: "Won 1st place nationwide in the Smart Manufacturing and AI (SMAI) Hackathon organized by Micron Technology, competing against leading engineering institutions across India.",
    type: "Award",
    badge: "1st Place",
  },
  {
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Credentialed",
    description: "Demonstrated production competence in AWS data lakes, ingestion pipelines, Glue ETL, Athena, Redshift, S3 architecture, and data security standards.",
    type: "Certification",
    badge: "AWS Certified",
  },
  {
    title: "JEE Mains 2020 — 99.23 Percentile",
    issuer: "National Testing Agency (NTA)",
    date: "2020",
    description: "Ranked in the top 0.77% nationwide (All India Rank 8,694) among more than 1.1 million candidates appearing for the premier national engineering entrance exam.",
    type: "Academic Honor",
    badge: "AIR 8694",
  },
  {
    title: "AWS Cloud Practitioner Training",
    issuer: "Scaler / AWS",
    date: "2023",
    description: "Comprehensive hands-on training covering core AWS compute (EC2, Lambda), storage (S3, EBS), IAM security policies, and high-availability cloud architecture.",
    type: "Certification",
    badge: "Cloud Certified",
  },
];

const testimonials = [
  {
    testimonial: "Charan delivered a beautifully designed, user-friendly convocation website with exceptional attention to detail and professionalism. Highly reliable and collaborative throughout.",
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
    name: "Multi-Agent Medical Assistant",
    case_study_id: "medical-assistant",
    description:
      "Production-grade multi-agent medical diagnostic system utilizing LangGraph state orchestration, Docling multimodal PDF parsing, Qdrant hybrid search (BM25 + dense), PyTorch medical imaging agents, and human-in-the-loop validation.",
    tags: [
      {
        name: "langgraph",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "qdrant",
        color: "pink-text-gradient",
      },
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
    ],
    image: medical_assistant,
    source_code_link: "https://github.com/vdevisricharan/Multi-Agent-Medical-Assistant",
  },
  {
    name: "Cost-Efficient RAG Application",
    case_study_id: "cost-efficient-rag",
    description:
      "High-throughput, cost-efficient RAG system comparing embedded vector databases (LanceDB & ChromaDB) against cloud managed services, achieving 99.9% cost reduction, sub-30ms p50 latency, and 100% fallback accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "lancedb",
        color: "pink-text-gradient",
      },
      {
        name: "chromadb",
        color: "blue-text-gradient",
      },
    ],
    image: cost_efficient_rag,
    source_code_link: "https://github.com/vdevisricharan/cost-efficient-rag-application",
  },
  {
    name: "LLM-as-Judge Evaluation Pipeline",
    case_study_id: "llm-as-judge",
    description:
      "Automated evaluation engine with code-level mitigations for 5 systematic LLM biases (position, verbosity, self-enhancement), statistical validation (Cohen's Kappa k = 0.84), Pydantic schemas, and release gating.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "pydantic",
        color: "pink-text-gradient",
      },
      {
        name: "eval-engineering",
        color: "blue-text-gradient",
      },
    ],
    image: llm_as_judge,
    source_code_link: "https://github.com/vdevisricharan/llm-as-judge-evaluation-pipeline",
  },
  {
    name: "LLM Recipe Generation System",
    case_study_id: "recipe-generation",
    description:
      "Parameter-efficient fine-tuning of open-weight 7B LLMs (Llama 3, Gemma, Mistral) with LoRA and 4-bit QLoRA via Unsloth, benchmarked against T5, GPT-2, Bi-LSTM, and GRU baseline neural models.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "huggingface",
        color: "green-text-gradient",
      },
      {
        name: "lora",
        color: "pink-text-gradient",
      },
      {
        name: "unsloth",
        color: "blue-text-gradient",
      },
    ],
    image: recipe_generation,
    source_code_link: "https://github.com/vdevisricharan/LLM-Recipe-Generation-System",
  },
  {
    name: "ArtiSight",
    case_study_id: "artisight",
    description:
      "An AI Photo Critique Assistant to analyze and critique photos by providing actionable insights, composition analysis, and personalized learning recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "genAI",
        color: "blue-text-gradient",
      },
    ],
    image: artisight,
    source_code_link: "https://github.com/vdevisricharan/ArtiSight",
    live_link: "https://artisight.netlify.app/",
  },
  {
    name: "Wasto",
    case_study_id: "wasto",
    description:
      "A ML algorithm to detect and segregate waste according to organic, non-biodegradable, and recycling categories using MobileNetV3 transfer learning and microcontroller integration.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
    ],
    image: wasto,
    source_code_link: "https://github.com/vdevisricharan/wasto",
    live_link: "https://wasto.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, education, achievements, skillCategories };
