"use client"

import { Layout } from "@/components/layout/Layout"
import { AdvisoryCard } from "@/components/forms/AdvisoryCard"
import { MetricCard } from "@/components/MetricCard"

export default function AdvisoriesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Farming Advisories
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get AI-powered recommendations based on NASA satellite data analysis. 
              Our system monitors your fields and provides actionable insights for optimal farming decisions.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Field Health"
              value="85%"
              change="+5%"
              trend="up"
              icon="🌱"
            />
            <MetricCard
              title="Soil Moisture"
              value="42%"
              change="-8%"
              trend="down"
              icon="💧"
            />
            <MetricCard
              title="Rainfall (7d)"
              value="15mm"
              change="+3mm"
              trend="up"
              icon="🌧️"
            />
            <MetricCard
              title="Temperature"
              value="24°C"
              change="+2°C"
              trend="up"
              icon="🌡️"
            />
          </div>

          {/* Advisories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AdvisoryCard
              type="irrigation"
              priority="high"
              title="Irrigation Needed"
              description="Soil moisture levels are below optimal threshold. Consider irrigating within the next 2-3 days."
              recommendation="Apply 15-20mm of water per hectare. Focus on the eastern section of Field A."
              timeframe="Next 2-3 days"
            />
            
            <AdvisoryCard
              type="fertilization"
              priority="medium"
              title="Nutrient Application"
              description="NDVI analysis shows declining vegetation health in the northern quadrant."
              recommendation="Apply nitrogen-rich fertilizer at 80kg/ha. Consider soil testing for specific nutrient needs."
              timeframe="Next 1-2 weeks"
            />
            
            <AdvisoryCard
              type="planting"
              priority="low"
              title="Optimal Planting Window"
              description="Weather conditions and soil temperature are ideal for corn planting."
              recommendation="Plant corn seeds at 2.5cm depth with 75cm row spacing. Soil temperature is optimal at 12°C."
              timeframe="Next 5-7 days"
            />
            
            <AdvisoryCard
              type="harvest"
              priority="medium"
              title="Harvest Readiness"
              description="NDVI values indicate crops are approaching maturity in the western fields."
              recommendation="Monitor moisture content closely. Harvest when grain moisture reaches 20-22%."
              timeframe="Next 2-3 weeks"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
