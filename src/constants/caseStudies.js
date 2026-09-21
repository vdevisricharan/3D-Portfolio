import {
  medical_assistant,
  cost_efficient_rag,
  llm_as_judge,
  recipe_generation,
  artisight,
  wasto,
} from "../assets";

export const caseStudies = {
  "medical-assistant": {
    id: "medical-assistant",
    title: "Multi-Agent Medical Assistant",
    subtitle: "A modular, production-grade clinical decision support system combining LangGraph state orchestration, multimodal RAG, deep learning medical imaging, and strict safety guardrails.",
    category: "Agentic AI & Computer Vision",
    badge: "Flagship Project",
    timeline: "2025 – 2026",
    role: "Lead AI Systems Engineer",
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
      description: "A centralized supervisor agent coordinates clinical routing across multimodal specialized sub-agents with confidence-based fallback.",
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
        rationale: "Linear chains (LangChain SequentialChain) cannot backtrack, branch conditionally based on intermediate confidence scores, or delegate to specialized models. LangGraph provides cyclical state persistence, enabling the supervisor to request clarification, trigger imaging models conditionally, and pause execution for human verification."
      },
      {
        title: "Docling Multimodal Parsing vs. Standard Text Extractors",
        rationale: "Medical guidelines and trial reports embed critical dosage tables and figures. Traditional PyPDF/pdfplumber extractors collapse tables into unformatted text. Docling preserves markdown table structures, bounding boxes, and document hierarchy, preserving factual precision for vector search."
      },
      {
        title: "Qdrant Hybrid Search with Cross-Encoder Reranking",
        rationale: "Pure dense embedding search often misses exact medical terminology, dosage numbers, and rare clinical acronyms. Combining BM25 sparse lexical search with dense semantic embeddings in Qdrant ensures both exact keyword matching and semantic context. A secondary Cross-Encoder (ms-marco-TinyBERT) scores passage relevance with cross-attention for high precision top-k retrieval."
      },
      {
        title: "PyTorch Specialized Imaging Agents vs. Vision-Language Models",
        rationale: "General-purpose VLMs (e.g. GPT-4V) frequently hallucinate specific radiological findings. Dedicated PyTorch convolutional models trained on chest X-ray and ISIC dermatology datasets provide bounded, calibrated probabilities and heatmap features that can be audited by clinicians."
      }
    ],
    methodology: [
      "Document Ingestion: Clinical guidelines and medical textbooks parsed using Docling into semantic chunks with metadata preservation (section headers, table coordinates, document lineage).",
      "Embedding & Indexing: Dual-indexed in Qdrant using dense embeddings for semantic search and BM25 sparse vectors for rare disease/drug naming precision.",
      "Agent Orchestration: LangGraph supervisor dynamically routes conversations using structured function calling, tracking dialogue history in persistent memory.",
      "Input / Output Guardrails: Pre-processing filters detect emergency triage keywords and immediately display emergency hotline guidance. Output sanitizers append clinical disclaimers and cite specific source chunks.",
      "Audio Synthesis: Low-latency voice interaction via ElevenLabs API streaming for hands-free clinical workflow integration."
    ],
    benchmarks: [
      { metric: "Retrieval Architecture", result: "Hybrid Qdrant (BM25 + Dense) + Cross-Encoder" },
      { metric: "Imaging Capabilities", result: "Chest X-ray Classification & Skin Lesion Analysis" },
      { metric: "Safety Protocol", result: "Multi-stage Guardrails + Confidence Handoff" },
      { metric: "Containerization", result: "Production Docker with GitHub Actions CI" },
    ],
    challenges: [
      "Medical Terminology Mismatch: Resolved by pairing dense vector retrieval with BM25 sparse index and query expansion to capture both clinical terms and layperson symptoms.",
      "Hallucination Prevention: Grounded response synthesis by constraining the LLM prompt to only cite retrieved document chunks, enforcing an explicit 'Insufficient data' fallback if similarity fell below threshold.",
      "Safety Assurance: Architected a confidence-based routing layer that flags diagnostic ambiguity and defers to human clinical review rather than generating speculative diagnoses."
    ],
    techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "Qdrant", "Docling", "PyTorch", "Docker", "ElevenLabs API"]
  },

  "cost-efficient-rag": {
    id: "cost-efficient-rag",
    title: "Cost-Efficient RAG Application",
    subtitle: "High-throughput, cost-efficient RAG system comparing embedded vector databases (LanceDB & ChromaDB) against cloud managed services, delivering 99.9% cost reduction and sub-30ms latency.",
    category: "Information Retrieval & RAG",
    badge: "99.9% Cost Reduction",
    timeline: "2026",
    role: "Backend & Applied AI Engineer",
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

This project delivers a production-grade, reproducible RAG application that benchmarks embedded/in-process vector storage (LanceDB with Apache Arrow columnar format and ChromaDB) against cloud managed alternatives. Backed by Google Gemini 2.5 Flash and all-MiniLM-L6-v2 embeddings, the system demonstrates that embedded architectures achieve identical retrieval precision and sub-30ms retrieval latency while slashing infrastructure hosting expenses by up to 99.9%.`,
    architecture: {
      description: "End-to-end ingestion, chunk deduplication, embedded vector search, strict citation prompts, and RESTful query endpoints.",
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
    ScoreFilter -->|No (< 0.35)| Fallback[Return Insufficient Information Fallback]
    
    PromptBuilder --> GeminiLLM[Gemini 2.5 Flash LLM]
    GeminiLLM --> Response([Response with [Doc, Chunk] Citations + Loguru Metrics])
    Fallback --> Response`,
    },
    technicalDecisions: [
      {
        title: "Embedded Storage (LanceDB/Chroma) vs. Managed Cloud (Pinecone)",
        rationale: "Managed cloud vector databases charge for always-on compute units even with zero query load. LanceDB's disk-native format (Apache Arrow) allows vector search directly from disk with near-zero memory footprint and zero idle hosting cost, costing $0.15/month for 1M vectors on EBS GP3 compared to $280/month on Pinecone."
      },
      {
        title: "Deterministic Similarity Cutoff (tau = 0.35) for Fallback",
        rationale: "Generative LLMs frequently hallucinate plausible-sounding answers when relevant context is absent. Implementing an empirical similarity cutoff (tau = 0.35) intercepts irrelevant queries before generation, achieving 100% fallback accuracy on unanswerable questions."
      },
      {
        title: "SHA-256 Chunk Deduplication",
        rationale: "Document repositories frequently contain overlapping or repeated text across file versions. Generating cryptographic SHA-256 hashes per chunk guarantees idempotency during batch ingestion, preventing duplicate vectors from polluting the index."
      },
      {
        title: "384-Dimensional Dense Embeddings (all-MiniLM-L6-v2)",
        rationale: "Provides an optimal trade-off between semantic retrieval quality (83.33% Recall@3) and memory efficiency (only 1.5 KB per vector with metadata), keeping storage compact enough to run entirely within serverless containers or edge nodes."
      }
    ],
    methodology: [
      "Modular Ingestion Engine: Python loaders for PDF, HTML, and Markdown with recursive character chunking (size: 500, overlap: 50) and SHA-256 deduplication.",
      "Dual Vector Store Abstraction: Pluggable interface supporting both LanceDB (disk columnar search) and ChromaDB (in-memory HNSW index).",
      "Automated 20-Query Benchmark Harness: Evaluated across three layers: Retrieval IR metrics, Answer Quality (LLM-as-a-Judge), and Latency statistics (p50 / p95).",
      "FastAPI REST API: Production endpoints (/ingest, /query, /health, /stats) with structured Pydantic input validation and Swagger documentation.",
      "Comprehensive Observability: Per-query structured logging via Loguru tracking retrieval latency, generation latency, token consumption, max similarity score, and fallback status."
    ],
    benchmarks: [
      { metric: "100K Vectors Monthly Cost", result: "$0.02 / mo (LanceDB) vs $70.00 / mo (Pinecone) → -99.97%" },
      { metric: "1M Vectors Monthly Cost", result: "$0.15 / mo (LanceDB) vs $280.00 / mo (Pinecone) → -99.95%" },
      { metric: "10M Vectors Monthly Cost", result: "$1.52 / mo (LanceDB) vs $1,400.00 / mo (Pinecone) → -99.89%" },
      { metric: "Recall@3 / Hit Rate@3", result: "0.8333 (LanceDB & ChromaDB)" },
      { metric: "Fallback Accuracy", result: "1.0000 (100% on out-of-domain queries)" },
      { metric: "LLM-Judge Relevance", result: "0.8500 (Semantic alignment with gold standard)" },
      { metric: "Retrieval Latency (p50)", result: "26.48 ms (LanceDB) / 16.41 ms (ChromaDB)" },
    ],
    challenges: [
      "Exact Match Lexical Evaluation vs Generative LLMs: Generative models rephrase answers rather than quoting verbatim, resulting in artificially low token F1 scores despite accurate semantic answers. Addressed by utilizing LLM-as-a-Judge semantic relevance (85.0%) alongside hit rate.",
      "Disk I/O Latency on Cold Starts: LanceDB achieved sub-30ms p50 retrieval on subsequent passes, while p95 reached ~318ms on un-cached cold queries. Mitigated through OS page caching and optimal batch sizing.",
      "Determining Transition Point: Established analytical guidelines demonstrating when to switch back to managed cloud vector databases (multi-tenant datasets >50M vectors, high concurrent write throughput >500 QPS)."
    ],
    techStack: ["Python", "FastAPI", "LanceDB", "ChromaDB", "Google Gemini 2.5 Flash", "SentenceTransformers", "Pydantic", "Pytest", "Loguru"]
  },

  "llm-as-judge": {
    id: "llm-as-judge",
    title: "LLM-as-Judge Evaluation Pipeline",
    subtitle: "Automated, bias-mitigated evaluation framework for scoring and benchmarking LLMs with statistical validation, Pydantic structured schemas, and production release gating.",
    category: "LLM Evaluation Engineering",
    badge: "k = 0.84 Human Agreement",
    timeline: "2026",
    role: "AI Evaluation Engineer",
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
      description: "Modular pipeline executing multi-criteria judging, dual-pass order swapping, adversarial probe testing, and statistical agreement scoring.",
      diagram: `flowchart TD
    TestSuites([Test Suites: General QA & Adversarial Probes]) --> JudgeRunner[Evaluation Runner]
    RubricConfig[Multi-Criteria Rubric: 1-5 Calibrated Anchors] --> JudgeRunner
    
    JudgeRunner --> ModeSelect{Evaluation Mode}
    ModeSelect -->|Pointwise| PointwiseJudge[Single-Output Rubric Scoring]
    ModeSelect -->|Pairwise| DualPass[Dual-Pass Order Swap Engine]
    ModeSelect -->|Reference-Based| RefJudge[Ground-Truth Comparison]
    ModeSelect -->|Reference-Free| RefFreeJudge[Rubric Constraint Validation]
    
    DualPass --> Pass1[Pass 1: Evaluate (Output A, Output B)]
    DualPass --> Pass2[Pass 2: Evaluate (Output B, Output A)]
    Pass1 --> ConsistencyCheck{Both Passes Agree?}
    Pass2 --> ConsistencyCheck
    
    ConsistencyCheck -->|Yes| WinnerDeclared[Assign A or B as Winner]
    ConsistencyCheck -->|No (Order Flip)| TieDeclared[Declare Tie & Flag Position Flip]
    
    WinnerDeclared --> SchemaVal[Pydantic Schema Validation + Fallback JSON Repair]
    TieDeclared --> SchemaVal
    PointwiseJudge --> SchemaVal
    
    SchemaVal --> StatEngine[Statistical Validator: Cohen's Kappa, Agreement Rate]
    StatEngine --> AuditLogs[(Auditable .jsonl Event Logs & Token Costs)]
    StatEngine --> GatingPolicy{Production Release Gating}
    GatingPolicy -->|Pass Rate >= 95% & k >= 0.75| ReleaseApproved([Production Release Approved])
    GatingPolicy -->|Anomalies / Safety Violations| EscalateHuman([Escalate to Human Review])`,
    },
    technicalDecisions: [
      {
        title: "Dual-Pass Order Swapping for Position Bias Mitigation",
        rationale: "LLMs frequently exhibit a 25-35% position bias, favoring candidate A simply because it was presented first. The pipeline evaluates (A, B) and (B, A) in parallel; the order-reversed winner is mapped back. If the judge disagrees with itself across passes, the case is marked as a Tie, reducing the effective output position bias to 0%."
      },
      {
        title: "Chain-of-Thought Grounding Before Verdict Scoring",
        rationale: "Forcing the LLM judge to emit step-by-step reasoning per criterion before outputting numerical scores neutralizes sycophancy and style bias, preventing polite but factually inaccurate answers from scoring highly."
      },
      {
        title: "Few-Shot Anchor Calibration for Score Clustering",
        rationale: "Judges without explicit scale anchors tend to cluster scores in the 4-5 range (or 8-10). Injecting concrete few-shot examples for scores 1, 3, and 5 into the prompt calibrates variance and enforces full rubric distribution."
      },
      {
        title: "Pydantic Structured Output Validation with Fallback JSON Repair",
        rationale: "Even with JSON-mode parameters, LLMs occasionally emit markdown code fences or trailing commas. The pipeline enforces strict Pydantic schemas and features regex-based automatic JSON repair to prevent pipeline failures."
      }
    ],
    methodology: [
      "Multi-Criteria Rubric: Scores outputs across Correctness (30%), Faithfulness (20%), Completeness (20%), Instruction-Following (15%), Safety (10%), and Tone (5%).",
      "Four Judging Modes: Pointwise scoring, Pairwise A/B comparison, Reference-based evaluation, and Reference-free compliance checks.",
      "Adversarial Diagnostic Probes: Includes fluff-padded probes (evaluating whether verbosity tricks the judge) and sycophancy probes (evaluating whether polite incorrect statements are rejected).",
      "Cross-Family Enforcement: Flags when an LLM judge evaluates models from its own architecture family (e.g. Gemini evaluating Gemini), enforcing cross-family evaluation (e.g. Gemini judging GPT-4).",
      "Auditable Logging: Every evaluation generates a structured .jsonl entry recording prompts, raw responses, parsed verdict JSONs, token consumption, and calculated API cost."
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
      "Defining Production Gating Rules: Established strict automated thresholds: release approved only when overall test suite pass rate is >= 95%, Cohen's Kappa >= 0.75, probe pass rate is 100%, and zero safety violations are recorded."
    ],
    techStack: ["Python", "Google Gemini API", "Pydantic", "YAML Rubrics", "Cohen's Kappa", "Pytest", "Loguru", "CLI"]
  },

  "recipe-generation": {
    id: "recipe-generation",
    title: "LLM Recipe Generation System",
    subtitle: "Parameter-efficient fine-tuning and benchmarking across open-weight 7B LLMs and baseline neural architectures for structured recipe generation from ingredient constraints.",
    category: "Open-Source LLM Fine-Tuning",
    badge: "LoRA 4-bit Quantization",
    timeline: "2024 – 2026",
    role: "ML Research & Applied AI Engineer",
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
      description: "Parameter-efficient fine-tuning pipeline with 4-bit quantization, LoRA adapter weights, and cross-architecture benchmarking.",
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
        GRU[Gated Recurrent Unit (GRU)]
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
        rationale: "Full-parameter fine-tuning of 7B parameter models requires 4x A100 (80GB) GPUs. Implementing QLoRA (NF4 quantization with double quantization and paged optimizers) reduced memory footprint by 75%, allowing fine-tuning on consumer-grade single GPU instances without degradation in generation quality."
      },
      {
        title: "Unsloth Fast Tracing Acceleration",
        rationale: "Replacing standard Hugging Face AutoModel backprop with Unsloth handwritten Triton kernels achieved a 2.5x training speedup and 50% less VRAM consumption during gradient accumulation steps."
      },
      {
        title: "LoRA Hyperparameter Configuration (r=16, alpha=32)",
        rationale: "Targeting all linear attention projection modules (q_proj, k_proj, v_proj, o_proj) with rank r=16 and scaling alpha=32 provided sufficient representational capacity for culinary nomenclature while keeping adapter weight files under 100 MB."
      },
      {
        title: "Longitudinal Comparison Across Model Generations",
        rationale: "To scientifically validate the value of modern LLMs, the study benchmarked models across three distinct architectural eras: classic RNNs (Bi-LSTM/GRU), early transformers (GPT-2, T5), and modern open-weight decoders (Llama 3, Gemma, Mistral)."
      }
    ],
    methodology: [
      "Data Preparation: Cleaned recipe corpora with standardized delimiters: Title, Ingredients list, Preparation time, Step-by-step directions.",
      "Quantization & Adaptation: Open-weight 7B models loaded in 4-bit precision via BitsAndBytes, injected with LoRA adapter weights, and compiled with Unsloth fast kernels.",
      "Baseline Implementations: Built and trained baseline models: GPT-2 fine-tuned via causal language modeling, T5 trained via seq2seq objective, and Bi-LSTM/GRU recurrent baselines in Keras.",
      "Evaluation Metrics: Calculated evaluation perplexity, cross-entropy validation loss curves, and empirical constraint satisfaction (verifying whether requested ingredients actually appeared in the recipe).",
      "Model Artifact Distribution: Published trained adapter checkpoints and comprehensive project report for reproducible scientific audit."
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
      "Model Size Management: Uploaded trained checkpoint archives to cloud storage with reproducible CLI inference scripts for easy local evaluation."
    ],
    techStack: ["Python", "PyTorch", "Hugging Face Transformers", "Meta Llama 3 7B", "Google Gemma 7B", "Mistral 7B", "LoRA", "Unsloth", "BitsAndBytes", "Keras"]
  },

  "artisight": {
    id: "artisight",
    title: "ArtiSight — AI Photo Critique Assistant",
    subtitle: "Intelligent photography assistant providing aesthetic composition analysis, lighting evaluation, and personalized skill learning recommendations using React, Flask, and Generative AI.",
    category: "Multimodal AI & Full-Stack",
    badge: "Live Web App",
    timeline: "2023 – 2024",
    role: "Full-Stack & Applied AI Engineer",
    image: artisight,
    github: "https://github.com/vdevisricharan/ArtiSight",
    liveDemo: "https://artisight.netlify.app/",
    stats: [
      { label: "Frontend", value: "React + TailwindCSS" },
      { label: "Backend", value: "Flask REST API" },
      { label: "AI Engine", value: "Multimodal Vision LLM" },
      { label: "Deployment", value: "Netlify + Cloud Service" },
    ],
    overview: `Novice and intermediate photographers struggle to develop their craft due to lack of accessible, objective, and constructive feedback. Generic social media platforms offer vanity metrics ('likes') rather than actionable technical critique regarding lighting, rule of thirds, framing, focal points, and color harmony.

ArtiSight bridges this gap by providing an instant, AI-driven photo critique platform. Users upload their photographs, and the application evaluates them against classical photography principles, generating structured scores, technical observations, actionable improvement tips, and personalized photography learning recommendations.`,
    architecture: {
      description: "Interactive React web client connecting to a Flask microservice and multimodal Generative AI evaluation pipeline.",
      diagram: `flowchart LR
    User[Photographer] --> UI[React + Tailwind Web Application]
    UI --> Upload[Image Upload & Client Preview]
    Upload --> API[Flask REST Microservice]
    API --> VisionPipeline[Multimodal AI Critique Engine]
    VisionPipeline --> Prompt[Photography Evaluation Rubric Prompt]
    Prompt --> GenAI[Generative Vision Model]
    GenAI --> ParsedOutput[Structured JSON: Composition, Lighting, Recommendations]
    ParsedOutput --> UI
    UI --> FeedbackDisplay[Interactive Breakdown Cards & Learning Path]`,
    },
    technicalDecisions: [
      {
        title: "Microservice Separation (React Client + Flask Backend)",
        rationale: "Decoupled the lightweight responsive React single-page application from the Python Flask backend, allowing rapid UI iteration and independent scaling of vision model requests."
      },
      {
        title: "Structured Evaluation Framework",
        rationale: "Rather than generating arbitrary conversational remarks, the system prompts the multimodal model with structured evaluation categories (Composition, Depth of Field, Lighting, Color Balance), guaranteeing reproducible, pedagogical feedback."
      },
      {
        title: "Personalized Educational Recommendation Generation",
        rationale: "Alongside critique scores, the pipeline maps identified flaws (e.g. blown-out highlights) to specific photography concepts and actionable practice exercises for the user."
      }
    ],
    methodology: [
      "Image Processing: Uploaded photographs are formatted and verified on the client before secure transmission to the Flask backend.",
      "Multimodal Critique Pipeline: Images are processed by generative vision models equipped with a calibrated photography rubric.",
      "Structured Result Extraction: Responses are parsed into categorized dimensions: Technical Execution, Compositional Strength, Lighting, and Next Learning Steps.",
      "Client Presentation: Interactive cards with progress bars, visual checklists, and direct advice cards built with Tailwind CSS."
    ],
    benchmarks: [
      { metric: "Deployment Status", result: "Live on Netlify (https://artisight.netlify.app/)" },
      { metric: "Critique Turnaround", result: "Sub-4 second end-to-end multimodal analysis" },
      { metric: "User Experience", result: "Responsive mobile-first photography feedback dashboard" },
    ],
    challenges: [
      "Balancing Technical vs Artistic Feedback: Calibrated system prompts to provide constructive, encouraging critique with specific technical adjustments (e.g. aperture, ISO, angle) rather than subjective dismissiveness.",
      "Client Image Optimization: Implemented client-side compression to speed up upload times on mobile networks without sacrificing visual fidelity."
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Python", "Flask", "Generative AI", "RESTful APIs", "Netlify"]
  },

  "wasto": {
    id: "wasto",
    title: "Wasto — Smart Waste Classification System",
    subtitle: "Automated real-time waste segregation platform combining lightweight computer vision (MobileNetV3) with Arduino microcontroller actuation for physical recycling units.",
    category: "Edge AI & Embedded IoT",
    badge: "Hardware Actuated",
    timeline: "2023",
    role: "ML & Hardware Systems Engineer",
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
      description: "Edge camera video feed processed by MobileNetV3 model, sending physical actuation signals to Arduino servo motors.",
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
        rationale: "Industrial sorting units require low latency inference on low-cost edge computers. MobileNetV3 with depthwise separable convolutions and hard-swish activation delivers high classification accuracy while running at 30+ FPS on edge CPUs without requiring discrete enterprise GPUs."
      },
      {
        title: "Transfer Learning on Domain-Specific Waste Datasets",
        rationale: "Pre-trained on ImageNet and fine-tuned on curated waste classification corpora (organic, recyclable plastics/paper, non-biodegradable hazardous items) to achieve rapid convergence and high generalization."
      },
      {
        title: "Asynchronous Hardware Serial Protocol",
        rationale: "Built a non-blocking serial communication bridge between the Python inference runtime and the Arduino microcontroller, preventing video processing stalls while mechanical servos cycle through actuation."
      }
    ],
    methodology: [
      "Dataset Curation: Curated multi-class waste image datasets spanning biodegradable food waste, recyclable paper/cardboard/plastics, and inert non-biodegradable waste.",
      "Transfer Learning Pipeline: Fine-tuned MobileNetV3 in TensorFlow/Keras with data augmentation (rotation, contrast, zoom) to simulate industrial conveyor belt conditions.",
      "Hardware Actuation: Configured an Arduino Uno driving multi-angle servo motor flaps to steer items into designated compartments based on class labels.",
      "Web Monitoring Interface: Built a live status dashboard using React and Tailwind CSS to track classification history and bin capacity."
    ],
    benchmarks: [
      { metric: "Target Categories", result: "Organic, Recyclable, Non-Biodegradable" },
      { metric: "Inference Performance", result: "Real-time edge execution on local video streams" },
      { metric: "Hardware Integration", result: "Physical servo mechanical deflection mechanism" },
      { metric: "Web Demo", result: "Live on Netlify (https://wasto.netlify.app/)" },
    ],
    challenges: [
      "Visual Occlusion and Crushed Objects: Real-world waste items are crushed or partially obscured. Addressed by applying extensive geometric and color jitter augmentation during model training.",
      "Mechanical Timing Synchronization: Calibrated delays between camera detection and conveyor belt movement to ensure the servo flap opened at the exact moment the item dropped into the chute."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "MobileNetV3", "OpenCV", "Arduino", "C++", "React", "Tailwind CSS", "Netlify"]
  }
};

export const caseStudyKeys = [
  "medical-assistant",
  "cost-efficient-rag",
  "llm-as-judge",
  "recipe-generation",
  "artisight",
  "wasto"
];

