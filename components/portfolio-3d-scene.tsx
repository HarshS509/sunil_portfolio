"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  Html,
  Text,
  MeshReflectorMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

// Main component that sets up the 3D scene
export default function Portfolio3DScene() {
  return (
    <Canvas shadows className="w-full h-screen">
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 20]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={3}
          maxDistance={8}
        />
        <PortfolioScene />
      </Suspense>
    </Canvas>
  );
}

// The main scene with all 3D models
function PortfolioScene() {
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      name: "Rose Gold Ring",
      image: "/images/ring-rose-gold.png",
      position: [-2.5, 1.5, 0],
      description: "Parametric design with diamond inlay",
      software: "Blender, ZBrush",
      polygons: "24K",
    },
    {
      id: 2,
      name: "Gold Bangles",
      image: "/images/gold-bangles.png",
      position: [0, 1.5, 0],
      description: "Traditional pattern with gemstone setting",
      software: "Maya, Substance Painter",
      polygons: "32K",
    },
    {
      id: 3,
      name: "Gold Diamond Ring",
      image: "/images/ring-gold.png",
      position: [2.5, 1.5, 0],
      description: "Twisted band with diamond accents",
      software: "Blender, Rhino 3D",
      polygons: "18K",
    },
    {
      id: 4,
      name: "Silver Diamond Ring",
      image: "/images/ring-silver.png",
      position: [-2.5, -1.5, 0],
      description: "Infinity design with micro-pavé setting",
      software: "ZBrush, Keyshot",
      polygons: "22K",
    },
    {
      id: 5,
      name: "Luxury Watch",
      image: "/images/rolex-two-tone.png",
      position: [0, -1.5, 0],
      description: "Two-tone watch with detailed mechanics",
      software: "Fusion 360, Blender",
      polygons: "86K",
    },
    {
      id: 6,
      name: "Watch Wireframe",
      image: "/images/watch-wireframe.png",
      position: [2.5, -1.5, 0],
      description: "Technical wireframe visualization",
      software: "3ds Max, CAD",
      polygons: "120K",
    },
  ];

  // Floor
  return (
    <>
      {/* Reflective floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.8}
        />
      </mesh>

      {/* Portfolio items */}
      <group>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={item.id} item={item} index={index} />
        ))}
      </group>

      {/* Title */}
      <Html position={[0, 3, 0]} center>
        <div className="text-emerald-500 text-2xl font-bold">
          3D JEWELRY DESIGN PORTFOLIO
        </div>
      </Html>

      {/* Subtitle */}
      <Html position={[0, 2.4, 0]} center>
        <div className="text-white text-sm">
          SPECIALIZED IN HIGH-FIDELITY JEWELRY MODELING
        </div>
      </Html>

      {/* Sparkles for visual effect */}
      <Sparkles count={100} scale={10} size={2} speed={0.2} color="#10b981" />

      {/* Bottom navigation */}
      <Html position={[0, -3.5, 0]} center>
        <div className="flex gap-4 bg-black/80 p-4 rounded-lg">
          <button className="px-4 py-2 bg-emerald-500 text-black rounded-md hover:bg-emerald-600 transition-colors">
            View All Projects
          </button>
          <button className="px-4 py-2 bg-transparent border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-500/20 transition-colors">
            Contact Me
          </button>
        </div>
      </Html>
    </>
  );
}

// Individual portfolio item component
function PortfolioItem({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(item.image);

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return;

    // Hover animation
    meshRef.current.scale.lerp(
      new THREE.Vector3(
        hovered || clicked ? 1.2 : 1,
        hovered || clicked ? 1.2 : 1,
        hovered || clicked ? 1.2 : 1
      ),
      0.1
    );

    // Floating animation
    const t = state.clock.getElapsedTime() * 0.5 + index * 0.2;
    meshRef.current.position.y = item.position[1] + Math.sin(t) * 0.1;

    // Rotation animation
    if (!clicked) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={[item.position[0], item.position[1], item.position[2]]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        castShadow
      >
        <boxGeometry args={[1.5, 1.5, 0.05]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {(hovered || clicked) && (
        <Html position={[0, -1, 0]} center distanceFactor={10}>
          <div className="bg-black/80 border border-emerald-500 text-white p-3 rounded w-64">
            <h3 className="font-bold text-emerald-500">{item.name}</h3>
            <p className="text-xs mt-1">{item.description}</p>
            <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
              <div>
                <span className="text-emerald-500">Software:</span>{" "}
                {item.software}
              </div>
              <div>
                <span className="text-emerald-500">Polygons:</span>{" "}
                {item.polygons}
              </div>
            </div>
            {clicked && (
              <button className="mt-2 w-full px-2 py-1 bg-emerald-500 text-black rounded text-xs">
                View Project Details
              </button>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

// Add Suspense for React
