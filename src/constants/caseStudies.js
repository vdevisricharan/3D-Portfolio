import {
  medical_assistant,
  cost_efficient_rag,
  llm_as_judge,
  recipe_generation,
  artisight,
  wasto,
  ai_tech_consultant,
  mission_mpso,
} from "../assets";

export const caseStudies = {
  "medical-assistant": {
    id: "medical-assistant",
    missionCode: "FIELD REPORT // MISSION 01",
    title: "Multi-Agent Medical Assistant",
    displayLabel: "AGENTIC AI / MULTIMODAL SYSTEMS",
    subtitle:
      "A modular, production-grade clinical decision support system combining LangGraph state orchestration, multimodal RAG, deep learning medical imaging, and strict safety guardrails.",
    category: "Agentic AI & Computer Vision",
    badge: "Flagship Project",
    timeline: "2025 – 2026",
    role: "Lead AI Systems Engineer",
    responsibilities: [
      "Designed the LangGraph supervisor state machine and conditional agent routing architecture",
      "Engineered the Docling multimodal ingestion pipeline and Qdrant hybrid (BM25 + dense) vector retrieval with Cross-Encoder reranking",
      "Integrated PyTorch computer vision agents for chest X-ray classification and skin lesion segmentation with confidence handoffs",
      "Containerized the multi-service FastAPI backend with Docker, GitHub Actions CI, and ElevenLabs voice synthesis",
    ],
    image: medical_assistant,
    github: "https://github.com/vdevisricharan/Multi-Agent-Medical-Assistant",
    liveDemo: null,
    stats: [
      { label: "Orchestration", value: "LangGraph State Machine" },
      { label: "RAG Engine", value: "Docling + Qdrant Hybrid" },
      { label: "Vision Models", value: "PyTorch (X-ray & Lesion)" },
      { label: "Validation", value: "Human-in-the-Loop" },
    ],
    overview: `Medical diagnostics requires reconciling unstructured patient symptom narratives, complex multimodal clinical literature (clinical trial tables, guideline PDFs), and specialized diagnostic imaging (radiographs, dermatological scans). Traditional linear LLM pipelines suffer from hallucination risks, inability to synthesize dense domain papers, and zero verification mechanisms for safety-critical clinical contexts.

The Multi-Agent Medical Assistant solves this by decomposing clinical consultation into specialized autonomous agents governed by a centralized LangGraph supervisor. Each agent handles a single specialized responsibility—NLP symptom analysis, multimodal scientific research retrieval, chest X-ray classification, or skin lesion segmentation—with explicit confidence thresholds and safety guardrails before formulating patient-facing recommendations.`,
    architecture: {
      description:
        "A centralized supervisor agent coordinates clinical routing across multimodal specialized sub-agents with confidence-based fallback.",
      nodes: [
        { step: "01", name: "User Query / Upload", detail: "Text symptoms, PDFs, X-ray or dermatological images" },
        { step: "02", name: "LangGraph Supervisor", detail: "Stateful router delegating to specialized domain agents" },
        { step: "03", name: "Multimodal RAG & Vision", detail: "Docling + Qdrant (BM25 + Dense) + TinyBERT Reranker & PyTorch CNNs" },
        { step: "04", name: "Confidence & HITL Gate", detail: "Threshold check routing ambiguous outputs to human review" },
        { step: "05", name: "Grounded Synthesis", detail: "Cited clinical summary with safety guardrails & voice output" },
      ],
      diagram: `flowchart TD
    User([User Query / Imaging Upload]) --> Supervisor[LangGraph Supervisor / Router]
    
    Supervisor -->|Symptom Narrative| SymptomAgent[NLP Symptom Analysis Agent]
    Supervisor -->|Medical Question / Papers| RAGAgent[Multimodal RAG Agent: Docling + Qdrant]
    Supervisor -->|Chest Radiograph| XRayAgent[PyTorch Chest X-Ray CNN]
    Supervisor -->|Dermatological Image| LesionAgent[PyTorch Skin Lesion Segmenter]
    Supervisor -->|Broad Web Research| WebAgent[Tavily & PubMed Agent]
    
    RAGAgent --> DoclingParse[Docling Multimodal PDF Parser]
    DoclingParse --> HybridSearch[Qdrant Hybrid Search: BM25 + Dense]
    HybridSearch --> CrossEncoder[Cross-Encoder Reranker: TinyBERT]
    
    XRayAgent --> ConfCheck{Confidence >= Threshold?}
    LesionAgent --> ConfCheck
    SymptomAgent --> ConfCheck
    CrossEncoder --> ConfCheck
    
    ConfCheck -->|High Confidence| Synthesizer[Synthesis & Guardrails Engine]
    ConfCheck -->|Uncertain / Critical| HITL[Human-in-the-Loop Clinical Review]
    
    HITL --> Synthesizer
    Synthesizer --> Output([Clinical Summary + Structured Citations + Disclaimer])`,
    },
    technicalDecisions: [
      {
        title: "LangGraph State Machine vs. Linear Chains",
        rationale:
          "Linear chains (LangChain SequentialChain) cannot backtrack, branch conditionally based on intermediate confidence scores, or delegate to specialized models. LangGraph provides cyclical state persistence, enabling the supervisor to request clarification, trigger imaging models conditionally, and pause execution for human verification.",
      },
      {
        title: "Docling Multimodal Parsing vs. Standard Text Extractors",
        rationale:
          "Medical guidelines and trial reports embed critical dosage tables and figures. Traditional PyPDF/pdfplumber extractors collapse tables into unformatted text. Docling preserves markdown table structures, bounding boxes, and document hierarchy, preserving factual precision for vector search.",
      },
      {
        title: "Qdrant Hybrid Search with Cross-Encoder Reranking",
        rationale:
          "Pure dense embedding search often misses exact medical terminology, dosage numbers, and rare clinical acronyms. Combining BM25 sparse lexical search with dense semantic embeddings in Qdrant ensures both exact keyword matching and semantic context. A secondary Cross-Encoder (ms-marco-TinyBERT) scores passage relevance with cross-attention for high precision top-k retrieval.",
      },
      {
        title: "PyTorch Specialized Imaging Agents vs. Vision-Language Models",
        rationale:
          "General-purpose VLMs (e.g. GPT-4V) frequently hallucinate specific radiological findings. Dedicated PyTorch convolutional models trained on chest X-ray and ISIC dermatology datasets provide bounded, calibrated probabilities and heatmap features that can be audited by clinicians.",
      },
    ],
    methodology: [
      "Document Ingestion: Clinical guidelines and medical textbooks parsed using Docling into semantic chunks with metadata preservation (section headers, table coordinates, document lineage).",
      "Embedding & Indexing: Dual-indexed in Qdrant using dense embeddings for semantic search and BM25 sparse vectors for rare disease/drug naming precision.",
      "Agent Orchestration: LangGraph supervisor dynamically routes conversations using structured function calling, tracking dialogue history in persistent memory.",
      "Input / Output Guardrails: Pre-processing filters detect emergency triage keywords and immediately display emergency hotline guidance. Output sanitizers append clinical disclaimers and cite specific source chunks.",
      "Audio Synthesis: Low-latency voice interaction via ElevenLabs API streaming for hands-free clinical workflow integration.",
    ],
    benchmarks: [
      { metric: "Retrieval Architecture", result: "Hybrid Qdrant (BM25 + Dense) + Cross-Encoder (ms-marco-TinyBERT)" },
      { metric: "Imaging Capabilities", result: "Chest X-ray Disease Classification & Skin Lesion Segmentation" },
      { metric: "Safety Protocol", result: "Multi-stage Input/Output Guardrails + Confidence Handoff" },
      { metric: "Containerization & CI", result: "Production Docker Multi-Service + GitHub Actions CI" },
    ],
    challenges: [
      "Medical Terminology Mismatch: Resolved by pairing dense vector retrieval with BM25 sparse index and query expansion to capture both clinical terms and layperson symptoms.",
      "Hallucination Prevention: Grounded response synthesis by constraining the LLM prompt to only cite retrieved document chunks, enforcing an explicit 'Insufficient data' fallback if similarity fell below threshold.",
      "Safety Assurance: Architected a confidence-based routing layer that flags diagnostic ambiguity and defers to human clinical review rather than generating speculative diagnoses.",
    ],
    lessonsLearned: [
      "Explicit state graphs outperform free-form agent loops in high-stakes domains because transitions, fallbacks, and human escalations can be deterministically enforced.",
      "Document layout fidelity (preserving dosage tables via Docling) has as much impact on medical RAG quality as the choice of embedding model.",
      "Pairing domain-specific PyTorch classifiers with LLM orchestration yields far more auditable results than relying on uncalibrated generalist vision-language models.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Qdrant",
      "Docling",
      "PyTorch",
      "Docker",
      "ElevenLabs API",
    ],
  },

  "cost-efficient-rag": {
    id: "cost-efficient-rag",
    missionCode: "FIELD REPORT // MISSION 02",
    title: "Cost-Efficient RAG Application",
    displayLabel: "RAG / SYSTEM EFFICIENCY",
    subtitle:
      "High-throughput, cost-efficient RAG system comparing embedded vector databases (LanceDB & ChromaDB) against cloud managed services, delivering up to 99.9% analytical cost reduction and sub-30ms latency.",
    category: "Information Retrieval & RAG",
    badge: "99.9% Cost Reduction",
    timeline: "2026",
    role: "Backend & Applied AI Engineer",
    responsibilities: [
      "Architected a dual-store RAG service comparing disk-native LanceDB (Apache Arrow) and ChromaDB against managed cloud pods",
      "Built an idempotent PDF/HTML/Markdown ingestion pipeline with SHA-256 chunk deduplication",
      "Calibrated a cosine similarity cutoff (tau = 0.35) achieving 100% fallback accuracy on unanswerable queries",
      "Developed a 20-query ground-truth evaluation harness measuring Recall@3, Hit Rate@3, LLM-Judge relevance, and p50/p95 latencies",
    ],
    image: cost_efficient_rag,
    github: "https://github.com/vdevisricharan/cost-efficient-rag-application",
    liveDemo: null,
    stats: [
      { label: "Cost Reduction", value: "99.9% vs Pinecone" },
      { label: "Recall@3 / Hit Rate", value: "83.33%" },
      { label: "Fallback Accuracy", value: "100.0%" },
      { label: "Retrieval Latency", value: "16 – 26 ms (p50)" },
    ],
    overview: `Enterprise RAG deployments frequently over-provision infrastructure by defaulting to fully-managed cloud vector databases (such as Pinecone Standard), which bill $70–$300/month per index for idle, always-on pods regardless of actual query traffic. For small-to-medium enterprise document corpuses (up to 10M vectors), this introduces massive baseline financial overhead.

This project delivers a production-grade, reproducible RAG application that benchmarks embedded/in-process vector storage (LanceDB with Apache Arrow columnar format and ChromaDB) against cloud managed alternatives. Backed by Google Gemini 2.5 Flash and all-MiniLM-L6-v2 embeddings, the system demonstrates that embedded architectures achieve identical retrieval precision and sub-30ms retrieval latency while slashing analytical infrastructure hosting expenses by up to 99.9%.`,
    architecture: {
      description:
        "End-to-end ingestion, SHA-256 chunk deduplication, embedded vector search, strict citation prompts, and RESTful query endpoints.",
      nodes: [
        { step: "01", name: "Idempotent Ingestion", detail: "PDF/HTML/MD split (500/50) + SHA-256 hash deduplication" },
        { step: "02", name: "Dense Embedding", detail: "SentenceTransformers all-MiniLM-L6-v2 (384-dim)" },
        { step: "03", name: "Embedded Vector Store", detail: "LanceDB (Apache Arrow disk) or ChromaDB (local HNSW)" },
        { step: "04", name: "Similarity Cutoff", detail: "Threshold tau = 0.35 blocks out-of-domain hallucinations" },
        { step: "05", name: "Cited Generation", detail: "Gemini 2.5 Flash with [Doc, Chunk] citation enforcement" },
      ],
      diagram: `flowchart TD
    Docs([Raw Documents: PDF, HTML, MD]) --> Loader[Document Loaders]
    Loader --> Chunker[Recursive Character Splitter: 500 chars / 50 overlap]
    Chunker --> Dedupe[SHA-256 Content Hash Deduplication]
    Dedupe --> Embedder[SentenceTransformers: all-MiniLM-L6-v2, 384-dim]
    
    Embedder --> VStore{Vector Store Choice}
    VStore -->|Option A: Disk Columnar| LanceDB[LanceDB on EBS / Local NVMe]
    VStore -->|Option B: In-Memory HNSW| ChromaDB[ChromaDB Local Engine]
    
    UserQuery([User Question]) --> QueryAPI[FastAPI /query Endpoint]
    QueryAPI --> QueryEmbed[Embed Query via MiniLM]
    QueryEmbed --> VectorSearch[Top-K ANN Vector Retrieval]
    VectorSearch --> ScoreFilter{Max Score >= 0.35?}
    
    ScoreFilter -->|Yes| PromptBuilder[Construct Strict Citation Prompt]
    ScoreFilter -->|"No (< 0.35)"| Fallback[Return Insufficient Information Fallback]
    
    PromptBuilder --> GeminiLLM[Gemini 2.5 Flash LLM]
    GeminiLLM --> Response(["Response with [Doc, Chunk] Citations + Loguru Metrics"])
    Fallback --> Response`,
    },
    technicalDecisions: [
      {
        title: "Embedded Storage (LanceDB/Chroma) vs. Managed Cloud (Pinecone)",
        rationale:
          "Managed cloud vector databases charge for always-on compute units even with zero query load. LanceDB's disk-native format (Apache Arrow) allows vector search directly from disk with near-zero memory footprint and zero idle hosting cost, costing $0.15/month for 1M vectors on EBS GP3 compared to $280/month on Pinecone.",
      },
      {
        title: "Deterministic Similarity Cutoff (tau = 0.35) for Fallback",
        rationale:
          "Generative LLMs frequently hallucinate plausible-sounding answers when relevant context is absent. Implementing an empirical similarity cutoff (tau = 0.35) intercepts irrelevant queries before generation, achieving 100% fallback accuracy on unanswerable questions.",
      },
      {
        title: "SHA-256 Chunk Deduplication",
        rationale:
          "Document repositories frequently contain overlapping or repeated text across file versions. Generating cryptographic SHA-256 hashes per chunk guarantees idempotency during batch ingestion, preventing duplicate vectors from polluting the index.",
      },
      {
        title: "384-Dimensional Dense Embeddings (all-MiniLM-L6-v2)",
        rationale:
          "Provides an optimal trade-off between semantic retrieval quality (83.33% Recall@3) and memory efficiency (only 1.5 KB per vector with metadata), keeping storage compact enough to run entirely within serverless containers or edge nodes.",
      },
    ],
    methodology: [
      "Modular Ingestion Engine: Python loaders for PDF, HTML, and Markdown with recursive character chunking (size: 500, overlap: 50) and SHA-256 deduplication.",
      "Dual Vector Store Abstraction: Pluggable interface supporting both LanceDB (disk columnar search) and ChromaDB (in-memory HNSW index).",
      "Automated 20-Query Benchmark Harness: Evaluated across three layers: Retrieval IR metrics, Answer Quality (LLM-as-a-Judge), and Latency statistics (p50 / p95).",
      "FastAPI REST API: Production endpoints (/ingest, /query, /health, /stats) with structured Pydantic input validation and Swagger documentation.",
      "Comprehensive Observability: Per-query structured logging via Loguru tracking retrieval latency, generation latency, token consumption, max similarity score, and fallback status.",
    ],
    benchmarks: [
      { metric: "100K Vectors Monthly Cost (Analytical Model)", result: "$0.02 / mo (LanceDB) vs $70.00 / mo (Pinecone) → -99.97%" },
      { metric: "1M Vectors Monthly Cost (Analytical Model)", result: "$0.15 / mo (LanceDB) vs $280.00 / mo (Pinecone) → -99.95%" },
      { metric: "10M Vectors Monthly Cost (Analytical Model)", result: "$1.52 / mo (LanceDB) vs $1,400.00 / mo (Pinecone) → -99.89%" },
      { metric: "Recall@3 / Hit Rate@3 (20-Query Benchmark)", result: "0.8333 (83.3% on LanceDB & ChromaDB)" },
      { metric: "Fallback Accuracy (Unanswerable Queries)", result: "1.0000 (100% at similarity threshold tau = 0.35)" },
      { metric: "LLM-as-a-Judge Answer Relevance", result: "0.8500 (85.0% semantic alignment with gold standard)" },
      { metric: "Retrieval Latency (p50)", result: "26.48 ms (LanceDB) / 16.41 ms (ChromaDB)" },
    ],
    challenges: [
      "Exact Match Lexical Evaluation vs Generative LLMs: Generative models rephrase answers rather than quoting verbatim, resulting in artificially low token F1 scores despite accurate semantic answers. Addressed by utilizing LLM-as-a-Judge semantic relevance (85.0%) alongside hit rate.",
      "Disk I/O Latency on Cold Starts: LanceDB achieved sub-30ms p50 retrieval on subsequent passes, while p95 reached ~318ms on un-cached cold queries. Mitigated through OS page caching and optimal batch sizing.",
      "Determining Transition Point: Established analytical guidelines demonstrating when to switch back to managed cloud vector databases (multi-tenant datasets >50M vectors, high concurrent write throughput >500 QPS).",
    ],
    lessonsLearned: [
      "For corpora under 10M vectors, embedded columnar stores like LanceDB eliminate idle cloud infrastructure costs while preserving sub-30ms p50 retrieval latency.",
      "Pre-generation similarity cutoffs (tau = 0.35) both prevent hallucinations on out-of-scope questions and save downstream LLM token spend.",
      "Idempotent ingestion via content hashing (SHA-256) is essential for maintaining clean retrieval indices during repeated document syncs.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LanceDB",
      "ChromaDB",
      "Google Gemini 2.5 Flash",
      "SentenceTransformers",
      "Pydantic",
      "Pytest",
      "Loguru",
    ],
  },

  "llm-as-judge": {
    id: "llm-as-judge",
    missionCode: "FIELD REPORT // MISSION 03",
    title: "LLM-as-Judge Evaluation Pipeline",
    displayLabel: "LLM EVALUATION / RELIABILITY",
    subtitle:
      "Automated, bias-mitigated evaluation framework for scoring and benchmarking LLMs with statistical validation, Pydantic structured schemas, and production release gating.",
    category: "LLM Evaluation Engineering",
    badge: "k = 0.84 Human Agreement",
    timeline: "2026",
    role: "AI Evaluation Engineer",
    responsibilities: [
      "Engineered programmatic mitigations for position, verbosity, self-enhancement, sycophancy, and score-clustering biases",
      "Implemented dual-pass order swapping to neutralize candidate ordering bias in pairwise evaluations",
      "Built statistical agreement validation computing Cohen's Quadratic Weighted Kappa (k = 0.84) against human labels",
      "Designed Pydantic schema validation with automatic JSON repair and automated release gating thresholds",
    ],
    image: llm_as_judge,
    github: "https://github.com/vdevisricharan/llm-as-judge-evaluation-pipeline",
    liveDemo: null,
    stats: [
      { label: "Human Agreement", value: "87.5% Exact Match" },
      { label: "Cohen's Kappa (k)", value: "0.84 (Strong Agreement)" },
      { label: "Order Bias Flip Rate", value: "0.0% Post-Mitigation" },
      { label: "Adversarial Probes", value: "100.0% Pass Rate" },
    ],
    overview: `Relying on human evaluators to score generative model releases is slow, expensive, and unscalable. While using Large Language Models as automated judges (LLM-as-a-Judge) provides high throughput, raw, unmitigated LLM judges suffer from five systematic biases: position bias (favoring whichever answer comes first), verbosity bias (awarding higher marks to wordy fluff), self-enhancement bias (favoring outputs from the judge's own model family), sycophancy (being tricked by polite phrasing), and score clustering (bunching scores around 8/10).

This project implements an automated, auditable evaluation pipeline featuring code-level mitigations for all five biases. Powered by the Google Gemini API with fallback mock evaluators for reproducible testing, it validates judge decisions against human gold-standard labels using Cohen's Quadratic Weighted Kappa (k = 0.84), passes 100% of adversarial probes, and outputs auditable JSONL audit trails for production release gating.`,
    architecture: {
      description:
        "Modular pipeline executing multi-criteria judging, dual-pass order swapping, adversarial probe testing, and statistical agreement scoring.",
      nodes: [
        { step: "01", name: "Test Suites & Rubrics", detail: "YAML 1-5 anchor rubrics + adversarial verbosity/sycophancy probes" },
        { step: "02", name: "Dual-Pass Judge Engine", detail: "Evaluates (A, B) and (B, A) to detect and neutralize position flips" },
        { step: "03", name: "Pydantic + JSON Repair", detail: "Enforces strict verdict schema with fallback regex JSON recovery" },
        { step: "04", name: "Statistical Validator", detail: "Computes Cohen's Quadratic Weighted Kappa (k = 0.84) & agreement" },
        { step: "05", name: "Release Gating Policy", detail: "Approves release only if pass >= 95%, k >= 0.75, and 0 safety flags" },
      ],
      diagram: `flowchart TD
    TestSuites([Test Suites: General QA & Adversarial Probes]) --> JudgeRunner[Evaluation Runner]
    RubricConfig[Multi-Criteria Rubric: 1-5 Calibrated Anchors] --> JudgeRunner
    
    JudgeRunner --> ModeSelect{Evaluation Mode}
    ModeSelect -->|Pointwise| PointwiseJudge[Single-Output Rubric Scoring]
    ModeSelect -->|Pairwise| DualPass[Dual-Pass Order Swap Engine]
    ModeSelect -->|Reference-Based| RefJudge[Ground-Truth Comparison]
    ModeSelect -->|Reference-Free| RefFreeJudge[Rubric Constraint Validation]
    
    DualPass --> Pass1["Pass 1: Evaluate (Output A, Output B)"]
    DualPass --> Pass2["Pass 2: Evaluate (Output B, Output A)"]
    Pass1 --> ConsistencyCheck{Both Passes Agree?}
    Pass2 --> ConsistencyCheck
    
    ConsistencyCheck -->|Yes| WinnerDeclared[Assign A or B as Winner]
    ConsistencyCheck -->|"No (Order Flip)"| TieDeclared[Declare Tie & Flag Position Flip]
    
    WinnerDeclared --> SchemaVal[Pydantic Schema Validation + Fallback JSON Repair]
    TieDeclared --> SchemaVal
    PointwiseJudge --> SchemaVal
    
    SchemaVal --> StatEngine[Statistical Validator: Cohen's Kappa, Agreement Rate]
    StatEngine --> AuditLogs[(Auditable .jsonl Event Logs & Token Costs)]
    StatEngine --> GatingPolicy{Production Release Gating}
    GatingPolicy -->|"Pass Rate >= 95% and k >= 0.75"| ReleaseApproved([Production Release Approved])
    GatingPolicy -->|Anomalies / Safety Violations| EscalateHuman([Escalate to Human Review])`,
    },
    technicalDecisions: [
      {
        title: "Dual-Pass Order Swapping for Position Bias Mitigation",
        rationale:
          "LLMs frequently exhibit a 25-35% position bias, favoring candidate A simply because it was presented first. The pipeline evaluates (A, B) and (B, A) in parallel; the order-reversed winner is mapped back. If the judge disagrees with itself across passes, the case is marked as a Tie, reducing the effective output position bias to 0%.",
      },
      {
        title: "Chain-of-Thought Grounding Before Verdict Scoring",
        rationale:
          "Forcing the LLM judge to emit step-by-step reasoning per criterion before outputting numerical scores neutralizes sycophancy and style bias, preventing polite but factually inaccurate answers from scoring highly.",
      },
      {
        title: "Few-Shot Anchor Calibration for Score Clustering",
        rationale:
          "Judges without explicit scale anchors tend to cluster scores in the 4-5 range (or 8-10). Injecting concrete few-shot examples for scores 1, 3, and 5 into the prompt calibrates variance and enforces full rubric distribution.",
      },
      {
        title: "Pydantic Structured Output Validation with Fallback JSON Repair",
        rationale:
          "Even with JSON-mode parameters, LLMs occasionally emit markdown code fences or trailing commas. The pipeline enforces strict Pydantic schemas and features regex-based automatic JSON repair to prevent pipeline failures.",
      },
    ],
    methodology: [
      "Multi-Criteria Rubric: Scores outputs across Correctness (30%), Faithfulness (20%), Completeness (20%), Instruction-Following (15%), Safety (10%), and Tone (5%).",
      "Four Judging Modes: Pointwise scoring, Pairwise A/B comparison, Reference-based evaluation, and Reference-free compliance checks.",
      "Adversarial Diagnostic Probes: Includes fluff-padded probes (evaluating whether verbosity tricks the judge) and sycophancy probes (evaluating whether polite incorrect statements are rejected).",
      "Cross-Family Enforcement: Flags when an LLM judge evaluates models from its own architecture family (e.g. Gemini evaluating Gemini), enforcing cross-family evaluation (e.g. Gemini judging GPT-4).",
      "Auditable Logging: Every evaluation generates a structured .jsonl entry recording prompts, raw responses, parsed verdict JSONs, token consumption, and calculated API cost.",
    ],
    benchmarks: [
      { metric: "Human Agreement Rate", result: "87.5% exact agreement with human reference ratings" },
      { metric: "Cohen's Quadratic Weighted Kappa (k)", result: "0.84 (High inter-annotator statistical agreement)" },
      { metric: "Test-Retest Consistency Rate", result: "100.0% identical verdicts across repeated runs under T=0" },
      { metric: "Adversarial Verbosity Probe", result: "PASSED (Correctly penalized fluff-padded responses)" },
      { metric: "Adversarial Sycophancy Probe", result: "PASSED (Correctly rejected polite, confident errors)" },
      { metric: "Position Flip Rate", result: "Reduced from ~35% naive baseline to 0.0% effective output" },
    ],
    challenges: [
      "Handling Output Truncation & Malformed JSON: LLM responses occasionally include explanatory text outside JSON blocks. Solved by writing a robust JSON repair layer that extracts curly-brace substrings and normalizes formatting before Pydantic parsing.",
      "Mitigating Self-Enhancement Bias: Models from the same family systematically prefer each other. Solved by implementing metadata checks that alert or block same-family evaluations in automated release pipelines.",
      "Defining Production Gating Rules: Established strict automated thresholds: release approved only when overall test suite pass rate is >= 95%, Cohen's Kappa >= 0.75, probe pass rate is 100%, and zero safety violations are recorded.",
    ],
    lessonsLearned: [
      "Automated LLM judges cannot be trusted out-of-the-box; dual-pass position swapping and adversarial probes are mandatory before using LLM scores for CI/CD release gating.",
      "Requiring structured rationale generation prior to numeric scoring markedly improves alignment with human annotators (k = 0.84).",
      "JSONL audit logs with token cost accounting make evaluation regressions easy to diff across prompt and model versions.",
    ],
    techStack: [
      "Python",
      "Google Gemini API",
      "Pydantic",
      "YAML Rubrics",
      "Cohen's Kappa",
      "Pytest",
      "Loguru",
      "CLI",
    ],
  },

  "recipe-generation": {
    id: "recipe-generation",
    missionCode: "FIELD REPORT // MISSION 04",
    title: "LLM Recipe Generation System",
    displayLabel: "FINE-TUNING / GENERATIVE AI",
    subtitle:
      "Parameter-efficient fine-tuning and benchmarking across open-weight 7B LLMs and baseline neural architectures for structured recipe generation from ingredient constraints.",
    category: "Open-Source LLM Fine-Tuning",
    badge: "LoRA 4-bit Quantization",
    timeline: "2024 – 2026",
    role: "ML Research & Applied AI Engineer",
    responsibilities: [
      "Built the 4-bit QLoRA (NF4) fine-tuning pipeline for Llama 3 7B, Gemma 7B, and Mistral 7B using Unsloth",
      "Implemented and trained historical baseline models (T5, GPT-2, Bi-LSTM, and GRU) for longitudinal benchmarking",
      "Evaluated models across perplexity, cross-entropy validation convergence, and ingredient constraint adherence",
      "Packaged adapter checkpoints and reproducible inference scripts",
    ],
    image: recipe_generation,
    github: "https://github.com/vdevisricharan/LLM-Recipe-Generation-System",
    liveDemo: null,
    stats: [
      { label: "Models Fine-Tuned", value: "Llama 3, Gemma, Mistral 7B" },
      { label: "Memory Savings", value: "75% via QLoRA 4-bit" },
      { label: "Training Speedup", value: "2.5x via Unsloth" },
      { label: "Baselines Evaluated", value: "T5, GPT-2, Bi-LSTM, GRU" },
    ],
    overview: `Generating coherent, safe, and delicious recipes from a constrained set of household ingredients represents a difficult text generation problem. Standard recurrent neural networks and generic foundational models struggle to maintain culinary consistency, frequently inventing phantom ingredients, hallucinating absurd cooking times, or omitting essential preparation steps.

This project delivers a parameter-efficient fine-tuning pipeline for modern open-weight 7-billion parameter language models (Meta Llama 3 7B, Google Gemma 7B, Mistral 7B) using Low-Rank Adaptation (LoRA) and 4-bit QLoRA quantization via Unsloth. The study empirically compares these fine-tuned generative LLMs against historical baseline architectures—including fine-tuned GPT-2, sequence-to-sequence T5, and Bidirectional LSTM/GRU networks—evaluating generation perplexity, ingredient constraint adherence, and token loss convergence.`,
    architecture: {
      description:
        "Parameter-efficient fine-tuning pipeline with 4-bit quantization, LoRA adapter weights, and cross-architecture benchmarking.",
      nodes: [
        { step: "01", name: "Dataset Curation", detail: "RecipeNLG / culinary corpus formatted with structured delimiters" },
        { step: "02", name: "4-bit QLoRA Adaptation", detail: "NF4 quantization + LoRA (r=16, alpha=32) on q,k,v,o projections" },
        { step: "03", name: "Unsloth Kernel Acceleration", detail: "2.5x faster gradient tracing & 75% VRAM reduction" },
        { step: "04", name: "Baseline Comparison", detail: "Benchmarked against GPT-2, T5, Bi-LSTM, and GRU models" },
        { step: "05", name: "Constraint Evaluation", detail: "Perplexity, loss convergence, and ingredient adherence audit" },
      ],
      diagram: `flowchart TD
    Dataset[RecipeNLG / Custom Culinary Dataset] --> Preprocess[Tokenization & Prompt Formatting]
    Preprocess --> Split[Train / Validation / Test Splits]
    
    Split --> ModernPipeline[Modern 7B Parameter LLM Pipeline]
    Split --> BaselinePipeline[Baseline Neural Architecture Pipeline]
    
    subgraph ModernLLMs ["Modern Open-Weight LLMs"]
        Llama[Meta Llama 3 7B]
        Gemma[Google Gemma 7B]
        Mistral[Mistral 7B]
        
        Quant[4-bit BitsAndBytes QLoRA Quantization]
        LoRA[LoRA Rank: r=16, alpha=32, target_modules=q,k,v,o]
        Unsloth[Unsloth Fast Gradient Tracing]
        
        Llama --> Quant --> LoRA --> Unsloth
        Gemma --> Quant --> LoRA --> Unsloth
        Mistral --> Quant --> LoRA --> Unsloth
    end
    
    subgraph Baselines ["Baseline Neural Models"]
        GPT2[Fine-Tuned GPT-2 Base]
        T5[T5-Base Encoder-Decoder]
        LSTM[Bidirectional LSTM Network]
        GRU["Gated Recurrent Unit (GRU)"]
    end
    
    ModernPipeline --> ModernLLMs
    BaselinePipeline --> Baselines
    
    ModernLLMs --> Evaluator[Evaluation Harness: Perplexity, BLEU/ROUGE, Constraint Satisfaction]
    Baselines --> Evaluator
    
    Evaluator --> SavedArtifacts[(Trained Weights, Inference Scripts & Project Report)]`,
    },
    technicalDecisions: [
      {
        title: "QLoRA 4-bit Quantization vs. Full-Parameter Fine-Tuning",
        rationale:
          "Full-parameter fine-tuning of 7B parameter models requires 4x A100 (80GB) GPUs. Implementing QLoRA (NF4 quantization with double quantization and paged optimizers) reduced memory footprint by 75%, allowing fine-tuning on consumer-grade single GPU instances without degradation in generation quality.",
      },
      {
        title: "Unsloth Fast Tracing Acceleration",
        rationale:
          "Replacing standard Hugging Face AutoModel backprop with Unsloth handwritten Triton kernels achieved a 2.5x training speedup and 50% less VRAM consumption during gradient accumulation steps.",
      },
      {
        title: "LoRA Hyperparameter Configuration (r=16, alpha=32)",
        rationale:
          "Targeting all linear attention projection modules (q_proj, k_proj, v_proj, o_proj) with rank r=16 and scaling alpha=32 provided sufficient representational capacity for culinary nomenclature while keeping adapter weight files under 100 MB.",
      },
      {
        title: "Longitudinal Comparison Across Model Generations",
        rationale:
          "To scientifically validate the value of modern LLMs, the study benchmarked models across three distinct architectural eras: classic RNNs (Bi-LSTM/GRU), early transformers (GPT-2, T5), and modern open-weight decoders (Llama 3, Gemma, Mistral).",
      },
    ],
    methodology: [
      "Data Preparation: Cleaned recipe corpora with standardized delimiters: Title, Ingredients list, Preparation time, Step-by-step directions.",
      "Quantization & Adaptation: Open-weight 7B models loaded in 4-bit precision via BitsAndBytes, injected with LoRA adapter weights, and compiled with Unsloth fast kernels.",
      "Baseline Implementations: Built and trained baseline models: GPT-2 fine-tuned via causal language modeling, T5 trained via seq2seq objective, and Bi-LSTM/GRU recurrent baselines in Keras.",
      "Evaluation Metrics: Calculated evaluation perplexity, cross-entropy validation loss curves, and empirical constraint satisfaction (verifying whether requested ingredients actually appeared in the recipe).",
      "Model Artifact Distribution: Published trained adapter checkpoints and comprehensive project report for reproducible scientific audit.",
    ],
    benchmarks: [
      { metric: "Top Coherence Model", result: "Meta Llama 3 7B (Lowest perplexity & zero hallucinated steps)" },
      { metric: "VRAM Reduction", result: "75% memory saved (From ~28GB FP16 down to ~7GB 4-bit)" },
      { metric: "Training Throughput", result: "2.5x faster throughput via Unsloth optimized attention kernels" },
      { metric: "Baselines vs 7B LLMs", result: "LLMs eliminated repetitive phrasing and truncated steps seen in LSTM/GRU" },
      { metric: "Model Weights & Checkpoints", result: "Full models and checkpoints preserved on Google Drive" },
    ],
    challenges: [
      "Ingredient Omission in Recurrent Baselines: LSTMs and GRUs frequently lost track of input constraints past 50 tokens, omitting key ingredients or generating non-sensical measurements. Modern attention-based 7B models completely resolved long-range dependency decay.",
      "Quantization Precision Loss: Evaluated standard int4 vs NF4 (NormalFloat4) quantization; NF4 demonstrated superior perplexity preservation for continuous culinary text.",
      "Model Size Management: Uploaded trained checkpoint archives to cloud storage with reproducible CLI inference scripts for easy local evaluation.",
    ],
    lessonsLearned: [
      "4-bit NF4 QLoRA paired with Unsloth makes domain adaptation of 7B models practical on single-GPU hardware without sacrificing structural adherence.",
      "Targeting all attention projections (q, k, v, o) rather than only q and v noticeably improves structured formatting in multi-step generation tasks.",
      "Benchmarking against simpler baselines (T5, GPT-2, Bi-LSTM) quantifies exactly where attention scale matters: long-range constraint retention.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Meta Llama 3 7B",
      "Google Gemma 7B",
      "Mistral 7B",
      "LoRA",
      "Unsloth",
      "BitsAndBytes",
      "Keras",
    ],
  },

  artisight: {
    id: "artisight",
    missionCode: "FIELD REPORT // MISSION 05",
    title: "ArtiSight — AI Photo Critique Assistant",
    displayLabel: "COMPUTER VISION / CREATIVE TECHNOLOGY",
    subtitle:
      "A production full-stack photography critique platform combining client-side Canvas optimization, deterministic OpenCV computer vision metrics, EXIF metadata extraction with GPS redaction, and Google Gemini 2.5 Flash structured evaluation.",
    category: "Multimodal AI & Computer Vision",
    badge: "ArtiSight 2.0",
    timeline: "2024 – 2026",
    role: "Full-Stack & Applied AI Engineer",
    responsibilities: [
      "Engineered client-side Canvas optimization pipeline downsampling high-resolution images (>2048px) with genuine upload progress tracking",
      "Built deterministic OpenCV computer vision service calculating 32-bin luminance histograms, Laplacian sharpness variance, and highlight/shadow clipping",
      "Implemented Pillow EXIF metadata extraction with automated privacy-preserving GPS tag redaction",
      "Designed a 6-dimension photography rubric (Composition, Lighting, Focus, Color, Storytelling, Technique) validated via Pydantic v2 schemas using Gemini 2.5 Flash",
      "Developed interactive SVG composition overlays (Rule of Thirds with power points, Golden Ratio, diagonals) and offline curated educational resource engine",
    ],
    image: artisight,
    github: "https://github.com/vdevisricharan/ArtiSight",
    liveDemo: "https://artisight.netlify.app/",
    stats: [
      { label: "Vision AI", value: "Gemini 2.5 Flash (512 Budget)" },
      { label: "Deterministic CV", value: "OpenCV Laplacian & Histogram" },
      { label: "Privacy Gate", value: "Automated GPS Redaction" },
      { label: "Validation", value: "Pydantic v2 Schemas" },
    ],
    overview: `Novice and intermediate photographers struggle to develop their craft due to a lack of accessible, objective, and constructive feedback. Generic social media platforms offer vanity metrics ('likes') rather than actionable technical critique regarding lighting, rule of thirds, framing, focal points, and color harmony.

ArtiSight 2.0 bridges this gap by unifying deterministic computer vision metrics with multimodal generative reasoning. The system evaluates uploaded photographs across 6 core photography dimensions: Composition & Framing, Lighting & Exposure, Focus & Technical Quality, Color & Tonal Balance, Subject & Storytelling, and Technical Settings. Rather than returning unformatted conversational remarks, the backend executes deterministic OpenCV image analysis, extracts privacy-sanitized EXIF camera settings, and validates Gemini 2.5 Flash critique outputs against a strict Pydantic v2 schema, returning actionable strengths, prioritized improvements, concrete shooting assignments, and curated educational resources.`,
    architecture: {
      description:
        "End-to-end pipeline: client-side image optimization, Flask REST API v2, deterministic OpenCV analysis, EXIF metadata extraction with GPS stripping, and Gemini 2.5 Flash structured evaluation.",
      nodes: [
        { step: "01", name: "Client Optimization", detail: "Canvas downsampling (>2048px, 90% JPEG) & genuine upload progress" },
        { step: "02", name: "Flask v2 Gateway", detail: "Payload validation, MIME magic check, and ephemeral memory buffer" },
        { step: "03", name: "Deterministic Vision", detail: "OpenCV Laplacian sharpness, 32-bin luminance histogram, clipping percentages" },
        { step: "04", name: "EXIF & Privacy Guard", detail: "Pillow camera metadata extraction with automated GPS tag redaction" },
        { step: "05", name: "Multimodal AI Rubric", detail: "Gemini 2.5 Flash evaluation across 6 photography dimensions (512-token thinking budget)" },
        { step: "06", name: "Pydantic Validation", detail: "Strict typing into FullCritiqueResponse, assignments & curated learning database" },
      ],
      diagram: `flowchart TD
    User([Photographer Upload]) --> Canvas[HTML5 Canvas Client Optimizer]
    Canvas -->|Optimized Payload| API[Flask REST Microservice /api/v2/analyze]
    
    API --> Security[Format & Decompression Bomb Guard]
    Security --> ParallelFork{Analysis Pipeline}
    
    ParallelFork -->|Deterministic CV| OpenCV[OpenCV Engine: Laplacian Sharpness & 32-Bin Luminance Histogram]
    ParallelFork -->|Metadata Extract| EXIF[Pillow EXIF Service + Automated GPS Redaction]
    ParallelFork -->|Multimodal Reasoning| Gemini[Gemini 2.5 Flash: 6-Dimension Rubric + 512 Thinking Budget]
    
    OpenCV --> Aggregator[Response Synthesizer]
    EXIF --> Aggregator
    Gemini --> Pydantic[Pydantic v2 Schema Validator]
    Pydantic --> Aggregator
    
    Aggregator --> ResourceEngine[Curated Learning Resource DB Fallback]
    ResourceEngine --> Output([Structured Critique JSON: Scores, Overlays, Assignments & Resources])
    
    Output --> UI[React Feedback Dashboard: Overlays, Histograms & Action Plan]`,
    },
    technicalDecisions: [
      {
        title: "Gemini 2.5 Flash + OpenCV Hybrid vs. Heavyweight BLIP-2",
        rationale:
          "BLIP-2 was evaluated during initial architecture design; running a 15GB model with >30s CPU latency on resource-constrained servers offered zero unique value over Gemini 2.5 Flash's state-of-the-art vision understanding. Pairing deterministic OpenCV metrics (Laplacian sharpness variance, RMS contrast, 32-bin luminance histogram) with Gemini 2.5 Flash yields objective mathematical telemetry alongside rich artistic reasoning, with sub-50ms deterministic execution and an active thinking budget of 512 tokens.",
      },
      {
        title: "Strict Pydantic v2 Schema Enforcement vs. Freeform LLM Output",
        rationale:
          "Unstructured LLM text frequently drifts across prompts, dropping categories or failing to format scores reliably. Enforcing a Pydantic v2 schema (FullCritiqueResponse) guarantees typed numeric scores (0-100), bounded rationale strings, structured strengths, prioritized improvements, and concrete shooting assignments.",
      },
      {
        title: "Privacy-Preserving EXIF Extraction with GPS Redaction",
        rationale:
          "Camera metadata contains valuable exposure settings (aperture, shutter speed, ISO, focal length) essential for technical critique, but consumer images frequently embed precise GPS latitude/longitude coordinates. The EXIF parser extracts camera hardware settings while deterministically purging all GPSInfo tags before data enters the application state.",
      },
      {
        title: "Curated Photography Educational DB with Search Fallback",
        rationale:
          "Google Custom Search API dependencies suffer from quota exhaustion, rate limiting, and 403 authorization failures. Implemented a zero-dependency curated repository of 18 peer-reviewed photography learning resources across all 6 rubric categories, ensuring reliable educational recommendations with or without active Google Search API keys.",
      },
      {
        title: "Client-Side HTML5 Canvas Image Optimization",
        rationale:
          "Modern DSLR and smartphone cameras produce 20MB–50MB RAW and JPEG images. Uploading uncompressed files introduces severe latency bottlenecks and server memory strain. A client-side HTML5 Canvas optimizer downsamples images exceeding 2048px to 90% quality JPEG, reducing transfer size by up to 80% while preserving optical characteristics.",
      },
    ],
    methodology: [
      "Deterministic Signal Extraction: Computed 32-bin luminance histogram, RMS contrast, highlight clipping (>250), shadow clipping (<5), and Laplacian sharpness variance via OpenCV.",
      "EXIF Privacy Sanitization: Parsed IFD0 and ExifIFD tags for camera model, aperture (F-number), exposure time, ISO, and focal length while stripping GPSInfo tags.",
      "Multimodal Evaluator Calibration: Prompted Gemini 2.5 Flash with a structured 6-dimension rubric (Composition, Lighting, Focus, Color, Storytelling, Technique) using a 512-token thinking budget to bound latency.",
      "Schema Integrity Validation: Validated and structured raw multimodal responses into Pydantic models with automated fallback to prevent partial render failures.",
      "Interactive Visual Feedback: Engineered client-side SVG composition overlays (Rule of Thirds, Phi Ratio, Crosshairs, Diagonals) and exposure histogram visualizations in React.",
    ],
    benchmarks: [
      { metric: "Deterministic EXIF Extraction", result: "9.0 ms (p50) / 9.8 ms (mean)" },
      { metric: "Deterministic OpenCV Analysis", result: "42.9 ms (p50) / 47.9 ms (mean)" },
      { metric: "Resource Recommendation Latency", result: "0.1 ms (p50) / 0.1 ms (mean)" },
      { metric: "Multimodal Critique Latency", result: "13.26 s (p50) / 14.18 s (mean) with Gemini 2.5 Flash" },
      { metric: "Automated Test Suite", result: "16 pytest unit/integration tests passing (100% pass rate)" },
      { metric: "Frontend Production Bundle", result: "296.3 kB gzip-optimized via Vite" },
    ],
    challenges: [
      "Latency vs. Reasoning Quality in Generative Vision: Gemini 2.5 Flash defaults to unconstrained thinking, taking over 100 seconds when output tokens exceed limits. Configured max_output_tokens=8192 with thinking_budget=512, cutting critique latency to 13.26s while preserving deep technical analysis.",
      "Eliminating Unverified Model Claims: Evaluated and dropped BLIP-2 in favor of deterministic OpenCV computer vision, honestly documenting the trade-off rather than retaining unverified claims.",
      "State Rehydration & SPA Navigation: Page refreshes on critique routes previously wiped image and analysis states. Implemented sessionStorage persistence and Netlify redirect rules (_redirects) to guarantee seamless navigation.",
    ],
    lessonsLearned: [
      "Pairing deterministic computer vision (OpenCV) with generative multimodal AI provides the best of both worlds: mathematical rigor for exposure/sharpness and high-level reasoning for composition/storytelling.",
      "Bounded thinking budgets on reasoning models provide a predictable latency profile suitable for interactive web applications without sacrificing output quality.",
      "Honest, reproducible engineering benchmarks build far greater credibility in technical portfolios than unverified marketing claims.",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Python 3.11",
      "Flask",
      "OpenCV",
      "Pillow (PIL)",
      "Pydantic v2",
      "Google Gemini 2.5 Flash",
      "Gunicorn",
      "Docker",
      "Netlify",
    ],
  },

  wasto: {
    id: "wasto",
    missionCode: "FIELD REPORT // MISSION 06",
    title: "Wasto — Smart Waste Classification System",
    displayLabel: "EDGE AI / EMBEDDED SYSTEMS",
    subtitle:
      "Automated real-time waste segregation platform combining lightweight computer vision (MobileNetV3) with Arduino microcontroller actuation for physical recycling units.",
    category: "Edge AI & Embedded IoT",
    badge: "Hardware Actuated",
    timeline: "2023",
    role: "ML & Hardware Systems Engineer",
    responsibilities: [
      "Fine-tuned MobileNetV3 in TensorFlow/Keras for 3-class waste segregation (Organic, Recyclable, Non-Biodegradable)",
      "Engineered the non-blocking serial communication protocol between Python inference and an Arduino Uno microcontroller",
      "Programmed physical servo motor deflection flaps synchronized with conveyor frame capture",
      "Built the React + Tailwind CSS web monitoring interface",
    ],
    image: wasto,
    github: "https://github.com/vdevisricharan/wasto",
    liveDemo: "https://wasto.netlify.app/",
    stats: [
      { label: "Vision Architecture", value: "MobileNetV3 Transfer Learning" },
      { label: "Classification", value: "Organic, Recyclable, Non-Bio" },
      { label: "Hardware Control", value: "Arduino Microcontroller" },
      { label: "Web Dashboard", value: "React + TailwindCSS" },
    ],
    overview: `Contamination in municipal recycling streams is one of the primary drivers of landfill waste and environmental degradation. When non-recyclable materials or organic waste are commingled with recyclables, entire processing batches are discarded. Manual segregation is labor-intensive, hazardous, and error-prone.

Wasto is an end-to-end automated waste segregation system combining edge deep learning with physical microcontroller actuation. A lightweight MobileNetV3 convolutional neural network classifies waste items in real-time from camera video streams. The classified category is transmitted over serial communication to an Arduino microcontroller, which actuates mechanical servo flaps to physically route waste into the correct receptacle bin.`,
    architecture: {
      description:
        "Edge camera video feed processed by MobileNetV3 model, sending physical actuation signals to Arduino servo motors.",
      nodes: [
        { step: "01", name: "Conveyor Camera Feed", detail: "Real-time frame capture & 224x224 normalization" },
        { step: "02", name: "MobileNetV3 Classifier", detail: "Edge CNN predicting Organic, Recyclable, or Non-Bio" },
        { step: "03", name: "Async Serial Bridge", detail: "Non-blocking UART signal dispatch to Arduino Uno" },
        { step: "04", name: "Servo Actuation & UI", detail: "Physical sorting flaps + React monitoring dashboard" },
      ],
      diagram: `flowchart TD
    Camera[Conveyor Camera Feed] --> FrameCapture[Real-Time Video Capture]
    FrameCapture --> Preprocess[Image Normalization: 224x224]
    Preprocess --> CNN[MobileNetV3 Deep Learning Classifier]
    CNN --> ClassPrediction{Predicted Category}
    
    ClassPrediction -->|Organic| SignalA[Serial Signal: Bin 1]
    ClassPrediction -->|Recyclable| SignalB[Serial Signal: Bin 2]
    ClassPrediction -->|Non-Biodegradable| SignalC[Serial Signal: Bin 3]
    
    SignalA --> Arduino[Arduino Microcontroller]
    SignalB --> Arduino
    SignalC --> Arduino
    
    Arduino --> Servos[Servo Motor Mechanical Sorting Flaps]
    Servos --> Bins[(Segregated Physical Receptacles)]
    
    CNN --> Dashboard[React & Tailwind Monitoring Dashboard]`,
    },
    technicalDecisions: [
      {
        title: "MobileNetV3 Architecture vs. Heavyweight ResNet/VGG",
        rationale:
          "Industrial sorting units require low latency inference on low-cost edge computers. MobileNetV3 with depthwise separable convolutions and hard-swish activation delivers high classification accuracy while running at 30+ FPS on edge CPUs without requiring discrete enterprise GPUs.",
      },
      {
        title: "Transfer Learning on Domain-Specific Waste Datasets",
        rationale:
          "Pre-trained on ImageNet and fine-tuned on curated waste classification corpora (organic, recyclable plastics/paper, non-biodegradable hazardous items) to achieve rapid convergence and high generalization.",
      },
      {
        title: "Asynchronous Hardware Serial Protocol",
        rationale:
          "Built a non-blocking serial communication bridge between the Python inference runtime and the Arduino microcontroller, preventing video processing stalls while mechanical servos cycle through actuation.",
      },
    ],
    methodology: [
      "Dataset Curation: Curated multi-class waste image datasets spanning biodegradable food waste, recyclable paper/cardboard/plastics, and inert non-biodegradable waste.",
      "Transfer Learning Pipeline: Fine-tuned MobileNetV3 in TensorFlow/Keras with data augmentation (rotation, contrast, zoom) to simulate industrial conveyor belt conditions.",
      "Hardware Actuation: Configured an Arduino Uno driving multi-angle servo motor flaps to steer items into designated compartments based on class labels.",
      "Web Monitoring Interface: Built a live status dashboard using React and Tailwind CSS to track classification history and bin capacity.",
    ],
    benchmarks: [
      { metric: "Target Categories", result: "Organic, Recyclable, Non-Biodegradable" },
      { metric: "Inference Performance", result: "Real-time edge execution on local video streams" },
      { metric: "Hardware Integration", result: "Physical servo mechanical deflection mechanism" },
      { metric: "Web Demo", result: "Live on Netlify (https://wasto.netlify.app/)" },
    ],
    challenges: [
      "Visual Occlusion and Crushed Objects: Real-world waste items are crushed or partially obscured. Addressed by applying extensive geometric and color jitter augmentation during model training.",
      "Mechanical Timing Synchronization: Calibrated delays between camera detection and conveyor belt movement to ensure the servo flap opened at the exact moment the item dropped into the chute.",
    ],
    lessonsLearned: [
      "When deploying computer vision to physical hardware, inference latency and mechanical actuation timing must be co-designed as a single real-time loop.",
      "Lightweight depthwise-separable architectures (MobileNetV3) paired with domain-specific augmentation deliver reliable accuracy on constrained edge hardware.",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV3",
      "OpenCV",
      "Arduino",
      "C++",
      "React",
      "Tailwind CSS",
      "Netlify",
    ],
  },

  "ai-tech-consultant": {
    id: "ai-tech-consultant",
    missionCode: "FIELD REPORT // MISSION 07",
    title: "AI Tech Consultant — Automated Consulting Pipeline",
    displayLabel: "AI SYSTEMS / MULTI-SERVICE ARCHITECTURE",
    subtitle:
      "A unified AI system automating the three most expensive bottlenecks in technical software consulting: domain knowledge retrieval, high-volume customer email triage, and meeting-to-scope proposal generation.",
    category: "AI Systems & Microservices",
    badge: "Multi-Service Architecture",
    timeline: "2025 – 2026",
    role: "Full-Stack AI Systems Engineer",
    responsibilities: [
      "Architected the 3-microservice system with REST API interconnects where Tasks 2 and 3 consume Task 1 exclusively through its API",
      "Built the polite resumable web crawler with rate limiting, exponential backoff, and Claude 3.5 Sonnet multimodal screenshot understanding",
      "Engineered the hybrid search engine combining SQLite FTS5 BM25 lexical search with semantic vector embeddings via Reciprocal Rank Fusion",
      "Developed the TypeScript Inbox Agent with 7-category email classification, commercial guardrails, and 20-consecutive-approval autonomy engine",
      "Designed the 5-agent Meeting-to-Scope pipeline with PERT estimation and scope-creep detection across multiple meeting transcripts",
    ],
    image: ai_tech_consultant,
    github: "https://github.com/vdevisricharan/ai-tech-consultant",
    liveDemo: null,
    stats: [
      { label: "Overall Accuracy", value: "88.3% (60 Evals)" },
      { label: "Cost Per Query", value: "~$0.0023" },
      { label: "Policy Adherence", value: "100%" },
      { label: "Microservices", value: "3 Interconnected" },
    ],
    overview: `Software development pricing has crashed 90%, forcing consulting firms to handle 10–20x more clients without proportional staff increases. The three most expensive operational bottlenecks — looking up domain-specific knowledge, drafting high-volume customer emails, and turning messy client meetings into scoped proposals — remain overwhelmingly manual.

AI Tech Consultant addresses this by decomposing these bottlenecks into three interconnected microservices. Task 1 (Knowledge Brain) is a hybrid-search RAG engine with a polite resumable crawler and Claude 3.5 Sonnet multimodal understanding. Task 2 (Inbox Agent) autonomously classifies, drafts, and dispatches customer emails with commercial guardrails and a progressive autonomy engine. Task 3 (Meeting-to-Scope) orchestrates 5 specialized AI agents to convert raw meeting transcripts into feasibility-checked, PERT-estimated project proposals with scope-creep detection.`,
    architecture: {
      description:
        "Three interconnected microservices where Tasks 2 and 3 consume Task 1's knowledge base exclusively through its REST API.",
      nodes: [
        { step: "01", name: "Polite Web Crawler", detail: "Resumable crawling with rate limiting, backoff, and Claude Vision screenshot analysis" },
        { step: "02", name: "Hybrid RAG Engine", detail: "SQLite FTS5 BM25 + semantic vectors fused via Reciprocal Rank Fusion" },
        { step: "03", name: "Inbox Agent", detail: "7-category email classifier with autonomy engine and commercial guardrails" },
        { step: "04", name: "Meeting-to-Scope", detail: "5 specialized agents: Transcript, Feasibility, Scope, Estimation, Proposal" },
        { step: "05", name: "Scope Diff Engine", detail: "Cross-meeting change detection and scope creep flagging" },
      ],
      diagram: `flowchart TD
    Crawler[Polite Web Crawler] --> Parser[HTML & Screenshot Parser]
    Parser --> Vision[Claude 3.5 Sonnet Vision]
    Vision --> SQLite[SQLite FTS5 + Vector Store]
    SQLite --> RAGAPI[Knowledge Brain REST API :8000]
    Email[Incoming Customer Email] --> Classifier[7-Category Classifier: Claude Haiku]
    Classifier --> DraftGen[Grounded Draft Generator]
    DraftGen --> RAGAPI
    DraftGen --> Autonomy{20-Approval Autonomy Gate}
    Autonomy -->|Autonomous| AutoSend[Auto-Send Response]
    Autonomy -->|Manual| Console[Unified Web Console :3000]
    Transcript[Meeting Transcripts] --> Analyst[Transcript Analyst Agent]
    Analyst --> Feasibility[Feasibility Agent]
    Feasibility --> RAGAPI
    Feasibility --> Scope[Scope Agent]
    Scope --> PERT[Estimation Agent: 3-Point PERT]
    PERT --> Proposal[Proposal Agent]
    Transcript2[Follow-up Meetings] --> DiffEngine[Scope Diff Engine]
    DiffEngine --> CreepAlert[Scope Creep Detection]`,
    },
    technicalDecisions: [
      {
        title: "Hybrid Search with Reciprocal Rank Fusion over Pure Vector Search",
        rationale:
          "Technical consulting queries often contain exact product names, error codes, and version numbers where lexical BM25 matching excels. Combining SQLite FTS5 BM25 with semantic vector embeddings via RRF fusion captures both exact-match precision and semantic similarity, significantly outperforming either approach alone.",
      },
      {
        title: "Claude 3.5 Haiku for Classification vs. Sonnet for Generation",
        rationale:
          "Email classification is a constrained categorization task where Haiku runs 3x faster and 75% cheaper than Sonnet while maintaining equivalent accuracy. Reserved Sonnet for complex grounded generation tasks (RAG synthesis, vision analysis) where reasoning depth justifies the cost.",
      },
      {
        title: "20-Consecutive-Approval Autonomy Engine",
        rationale:
          "Full automation without human verification risks brand damage from incorrect responses. The progressive autonomy model requires 20 consecutive unedited approvals before auto-sending low-risk emails, with any single edit instantly revoking autonomy — balancing efficiency with safety.",
      },
      {
        title: "Anti-Hallucination Guardrails with Safe Abstention",
        rationale:
          "In consulting contexts, fabricated answers are worse than no answer. The RAG engine safely abstains with an 'insufficient_evidence' response when retrieval confidence is low, routing to human escalation rather than generating plausible-sounding but unsupported content.",
      },
    ],
    methodology: [
      "Knowledge Base Construction: Built a polite, resumable web crawler with robots.txt compliance, rate limiting, and exponential backoff to ingest domain documentation. Multimodal screenshots processed via Claude 3.5 Sonnet Vision for UI-heavy content.",
      "Hybrid Retrieval Pipeline: Indexed crawled content in SQLite FTS5 for BM25 lexical search alongside semantic vector embeddings. Fused results using Reciprocal Rank Fusion for balanced precision and recall.",
      "Email Classification and Drafting: Implemented a 7-category intent classifier (how-to, troubleshooting, project, refund, complaint, quote, follow-up) using Claude 3.5 Haiku with commercial guardrails preventing unapproved refunds or arbitrary quotes.",
      "Progressive Autonomy: Designed a 20-approval autonomy engine where low-risk emails auto-send after 20 consecutive unedited approvals, with any edit instantly revoking autonomous mode.",
      "Multi-Agent Scope Pipeline: Orchestrated 5 specialized agents (Transcript Analyst, Product Feasibility, Scope, Estimation, Proposal) with out-of-the-box feasibility checking against the Task 1 knowledge base.",
      "Scope Creep Detection: Built a diff engine that compares requirements across multiple meeting transcripts, flagging new additions and changed specifications.",
    ],
    benchmarks: [
      { metric: "Overall Accuracy", result: "88.3% across 60 test cases" },
      { metric: "Policy Adherence", result: "100% (zero unauthorized commitments)" },
      { metric: "Cost Per Query", result: "~$0.0023 average" },
      { metric: "Knowledge Brain Recall", result: "Hybrid RRF outperforms pure BM25 and pure vector" },
      { metric: "Email Classification", result: "7-category classifier with commercial guardrails" },
      { metric: "Scope Pipeline", result: "5-agent chain with PERT 3-point estimation" },
    ],
    challenges: [
      "Multimodal Knowledge Ingestion: Many help center pages rely heavily on annotated screenshots rather than text. Solved by integrating Claude 3.5 Sonnet Vision to extract structured knowledge from UI screenshots, enabling the crawler to index visual content alongside HTML text.",
      "Balancing Autonomy with Safety: Full email automation risks sending incorrect or policy-violating responses. Designed the 20-approval autonomy engine with instant revocation on any edit, and commercial guardrails that prevent the system from ever promising refunds or custom quotes without human authorization.",
      "Cross-Meeting Scope Drift: Client requirements evolve across multiple meetings, making it difficult to track what changed. Built a dedicated Scope Diff Engine that performs structured comparison across meeting transcripts, explicitly flagging additions, removals, and modifications.",
    ],
    lessonsLearned: [
      "Hybrid search (BM25 + semantic vectors + RRF fusion) consistently outperforms single-modality retrieval for domain-specific technical queries containing both natural language and exact product terminology.",
      "Progressive autonomy with instant revocation provides a practical middle ground between fully manual and fully autonomous AI email systems, building trust incrementally.",
      "Decomposing consulting workflows into specialized microservices with REST API boundaries enables independent scaling and testing while maintaining a unified system experience.",
    ],
    techStack: [
      "Python 3.11",
      "FastAPI",
      "TypeScript",
      "Node.js",
      "Express.js 5",
      "Anthropic Claude 3.5 Sonnet",
      "Anthropic Claude 3.5 Haiku",
      "SQLite FTS5",
      "Reciprocal Rank Fusion",
      "Zod",
      "Pydantic v2",
      "Pytest",
      "Vitest",
    ],
  },

  "mission-mpso": {
    id: "mission-mpso",
    missionCode: "FIELD REPORT // MISSION 08",
    title: "MISSION MPSO — Telugu-First AI Exam Platform",
    displayLabel: "AI EDTECH / TELUGU-FIRST PWA",
    subtitle:
      "A production-ready, Telugu-first AI exam preparation progressive web app for TGPSC MPSO/ASO recruitment, featuring grounded pedagogical tutoring, deterministic statistical calculations, 6-tier adaptive mastery, and timed mock simulations.",
    category: "AI EdTech & Accessible Systems",
    badge: "Vernacular AI Flagship",
    timeline: "2026",
    role: "Full-Stack AI & Systems Architect",
    responsibilities: [
      "Architected the Next.js 16 (App Router) mobile-first Progressive Web App using React 19, TypeScript, and accessible Tailwind CSS design tokens",
      "Engineered the Grounded Telugu AI Tutor engine featuring 7 distinct pedagogical modes (Teach Me, Explain Simply, Solve Together, etc.) with offline fallback and KaTeX bilingual math notation",
      "Built the deterministic StatisticsValidator calculation engine covering 12 statistical domains (Central Tendency, Variance, Bayes, Distributions, Index Numbers) to eliminate LLM arithmetic hallucinations",
      "Designed the 6-tier evidence-based mastery engine, Spaced Repetition queue (1, 3, 7, 14, 30 days), and persistent 'తప్పుల పుస్తకం' (Mistake Book) with error taxonomy",
      "Implemented the full-length 150-question official TGPSC timed mock examination simulator with authoritative countdown timer, OMR-style palette, and Paper I/II breakdown",
      "Conducted rigorous WCAG 2.2 AA accessibility and responsive layout audits across 16 routes and 7 screen viewports (320px–1440px), achieving 49/49 automated unit and E2E tests passing",
    ],
    image: mission_mpso,
    github: "https://github.com/vdevisricharan/mission-mpso",
    liveDemo: null,
    stats: [
      { label: "Tutor Modes", value: "7 Pedagogical Types" },
      { label: "Automated Tests", value: "49/49 Passing" },
      { label: "Exam Fidelity", value: "150 Qs / 150 Mins" },
      { label: "Accessibility", value: "WCAG 2.2 AA / 0px Overflow" },
    ],
    overview: `The Telangana Public Service Commission (TGPSC) recruitment for Mandal Planning & Statistical Officers / Assistant Statistical Officers (Notification 07/G/ES/2026) demands mastery across Paper I (General Studies) and Paper II (University Degree-Level Statistics). Aspirants, particularly those from rural and Telugu-medium academic backgrounds, face severe systemic barriers: statistical textbooks and high-quality mock tools are overwhelmingly published in English, while generic commercial LLMs frequently hallucinate multi-step numerical calculations, invent invalid mathematical formulas, and produce unnatural Telugu translations.

MISSION MPSO addresses this challenge through a purpose-built, Telugu-first AI exam preparation platform. Rather than trusting probabilistic LLMs with arithmetic execution, the system decouples pedagogical instruction from numerical truth: an independent deterministic statistics validator computes exact mathematical ground truth, while a grounded vernacular AI tutor guides students across 7 distinct pedagogical modes. Combined with an evidence-based 6-tier mastery engine, automated spaced repetition, and full-length 150-question timed mocks, MISSION MPSO delivers an uncompromising, accessible learning companion designed to operate flawlessly even on low-cost mobile devices.`,
    architecture: {
      description:
        "Mobile-first PWA architecture coupling a Next.js 16 App Router with a dual-engine core: a deterministic numerical validator for mathematical certainty and a grounded Telugu AI tutor for vernacular pedagogy.",
      nodes: [
        { step: "01", name: "PWA Client & Viewport", detail: "Mobile-first responsive UI (320px–1440px) with 3-tier font size toggle and touch-optimized controls" },
        { step: "02", name: "Grounded AI Tutor Engine", detail: "7 pedagogical modes (Teach, Simplify, Solve Together, etc.) with KaTeX bilingual math" },
        { step: "03", name: "Deterministic Stats Validator", detail: "Independent calculation engine verifying formulas, calculations, and options with zero hallucination" },
        { step: "04", name: "Adaptive & Spaced Repetition", detail: "6 mastery tiers with multi-attempt evidence thresholds and automated 1/3/7/14/30-day review scheduling" },
        { step: "05", name: "Mock Simulator & Mistake Book", detail: "150-question timed examination engine with authoritative countdown and categorized misconception analysis" },
      ],
      diagram: `flowchart TD
    User([Student / Aspirant]) --> PWA[Next.js 16 App Router PWA]
    PWA --> Layout[AppShell & Font Sizer]
    Layout --> Hub{Learning View}
    
    Hub -->|AI Tutor| Tutor[Grounded Telugu AI Tutor: 7 Modes]
    Hub -->|Practice & Mocks| Practice[150-Q Timed Mock & Practice Engine]
    Hub -->|Review| MistakeBook[Mistakes Book & Spaced Repetition]
    
    Tutor --> KaTeX[Bilingual KaTeX Math Renderer]
    Tutor --> Grounding[Curriculum Context Injection]
    
    Practice --> Validator[Deterministic StatisticsValidator Engine]
    Validator --> MathCheck[Mean / SD / Bayes / Distributions / Index Numbers]
    
    Practice --> Mastery[6-Tier Evidence Mastery Engine]
    Mastery --> Repetition[Spaced Repetition Scheduler: 1/3/7/14/30 Days]
    Repetition --> MistakeBook
    
    Tutor --> Storage[(Multi-Backend: PostgreSQL / JSON Store)]
    Practice --> Storage
    Mastery --> Storage`,
    },
    technicalDecisions: [
      {
        title: "Deterministic Statistics Engine vs. Probabilistic LLM Arithmetic",
        rationale:
          "Language models are autoregressive token predictors prone to subtle arithmetic drift in multi-step statistical calculations (e.g. variance, Karl Pearson correlation, Fisher's index numbers). MISSION MPSO implements an independent StatisticsValidator in TypeScript that computes deterministic ground truth. The AI tutor and question engine consume validated results, eliminating numerical hallucinations entirely.",
      },
      {
        title: "7 Structured Pedagogical Modes vs. Open-Ended Chat",
        rationale:
          "Unstructured chatbots frequently give away final solutions without building conceptual understanding. The platform enforces 7 distinct pedagogical modes (Teach Me, Explain Simply, Solve Together, Give Another Example, Test My Understanding, Explain My Mistake, Quick Revision), scaffolding problem-solving step-by-step and guiding students towards independent discovery.",
      },
      {
        title: "Evidence-Based Multi-Attempt Mastery vs. Single-Pass Scoring",
        rationale:
          "Single-question success often reflects lucky guessing rather than authentic mastery. The adaptive engine enforces strict multi-attempt evidence thresholds: reaching 'Strong' mastery requires at least 5 independent verified question attempts with >= 85% aggregate accuracy across spaced sessions.",
      },
      {
        title: "Bilingual KaTeX Math with Symbol-by-Symbol Vernacular Glosses",
        rationale:
          "Standard Telugu-medium textbooks often present formulas without clarifying underlying notation, leading to rote memorization. The platform formats every mathematical expression using KaTeX with symbol-by-symbol Telugu glosses (e.g. sigma = ప్రామాణిక విచలనం, x̄ = అంకమధ్యమం), connecting formal mathematics to intuitive language.",
      },
      {
        title: "Mobile-First Design System with Strict Zero-Horizontal-Overflow Containment",
        rationale:
          "Aspirants predominantly study on compact 360px smartphones. Complex bilingual labels and wide mathematical equations easily cause horizontal scroll breakage. By implementing responsive wrapping on all badge rows, scrollable math cards, min 44x44px touch targets, and 3-tier font sizing, the platform ensures 100% WCAG 2.2 AA accessibility across all viewports.",
      },
    ],
    methodology: [
      "Official Curriculum Grounding: Mapped the complete TGPSC Notification 07/G/ES/2026 Annexure-II syllabus into immutable curriculum structures (13 Paper I General Studies topics and 8 Paper II Degree Statistics units).",
      "Deterministic Statistics Engine: Implemented independent numerical calculation functions for Mean, Median, Mode, Variance, SD, Bayes' Theorem, Binomial/Poisson distributions, Karl Pearson correlation, and Index Numbers.",
      "Vernacular Pedagogical AI Tutoring: Built a multi-mode tutor supporting 7 distinct pedagogical actions with built-in offline lesson retrieval and optional cloud LLM passthrough with strict anti-hallucination prompts.",
      "Spaced Repetition & Mistake Book: Automated systematic capture of incorrect attempts, classifying errors into conceptual, calculation, formula, or reading mistakes with scheduled intervals at 1, 3, 7, 14, and 30 days.",
      "Full-Length Timed Mock Simulator: Replicated official exam conditions (150 questions in 150 minutes) with a server-authoritative countdown timer, OMR-style palette, and bilingual question presentation.",
      "Accessibility & Responsive Viewport Hardening: Conducted comprehensive audits across 16 routes and 7 screen viewports (320px–1440px), ensuring WCAG 2.2 AA touch targets, semantic ARIA roles, and zero horizontal scrolling.",
    ],
    benchmarks: [
      { metric: "Automated Test Suite", result: "49/49 passing (25 Vitest unit + 24 Playwright E2E)" },
      { metric: "Numerical Calculation Accuracy", result: "100% deterministic verification across 12 statistical domains" },
      { metric: "Responsive Viewport Integrity", result: "0px horizontal overflow across all 16 routes (320px–1440px)" },
      { metric: "Touch Target Accessibility", result: "100% >= 44x44px conforming to WCAG 2.2 AA SC 2.5.8" },
      { metric: "Pedagogical Tutor Modes", result: "7 specialized modes with KaTeX bilingual rendering" },
      { metric: "Exam Alignment", result: "300 Qs / 300 Marks official 07/G/ES/2026 syllabus compliance" },
    ],
    challenges: [
      "Rendering Complex Mathematical Notation on Budget Mobile Screens: Mathematical formulas frequently caused horizontal clipping on 360px smartphone viewports. Solved by wrapping KaTeX expressions in horizontally scrollable containment cards with thin scrollbars, pairing each equation with step-by-step symbol definitions in Telugu.",
      "Eliminating Arithmetic Hallucination in Statistics: Generative LLMs routinely fail at arithmetic calculations like standard deviation or Fisher's index numbers. Solved by engineering an independent StatisticsValidator engine that computes ground truth deterministically, using the LLM solely for pedagogical explanation and conceptual intuition.",
      "Localization & Typographic Layout Stability: Telugu script has tall diacritics and compound glyphs that collide with rigid UI line heights and fixed-height badges. Re-architected typography tokens with dynamic line-heights, flex-wrap metadata rows, and 3-tier user-controlled font size toggles.",
    ],
    lessonsLearned: [
      "Decoupling mathematical calculation into a deterministic engine while using LLMs strictly for pedagogical narrative guarantees both scientific truth and natural explanation.",
      "Vernacular-first web apps must be engineered from the typography up — Telugu script requires wider padding, flexible flex-wrapping, and generous line-heights compared to Latin alphabets.",
      "Categorizing student errors by misconception type (formula error vs. calculation error vs. concept misunderstanding) makes spaced repetition revision dramatically more actionable than simple score percentages.",
    ],
    techStack: [
      "Next.js 16.4.3 (App Router)",
      "React 19.3.0",
      "TypeScript 5",
      "Tailwind CSS 4",
      "KaTeX 0.19.1",
      "Web Speech API (te-IN)",
      "Vitest 4.1",
      "Playwright 1.64",
      "Supabase PostgreSQL",
      "Node.js 20+",
    ],
  },
};

export const caseStudyKeys = [
  "medical-assistant",
  "cost-efficient-rag",
  "llm-as-judge",
  "recipe-generation",
  "artisight",
  "wasto",
  "ai-tech-consultant",
  "mission-mpso",
];
