"use client"

import { Suspense, useState, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useTexture, Html, Float, Text } from "@react-three/drei"
import * as THREE from "three"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

// Main component that sets up the 3D scene
export default function JewelryShowcase() {
  return (
    <Canvas shadows className="w-full h-screen">
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 20]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
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
        <JewelryShowcaseScene />
      </Suspense>
    </Canvas>
  )
}

// The main scene with all jewelry items
function JewelryShowcaseScene() {
  const router = useRouter()
  const [activeItem, setActiveItem] = useState<number | null>(null)

  // Jewelry items data
  const jewelryItems = [
    { name: "Rose Gold Diamond Ring", image: "/images/ring-rose-gold.png", position: [-2, 1, 0] },
    { name: "Gold Bangles", image: "/images/gold-bangles.png", position: [0, 1, 0] },
    { name: "Gold Diamond Ring", image: "/images/ring-gold.png", position: [2, 1, 0] },
    { name: "Silver Diamond Ring", image: "/images/ring-silver.png", position: [-2, -1, 0] },
    { name: "Luxury Watch", image: "/images/rolex-two-tone.png", position: [0, -1, 0] },
    { name: "Diamond Eternity Bands", image: "/images/eternity-bands.png", position: [2, -1, 0] },
  ]

  return (
    <>
      <group>
        {jewelryItems.map((item, index) => (
          <JewelryItem
            key={index}
            index={index}
            name={item.name}
            image={item.image}
            position={new THREE.Vector3(...item.position)}
            isActive={activeItem === index}
            onClick={() => setActiveItem(index === activeItem ? null : index)}
          />
        ))}
      </group>

      {/* Title */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.5}
        color="#d4af37"
        font="/fonts/Geist_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        LUXURY JEWELRY COLLECTION
      </Text>

      {/* Navigation UI */}
      <Html position={[0, -2.5, 0]} center>
        <div className="flex gap-4 bg-black/80 p-4 rounded-lg">
          <Button
            variant="outline"
            className="text-gold-500 border-gold-500 hover:bg-gold-500/20"
            onClick={() => router.push("/collection")}
          >
            View Collection
          </Button>
          <Button
            variant="outline"
            className="text-gold-500 border-gold-500 hover:bg-gold-500/20"
            onClick={() => router.push("/about")}
          >
            About Us
          </Button>
          <Button
            variant="outline"
            className="text-gold-500 border-gold-500 hover:bg-gold-500/20"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </div>
      </Html>
    </>
  )
}

// Individual jewelry item component
function JewelryItem({ index, name, image, position, isActive, onClick }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(image)
  const { viewport } = useThree()

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return

    // Rotate slowly
    meshRef.current.rotation.y += 0.005

    // Hover effect when active
    if (isActive) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef} onClick={onClick}>
          <planeGeometry args={[1.5, 1.5]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>

        {isActive && (
          <Html position={[0, -1, 0]} center>
            <div className="bg-black/80 text-gold-500 p-2 rounded text-center w-40">
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs mt-1">Click to view details</p>
            </div>
          </Html>
        )}
      </group>
    </Float>
  )
}

