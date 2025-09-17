"use client"

import { useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { ThreeScene } from "@/components/3d/ThreeScene"
import { FileDrop } from "@/components/3d/FileDrop"

export default function ThreeLabPage() {
  const [uploadedModel, setUploadedModel] = useState<string | null>(null)

  const handleFileUploaded = (fileUrl: string) => {
    setUploadedModel(fileUrl)
  }

  const handleModelLoading = (loading: boolean) => {
    // Handle model loading state if needed
    console.log('Model loading:', loading)
  }
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              3D Field Laboratory
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Upload your farm&apos;s 3D models and visualize NASA satellite data overlaid on your fields. 
              Explore NDVI heatmaps, soil moisture patterns, and other agricultural insights in 3D.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Upload Panel */}
            <div className="lg:col-span-1">
              <FileDrop 
                onFileUploaded={handleFileUploaded} 
                onModelLoading={handleModelLoading}
              />
            </div>

            {/* 3D Viewer */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ThreeScene uploadedModel={uploadedModel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
