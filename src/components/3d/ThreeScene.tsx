"use client"

import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Grid } from "@react-three/drei"
import { FieldModel } from "./FieldModel"
import { ModelLoader } from "./ModelLoader"

interface ThreeSceneProps {
  uploadedModel?: string | null
}

export function ThreeScene({ uploadedModel }: ThreeSceneProps) {
  const [viewMode, setViewMode] = useState<"raw" | "ndvi" | "soil" | "temperature">("raw")
  const [selectedModel] = useState<string>("SoulFireVar1.glb")
  const [isLoading, setIsLoading] = useState(true)

  // Hide loading after scene initializes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Give time for models to load

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-[600px]">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [10, 10, 10], fov: 60 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* Environment */}
          <Environment preset="sunset" />

          {/* Grid */}
          <Grid
            args={[20, 20]}
            position={[0, 0, 0]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#6b7280"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#374151"
          />

          {/* Field Model */}
          <FieldModel viewMode={viewMode} />

          {/* Loaded 3D Model */}
          {uploadedModel && (
            <ModelLoader
              modelPath={uploadedModel}
              scale={2}
              position={[3, 0, 0]}
            />
          )}

          {/* Sample Models from public/3D */}
          {!uploadedModel && (
            <ModelLoader
              modelPath={`/3D/${selectedModel}`}
              scale={selectedModel === "BOMB.glb" ? 0.5 : 2}
              position={[3, 0, 0]}
            />
          )}

          {/* Camera Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
          />
        </Suspense>
      </Canvas>

      {/* Loading overlay - outside Canvas */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 backdrop-blur-sm">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <div>
                <p className="text-gray-900 font-medium">Loading 3D Scene</p>
                <p className="text-gray-600 text-sm">Preparing your models...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Mode Controls */}
      <div className="absolute top-4 left-4 space-y-3">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <h4 className="text-sm font-medium mb-1">View Mode</h4>
          <div className="space-y-2">
            <button
              onClick={() => setViewMode("raw")}
              className={`w-full px-3 py-2 text-sm rounded-md transition-colors ${viewMode === "raw"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Raw Model
            </button>
            <button
              onClick={() => setViewMode("ndvi")}
              className={`w-full px-3 py-2 text-sm rounded-md transition-colors ${viewMode === "ndvi"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              NDVI Heatmap
            </button>
            <button
              onClick={() => setViewMode("soil")}
              className={`w-full px-3 py-2 text-sm rounded-md transition-colors ${viewMode === "soil"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Soil Moisture
            </button>
            <button
              onClick={() => setViewMode("temperature")}
              className={`w-full px-3 py-2 text-sm rounded-md transition-colors ${viewMode === "temperature"
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Temperature
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
