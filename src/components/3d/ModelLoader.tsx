"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"

interface ModelLoaderProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export function ModelLoader({ 
  modelPath, 
  scale = 1, 
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}: ModelLoaderProps) {
  const { scene } = useGLTF(modelPath)
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

// Preload models for better performance
useGLTF.preload("/3D/SoulFireVar1.glb")
useGLTF.preload("/3D/tv01_stage.glb")
useGLTF.preload("/3D/BOMB.glb")
