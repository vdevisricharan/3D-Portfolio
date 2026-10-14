import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ARCHITECTURE_NODES = [
  {
    id: "users",
    code: "NODE 01",
    title: "Users & Cross-Platform Clients",
    tech: "React Native (Expo) • Next.js (SSR/SSG) • React • Tailwind CSS",
    detail:
      "Mobile-first discovery interfaces, single-stream hardware-accelerated video feeds (expo-video), and real-time interactive web applications.",
    coords: { x: 85, y: 70 },
    connections: ["apis", "ai"],
  },
  {
    id: "apis",
    code: "NODE 02",
    title: "Backend APIs & Real-Time Core",
    tech: "FastAPI • Django REST Framework • Express • NestJS • Socket.IO",
    detail:
      "High-throughput RESTful services, tiered RBAC, TOTP 2FA, and bidirectional Socket.IO messaging.",
    coords: { x: 290, y: 65 },
    connections: ["users", "workers", "data", "ai"],
  },
  {
    id: "ai",
    code: "NODE 03",
    title: "Applied AI & Multi-Agent Orchestration",
    tech: "LangGraph • LangChain • PyTorch • Docling • Gemini • QLoRA",
    detail:
      "Stateful supervisor agents, multimodal document parsing, medical imaging CNNs, and bias-mitigated LLM-as-Judge evaluation pipelines.",
    coords: { x: 190, y: 165 },
    connections: ["users", "apis", "data", "workers"],
  },
  {
    id: "workers",
    code: "NODE 04",
    title: "Distributed Pipelines & Media Automation",
    tech: "Celery • Redis • AWS (S3, Glue, Athena) • OpenCV • FFmpeg",
    detail:
      "Asynchronous task workers, 350,000+ record financial deduplication ETLs, CapCut draft generation, and automated Google Drive social publishing.",
    coords: { x: 95, y: 260 },
    connections: ["apis", "ai", "data"],
  },
  {
    id: "data",
    code: "NODE 05",
    title: "Vector & Spatial Persistence",
    tech: "PostgreSQL (GeoJSON 2dsphere) • Qdrant • LanceDB • ChromaDB",
    detail:
      "Hybrid BM25 + dense vector indices, zero-idle-cost Apache Arrow columnar storage, and spatial discovery indexing.",
    coords: { x: 295, y: 260 },
    connections: ["apis", "ai", "workers"],
  },
];

const EDGES = [
  ["users", "apis"],
  ["users", "ai"],
  ["apis", "ai"],
  ["apis", "workers"],
  ["apis", "data"],
  ["ai", "workers"],
  ["ai", "data"],
  ["workers", "data"],
];

