"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Map, 
  Lightbulb, 
  Box, 
  BookOpen, 
  Info,
  Satellite
} from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Satellite },
  { name: "Explorer", href: "/explorer", icon: Map },
  { name: "Advisories", href: "/advisories", icon: Lightbulb },
  { name: "3D Lab", href: "/3d-lab", icon: Box },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Satellite className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">
                NASA Farm Navigators
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  asChild
                  className={cn(
                    "flex items-center space-x-2",
                    isActive 
                      ? "bg-green-600 text-white" 
                      : "text-gray-700 hover:text-green-600"
                  )}
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
