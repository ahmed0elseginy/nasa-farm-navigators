import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Map, Lightbulb, Box, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            NASA Farm Navigators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Harness the power of NASA Earth observation data to make smarter agricultural decisions. 
            Explore satellite imagery, get farming advisories, and visualize your fields in 3D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Map className="mr-2 h-5 w-5" />
              Explore Data
            </Button>
            <Button variant="outline" size="lg">
              <Lightbulb className="mr-2 h-5 w-5" />
              Get Advisories
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Map className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Explorer</h3>
              <p className="text-gray-600">
                Interactive maps with NASA satellite data layers including NDVI, soil moisture, and rainfall.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Advisories</h3>
              <p className="text-gray-600">
                AI-powered recommendations for irrigation, fertilization, and optimal planting times.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Box className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">3D Field Lab</h3>
              <p className="text-gray-600">
                Visualize your farm in 3D with uploaded models and overlay satellite data.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track trends over time and optimize your farming operations with data insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
