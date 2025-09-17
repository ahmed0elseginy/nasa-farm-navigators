import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Droplets, Sprout, Wheat, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdvisoryCardProps {
  type: "irrigation" | "fertilization" | "planting" | "harvest"
  priority: "high" | "medium" | "low"
  title: string
  description: string
  recommendation: string
  timeframe: string
}

const typeConfig = {
  irrigation: {
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  fertilization: {
    icon: Sprout,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  planting: {
    icon: Wheat,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  harvest: {
    icon: Wheat,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
}

const priorityConfig = {
  high: {
    color: "bg-red-100 text-red-800 border-red-200",
    icon: AlertTriangle
  },
  medium: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: Clock
  },
  low: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: Clock
  }
}

export function AdvisoryCard({ 
  type, 
  priority, 
  title, 
  description, 
  recommendation, 
  timeframe 
}: AdvisoryCardProps) {
  const typeInfo = typeConfig[type]
  const priorityInfo = priorityConfig[priority]
  const TypeIcon = typeInfo.icon
  const PriorityIcon = priorityInfo.icon

  return (
    <Card className={cn("border-l-4", typeInfo.borderColor)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn("p-2 rounded-lg", typeInfo.bgColor)}>
              <TypeIcon className={cn("h-5 w-5", typeInfo.color)} />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={priorityInfo.color}>
            <PriorityIcon className="h-3 w-3 mr-1" />
            {priority.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Recommendation</h4>
          <p className="text-gray-700">{recommendation}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Timeframe: {timeframe}</span>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              Dismiss
            </Button>
            <Button size="sm">
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
