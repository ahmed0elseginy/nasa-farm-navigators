"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Layers, Edit } from "lucide-react"

// Mock Mapbox integration - in production, you'd use actual Mapbox GL JS
export function MapView() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-[600px]">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden"
      >
        {!isMapLoaded ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading NASA data...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Mock satellite imagery background */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-green-400 via-yellow-300 to-brown-400"></div>
            </div>
            
            {/* Mock field boundaries */}
            <div className="absolute top-1/4 left-1/4 w-32 h-24 border-2 border-green-600 bg-green-500/20 rounded"></div>
            <div className="absolute top-1/2 right-1/4 w-40 h-32 border-2 border-yellow-600 bg-yellow-500/20 rounded"></div>
            <div className="absolute bottom-1/4 left-1/3 w-28 h-36 border-2 border-red-600 bg-red-500/20 rounded"></div>

            {/* Map Controls */}
            <div className="absolute top-4 left-4 space-y-2">
              <Card className="p-2">
                <CardContent className="p-2 space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Layers className="h-4 w-4 mr-2" />
                    NDVI
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Layers className="h-4 w-4 mr-2" />
                    Soil Moisture
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Layers className="h-4 w-4 mr-2" />
                    Rainfall
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-2">
                <CardContent className="p-2">
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Edit className="h-4 w-4 mr-2" />
                    Draw Field
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map Info */}
            <div className="absolute bottom-4 left-4">
              <Card className="p-3">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Sample Farm Location</p>
                      <p className="text-xs text-gray-600">40.7128° N, 74.0060° W</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
