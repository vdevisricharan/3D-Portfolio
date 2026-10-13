import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.45} position-y={0} rotation-y={0} />
  );
};

const SignalGlobeFallbackSVG = () => (
  <svg
    viewBox="0 0 320 320"
    className="w-full h-full max-w-[280px] max-h-[280px] mx-auto select-none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#9B4DFF" stopOpacity="0.32" />
        <stop offset="70%" stopColor="#171126" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#08060F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="160" cy="160" r="135" fill="url(#globeGlow)" />
    <circle
      cx="160"
      cy="160"
      r="105"
      fill="#0D091A"
      stroke="#9B4DFF"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <ellipse
      cx="160"
      cy="160"
      rx="55"
      ry="105"
      fill="none"
      stroke="#9B4DFF"
      strokeOpacity="0.35"
    />
    <ellipse
      cx="160"
      cy="160"
      rx="105"
      ry="42"
      fill="none"
      stroke="#9B4DFF"
      strokeOpacity="0.35"
    />
    <line
      x1="55"
      y1="160"
      x2="265"
      y2="160"
      stroke="#C4A2FF"
      strokeOpacity="0.3"
      strokeDasharray="4 4"
    />
    <line
      x1="160"
      y1="55"
      x2="160"
      y2="265"
      stroke="#C4A2FF"
      strokeOpacity="0.3"
      strokeDasharray="4 4"
    />
    <circle cx="195" cy="135" r="5" fill="#FF304F" />
    <circle
      cx="195"
      cy="135"
      r="14"
      fill="none"
      stroke="#FF304F"
      strokeOpacity="0.6"
    />
  </svg>
);

const EarthCanvas = () => {
  const containerRef = useRef(null);
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setCanRenderWebGL(Boolean(gl));
    } catch {
      setCanRenderWebGL(false);
    }
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "150px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative"
      aria-hidden="true"
    >
      {!canRenderWebGL || !inView ? (
        <SignalGlobeFallbackSVG />
      ) : (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{ preserveDrawingBuffer: false, alpha: true }}
          camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;