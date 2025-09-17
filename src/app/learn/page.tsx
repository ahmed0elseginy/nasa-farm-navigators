"use client"

import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Satellite, BarChart3, Globe } from "lucide-react"

export default function LearnPage() {
  const topics = [
    {
      icon: Satellite,
      title: "NASA Earth Observation Data",
      description: "Learn about the various satellite datasets available for agriculture, including MODIS, Landsat, and Sentinel missions.",
      content: [
        "NDVI (Normalized Difference Vegetation Index)",
        "Soil Moisture from SMAP",
        "Land Surface Temperature",
        "Precipitation data from GPM",
        "Crop monitoring with Sentinel-2"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Interpretation",
      description: "Understand how to read and interpret agricultural data from satellite imagery and ground sensors.",
      content: [
        "Understanding NDVI values (0.0 to 1.0)",
        "Soil moisture thresholds",
        "Temperature stress indicators",
        "Rainfall pattern analysis",
        "Trend analysis over time"
      ]
    },
    {
      icon: Globe,
      title: "Precision Agriculture",
      description: "Explore how NASA data can be integrated into precision farming practices for better yields.",
      content: [
        "Variable rate application",
        "Zone-based management",
        "Yield prediction models",
        "Disease and pest monitoring",
        "Optimal planting windows"
      ]
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Center
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master the fundamentals of using NASA Earth observation data for agriculture. 
              From understanding satellite imagery to implementing precision farming techniques.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {topics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{topic.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topic.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Start Guide */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Quick Start Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Explore Data</h3>
                  <p className="text-sm text-gray-600">
                    Navigate to the Data Explorer to view NASA satellite imagery and select your area of interest.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Analyze Trends</h3>
                  <p className="text-sm text-gray-600">
                    Use the timeline to analyze historical data and identify patterns in vegetation health.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Advisories</h3>
                  <p className="text-sm text-gray-600">
                    Review AI-generated recommendations for irrigation, fertilization, and planting decisions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <h3 className="font-medium mb-2">3D Visualization</h3>
                  <p className="text-sm text-gray-600">
                    Upload your farm models and overlay satellite data for immersive 3D analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">NASA Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        NASA Earth Observatory
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        MODIS Data Products
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Landsat Program
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Agricultural Applications</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Precision Agriculture Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        NDVI Interpretation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Crop Monitoring Best Practices
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
