"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh, Color } from "three"

interface FieldModelProps {
  viewMode: "raw" | "ndvi" | "soil" | "temperature"
}

export function FieldModel({ viewMode }: FieldModelProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Color based on view mode
  const getColor = (): Color => {
    switch (viewMode) {
      case "ndvi":
        return new Color(0x22c55e) // Green for vegetation
      case "soil":
        return new Color(0x3b82f6) // Blue for moisture
      case "temperature":
        return new Color(0xef4444) // Red for heat
      default:
        return new Color(0x8b5cf6) // Purple for raw
    }
  }

  return (
    <group>
      {/* Main Field Plane */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial 
          color={getColor()} 
          transparent 
          opacity={0.8}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Field Sections */}
      <mesh position={[-2, 0.01, -1]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color={viewMode === "ndvi" ? 0x16a34a : 0x6b7280} 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      <mesh position={[2, 0.01, -1]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color={viewMode === "ndvi" ? 0x15803d : 0x6b7280} 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      <mesh position={[-2, 0.01, 1.5]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color={viewMode === "ndvi" ? 0x166534 : 0x6b7280} 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      <mesh position={[2, 0.01, 1.5]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color={viewMode === "ndvi" ? 0x14532d : 0x6b7280} 
          transparent 
          opacity={0.6}
        />
      </mesh>

      {/* Sample Trees/Vegetation */}
      <mesh position={[-1, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color={0x22c55e} />
      </mesh>
      
      <mesh position={[1, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color={0x22c55e} />
      </mesh>

      {/* Data Visualization Points */}
      {viewMode !== "raw" && (
        <>
          {/* NDVI Sample Points */}
          <mesh position={[-1, 0.1, -1]}>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial 
              color={viewMode === "ndvi" ? 0x22c55e : 0x6b7280} 
              emissive={viewMode === "ndvi" ? 0x22c55e : 0x000000}
              emissiveIntensity={0.3}
            />
          </mesh>
          
          <mesh position={[1, 0.1, 1]}>
            <sphereGeometry args={[0.2]} />
            <meshStandardMaterial 
              color={viewMode === "ndvi" ? 0x16a34a : 0x6b7280} 
              emissive={viewMode === "ndvi" ? 0x16a34a : 0x000000}
              emissiveIntensity={0.3}
            />
          </mesh>
        </>
      )}
    </group>
  )
}
