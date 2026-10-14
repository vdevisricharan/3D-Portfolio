import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Initialize mermaid with custom dark theme matching the portfolio's cyberpunk aesthetic
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  securityLevel: "loose",
  fontFamily: '"Space Grotesk", system-ui, -apple-system, sans-serif',
  themeVariables: {
    darkMode: true,
    background: "transparent",
    mainBkg: "#171126",
    nodeBorder: "#9B4DFF",
    border1: "#9B4DFF",
    border2: "#FF304F",
    lineColor: "#C4A2FF",
    primaryColor: "#171126",
    primaryTextColor: "#F7F5FF",
    primaryBorderColor: "#9B4DFF",
    secondaryColor: "#120D22",
    secondaryTextColor: "#F7F5FF",
    secondaryBorderColor: "#FF304F",
    tertiaryColor: "#08060F",
    tertiaryTextColor: "#F7F5FF",
    tertiaryBorderColor: "#6C3FD8",
    noteBkgColor: "#171126",
    noteTextColor: "#F7F5FF",
    noteBorderColor: "#9B4DFF",
    textColor: "#F7F5FF",
    fontSize: "13px",
    edgeLabelBackground: "#0B0814",
    clusterBkg: "rgba(23, 17, 38, 0.75)",
    clusterBorder: "#9B4DFF",
    titleColor: "#FF304F",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 18,
    nodeSpacing: 45,
    rankSpacing: 45,
    useMaxWidth: false,
  },
});