const About = () => {
  const [selectedNodeId, setSelectedNodeId] = useState("ai");
  const activeNode =
    ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[2];

  const getNodeById = (id) => ARCHITECTURE_NODES.find((n) => n.id === id);

  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF304F] font-semibold">
            02 // ORIGIN &amp; PHILOSOPHY
          </span>
          <span className="h-[1px] w-12 bg-[#9B4DFF]/40" aria-hidden="true" />
        </div>
        <h2 className={styles.sectionHeadText}>BEHIND THE CODE.</h2>
        <p className="font-sans text-[#C4A2FF] text-[17px] sm:text-[20px] font-medium mt-2">
          Every neighbourhood needs a problem solver.
        </p>
      </motion.div>

      {/* Split Layout: Editorial Biography + Interactive Engineering Node Network */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch min-w-0">
        {/* Left: Editorial Biography Panel (7 Columns) */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.55)}
          className="lg:col-span-7 comic-panel rounded-xl p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden min-w-0"
        >
          {/* Decorative Corner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#9B4DFF]/20 min-w-0">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#9B4DFF] truncate max-w-full">
              ENGINEER DOSSIER // DEVI SRI CHARAN VALUPADASU
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#BDB4CC] shrink-0">IIIT DELHI &apos;24</span>
          </div>

          <div className="space-y-4 font-sans text-[#BDB4CC] text-[15px] sm:text-[16px] leading-[1.7]">
            <p>
              I&apos;m a <strong className="text-[#F7F5FF] font-semibold">Software Engineer</strong> with over two years of experience building scalable backend architectures, distributed background pipelines, and production AI/LLM systems. I graduated with a{" "}
              <strong className="text-[#F7F5FF] font-semibold">
                B.Tech in Computer Science and Design from IIIT Delhi (2020–2024)
              </strong>
              , where I learned to treat engineering rigor and human-centered design as two halves of the same discipline.
            </p>
            <p>
              At <strong className="text-[#F7F5FF] font-semibold">Skizen</strong> (Oct 2025 – Present), I architect cross-platform mobile discovery experiences with{" "}
              <span className="text-[#C4A2FF]">React Native (Expo)</span>,{" "}
              <span className="text-[#C4A2FF]">Django/DRF</span>,{" "}
              <span className="text-[#C4A2FF]">Express</span>, and{" "}
              <span className="text-[#C4A2FF]">PostgreSQL GeoJSON 2dsphere</span> spatial indexing—alongside hardware-accelerated video feed orchestration,{" "}
              <span className="text-[#C4A2FF]">Celery/Redis</span> workers, and automated{" "}
              <span className="text-[#C4A2FF]">OpenCV/FFmpeg</span> media pipelines.
            </p>
            <p>
              Previously at <strong className="text-[#F7F5FF] font-semibold">Lumiq</strong> (Jun 2024 – Aug 2025), I engineered stateful{" "}
              <span className="text-[#C4A2FF]">LangChain &amp; LangGraph</span> virtual sales agents and high-throughput{" "}
              <span className="text-[#C4A2FF]">AWS (S3, Glue, Athena)</span> data deduplication engines—eliminating over{" "}
              <strong className="text-[#F7F5FF] font-semibold">350,000 duplicate financial exposure records</strong> in production.
            </p>
          </div>

          {/* Education & Core Focus Callout Strip */}
          <div className="mt-7 pt-5 border-t border-[#9B4DFF]/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#08060F]/70 border border-[#9B4DFF]/25 rounded-lg p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF304F] block">
                EDUCATION
              </span>
              <p className="font-sans font-bold text-[14px] text-[#F7F5FF] mt-1">
                B.Tech CSD — IIIT Delhi
              </p>
              <p className="font-mono text-[11px] text-[#BDB4CC] mt-0.5">2020 – 2024</p>
            </div>

            <div className="bg-[#08060F]/70 border border-[#9B4DFF]/25 rounded-lg p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B4DFF] block">
                CURRENT ROLE
              </span>
              <p className="font-sans font-bold text-[14px] text-[#F7F5FF] mt-1">
                Software Engineer @ Skizen
              </p>
              <p className="font-mono text-[11px] text-[#BDB4CC] mt-0.5">Oct 2025 – Present</p>
            </div>

            <div className="bg-[#08060F]/70 border border-[#9B4DFF]/25 rounded-lg p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C4A2FF] block">
                PREVIOUS ROLE
              </span>
              <p className="font-sans font-bold text-[14px] text-[#F7F5FF] mt-1">
                Software Engineer @ Lumiq
              </p>
              <p className="font-mono text-[11px] text-[#BDB4CC] mt-0.5">Jun 2024 – Aug 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Interactive System Node Network Visualization (5 Columns) */}
        <motion.div
          variants={fadeIn("left", "tween", 0.18, 0.55)}
          className="lg:col-span-5 comic-panel rounded-xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden min-w-0"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#9B4DFF]/20 min-w-0">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#C4A2FF] truncate">
                INTERACTIVE // SYSTEM TOPOLOGY
              </span>
              <span className="font-mono text-[10px] text-[#FF304F] shrink-0">CLICK ANY NODE</span>
            </div>

            {/* SVG Connected Web Graph */}
            <div className="relative w-full bg-[#08060F]/90 rounded-lg border border-[#9B4DFF]/20 p-3">
              <svg
                viewBox="0 0 380 325"
                className="w-full h-[230px] sm:h-[250px]"
                role="img"
                aria-label="Interactive engineering architecture graph connecting Users, Backend APIs, Applied AI Agents, Distributed Workers, and Vector Data stores"
              >
                {/* Connecting Web Strands */}
                {EDGES.map(([fromId, toId], idx) => {
                  const from = getNodeById(fromId);
                  const to = getNodeById(toId);
                  const isHighlighted =
                    selectedNodeId === fromId || selectedNodeId === toId;
                  return (
                    <line
                      key={idx}
                      x1={from.coords.x}
                      y1={from.coords.y}
                      x2={to.coords.x}
                      y2={to.coords.y}
                      stroke={isHighlighted ? "#FF304F" : "#9B4DFF"}
                      strokeOpacity={isHighlighted ? "0.85" : "0.28"}
                      strokeWidth={isHighlighted ? "2" : "1.2"}
                      strokeDasharray={isHighlighted ? "none" : "4 4"}
                    />
                  );
                })}

                {/* Interactive Nodes */}
                {ARCHITECTURE_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isConnected = activeNode.connections.includes(node.id);
                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={node.coords.x}
                          cy={node.coords.y}
                          r="28"
                          fill="rgba(255, 48, 79, 0.14)"
                          stroke="#FF304F"
                          strokeWidth="1.2"
                        />
                      )}
                      <circle
                        cx={node.coords.x}
                        cy={node.coords.y}
                        r={isSelected ? "18" : "15"}
                        fill={isSelected ? "#FF304F" : isConnected ? "#171126" : "#08060F"}
                        stroke={isSelected ? "#F7F5FF" : isConnected ? "#C4A2FF" : "#9B4DFF"}
                        strokeWidth="2"
                      />
                      <text
                        x={node.coords.x}
                        y={node.coords.y + 4}
                        textAnchor="middle"
                        fill="#F7F5FF"
                        fontSize="9"
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight="700"
                      >
                        {node.code.replace("NODE ", "")}
                      </text>
                      <text
                        x={node.coords.x}
                        y={node.coords.y + 33}
                        textAnchor="middle"
                        fill={isSelected ? "#F7F5FF" : "#BDB4CC"}
                        fontSize="10"
                        fontFamily="Space Grotesk, sans-serif"
                        fontWeight={isSelected ? "700" : "500"}
                      >
                        {node.title.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Accessible Keyboard Buttons for Node Selection */}
              <div
                className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[#9B4DFF]/15"
                role="tablist"
                aria-label="System Architecture Layers"
              >
                {ARCHITECTURE_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-[0.1em] transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#FF304F] text-[#F7F5FF] font-semibold"
                          : "bg-[#171126] text-[#BDB4CC] hover:text-[#F7F5FF] border border-[#9B4DFF]/25"
                      }`}
                    >
                      {node.code}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Node Inspector Readout */}
          <div
            className="mt-4 p-4 rounded-lg bg-[#08060F]/90 border border-[#9B4DFF]/35"
            aria-live="polite"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF304F]">
                {activeNode.code} // ACTIVE LAYER
              </span>
              <span className="font-mono text-[10px] text-[#C4A2FF]">VERIFIED STACK</span>
            </div>
            <h3 className="font-sans font-bold text-[16px] text-[#F7F5FF] mt-1">
              {activeNode.title}
            </h3>
            <p className="font-mono text-[11px] text-[#C4A2FF] mt-1">{activeNode.tech}</p>
            <p className="font-sans text-[13px] text-[#BDB4CC] leading-relaxed mt-2">
              {activeNode.detail}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4 Core Engineering Pillars */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", "tween", index * 0.08, 0.5)}
            className="comic-panel rounded-xl p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#08060F] border border-[#9B4DFF]/35 group-hover:border-[#FF304F] flex items-center justify-center p-2 transition-colors">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="font-mono text-[11px] text-[#9B4DFF] group-hover:text-[#FF304F] transition-colors">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display font-bold uppercase text-[22px] tracking-wide text-[#F7F5FF]">
                {service.title}
              </h3>
              <p className="font-mono text-[11px] text-[#C4A2FF] mt-1">{service.subtitle}</p>
              <p className="font-sans text-[13.5px] text-[#BDB4CC] leading-relaxed mt-2.5">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");