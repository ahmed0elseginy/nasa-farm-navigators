"use client"

import { Layout } from "@/components/layout/Layout"
import { MapView } from "@/components/maps/MapView"
import { Timeline } from "@/components/maps/Timeline"
import { Legend } from "@/components/maps/Legend"

export default function ExplorerPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              NASA Data Explorer
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore NASA Earth observation data including NDVI, soil moisture, and rainfall patterns. 
              Use the timeline to analyze historical trends and make data-driven farming decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Legend />
              <Timeline />
            </div>

            {/* Main Map */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <MapView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
