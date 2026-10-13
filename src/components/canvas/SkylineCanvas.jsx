import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BUILDINGS = [
  { pos: [-2.6, -0.9, -1.8], size: [0.65, 2.2, 0.65], color: "#120D20", accent: "#9B4DFF", beacon: false },
  { pos: [-1.75, -0.45, -1.1], size: [0.75, 3.1, 0.75], color: "#171126", accent: "#C4A2FF", beacon: true },
  { pos: [-0.85, -0.1, -0.5], size: [0.82, 3.8, 0.82], color: "#140E24", accent: "#9B4DFF", beacon: true },
  { pos: [0.1, 0.25, -0.2], size: [0.92, 4.5, 0.92], color: "#1A122E", accent: "#9B4DFF", beacon: true },
  { pos: [1.05, -0.25, -0.7], size: [0.78, 3.5, 0.78], color: "#150F24", accent: "#C4A2FF", beacon: false },
  { pos: [1.95, -0.55, -1.3], size: [0.7, 2.9, 0.7], color: "#120C1E", accent: "#9B4DFF", beacon: true },
  { pos: [2.75, -1.0, -1.9], size: [0.6, 2.0, 0.6], color: "#0E0918", accent: "#9B4DFF", beacon: false },
  // Foreground low rooftop structures
  { pos: [-1.3, -1.55, 0.35], size: [0.9, 1.1, 0.6], color: "#0C0814", accent: "#9B4DFF", beacon: false },
  { pos: [0.65, -1.45, 0.45], size: [1.0, 1.3, 0.65], color: "#0D0917", accent: "#FF304F", beacon: false },
];

const WEB_NODES = [
  new THREE.Vector3(-1.75, 1.15, -0.7),
  new THREE.Vector3(-0.85, 1.85, -0.1),
  new THREE.Vector3(0.1, 2.55, 0.25),
  new THREE.Vector3(1.05, 1.55, -0.3),
  new THREE.Vector3(1.95, 0.95, -0.9),
  new THREE.Vector3(-0.35, 0.65, 0.65),
  new THREE.Vector3(0.65, 0.35, 0.75),
];

const WEB_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 6],
  [5, 6],
  [1, 3],
];