const MermaidDiagram = ({ chart, title = "architecture-graph.mmd" }) => {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("diagram"); // 'diagram' | 'code'
  const [zoom, setZoom] = useState(1);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (!chart || !chart.trim()) {
        if (isMounted) {
          setIsLoading(false);
          setSvgContent("");
        }
        return;
      }

      setIsLoading(true);
      setError(null);

      // Generate a unique, safe ID for this render
      const renderId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;

      try {
        const { svg } = await mermaid.render(renderId, chart);
        if (isMounted) {
          setSvgContent(svg);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to render Mermaid flowchart:", err);
        if (isMounted) {
          setError(err.message || "Failed to render visual flowchart");
          setIsLoading(false);
        }
      } finally {
        // Clean up temporary DOM nodes inserted by mermaid if any
        const tempNode = document.getElementById(renderId);
        if (tempNode) tempNode.remove();
        const tempWrapper = document.getElementById(`d${renderId}`);
        if (tempWrapper) tempWrapper.remove();
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const handleCopy = () => {
    if (!chart) return;
    navigator.clipboard?.writeText(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.15, 2.2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.15, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  return (
    <>
      <div
        className={`rounded-xl border border-[#9B4DFF]/35 bg-[#0B0814] overflow-hidden shadow-2xl transition-all ${
          isFullscreen ? "fixed inset-4 z-50 flex flex-col bg-[#0B0814]/95 backdrop-blur-xl border-[#9B4DFF]" : ""
        }`}
      >
        {/* Top Header Bar */}
        <div className="bg-[#171126] px-4 py-3 border-b border-[#9B4DFF]/25 flex flex-wrap items-center justify-between gap-3 select-none">
          {/* Left: Window Dots & Title */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF304F] shadow-[0_0_8px_rgba(255,48,79,0.5)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#9B4DFF] shadow-[0_0_8px_rgba(155,77,255,0.5)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C4A2FF] shadow-[0_0_8px_rgba(196,162,255,0.5)]" />
            <span className="font-mono text-[11px] text-[#F7F5FF] ml-2 font-medium">
              {title}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9.5px] font-mono uppercase tracking-wider bg-[#FF304F]/15 border border-[#FF304F]/30 text-[#FF304F]">
              Live Flowchart
            </span>
          </div>

          {/* Right: Controls & Actions */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle: Visual vs Code */}
            <div className="inline-flex rounded-md p-0.5 bg-[#08060F] border border-[#9B4DFF]/30">
              <button
                type="button"
                onClick={() => setViewMode("diagram")}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === "diagram"
                    ? "bg-[#9B4DFF] text-[#F7F5FF] font-bold shadow-[0_0_10px_rgba(155,77,255,0.5)]"
                    : "text-[#BDB4CC] hover:text-[#F7F5FF]"
                }`}
                aria-label="View visual diagram"
              >
                Visual Flowchart
              </button>
              <button
                type="button"
                onClick={() => setViewMode("code")}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === "code"
                    ? "bg-[#9B4DFF] text-[#F7F5FF] font-bold shadow-[0_0_10px_rgba(155,77,255,0.5)]"
                    : "text-[#BDB4CC] hover:text-[#F7F5FF]"
                }`}
                aria-label="View mermaid source code"
              >
                Source (.mmd)
              </button>
            </div>

            {/* Zoom Controls (only in Visual mode) */}
            {viewMode === "diagram" && (
              <div className="hidden sm:inline-flex items-center rounded-md bg-[#08060F] border border-[#9B4DFF]/30 overflow-hidden">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="px-2 py-1 text-xs text-[#C4A2FF] hover:bg-[#9B4DFF]/25 hover:text-white transition-colors cursor-pointer border-r border-[#9B4DFF]/20"
                >
                  &minus;
                </button>
                <button
                  type="button"
                  onClick={handleZoomReset}
                  title="Reset Zoom"
                  className="px-2 py-1 text-[10px] font-mono text-[#BDB4CC] hover:text-white transition-colors cursor-pointer"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="px-2 py-1 text-xs text-[#C4A2FF] hover:bg-[#9B4DFF]/25 hover:text-white transition-colors cursor-pointer border-l border-[#9B4DFF]/20"
                >
                  +
                </button>
              </div>
            )}

            {/* Expand / Minimize Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Expand Diagram"}
              className="p-1.5 rounded bg-[#08060F] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/35 text-[#C4A2FF] hover:text-white text-[11px] font-mono cursor-pointer transition-colors"
              aria-label={isFullscreen ? "Exit Fullscreen" : "Expand Diagram"}
            >
              {isFullscreen ? "✕" : "⛶"}
            </button>

            {/* Copy Diagram Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="px-2.5 py-1 rounded bg-[#08060F] hover:bg-[#9B4DFF]/25 border border-[#9B4DFF]/35 font-mono text-[10px] uppercase tracking-[0.12em] text-[#C4A2FF] hover:text-white cursor-pointer transition-all active:scale-95"
            >
              {copied ? "Copied!" : "Copy Diagram"}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div
          ref={containerRef}
          className={`relative ${
            isFullscreen ? "flex-1 overflow-auto" : "min-h-[280px]"
          } bg-[#0B0814] bg-arch-grid`}
        >
          {viewMode === "diagram" ? (
            <div className="p-4 sm:p-8 w-full overflow-x-auto overflow-y-hidden">
              {isLoading && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-8 h-8 rounded-full border-2 border-[#9B4DFF] border-t-transparent animate-spin mb-3" />
                  <p className="font-mono text-xs uppercase tracking-wider text-[#C4A2FF]">
                    Rendering Interactive Flowchart...
                  </p>
                </div>
              )}

              {error && (
                <div className="p-6 text-center max-w-lg mx-auto">
                  <span className="font-mono text-[11px] text-[#FF304F] uppercase tracking-wider block mb-1">
                    Rendering Notice
                  </span>
                  <p className="text-xs text-[#BDB4CC] mb-4">
                    Could not generate visual SVG directly ({error}). You can view the full diagram specification below.
                  </p>
                  <pre className="text-left text-xs font-mono text-[#C4A2FF] bg-[#171126] p-4 rounded-lg overflow-x-auto border border-[#9B4DFF]/30">
                    <code>{chart}</code>
                  </pre>
                </div>
              )}

              {!isLoading && !error && svgContent && (
                <div className="flex flex-col items-center">
                  {/* Visual Hint for Mobile / Horizontal Exploration */}
                  <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#BDB4CC]/70 mb-3 px-1 select-none">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9B4DFF] animate-pulse" />
                      Visual Execution Flowchart
                    </span>
                    <span className="hidden sm:inline">
                      Tip: Scroll horizontally or zoom to inspect sub-pipelines
                    </span>
                  </div>

                  {/* Flowchart SVG Render Container with Zoom & Custom Styles */}
                  <div
                    className="w-full flex justify-center items-center py-2 transition-transform duration-200 ease-out mermaid-chart-wrapper"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: "top center",
                      minWidth: zoom > 1 ? `${zoom * 100}%` : "100%",
                    }}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                </div>
              )}
            </div>
          ) : (
            /* Raw Code View (.mmd) */
            <div className="p-5 sm:p-6 overflow-x-auto">
              <pre className="text-[12px] sm:text-[13px] font-mono text-[#C4A2FF] leading-[1.65] select-all bg-[#08060F]/60 p-4 rounded-lg border border-[#9B4DFF]/20">
                <code>{chart}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer Subtext Bar */}
        <div className="bg-[#0e0a1b] px-4 py-2 border-t border-[#9B4DFF]/15 flex items-center justify-between text-[10.5px] font-mono text-[#BDB4CC]">
          <span>Format: Mermaid.js Flowchart (LR / TD)</span>
          <span className="text-[#9B4DFF]">Direct Microservice Topology</span>
        </div>
      </div>

      {/* Global Scoped Styles to Enhance Mermaid SVG Aesthetics */}
      <style>{`
        .mermaid-chart-wrapper svg {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 0 auto;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.6));
        }

        /* Nodes styling */
        .mermaid-chart-wrapper .node rect,
        .mermaid-chart-wrapper .node polygon,
        .mermaid-chart-wrapper .node circle,
        .mermaid-chart-wrapper .node path {
          fill: #171126 !important;
          stroke: #9B4DFF !important;
          stroke-width: 1.5px !important;
          rx: 8px !important;
          ry: 8px !important;
          transition: all 0.2s ease;
        }

        .mermaid-chart-wrapper .node:hover rect,
        .mermaid-chart-wrapper .node:hover polygon,
        .mermaid-chart-wrapper .node:hover circle {
          stroke: #FF304F !important;
          stroke-width: 2px !important;
          filter: drop-shadow(0 0 10px rgba(255, 48, 79, 0.5));
        }

        /* Node Text */
        .mermaid-chart-wrapper .node .label {
          color: #F7F5FF !important;
          font-family: "Space Grotesk", system-ui, sans-serif !important;
          font-weight: 600 !important;
          font-size: 13px !important;
        }

        .mermaid-chart-wrapper .nodeLabel {
          color: #F7F5FF !important;
          font-family: "Space Grotesk", system-ui, sans-serif !important;
          font-size: 12.5px !important;
          font-weight: 500 !important;
          line-height: 1.35 !important;
        }

        /* Edges & Arrows */
        .mermaid-chart-wrapper .flowchart-link,
        .mermaid-chart-wrapper .edgePath path {
          stroke: #C4A2FF !important;
          stroke-width: 1.75px !important;
          opacity: 0.85;
        }

        .mermaid-chart-wrapper .flowchart-link:hover,
        .mermaid-chart-wrapper .edgePath:hover path {
          stroke: #FF304F !important;
          stroke-width: 2.2px !important;
          opacity: 1;
        }

        .mermaid-chart-wrapper .marker,
        .mermaid-chart-wrapper marker path {
          fill: #C4A2FF !important;
          stroke: #C4A2FF !important;
        }

        /* Edge Labels */
        .mermaid-chart-wrapper .edgeLabel {
          background-color: #0B0814 !important;
          color: #C4A2FF !important;
        }

        .mermaid-chart-wrapper .edgeLabel rect {
          fill: #0B0814 !important;
          opacity: 0.95;
          rx: 4px;
          ry: 4px;
        }

        .mermaid-chart-wrapper .edgeLabel span,
        .mermaid-chart-wrapper .edgeLabel p {
          color: #C4A2FF !important;
          font-family: ui-monospace, SFMono-Regular, monospace !important;
          font-size: 11px !important;
          background-color: #0B0814 !important;
          padding: 2px 6px !important;
          border-radius: 4px !important;
          border: 1px solid rgba(155, 77, 255, 0.35) !important;
        }

        /* Subgraphs & Clusters */
        .mermaid-chart-wrapper .cluster rect {
          fill: rgba(23, 17, 38, 0.75) !important;
          stroke: rgba(155, 77, 255, 0.45) !important;
          stroke-width: 1.5px !important;
          stroke-dasharray: 4, 4;
          rx: 12px !important;
          ry: 12px !important;
        }

        .mermaid-chart-wrapper .cluster text,
        .mermaid-chart-wrapper .cluster .nodeLabel {
          fill: #FF304F !important;
          color: #FF304F !important;
          font-weight: 700 !important;
          font-family: ui-monospace, monospace !important;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 12px !important;
        }
      `}</style>
    </>
  );
};

export default MermaidDiagram;
