"use client"

import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Globe, Github, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Project Lead",
      expertise: "Agricultural Data Science",
      avatar: "👩‍💻"
    },
    {
      name: "Michael Chen",
      role: "Frontend Developer",
      expertise: "React & 3D Visualization",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "NASA Data Specialist",
      expertise: "Earth Observation",
      avatar: "👩‍🔬"
    },
    {
      name: "David Kim",
      role: "Backend Engineer",
      expertise: "API Development",
      avatar: "👨‍🔧"
    }
  ]

  const features = [
    {
      icon: Globe,
      title: "Real-time Data",
      description: "Access live NASA satellite data with automatic updates every 16 days."
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Make data-driven decisions with centimeter-level accuracy."
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations based on machine learning analysis."
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              About NASA Farm Navigators
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering farmers with NASA Earth observation data to make smarter, 
              more sustainable agricultural decisions through cutting-edge technology.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                NASA Farm Navigators bridges the gap between space technology and agriculture, 
                making Earth observation data accessible and actionable for farmers worldwide. 
                Our platform transforms complex satellite imagery into simple, practical insights 
                that help optimize crop yields, conserve resources, and promote sustainable farming practices.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Team Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Our Team</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{member.avatar}</div>
                    <h4 className="font-medium text-gray-900">{member.name}</h4>
                    <p className="text-sm text-green-600 font-medium">{member.role}</p>
                    <p className="text-xs text-gray-600 mt-1">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* NASA Space Apps Challenge */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>NASA Space Apps Challenge 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Challenge: NASA Farm Navigators - Using NASA Data Exploration in Agriculture
                </h3>
                <p className="text-gray-700 mb-4">
                  This project was developed for the NASA Space Apps Challenge 2025, 
                  focusing on harnessing NASA Earth observation data to revolutionize 
                  agricultural decision-making and promote sustainable farming practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Challenge Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">Next.js</div>
                  <p className="text-xs text-gray-600">React Framework</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Three.js</div>
                  <p className="text-xs text-gray-600">3D Visualization</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Mapbox</div>
                  <p className="text-xs text-gray-600">Mapping Platform</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">NASA APIs</div>
                  <p className="text-xs text-gray-600">Satellite Data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Support */}
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Questions or Feedback?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    We&apos;d love to hear from farmers, researchers, and anyone interested 
                    in using NASA data for agriculture.
                  </p>
                  <Button>
                    Contact Us
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Contribute</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    This is an open-source project. Join us in making NASA data 
                    more accessible to the agricultural community.
                  </p>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Contribute on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