const SkylineScene = ({ nightPatrol }) => {
  const groupRef = useRef();
  const beaconsRef = useRef([]);

  const lineGeometry = useMemo(() => {
    const points = [];
    WEB_CONNECTIONS.forEach(([a, b]) => {
      points.push(WEB_NODES[a], WEB_NODES[b]);
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      const targetRotY = (state.pointer.x || 0) * 0.18 + Math.sin(t * 0.35) * 0.04;
      const targetRotX = -(state.pointer.y || 0) * 0.08 + Math.cos(t * 0.25) * 0.02;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    beaconsRef.current.forEach((beacon, idx) => {
      if (beacon) {
        const pulse = 0.65 + 0.35 * Math.sin(t * 2.6 + idx * 1.4);
        beacon.scale.setScalar(pulse);
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, -0.35, 0]}>
      <ambientLight intensity={nightPatrol ? 0.85 : 0.6} color="#C4A2FF" />
      <directionalLight position={[4, 6, 4]} intensity={nightPatrol ? 1.5 : 1.1} color="#9B4DFF" />
      <pointLight position={[0.1, 2.7, 1.2]} intensity={nightPatrol ? 2.4 : 1.6} color="#FF304F" distance={7} />
      <pointLight position={[-2, 1.5, 1.5]} intensity={nightPatrol ? 2.0 : 1.3} color="#9B4DFF" distance={8} />

      {/* Architectural Towers */}
      {BUILDINGS.map((b, i) => {
        const topY = b.pos[1] + b.size[1] / 2;
        return (
          <group key={i}>
            <mesh position={b.pos}>
              <boxGeometry args={b.size} />
              <meshStandardMaterial
                color={b.color}
                roughness={0.35}
                metalness={0.65}
              />
            </mesh>
            {/* Architectural Wireframe Rim */}
            <mesh position={b.pos}>
              <boxGeometry args={[b.size[0] + 0.01, b.size[1] + 0.01, b.size[2] + 0.01]} />
              <meshBasicMaterial
                color={nightPatrol ? "#C4A2FF" : b.accent}
                wireframe
                transparent
                opacity={nightPatrol ? 0.32 : 0.18}
              />
            </mesh>
            {/* Spider-Red Rooftop Signal Beacon */}
            {b.beacon && (
              <group position={[b.pos[0], topY + 0.14, b.pos[2]]}>
                <mesh
                  ref={(el) => (beaconsRef.current[i] = el)}
                >
                  <sphereGeometry args={[0.055, 12, 12]} />
                  <meshBasicMaterial color="#FF304F" />
                </mesh>
                {/* Spire */}
                <mesh position={[0, -0.07, 0]}>
                  <cylinderGeometry args={[0.008, 0.012, 0.16, 6]} />
                  <meshBasicMaterial color="#9B4DFF" />
                </mesh>
              </group>
            )}
          </group>
        );
      })}

      {/* Connected Web Strands */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color={nightPatrol ? "#FF304F" : "#9B4DFF"}
          transparent
          opacity={nightPatrol ? 0.65 : 0.42}
        />
      </lineSegments>

      {/* Web Nodes */}
      {WEB_NODES.map((vec, idx) => (
        <mesh key={idx} position={[vec.x, vec.y, vec.z]}>
          <octahedronGeometry args={[0.06, 0]} />
          <meshBasicMaterial color={idx === 2 ? "#FF304F" : "#C4A2FF"} />
        </mesh>
      ))}
    </group>
  );
};

const SkylineFallbackSVG = ({ nightPatrol }) => (
  <svg
    viewBox="0 0 640 520"
    className="w-full h-full select-none pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="towerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F1536" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#08060F" stopOpacity="0.98" />
      </linearGradient>
      <radialGradient id="skyGlow" cx="52%" cy="38%" r="48%">
        <stop offset="0%" stopColor="#9B4DFF" stopOpacity={nightPatrol ? "0.42" : "0.26"} />
        <stop offset="60%" stopColor="#FF304F" stopOpacity={nightPatrol ? "0.18" : "0.08"} />
        <stop offset="100%" stopColor="#08060F" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Atmospheric Glow */}
    <circle cx="330" cy="210" r="240" fill="url(#skyGlow)" />

    {/* Radial Web Geometry */}
    <g
      stroke={nightPatrol ? "#C4A2FF" : "#9B4DFF"}
      strokeOpacity={nightPatrol ? "0.34" : "0.22"}
      strokeWidth="1"
      fill="none"
    >
      <circle cx="330" cy="175" r="55" />
      <circle cx="330" cy="175" r="115" />
      <circle cx="330" cy="175" r="180" />
      <line x1="330" y1="20" x2="330" y2="440" />
      <line x1="120" y1="60" x2="540" y2="320" />
      <line x1="540" y1="60" x2="120" y2="320" />
      <line x1="90" y1="175" x2="570" y2="175" />
    </g>

    {/* City Skyline Silhouettes */}
    <g fill="url(#towerGrad)" stroke="#9B4DFF" strokeOpacity="0.4" strokeWidth="1.2">
      <rect x="70" y="250" width="68" height="230" />
      <rect x="148" y="180" width="82" height="300" />
      <rect x="242" y="130" width="76" height="350" />
      <rect x="330" y="88" width="92" height="392" />
      <rect x="434" y="162" width="78" height="318" />
      <rect x="522" y="220" width="64" height="260" />
    </g>

    {/* Neon Window Grids */}
    <g fill="#C4A2FF" fillOpacity={nightPatrol ? "0.55" : "0.32"}>
      <rect x="166" y="205" width="8" height="14" />
      <rect x="184" y="205" width="8" height="14" />
      <rect x="202" y="205" width="8" height="14" />
      <rect x="166" y="232" width="8" height="14" />
      <rect x="202" y="232" width="8" height="14" />

      <rect x="260" y="155" width="10" height="16" />
      <rect x="282" y="155" width="10" height="16" />
      <rect x="260" y="185" width="10" height="16" />
      <rect x="282" y="215" width="10" height="16" />

      <rect x="350" y="116" width="10" height="18" />
      <rect x="372" y="116" width="10" height="18" />
      <rect x="394" y="116" width="10" height="18" />
      <rect x="350" y="148" width="10" height="18" />
      <rect x="394" y="148" width="10" height="18" />
      <rect x="372" y="180" width="10" height="18" />

      <rect x="454" y="190" width="9" height="15" />
      <rect x="476" y="190" width="9" height="15" />
      <rect x="454" y="220" width="9" height="15" />
    </g>

    {/* Signal Spires & Spider-Red Beacons */}
    <g stroke="#9B4DFF" strokeWidth="1.5">
      <line x1="189" y1="180" x2="189" y2="152" />
      <line x1="280" y1="130" x2="280" y2="98" />
      <line x1="376" y1="88" x2="376" y2="48" />
      <line x1="473" y1="162" x2="473" y2="132" />
    </g>
    <g fill="#FF304F">
      <circle cx="189" cy="150" r="4.5" />
      <circle cx="280" cy="96" r="4.5" />
      <circle cx="376" cy="46" r="6" />
      <circle cx="473" cy="130" r="4.5" />
    </g>
  </svg>
);

const SkylineCanvas = ({ nightPatrol = false }) => {
  const containerRef = useRef(null);
  const [canUseWebGL, setCanUseWebGL] = useState(false);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    // Respect reduced motion and check WebGL availability
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCanUseWebGL(false);
      return;
    }

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      const isSmallMobile = window.innerWidth < 640;
      setCanUseWebGL(Boolean(gl) && !isSmallMobile);
    } catch {
      setCanUseWebGL(false);
    }
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Static / SVG Architectural Skyline Backdrop (Always present for instant LCP & fallback) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <SkylineFallbackSVG nightPatrol={nightPatrol} />
      </div>

      {/* Interactive 3D WebGL Layer on capable desktop/tablet devices */}
      {canUseWebGL && isInView && (
        <div className="absolute inset-0 z-10">
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0.6, 5.2], fov: 42 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <Suspense fallback={null}>
              <SkylineScene nightPatrol={nightPatrol} />
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default SkylineCanvas;
