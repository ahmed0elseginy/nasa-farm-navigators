"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Layers } from "lucide-react"

interface Layer {
  id: string
  name: string
  description: string
  color: string
  visible: boolean
}

export function Legend() {
  const [layers, setLayers] = useState<Layer[]>([
    {
      id: "ndvi",
      name: "NDVI",
      description: "Vegetation Health Index",
      color: "bg-green-500",
      visible: true
    },
    {
      id: "soil-moisture",
      name: "Soil Moisture",
      description: "Soil Water Content",
      color: "bg-blue-500",
      visible: false
    },
    {
      id: "rainfall",
      name: "Rainfall",
      description: "Precipitation Data",
      color: "bg-cyan-500",
      visible: false
    },
    {
      id: "temperature",
      name: "Temperature",
      description: "Land Surface Temperature",
      color: "bg-red-500",
      visible: false
    }
  ])

  const toggleLayer = (layerId: string) => {
    setLayers(layers.map(layer => 
      layer.id === layerId 
        ? { ...layer, visible: !layer.visible }
        : layer
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Layers className="h-5 w-5" />
          <span>Data Layers</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className="flex items-center justify-between p-3 rounded-lg border bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded ${layer.color}`}></div>
              <div>
                <p className="font-medium text-sm">{layer.name}</p>
                <p className="text-xs text-gray-600">{layer.description}</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => toggleLayer(layer.id)}
              className={layer.visible ? "text-green-600" : "text-gray-400"}
            >
              {layer.visible ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </Button>
          </div>
        ))}

        {/* NDVI Color Scale */}
        <div className="mt-4 p-3 rounded-lg border bg-gray-50">
          <p className="font-medium text-sm mb-2">NDVI Scale</p>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <div className="w-4 h-4 bg-emerald-500 rounded"></div>
            <div className="w-4 h-4 bg-teal-500 rounded"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>0.0</span>
            <span>1.0</span>
          </div>
        </div>

        {/* Layer Statistics */}
        <div className="mt-4 space-y-2">
          <p className="font-medium text-sm">Current Values</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Avg NDVI:</span>
              <span className="font-medium">0.72</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Soil Moisture:</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rainfall (7d):</span>
              <span className="font-medium">12mm</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
